import React from 'react';
import { 
  Eye, 
  MessageSquareHeart, 
  Target, 
  MapPin, 
  Calendar, 
  Building, 
  ShoppingBag, 
  Landmark, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

const touchpointIconMap: Record<string, any> = {
  MapPin,
  Calendar,
  Building,
  ShoppingBag,
  Landmark,
  Users
};

export const Slide7Activation: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { formula, touchpoints } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 2 — ACTIVATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 10 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        What is Marketing Activation?
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* Core Equation Box with Step Reveal */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-xl mb-4">
        <div className="text-center mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
            THE 3-PART ACTIVATION FORMULA
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {formula && formula.map((item: any, idx: number) => {
            const IconComp = idx === 0 ? Eye : idx === 1 ? MessageSquareHeart : Target;
            const isRevealed = idx < revealedCount;
            return (
              <div 
                key={idx}
                onClick={() => onOpenReference && onOpenReference({
                  title: item.label,
                  category: 'ACTIVATION PILLAR',
                  tag: item.desc,
                  description: item.detail,
                  deliverables: ['High visibility on-ground presence', 'Proactive two-way customer communication', 'Verified buyer lead capture'],
                  executionTips: ['Never leave the activation kiosk unattended.', 'Use live VR & brochures during consultations.']
                })}
                className={`p-3.5 rounded-2xl bg-slate-800/80 border border-slate-750 flex flex-col justify-between transition-all ${
                  isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.label}</h4>
                    <span className="text-[10px] font-mono text-cyan-300">{item.desc}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6 Touchpoint Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {touchpoints && touchpoints.map((tp: any, idx: number) => {
          const IconComp = touchpointIconMap[tp.icon] || MapPin;
          return (
            <div 
              key={idx}
              className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 font-bold">{tp.tag}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-white leading-tight mb-1">
                  {tp.name}
                </h4>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {tp.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide8ActivationPlanning: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { questions } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 2 — ACTIVATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 11 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Activation Planning Canvas
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 6-Question Canvas Matrix with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {questions && questions.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.q,
                category: `QUESTION 0${idx + 1}`,
                tag: item.prompt,
                description: item.detail,
                deliverables: [`Strategic Focus: ${item.focus}`, `Action Prompt: ${item.prompt}`],
                executionTips: ['Answer all 6 questions in the team briefing prior to dispatching marketing canopies.']
              })}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-rose-950 text-rose-300 border border-rose-800">
                    QUESTION 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">{item.prompt}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 font-display">
                  {item.q}
                </h3>
                <p className="text-xs font-semibold text-cyan-300 mb-1.5">
                  Focus: {item.focus}
                </p>
                <p className="text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-xl border border-slate-800 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide9EngagementFunnel: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { funnel, rule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 2 — ENGAGEMENT
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 12 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Customer Engagement Funnel
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 5 Funnel Stages with Step Reveal */}
      <div className="space-y-2 mb-4">
        {funnel && funnel.map((stage: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: stage.stage,
                category: `FUNNEL STAGE 0${idx + 1}`,
                tag: stage.action,
                description: stage.detail,
                deliverables: [`Primary Goal: ${stage.action}`, `Outcome: ${stage.outcome}`],
                executionTips: ['Guide the customer naturally through each stage without aggressive sales pressure.']
              })}
              className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex items-center justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-950 border border-rose-800">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{stage.stage}</h4>
                  <p className="text-xs text-slate-300">{stage.detail}</p>
                </div>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-cyan-400 font-bold block">{stage.action}</span>
                <span className="text-[10px] text-slate-400">{stage.outcome}</span>
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
