import React, { useState } from 'react';
import { 
  FileText, 
  Store, 
  Image, 
  Sparkles, 
  Megaphone, 
  Building2, 
  Calendar, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  CheckSquare, 
  Square,
  Flame,
  Wrench,
  HelpCircle
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

const iconMap: Record<string, any> = {
  FileText,
  Store,
  Image,
  Sparkles,
  Megaphone,
  Building2,
  Calendar,
  Target
};

export const Slide4BTL: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { responsibility, activities, corePrinciple, workflow } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 1 — BTL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 07 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        BTL & Offline Marketing Ecosystem
      </h2>
      <p className="text-xs sm:text-sm text-cyan-300 font-medium mb-4">
        {responsibility}
      </p>

      {/* 8 Activities Detailed Grid with Step Reveal */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {activities.map((act: any, idx: number) => {
          const IconComp = iconMap[act.icon] || Target;
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: act.name,
                category: 'BTL ACTIVITY SOP',
                tag: act.category,
                description: act.description,
                deliverables: [
                  `Execution Channel: ${act.category}`,
                  'Branded promotional materials placement',
                  'Instant digital customer data logging'
                ],
                executionTips: [
                  'Obtain prior local administration / society permission.',
                  'Set up clean, illuminated canopy with Vastu Vihar standees.',
                  'Capture geo-tagged proof photo in marketing app immediately.'
                ],
                qualityGate: 'Zero defective materials; 100% genuine customer contact capture.'
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between group ${
                isRevealed ? 'card-revealed cursor-pointer' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                    {act.category}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {act.name}
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {act.description}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-cyan-400/80">
                <span>Channel #{idx + 1}</span>
                <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Principle Callout */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-cyan-950/40 border border-rose-500/30 flex items-center gap-3 shadow-lg">
        <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 flex-shrink-0">
          <Flame className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">OPERATING RULE</span>
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            {corePrinciple}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide5BTLProcess: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { stages, goldenRule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 1 — BTL EXECUTION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 08 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        BTL Execution Process
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-5">
        {slide.subtitle}
      </p>

      {/* 3 Phases: Before, During, After with Step Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {stages.map((stage: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: stage.title,
                category: `STAGE 0${idx+1}`,
                tag: stage.badge,
                description: `Mandatory operational phase: ${stage.title}`,
                deliverables: stage.items,
                executionTips: ['Execute every checkpoint in chronological order without skipping prerequisites.']
              })}
              className={`glass-card p-4 sm:p-5 rounded-3xl flex flex-col justify-between border-slate-700/60 transition-all ${
                isRevealed ? 'card-revealed cursor-pointer' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-rose-400 px-2 py-0.5 rounded-lg bg-rose-950 border border-rose-800">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white font-display">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                    {stage.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  {stage.items.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Rule Banner */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-rose-500/20 to-cyan-500/20 border border-rose-500/40 text-center text-xs font-semibold text-white">
        “{goldenRule}”
      </div>
    </div>
  );
};

export const Slide6BTLChecklist: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { checkpoints } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 1 — BTL QUALITY
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 09 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Activity Quality Checklist
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* Checkpoint Grid with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {checkpoints.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'QUALITY CHECKPOINT',
                tag: item.tag,
                description: item.desc,
                deliverables: [`Standard: ${item.desc}`, 'Must be checked before starting activity.'],
                executionTips: ['Never compromise on brand aesthetics or canopy lighting.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 transition-all cursor-pointer flex flex-col justify-between ${
                isRevealed ? 'card-revealed' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-400">#{item.num}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
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
