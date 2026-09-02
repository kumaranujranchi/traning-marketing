import React from 'react';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Percent, 
  Calendar 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide23KPIs: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { kpis } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 7 — KPIS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 26 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Key Performance Indicators (KPIs)
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 8 Core KPIs Grid with Step Reveal */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {kpis && kpis.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.kpi,
                category: 'KPI BENCHMARK',
                tag: item.benchmark,
                description: item.desc,
                deliverables: [`Target: ${item.benchmark}`, `Standard: ${item.desc}`],
                executionTips: ['Reviewed daily in morning huddles and monthly appraisals.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 mb-1 block">KPI 0{idx + 1}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.kpi}
                </h3>
                <p className="text-[11px] text-slate-300 mb-2">
                  {item.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-rose-300 font-bold">
                Goal: {item.benchmark}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide24Evaluation: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { dimensions } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 7 — PERFORMANCE APPRAISAL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 27 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        How Marketing Performance is Evaluated
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 5 Evaluation Dimensions with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {dimensions && dimensions.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.dimension,
                category: 'EVALUATION DIMENSION',
                tag: item.weight,
                description: item.desc,
                deliverables: [`Weightage: ${item.weight}`, `Standard: ${item.desc}`],
                executionTips: ['Quarterly appraisal scoring is based directly on this weighted index.']
              })}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-750 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-rose-400">DIMENSION 0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold">
                    {item.weight}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {item.dimension}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
