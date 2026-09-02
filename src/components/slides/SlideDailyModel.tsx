import React from 'react';
import { 
  Sun, 
  MapPin, 
  FileCheck, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  HelpCircle, 
  Flame 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide26DailyCycle: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { cycle } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 9 — OPERATING DISCIPLINE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 29 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Daily Operating Model (Step-by-Step)
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 9 Operating Steps with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {cycle && cycle.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: `DAILY STEP 0${idx + 1}`,
                tag: item.time,
                description: item.desc,
                deliverables: [`Time Schedule: ${item.time}`, `Deliverable: ${item.desc}`],
                executionTips: ['Follow the chronological schedule strictly every single day.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-cyan-400">0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-rose-300 font-bold border border-slate-700">
                    {item.time}
                  </span>
                </div>
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
    </div>
  );
};

export const Slide27SelfReview: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { questions, rule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 9 — SELF-AUDIT
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 30 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Daily Self-Review Checklist
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 7 Self-Audit Questions with Step Reveal */}
      <div className="space-y-2 mb-4">
        {questions && questions.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.q,
                category: `AUDIT QUESTION 0${idx + 1}`,
                description: item.desc,
                deliverables: [`Standard: ${item.desc}`, 'Mandatory evening reflection before logging off.'],
                executionTips: ['If the answer is No, identify the root cause immediately.']
              })}
              className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex items-center justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-950 border border-rose-800">
                  0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">{item.q}</span>
              </div>
              <span className="text-[11px] text-slate-300 hidden sm:inline">{item.desc}</span>
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
