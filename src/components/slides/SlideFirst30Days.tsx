import React from 'react';
import { 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

export const Slide28First30Days: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { weeks } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
          ONBOARDING ROADMAP
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 28 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        First 30 Days Expectations
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Your 4-week structured progression from learning to autonomous high-impact execution:
      </p>

      {/* 4-Week Timeline Detailed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-3.5">
        {weeks.map((wk: any, idx: number) => {
          const isCyan = wk.color === 'cyan';
          const isViolet = wk.color === 'violet';
          const isAmber = wk.color === 'amber';

          const borderClass = isCyan ? 'border-cyan-500/40' : isViolet ? 'border-violet-500/40' : isAmber ? 'border-amber-500/40' : 'border-emerald-500/40';
          const badgeClass = isCyan ? 'bg-cyan-500/20 text-cyan-300' : isViolet ? 'bg-violet-500/20 text-violet-300' : isAmber ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300';
          const dotColor = isCyan ? 'bg-cyan-400' : isViolet ? 'bg-violet-400' : isAmber ? 'bg-amber-400' : 'bg-emerald-400';

          return (
            <div 
              key={idx}
              className={`p-4 rounded-3xl bg-slate-900/85 border ${borderClass} shadow-xl flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800">
                  <span className="font-mono text-xs font-bold text-slate-400">{wk.week}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${badgeClass}`}>
                    {wk.theme}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-2">Focus: {wk.focus}</span>

                <div className="space-y-2">
                  {wk.items.map((item: any, i: number) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-800/60 border border-slate-750 flex flex-col">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} flex-shrink-0`} />
                        <span>{item.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-300 mt-0.5 ml-3 leading-tight">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Phase 0{idx + 1} Target</span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isCyan ? 'text-cyan-400' : isViolet ? 'text-violet-400' : isAmber ? 'text-amber-400' : 'text-emerald-400'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
