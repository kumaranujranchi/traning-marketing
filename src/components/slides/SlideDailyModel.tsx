import React, { useState } from 'react';
import { 
  RotateCcw, 
  CheckSquare, 
  Square 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

export const Slide26DailyCycle: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { cycle } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          PART 5 — DAILY OPERATING MODEL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 26 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Your Daily Operating Cycle
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        The disciplined 9-step operating rhythm executed every single day:
      </p>

      {/* 9-Step Circular / Sequential Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3.5">
        {cycle.map((step: any, idx: number) => {
          const isKey = idx === 0 || idx === 3 || idx === 6 || idx === 8;
          return (
            <div 
              key={idx}
              className={`p-3 rounded-2xl border transition-all flex items-start gap-3 animate-slide-up stagger-${(idx % 3) + 1} ${
                isKey
                  ? 'bg-gradient-to-br from-emerald-950/50 via-slate-900/90 to-rose-950/30 border-emerald-500/50 shadow-lg'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-xs font-black flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {step.name}
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-2.5 rounded-2xl bg-slate-900/60 border border-emerald-500/25 text-center text-xs text-emerald-300 flex items-center justify-center gap-2 animate-slide-up stagger-4">
        <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
        <span>Cycle completes every evening and seamlessly restarts with Next Day Planning.</span>
      </div>
    </div>
  );
};

export const Slide27SelfReview: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { questions } = slide.data;
  const [checkedReview, setCheckedReview] = useState<Record<number, boolean>>({});

  const toggleReview = (idx: number) => {
    setCheckedReview(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          PART 5 — DAILY OPERATING MODEL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 27 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Daily Self-Review Checklist
      </h2>
      <p className="text-xs sm:text-sm text-emerald-300 font-medium mb-3.5 animate-slide-up stagger-2">
        Day end mein har team member khud se yeh 7 reflective questions pooche:
      </p>

      {/* 7 Questions List with Tips */}
      <div className="space-y-2 mb-3.5">
        {questions.map((item: any, idx: number) => {
          const isDone = !!checkedReview[idx];
          return (
            <div 
              key={idx}
              onClick={() => toggleReview(idx)}
              className={`p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 border animate-slide-up stagger-${(idx % 4) + 1} ${
                isDone
                  ? 'bg-emerald-950/45 border-emerald-500/60 text-white shadow-md'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5 flex-1">
                <div className="text-emerald-400 flex-shrink-0">
                  {isDone ? (
                    <CheckSquare className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-600" />
                  )}
                </div>
                <span className="font-mono text-xs text-emerald-400 font-bold">
                  Q0{idx + 1}.
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {item.q}
                </p>
              </div>

              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-md bg-slate-950/60 border border-slate-800">
                {item.tip}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 text-center text-xs text-slate-400 animate-slide-up stagger-6">
        Click any question above to check off your self-reflection at the end of the day.
      </div>
    </div>
  );
};
