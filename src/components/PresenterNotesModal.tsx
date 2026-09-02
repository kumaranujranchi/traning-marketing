import React from 'react';
import { X, BookOpen, Clock, ChevronRight, AlertCircle } from 'lucide-react';
import { SlideContent } from '../data/slidesData';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideContent;
  nextSlide?: SlideContent;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  nextSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fade-in-up">
      <div className="w-full max-w-2xl rounded-3xl bg-slate-900/95 border border-slate-700/70 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">Trainer Speaking Notes</h2>
              <p className="text-xs text-slate-400">Slide #{currentSlide.slideNumber}: {currentSlide.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
          {/* Main Talking Points */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <AlertCircle className="w-4 h-4" />
              Key Facilitation Guidance
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {currentSlide.speakerNotes || 'Emphasize core concept and invite trainee participation on practical examples.'}
            </p>
          </div>

          {/* Section Context */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <span className="text-slate-500 block mb-1">Section:</span>
              <span className="font-semibold text-slate-200">{currentSlide.sectionTitle}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <span className="text-slate-500 block mb-1">Slide Number:</span>
              <span className="font-mono font-bold text-cyan-400">{currentSlide.slideNumber} of 31</span>
            </div>
          </div>

          {/* Up Next Preview */}
          {nextSlide && (
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20">
              <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase block mb-1">
                Coming Up Next (Slide #{nextSlide.slideNumber}):
              </span>
              <div className="flex items-center justify-between text-sm font-semibold text-white">
                <span>{nextSlide.title}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-slate-300">N</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-slate-300">Esc</kbd> to dismiss</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
