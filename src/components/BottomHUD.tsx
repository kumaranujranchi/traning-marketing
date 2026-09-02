import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, RotateCcw, Eye, EyeOff, Layers } from 'lucide-react';

interface BottomHUDProps {
  currentIndex: number;
  totalSlides: number;
  revealedCount?: number;
  maxSteps?: number;
  isRevealAllMode?: boolean;
  onToggleRevealAll?: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
  visible: boolean;
}

export const BottomHUD: React.FC<BottomHUDProps> = ({
  currentIndex,
  totalSlides,
  revealedCount = 1,
  maxSteps = 1,
  isRevealAllMode = false,
  onToggleRevealAll,
  onPrev,
  onNext,
  onJump,
  visible
}) => {
  const currentNum = currentIndex + 1;
  const progressPercent = ((currentNum) / totalSlides) * 100;

  return (
    <footer 
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none pb-3 sm:pb-5 px-3 sm:px-4 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-2">
        {/* Floating Controls Island */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-full bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 shadow-2xl pointer-events-auto">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentIndex === 0 && revealedCount <= 1}
            title="Previous Step / Slide (← / ↑ / PageUp)"
            aria-label="Previous Step / Slide"
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-25 disabled:pointer-events-none transition-all active:scale-95 flex items-center gap-1 text-xs font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Slide & Step Progress Display */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800">
            <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400">
              {String(currentNum).padStart(2, '0')}
            </span>
            <span className="text-xs font-mono text-slate-500">/</span>
            <span className="font-mono text-xs text-slate-400">
              {String(totalSlides).padStart(2, '0')}
            </span>

            {/* Micro Step Indicator */}
            {maxSteps > 1 && !isRevealAllMode && (
              <span className="ml-1 pl-2 border-l border-slate-800 font-mono text-[10px] text-amber-400 font-bold flex items-center gap-1">
                <Layers className="w-3 h-3 text-amber-400" />
                <span>{Math.min(revealedCount, maxSteps)}/{maxSteps}</span>
              </span>
            )}
          </div>

          {/* Step-by-Step vs Show All Toggle */}
          {maxSteps > 1 && onToggleRevealAll && (
            <button
              onClick={onToggleRevealAll}
              title={isRevealAllMode ? 'Switch to Step-by-Step Mode (A)' : 'Reveal All Cards (A)'}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1 border ${
                isRevealAllMode
                  ? 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
            >
              {isRevealAllMode ? <Eye className="w-3.5 h-3.5 text-rose-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isRevealAllMode ? 'All Visible' : 'Step Mode'}</span>
            </button>
          )}

          {/* Next Button */}
          <button
            onClick={onNext}
            title="Next Step / Slide (→ / ↓ / Space / PageDown)"
            aria-label="Next Step / Slide"
            className="p-2 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 transition-all font-bold shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center gap-1 text-xs"
          >
            <span>
              {!isRevealAllMode && revealedCount < maxSteps
                ? `Reveal (0${revealedCount + 1})`
                : currentIndex === totalSlides - 1
                ? 'Restart (Slide 1)'
                : 'Next'}
            </span>
            {currentIndex === totalSlides - 1 && (!maxSteps || revealedCount >= maxSteps) ? (
              <RotateCcw className="w-4 h-4 text-slate-950" />
            ) : (
              <ChevronRight className="w-4 h-4 text-slate-950" />
            )}
          </button>
        </div>

        {/* Linear Progress Bar */}
        <div 
          className="w-full max-w-md h-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800/80 overflow-hidden pointer-events-auto cursor-pointer p-0.5"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const ratio = Math.max(0, Math.min(1, clickX / rect.width));
            const targetIndex = Math.floor(ratio * totalSlides);
            onJump(Math.min(targetIndex, totalSlides - 1));
          }}
          title="Click to jump along presentation progress"
        >
          <div 
            className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400 transition-all duration-300 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </footer>
  );
};
