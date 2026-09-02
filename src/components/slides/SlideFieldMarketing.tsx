import React from 'react';
import { 
  Compass, 
  MapPin, 
  Users, 
  ShoppingBag, 
  Building2, 
  Landmark, 
  Share2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  UserCheck 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

const channelIconMap: Record<string, any> = {
  ShoppingBag,
  Building2,
  Landmark,
  Compass,
  Sparkles,
  Share2
};

export const Slide10FieldMarketing: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { formula, responsibilities } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 3 — FIELD MARKETING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 13 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Field Marketing Essentials
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* Core Formula Box */}
      {formula && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/50 via-slate-900 to-cyan-950/50 border border-rose-500/40 text-center mb-3">
          <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-0.5">
            5-STAGE FIELD OPERATING CYCLE
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold text-white">
            {formula}
          </span>
        </div>
      )}

      {/* Responsibilities Grid with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {responsibilities && responsibilities.map((resp: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: resp.title,
                category: 'FIELD RESPONSIBILITY',
                description: resp.detail,
                deliverables: ['Active daily ground mobility', 'Continuous catchment discovery', 'Accurate prospect information capture'],
                executionTips: ['Never remain stationary in one corner; actively map the entire commercial corridor.']
              })}
              className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{resp.title}</span>
              </div>
              <p className="text-[11px] text-slate-300 ml-6 leading-relaxed">
                {resp.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide11ExploreNewAreas: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { premise, channels, keyQuestion } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 3 — EXPANSION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 14 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Explore New Areas & Channels
      </h2>
      <p className="text-xs sm:text-sm text-cyan-300 font-medium mb-4">
        {premise || slide.subtitle}
      </p>

      {/* 6 Exploration Channels with Step Reveal */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {channels && channels.map((chan: any, idx: number) => {
          const IconComp = channelIconMap[chan.icon] || Compass;
          const isRevealed = idx < revealedCount;

          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: chan.name,
                category: 'EXPANSION CHANNEL',
                tag: chan.target,
                description: chan.focus,
                deliverables: [`Target Cluster: ${chan.target}`, `Primary Focus: ${chan.focus}`],
                executionTips: ['Audit competitor saturation and map high-income residential hubs.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{chan.target}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {chan.name}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {chan.focus}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {keyQuestion && (
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-rose-500/40 text-center text-xs text-rose-200 font-medium">
          “{keyQuestion}”
        </div>
      )}
    </div>
  );
};

export const Slide12LeadGenProcess: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { steps } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 3 — LEAD GENERATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 15 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Lead Generation Process
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 9 Process Steps Grid with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {steps && steps.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: `PROCESS STEP 0${idx + 1}`,
                tag: item.action,
                description: item.desc,
                deliverables: [`Required Action: ${item.action}`, `Standard: ${item.desc}`],
                executionTips: ['Ensure accurate geo-tagging and instant app synchronization.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-cyan-400">0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.action}
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

export const Slide13LeadQuality: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { checklist, keyGuideline } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 3 — LEAD QUALITY
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 16 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Lead Quality vs Lead Quantity
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 4 Quality Dimensions with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
        {checklist && checklist.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'LEAD QUALIFIER',
                description: item.desc,
                deliverables: [`Validation: ${item.desc}`, 'Mandatory verified field'],
                executionTips: ['A lead without verified budget and timeline wastes sales consultation time.']
              })}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 transition-all flex items-start gap-3 ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
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

      {keyGuideline && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-500/20 to-cyan-500/20 border border-rose-500/40 text-center text-xs font-semibold text-white">
          “{keyGuideline}”
        </div>
      )}
    </div>
  );
};
