import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Award, 
  Flame, 
  ArrowRight 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide28First30Days: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { weeks, commitment } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 10 — ONBOARDING ROADMAP
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 31 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        First 30 Days Expectations
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 4-Week Progressive Roadmap with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
        {weeks && weeks.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: `${item.week}: ${item.focus}`,
                category: '30-DAY MILESTONE',
                tag: item.goal,
                description: item.deliverables.join(' | '),
                deliverables: item.deliverables,
                executionTips: ['Attain independent operational proficiency by end of Week 4.']
              })}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-750 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-950 border border-rose-800">
                    {item.week}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold">{item.goal}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {item.focus}
                </h3>
                <div className="space-y-1.5">
                  {item.deliverables && item.deliverables.map((d: string, i: number) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {commitment && (
        <div className="p-3 rounded-2xl bg-gradient-to-r from-rose-500/20 to-cyan-500/20 border border-rose-500/40 text-center text-xs font-semibold text-white">
          “{commitment}”
        </div>
      )}
    </div>
  );
};
