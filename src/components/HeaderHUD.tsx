import React from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { SlideContent } from '../data/slidesData';

interface HeaderHUDProps {
  currentSlide: SlideContent;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenOverview?: () => void;
  onOpenNotes?: () => void;
  onOpenShortcuts?: () => void;
  visible?: boolean;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none px-3 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Clean Vastu Vihar Logo Card */}
        <div className="flex items-center pointer-events-auto">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-rose-500/40 shadow-xl shadow-rose-950/40 hover:border-rose-500/70 transition-all group">
            <div className="h-7 sm:h-8 w-auto bg-white rounded-lg p-0.5 px-1.5 flex items-center justify-center shadow-md">
              <img 
                src="/logo.jpg" 
                alt="Vastu Vihar Logo" 
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[12px] sm:text-[13px] font-black tracking-tight text-white font-display">
                VASTU VIHAR
              </span>
              <span className="text-[9px] text-slate-300 font-medium -mt-0.5 hidden xs:inline sm:inline">
                A World-Class Township
              </span>
            </div>
          </div>
        </div>

        {/* Right: Clean Fullscreen Toggle */}
        <div className="flex items-center pointer-events-auto">
          <button
            onClick={onToggleFullscreen}
            title="Toggle Fullscreen (F)"
            aria-label="Toggle Fullscreen"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-bold transition-all shadow-md active:scale-95"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exit</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Fullscreen</span>
              </>
            )}
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">F</kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
