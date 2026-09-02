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

const channelIconMap: Record<string, any> = {
  ShoppingBag,
  Building2,
  Landmark,
  Compass,
  Sparkles,
  Share2
};

export const Slide10FieldMarketing: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { formula, responsibilities } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
          SECTION 03 — FIELD MARKETING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 10 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Field Marketing Essentials
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        On-ground presence, real-time territory mapping, and direct buyer engagement
      </p>

      {/* Core Formula Box */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-950/50 via-slate-900/90 to-rose-950/50 border-2 border-amber-500/40 shadow-xl mb-4 animate-slide-up stagger-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
          THE 5-STAGE FIELD OPERATING FORMULA
        </span>
        <div className="text-sm sm:text-lg font-mono font-bold text-white tracking-wide">
          {formula}
        </div>
      </div>

      {/* Responsibilities Grid */}
      <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 animate-slide-up stagger-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
          Your Core Field Responsibilities:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {responsibilities.map((resp: any, idx: number) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-750 flex flex-col">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{resp.title}</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-1 ml-6 leading-tight">{resp.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Slide11ExploreNewAreas: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { premise, channels, keyQuestion } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
          SECTION 03 — FIELD MARKETING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 11 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Explore New Areas & Channels
      </h2>
      <p className="text-xs sm:text-sm text-amber-300 font-medium mb-4 animate-slide-up stagger-2">
        {premise}
      </p>

      {/* 6 Exploration Channels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {channels.map((chan: any, idx: number) => {
          const IconComp = channelIconMap[chan.icon] || Compass;
          return (
            <div 
              key={idx}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between group animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="p-2 w-fit rounded-xl bg-amber-500/10 text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                  <IconComp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {chan.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">
                  {chan.desc}
                </p>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-950/70 text-[10px] font-mono text-amber-300 border border-slate-800">
                Tip: {chan.tip}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mindset Question Callout */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-yellow-500/15 border border-amber-500/40 flex items-center gap-3.5 shadow-xl animate-slide-up stagger-6">
        <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 flex-shrink-0 shadow-md">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
            ASK YOURSELF BEFORE EVERY FIELD TRIP
          </span>
          <p className="text-xs sm:text-base font-bold text-white">
            {keyQuestion}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide12LeadGenProcess: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { steps } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
          SECTION 03 — FIELD MARKETING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 12 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Lead Generation Process
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        The complete 9-stage pipeline from target location identification to continuous quality improvement
      </p>

      {/* 9-Step Pipeline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {steps.map((st: any, idx: number) => {
          const isHighlight = idx === 4 || idx === 6 || idx === 8;
          return (
            <div
              key={idx}
              className={`p-3 rounded-2xl flex items-start gap-3 border transition-all animate-slide-up stagger-${(idx % 3) + 1} ${
                isHighlight 
                  ? 'bg-amber-950/45 border-amber-500/50 shadow-lg shadow-amber-950/20' 
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 font-mono text-xs font-black flex-shrink-0">
                {st.num}
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                  {st.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide13LeadQuality: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { philosophy, equation, salesFeedbackQuestions, closingNote } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
          SECTION 03 — FIELD MARKETING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 13 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Lead Quality vs Lead Quantity
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        {philosophy}
      </p>

      {/* Quality Equation Box */}
      <div className="p-4 rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 shadow-2xl mb-4 animate-slide-up stagger-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {equation.factors.map((fac: any, idx: number) => (
            <div key={idx} className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col">
              <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">FACTOR 0{idx + 1}</span>
              <h4 className="text-xs sm:text-sm font-bold text-white">{fac.text}</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-tight">{fac.desc}</p>
            </div>
          ))}

          {/* Equal Result */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-slate-950 font-black text-center shadow-lg">
            <span className="text-[10px] uppercase font-mono tracking-widest block opacity-90">OUTCOME</span>
            <span className="text-xs sm:text-sm font-display leading-tight block mt-0.5">{equation.result}</span>
          </div>
        </div>
      </div>

      {/* Sales Feedback Loop */}
      <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 animate-slide-up stagger-3">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-amber-400" /> Sales se regular feedback lo:
          </span>
          <span className="text-[11px] font-mono text-amber-300 font-semibold">{closingNote}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {salesFeedbackQuestions.map((item: any, idx: number) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-xs text-slate-200 flex flex-col">
              <span className="font-bold text-white"><span className="text-amber-400 font-mono">Q{idx + 1}.</span> {item.q}</span>
              <span className="text-[10px] text-slate-400 mt-1">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
