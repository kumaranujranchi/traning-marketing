import React from 'react';
import { 
  Building2, 
  Target, 
  TrendingUp, 
  Sparkles, 
  Award, 
  Flame, 
  HeartHandshake 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide30Closing: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { factors, goldenThought, closingDeclaration } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 12 — CLOSING KEYNOTE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 33 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        The Marketing Philosophy
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 6 Core Factors with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {factors && factors.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'PHILOSOPHY PILLAR',
                description: item.desc,
                deliverables: [`Core Belief: ${item.title}`, `Mindset: ${item.desc}`],
                executionTips: ['Live this philosophy in every customer interaction on the field.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-rose-400 mb-1 block">PILLAR 0{idx + 1}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {goldenThought && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-500/20 via-slate-900 to-cyan-500/20 border border-rose-500/40 text-center text-xs sm:text-sm font-bold text-white shadow-lg">
          “{goldenThought}”
        </div>
      )}
    </div>
  );
};
