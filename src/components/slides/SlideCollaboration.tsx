import React from 'react';
import { 
  ArrowRight, 
  RefreshCw, 
  Users, 
  UserCheck 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

export const Slide25Collaboration: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { marketingFlow, salesFlow, loopFormula, tagline } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/40">
          PART 4 — SYNERGY
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 25 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Marketing & Sales Must Work Together
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Creating a seamless revenue engine through continuous bi-directional feedback
      </p>

      {/* Dual Flow Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
        {/* Marketing Engine */}
        <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/85 border-2 border-cyan-500/40 shadow-xl animate-slide-up stagger-2">
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-cyan-300 flex items-center gap-2 font-display">
              <Users className="w-5 h-5 text-cyan-400" /> {marketingFlow.title}
            </h3>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
              {marketingFlow.tag}
            </span>
          </div>

          <div className="space-y-2">
            {marketingFlow.steps.map((step: any, idx: number) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-800/70 border border-cyan-500/20 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {step.name}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">0{idx + 1}</span>
                </div>
                <span className="text-[11px] text-slate-300 mt-0.5 ml-3 leading-tight">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Engine */}
        <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/85 border-2 border-indigo-500/40 shadow-xl animate-slide-up stagger-3">
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-indigo-300 flex items-center gap-2 font-display">
              <UserCheck className="w-5 h-5 text-indigo-400" /> {salesFlow.title}
            </h3>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
              {salesFlow.tag}
            </span>
          </div>

          <div className="space-y-2">
            {salesFlow.steps.map((step: any, idx: number) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-800/70 border border-indigo-500/20 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {step.name}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold">0{idx + 1}</span>
                </div>
                <span className="text-[11px] text-slate-300 mt-0.5 ml-3 leading-tight">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Loop Banner */}
      <div className="p-3.5 sm:p-4 rounded-3xl bg-gradient-to-r from-sky-950/60 via-slate-900/90 to-rose-950/60 border border-sky-500/40 text-center shadow-2xl animate-slide-up stagger-4">
        <div className="flex items-center justify-center gap-2 mb-1 text-sky-400 text-xs font-mono font-bold uppercase tracking-wider">
          <RefreshCw className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '8s' }} />
          {tagline}
        </div>
        <div className="text-sm sm:text-lg font-mono font-bold text-white tracking-wide">
          {loopFormula}
        </div>
      </div>
    </div>
  );
};
