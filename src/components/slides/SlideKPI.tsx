import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Compass, 
  UserPlus, 
  CheckCircle2, 
  DollarSign, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

const kpiIconMap: Record<string, any> = {
  Layers,
  Sparkles,
  Compass,
  UserPlus,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Clock
};

export const Slide23KPIs: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { kpis } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
          PART 3 — KPI & PERFORMANCE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 23 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Your 8 Core KPIs
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        JD ke according team ki performance primarily in 8 areas mein measure hogi:
      </p>

      {/* 8 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi: any, idx: number) => {
          const IconComp = kpiIconMap[kpi.icon] || Layers;
          return (
            <div 
              key={idx}
              className={`p-3.5 sm:p-4 rounded-3xl bg-slate-900/85 border border-slate-800 hover:border-purple-400/60 hover:bg-slate-850 transition-all flex flex-col justify-between animate-slide-up stagger-${(idx % 4) + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-purple-400 px-2.5 py-0.5 rounded-lg bg-purple-950 border border-purple-800">
                    KPI 0{idx + 1}
                  </span>
                  <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white mb-1 font-display">
                  {kpi.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  {kpi.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                <span>Evaluation Focus:</span>
                <span className="font-bold text-white">{kpi.metric}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide24Evaluation: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { dimensions } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
          PART 3 — KPI & PERFORMANCE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 24 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Performance Evaluation Scorecard
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        How your on-ground contribution is evaluated across 5 balanced dimensions:
      </p>

      {/* 5 Dimensions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {dimensions.map((dim: any, idx: number) => {
          return (
            <div
              key={idx}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 shadow-xl flex flex-col justify-between animate-slide-up stagger-${idx + 1} ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {dim.focus}
                  </span>
                  <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 font-display">
                  {dim.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
                  {dim.question}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                <span className="text-cyan-400 font-bold block mb-0.5">Evaluates:</span>
                <span className="text-slate-300">{dim.evaluates}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
