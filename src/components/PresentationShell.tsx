import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES, getSlideMaxSteps } from '../data/slidesData';
import { SlideRenderer } from './slides/SlideRenderer';
import { HeaderHUD } from './HeaderHUD';
import { BottomHUD } from './BottomHUD';
import { OverviewModal } from './OverviewModal';
import { PresenterNotesModal } from './PresenterNotesModal';
import { KeyboardShortcutsModal } from './KeyboardShortcutsModal';
import { CardReferenceModal, CardReferenceData } from './CardReferenceModal';

export const PresentationShell: React.FC = () => {
  // Initialize slide from URL query parameter (?slide=1) or default to 0
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get('slide');
      if (slideParam) {
        const num = parseInt(slideParam, 10);
        if (!isNaN(num) && num >= 1 && num <= SLIDES.length) {
          return num - 1;
        }
      }
    } catch {
      // ignore
    }
    return 0;
  });

  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [revealedCount, setRevealedCount] = useState<number>(1);
  const [isRevealAllMode, setIsRevealAllMode] = useState<boolean>(false);
  const [selectedReference, setSelectedReference] = useState<CardReferenceData | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [hudVisible, setHudVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);
  const hudTimeoutRef = useRef<number | null>(null);
  const touchStartY = useRef<number>(0);
  const touchStartX = useRef<number>(0);

  const currentSlide = SLIDES[currentIndex];
  const maxStepsOnCurrentSlide = getSlideMaxSteps(currentSlide);

  // Keep browser URL 100% clean (zero query params, zero # hash)
  useEffect(() => {
    const slideNumber = currentIndex + 1;
    window.history.replaceState({ slide: slideNumber }, '', window.location.pathname);
    setRevealedCount(isRevealAllMode ? maxStepsOnCurrentSlide : 1);
  }, [currentIndex, isRevealAllMode, maxStepsOnCurrentSlide]);

  // Handle browser popstate
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get('slide');
      if (slideParam) {
        const num = parseInt(slideParam, 10);
        if (!isNaN(num) && num >= 1 && num <= SLIDES.length) {
          setCurrentIndex(num - 1);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Progressive Step / Next Slide Navigation
  const handleNextStepOrSlide = useCallback(() => {
    if (!isRevealAllMode && revealedCount < maxStepsOnCurrentSlide) {
      // Step-by-step card reveal on key press
      setRevealedCount(prev => prev + 1);
    } else {
      // All cards revealed -> Advance to next slide
      if (currentIndex < SLIDES.length - 1) {
        setSlideDirection('next');
        setCurrentIndex(prev => prev + 1);
        setRevealedCount(isRevealAllMode ? 99 : 1);
      }
    }
  }, [currentIndex, revealedCount, maxStepsOnCurrentSlide, isRevealAllMode]);

  const handlePrevStepOrSlide = useCallback(() => {
    if (!isRevealAllMode && revealedCount > 1) {
      // Step backward: hide last card
      setRevealedCount(prev => prev - 1);
    } else {
      // Go to previous slide
      if (currentIndex > 0) {
        setSlideDirection('prev');
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        const prevSlideMaxSteps = getSlideMaxSteps(SLIDES[prevIndex]);
        setRevealedCount(prevSlideMaxSteps);
      }
    }
  }, [currentIndex, revealedCount, isRevealAllMode]);

  const goToSlideDirect = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setSlideDirection(index > currentIndex ? 'next' : 'prev');
      setCurrentIndex(index);
      setRevealedCount(isRevealAllMode ? 99 : 1);
    }
  }, [currentIndex, isRevealAllMode]);

  const toggleRevealAllMode = useCallback(() => {
    setIsRevealAllMode(prev => {
      const next = !prev;
      setRevealedCount(next ? 99 : 1);
      return next;
    });
  }, []);

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // HUD Auto-hide on inactivity
  const showHudTemporarily = useCallback(() => {
    setHudVisible(true);
    if (hudTimeoutRef.current) {
      window.clearTimeout(hudTimeoutRef.current);
    }
    hudTimeoutRef.current = window.setTimeout(() => {
      setHudVisible(false);
    }, 3500);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => showHudTemporarily();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseMove);
    showHudTemporarily();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
      if (hudTimeoutRef.current) window.clearTimeout(hudTimeoutRef.current);
    };
  }, [showHudTemporarily]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      showHudTemporarily();

      if (e.key === 'Escape') {
        if (selectedReference) setSelectedReference(null);
        else if (isOverviewOpen) setIsOverviewOpen(false);
        else if (isNotesOpen) setIsNotesOpen(false);
        else if (isShortcutsOpen) setIsShortcutsOpen(false);
        return;
      }

      if (isOverviewOpen || isNotesOpen || isShortcutsOpen || selectedReference) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Space
          e.preventDefault();
          handleNextStepOrSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          handlePrevStepOrSlide();
          break;
        case 'a':
        case 'A':
          e.preventDefault();
          toggleRevealAllMode();
          break;
        case 'Home':
          e.preventDefault();
          goToSlideDirect(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlideDirect(SLIDES.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'o':
        case 'O':
        case 'Tab':
          e.preventDefault();
          setIsOverviewOpen(prev => !prev);
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setIsNotesOpen(prev => !prev);
          break;
        case '?':
          e.preventDefault();
          setIsShortcutsOpen(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextStepOrSlide, handlePrevStepOrSlide, goToSlideDirect, toggleRevealAllMode, toggleFullscreen, isOverviewOpen, isNotesOpen, isShortcutsOpen, selectedReference, showHudTemporarily]);

  // Throttled Wheel / Trackpad listener
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isOverviewOpen || isNotesOpen || isShortcutsOpen || selectedReference) return;
      const target = e.target as HTMLElement;
      if (target && target.closest('form')) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 450) {
        return;
      }

      if (Math.abs(e.deltaY) > 25) {
        lastScrollTime.current = now;
        if (e.deltaY > 0) {
          handleNextStepOrSlide();
        } else {
          handlePrevStepOrSlide();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNextStepOrSlide, handlePrevStepOrSlide, isOverviewOpen, isNotesOpen, isShortcutsOpen, selectedReference]);

  // Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    showHudTemporarily();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isOverviewOpen || isNotesOpen || isShortcutsOpen || selectedReference) return;

    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) handleNextStepOrSlide();
        else handlePrevStepOrSlide();
      }
    } else {
      if (Math.abs(deltaY) > 40) {
        if (deltaY < 0) handleNextStepOrSlide();
        else handlePrevStepOrSlide();
      }
    }
  };

  const nextSlide = currentIndex < SLIDES.length - 1 ? SLIDES[currentIndex + 1] : undefined;

  return (
    <div 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-[100dvh] min-h-[100dvh] overflow-hidden vv-mesh-bg text-slate-100 flex flex-col justify-between select-none"
    >
      {/* Radiant Background Glows */}
      <div className="absolute -top-24 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-rose-600/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none animate-beam-1" />
      <div className="absolute top-1/3 -right-20 w-[280px] sm:w-[550px] h-[280px] sm:h-[380px] bg-sky-500/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none animate-beam-2" />
      <div className="absolute -bottom-24 left-1/3 w-[350px] sm:w-[700px] h-[350px] sm:h-[450px] bg-blue-700/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Top Presentation HUD with Permanent Logo */}
      <HeaderHUD
        currentSlide={currentSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        visible={hudVisible || isOverviewOpen || isNotesOpen || isShortcutsOpen}
      />

      {/* Center Slide Stage with 3D Directional Slide Transition & Progressive Card Build-in */}
      <main className="relative flex-1 w-full h-full flex items-center justify-center pt-16 sm:pt-14 pb-20 sm:pb-24 px-2 sm:px-6 overflow-hidden">
        <div 
          key={currentSlide.id}
          className={`w-full h-full flex items-center justify-center overflow-y-auto max-h-full py-1 sm:py-2 ${
            slideDirection === 'next' ? 'slide-transition-next' : 'slide-transition-prev'
          }`}
        >
          <SlideRenderer 
            slide={currentSlide} 
            onJumpSlide={goToSlideDirect}
            revealedCount={isRevealAllMode ? 99 : revealedCount}
            onOpenReference={(refData) => setSelectedReference(refData)}
          />
        </div>
      </main>

      {/* Bottom Navigation HUD with Step Micro-Indicator & Reveal Toggle */}
      <BottomHUD
        currentIndex={currentIndex}
        totalSlides={SLIDES.length}
        revealedCount={revealedCount}
        maxSteps={maxStepsOnCurrentSlide}
        isRevealAllMode={isRevealAllMode}
        onToggleRevealAll={toggleRevealAllMode}
        onPrev={handlePrevStepOrSlide}
        onNext={handleNextStepOrSlide}
        onJump={goToSlideDirect}
        visible={hudVisible}
      />

      {/* Interactive Card Reference Pop-up Modal */}
      <CardReferenceModal
        data={selectedReference}
        onClose={() => setSelectedReference(null)}
      />

      {/* Overlays / Modals */}
      <OverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={SLIDES}
        currentIndex={currentIndex}
        onSelectSlide={goToSlideDirect}
      />

      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
      />

      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
};
