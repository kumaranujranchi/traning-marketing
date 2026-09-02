import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Grid, 
  BookOpen, 
  HelpCircle, 
  Clock, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SlideContent } from '../data/slidesData';

interface HeaderHUDProps {
  currentSlide: SlideContent;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenOverview: () => void;
  onOpenNotes: () => void;
  onOpenShortcuts: () => void;
  visible: boolean;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  currentSlide,
  isFullscreen,
  onToggleFullscreen,
  onOpenOverview,
  onOpenNotes,
  onOpenShortcuts,
  visible
}) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none px-3 sm:px-8 py-2.5 sm:py-3.5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Vastu Vihar Logo & Section Branding - ALWAYS PERMANENTLY VISIBLE */}
        <div className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto opacity-100">
          {/* Logo Card */}
          <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-rose-500/40 shadow-xl shadow-rose-950/40 hover:border-rose-500/70 transition-all group flex-shrink-0">
            <div className="h-6 sm:h-8 w-auto bg-white rounded-lg p-0.5 px-1.5 flex items-center justify-center shadow-md">
              <img 
                src="/logo.jpg" 
                alt="Vastu Vihar Logo" 
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] sm:text-[12px] font-black tracking-tight text-white font-display">
                VASTU VIHAR
              </span>
              <span className="text-[8px] sm:text-[9px] text-slate-300 font-medium -mt-0.5 hidden xs:inline sm:inline">
                A World-Class Township
              </span>
            </div>
          </div>

          {/* Section Breadcrumb Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-md text-xs font-semibold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="tracking-wide uppercase text-[10px] sm:text-[11px] font-bold text-rose-400">
              {currentSlide.sectionNumber || 'TRAINING'}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-500 hidden md:inline" />
            <span className="text-slate-300 truncate max-w-[120px] md:max-w-[190px] hidden md:inline text-xs">
              {currentSlide.sectionTitle}
            </span>
          </div>

          {currentSlide.badge && (
            <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
              {currentSlide.badge}
            </span>
          )}
        </div>

        {/* Right: Timer & Interactive Presentation Controls */}
        <div className={`flex items-center gap-2 pointer-events-auto transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-40 hover:opacity-100 translate-y-0'
        }`}>
          {/* Trainer Timer */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>

          {/* Slide Overview Toggle */}
          <button
            onClick={onOpenOverview}
            title="Slide Overview (O / Tab)"
            aria-label="Slide Overview"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 text-xs font-medium text-slate-300 transition-all shadow-md active:scale-95"
          >
            <Grid className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Overview</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">O</kbd>
          </button>

          {/* Presenter Notes */}
          <button
            onClick={onOpenNotes}
            title="Speaker Notes (N)"
            aria-label="Speaker Notes"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 hover:border-emerald-500/50 hover:text-emerald-300 text-xs font-medium text-slate-300 transition-all shadow-md active:scale-95"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Notes</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">N</kbd>
          </button>

          {/* Keyboard Shortcuts */}
          <button
            onClick={onOpenShortcuts}
            title="Keyboard Shortcuts (?)"
            aria-label="Keyboard Shortcuts"
            className="p-2 sm:px-2.5 sm:py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 text-xs font-medium text-slate-300 transition-all shadow-md active:scale-95"
          >
            <HelpCircle className="w-4 h-4 text-slate-400 hover:text-cyan-300" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            title="Toggle Fullscreen (F)"
            aria-label="Toggle Fullscreen"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white border border-rose-500/40 text-xs font-bold transition-all shadow-lg shadow-rose-950/40 active:scale-95"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exit</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Keynote</span>
              </>
            )}
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] font-mono bg-rose-950/70 text-rose-200 rounded border border-rose-800">F</kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
