import React from 'react';
import { 
  Radar, 
  Users, 
  CheckCircle2, 
  Lightbulb, 
  Sparkles 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

export const Slide14MarketVisit: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { mainIdea, twoDimensions, intelligencePoints } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          SECTION 04 — COMPETITOR INTEL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 14 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Market Visit ka Asli Purpose
      </h2>
      <p className="text-xs sm:text-sm text-rose-300 font-medium mb-4 animate-slide-up stagger-2">
        {mainIdea}
      </p>

      {/* Two Dimensions Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {twoDimensions.map((dim: any, idx: number) => (
          <div 
            key={idx}
            className={`p-4 sm:p-5 rounded-3xl border flex flex-col justify-between animate-slide-up stagger-${idx + 1} ${
              idx === 0 
                ? 'bg-slate-900/85 border-cyan-500/40' 
                : 'bg-gradient-to-br from-rose-950/45 to-slate-900/90 border-rose-500/40 shadow-xl shadow-rose-950/20'
            }`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`p-2 rounded-xl ${idx === 0 ? 'bg-cyan-500/20 text-cyan-300' : 'bg-rose-500/20 text-rose-300'}`}>
                  {idx === 0 ? <Users className="w-4 h-4" /> : <Radar className="w-4 h-4" />}
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {dim.title}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {dim.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 font-bold block mb-1">Key Deliverables:</span>
              <div className="flex flex-wrap gap-1.5">
                {dim.deliverables.map((del: string, i: number) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[10px] text-slate-300">
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 7 Intelligence Points */}
      <div className="p-3.5 rounded-3xl bg-slate-900/70 border border-slate-800 animate-slide-up stagger-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Market visit ke dauran yeh 7 ground factors analyze karein:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          {intelligencePoints.map((pt: any, idx: number) => (
            <div key={idx} className="p-2 rounded-xl bg-slate-800/50 border border-slate-800 flex flex-col">
              <span className="font-bold text-rose-300 text-xs">{pt.title}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{pt.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Slide15CompetitorTracking: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { questions, outputFormula } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          SECTION 04 — COMPETITOR INTEL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 15 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Competitor Tracking Radar
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Market mein observe karte waqt yeh 6 critical questions note karein:
      </p>

      {/* 6 Questions Grid with Details */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {questions.map((item: any, idx: number) => (
          <div key={idx} className={`p-3.5 rounded-3xl bg-slate-900/85 border border-slate-800 hover:border-rose-500/50 transition-all flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {item.q}
                </span>
                <span className="text-[10px] font-mono text-slate-500">RADAR 0{idx + 1}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Output Formula Banner */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-rose-950/60 via-slate-900/90 to-amber-950/60 border border-rose-500/40 text-center shadow-xl animate-slide-up stagger-6">
        <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold block mb-1">
          INTELLIGENCE CONVERSION PATHWAY
        </span>
        <div className="text-sm sm:text-lg font-mono font-bold text-white tracking-widest">
          {outputFormula}
        </div>
      </div>
    </div>
  );
};

export const Slide16MarketIntelReport: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { law, equation, caseStudy } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          SECTION 04 — COMPETITOR INTEL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 16 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Market Intelligence Report
      </h2>
      <p className="text-xs sm:text-sm text-rose-300 font-medium mb-3.5 animate-slide-up stagger-2">
        {law}
      </p>

      {/* Equation Box */}
      <div className="p-3.5 rounded-3xl bg-slate-900/90 border-2 border-rose-500/40 shadow-xl mb-3.5 text-center animate-slide-up stagger-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-0.5">
          BRING BACK FROM THE FIELD
        </span>
        <div className="text-xs sm:text-base font-mono font-bold text-white tracking-wide">
          {equation}
        </div>
      </div>

      {/* Live Example Card with 4-Step Breakdown */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950/30 to-slate-900 border border-rose-500/30 shadow-2xl space-y-3 animate-slide-up stagger-3">
        <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          {caseStudy.title}
        </div>

        <blockquote className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-200 italic leading-relaxed">
          {caseStudy.quote}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          {caseStudy.breakdown.map((b: any, i: number) => (
            <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <span className="text-[10px] font-mono font-bold text-rose-400 mb-0.5">{b.phase}</span>
              <span className="text-[11px] text-slate-300 leading-tight">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
