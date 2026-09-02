import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Target, 
  Smartphone, 
  FileCheck2, 
  TrendingUp, 
  CheckCircle2, 
  Flame, 
  Building2,
  ArrowRight,
  ExternalLink,
  ListFilter,
  Sparkles
} from 'lucide-react';
import { SlideContent, SECTIONS } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

interface SlideObjectivesProps {
  slide: SlideContent;
  revealedCount?: number;
  onJumpSlide?: (index: number) => void;
  onOpenReference?: (data: CardReferenceData) => void;
}

export const Slide2Objectives: React.FC<SlideObjectivesProps> = ({ 
  slide, 
  revealedCount = 99, 
  onJumpSlide,
  onOpenReference 
}) => {
  const { objectives } = slide.data;
  const icons = [Compass, Layers, Target, Smartphone, FileCheck2, TrendingUp];
  const [activeTab, setActiveTab] = useState<'objectives' | 'index'>('objectives');

  const handleCardClick = (obj: any) => {
    if (onOpenReference) {
      onOpenReference({
        title: obj.title,
        category: 'FOUNDATIONAL PILLAR',
        tag: obj.tag,
        description: obj.description,
        deliverables: [
          `Key Target Deliverable: ${obj.deliverable}`,
          `Role Milestone: Complete masterclass in Slide #${obj.targetSlide}`,
          '100% execution discipline required on field'
        ],
        executionTips: [
          'Study the specific on-ground operating rhythm outlined in this module.',
          'Align daily itinerary with territory manager every morning.',
          'Submit live geo-tagged activity proofs in the Vastu Vihar Marketing App.'
        ],
        qualityGate: 'Verified master plan knowledge & daily app logging compliance.'
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      {/* Top Banner with Vastu Vihar Branding */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-rose-400" />
            VASTU VIHAR • TRAINING ROADMAP
          </span>
          <span className="text-xs font-mono text-slate-400">SLIDE 02 / 34</span>
        </div>

        {/* View Switcher: Objectives vs Direct Index */}
        <div className="flex items-center p-0.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <button
            onClick={() => setActiveTab('objectives')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'objectives'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Core Pillars (6)
          </button>
          <button
            onClick={() => setActiveTab('index')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              activeTab === 'index'
                ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Complete Slide Index</span>
          </button>
        </div>
      </div>

      {/* Main Hero Header */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight mb-1.5">
        Training Objectives <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
          & Core Pillars Roadmap
        </span>
      </h2>

      <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mb-4 leading-relaxed">
        {slide.subtitle}
      </p>

      {/* Tab 1: Progressive Symmetrical 6-Card Grid (3x2) */}
      {activeTab === 'objectives' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {objectives.map((obj: any, idx: number) => {
            const IconComponent = icons[idx % icons.length];
            const isRevealed = idx < revealedCount;

            return (
              <div 
                key={idx}
                onClick={() => isRevealed && handleCardClick(obj)}
                className={`glass-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between border-slate-700/60 transition-all duration-200 group ${
                  isRevealed ? 'card-revealed cursor-pointer' : 'card-hidden'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-black text-rose-400 px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 shadow-inner">
                      {obj.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-800/60">
                      {obj.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 font-display flex items-center justify-between group-hover:text-cyan-300 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <IconComponent className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {obj.title}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[10px] font-mono text-cyan-300">
                  <span>Deliverable: <strong className="text-white">{obj.deliverable}</strong></span>
                  <span 
                    onClick={(e) => {
                      e.stopPropagation();
                      onJumpSlide && onJumpSlide(obj.targetSlide - 1);
                    }}
                    className="text-slate-400 hover:text-cyan-300 flex items-center gap-0.5 font-bold cursor-pointer"
                  >
                    Slide #{obj.targetSlide} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Tab 2: Direct Interactive Slide Index */
        <div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 overflow-y-auto max-h-[50vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {SECTIONS.map((sec) => (
            <div 
              key={sec.id}
              onClick={() => onJumpSlide && onJumpSlide(sec.firstSlide - 1)}
              className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-750 border border-slate-700/60 hover:border-cyan-400/50 cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-rose-400 uppercase block">
                  Slides {sec.slideRange}
                </span>
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {sec.title}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Slide3Transition: React.FC<{ 
  slide: SlideContent; 
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { earlierSales, nowMarketing, keyThought } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          MINDSET TRANSFORMATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 05 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        From Sales to Marketing: <span className="text-cyan-400">What Has Changed?</span>
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4">
        Understanding the shift from closing assigned leads to proactively creating fresh market demand
      </p>

      {/* Before vs Now Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
        {/* Earlier - Sales */}
        <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/60 border border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold">PREVIOUS ROLE</span>
              <h3 className="text-base sm:text-lg font-bold text-slate-300">Earlier — Sales</h3>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono font-semibold">
              Conversion Focus
            </span>
          </div>
          <div className="space-y-2">
            {earlierSales.map((item: any, i: number) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-slate-300">{item.title}</span>
                <span className="text-[11px] text-slate-400 mt-0.5">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Now - Marketing with Progressive Reveal */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-rose-950/40 via-slate-900/90 to-cyan-950/40 border-2 border-rose-500/40 shadow-xl shadow-rose-950/30 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-rose-500/20">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase font-bold">CURRENT MISSION</span>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
                Now — Marketing
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-semibold">
              Demand Creation
            </span>
          </div>
          <div className="space-y-2">
            {nowMarketing.map((item: any, i: number) => {
              const isRevealed = i < revealedCount;
              return (
                <div 
                  key={i} 
                  onClick={() => onOpenReference && onOpenReference({
                    title: item.title,
                    category: 'MARKETING RESPONSIBILITY',
                    description: item.detail,
                    deliverables: ['Continuous on-ground field execution', 'High quality lead capture', 'Immediate Sales synchronization'],
                    executionTips: ['Never wait for customer walk-ins; actively position brand canopies in prime nodes.']
                  })}
                  className={`p-2.5 rounded-xl bg-slate-800/70 border border-rose-500/20 hover:border-rose-500/40 transition-colors flex flex-col cursor-pointer ${
                    isRevealed ? 'card-revealed' : 'card-hidden'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-300 mt-0.5 ml-5">{item.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Thought Callout */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-500/20 via-amber-500/15 to-cyan-500/15 border border-rose-500/40 flex items-center gap-3 shadow-lg">
        <div className="p-2.5 rounded-xl bg-rose-500 text-white flex-shrink-0 shadow-md">
          <Flame className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">CORE KEYNOTE PHILOSOPHY</span>
          <p className="text-xs sm:text-base font-bold text-white">
            “{keyThought}”
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide4Responsibilities: React.FC<{ 
  slide: SlideContent; 
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { intro, pillars } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 1 — YOUR ROLE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 06 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Your 5 Core Responsibilities
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-5">
        {intro}
      </p>

      {/* 5 Pillars Roadmap with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {pillars.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'CORE ROLE PILLAR',
                tag: item.code,
                description: item.desc,
                deliverables: [item.details, `Target Evaluation Metric: ${item.kpi}`],
                executionTips: ['Maintain daily SOP checklist compliance and real-time app logging.']
              })}
              className={`glass-card p-4 rounded-3xl flex flex-col justify-between border-slate-700/60 hover:border-cyan-400 transition-all cursor-pointer ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              } ${isRevealed ? 'card-revealed' : 'card-hidden'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-lg font-black text-rose-400">
                    {item.num}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-800 text-cyan-300 border border-slate-700">
                    {item.code}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  {item.desc}
                </p>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
                  {item.details}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                <span>Target Metric:</span>
                <span className="font-bold text-white">{item.kpi}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-2.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
        Your daily performance, review scorecard, and career progression will be evaluated across these 5 core areas.
      </div>
    </div>
  );
};
