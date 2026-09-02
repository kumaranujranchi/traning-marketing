import React from 'react';
import { 
  FileCheck, 
  Calendar, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Table 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide17WhyReporting: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { reasons } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 5 — REPORTING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 20 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Why Reporting is Essential
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 7 Reasons Grid with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {reasons && reasons.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'GOVERNANCE PRINCIPLE',
                description: item.desc,
                deliverables: [`Standard: ${item.desc}`, 'Real-time daily logging'],
                executionTips: ['Never leave daily activity reporting for the next morning.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-rose-400 mb-1 block">PRINCIPLE 0{idx + 1}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
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

export const Slide18DailyReporting: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { deliverables, rule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 5 — DAILY REPORTING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 21 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Daily Reporting Deliverables
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 4 Deliverables with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
        {deliverables && deliverables.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'DAILY DELIVERABLE',
                tag: item.deadline,
                description: item.desc,
                deliverables: [`Deadline: ${item.deadline}`, `Standard: ${item.desc}`],
                executionTips: ['Take wide-angle photographs showing active customer conversations.']
              })}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-cyan-400">DELIVERABLE 0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    {item.deadline}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {rule && (
        <div className="p-3 rounded-2xl bg-gradient-to-r from-rose-500/20 to-cyan-500/20 border border-rose-500/40 text-center text-xs font-semibold text-white">
          “{rule}”
        </div>
      )}
    </div>
  );
};

export const Slide19WeeklyReporting: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { matrix } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 5 — WEEKLY REVIEW
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 22 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Weekly Reporting Matrix
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 8 Metric Dimensions with Step Reveal */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {matrix && matrix.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.metric,
                category: 'WEEKLY SCORECARD METRIC',
                tag: item.benchmark,
                description: item.desc,
                deliverables: [`Benchmark: ${item.benchmark}`, `Standard: ${item.desc}`],
                executionTips: ['Review with Regional Head every Saturday evening.']
              })}
              className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 mb-1 block">#{idx + 1}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.metric}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {item.desc}
                </p>
              </div>
              <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-rose-300 font-bold">
                Target: {item.benchmark}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
