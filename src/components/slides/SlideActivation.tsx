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
  Wrench,
  HelpCircle,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

const touchpointIconMap: Record<string, any> = {
  MapPin,
  Calendar,
  Building,
  ShoppingBag,
  Landmark,
  Users
};

export const Slide7Activation: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { formula, touchpoints } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/40">
          SECTION 02 — ACTIVATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 07 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        What is Marketing Activation?
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        The 3-factor formula that converts passive brand presence into verified buyer intent
      </p>

      {/* Core Equation Box */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-violet-950/60 via-slate-900/90 to-rose-950/60 border-2 border-violet-500/40 shadow-2xl mb-4 animate-slide-up stagger-2">
        <div className="text-center mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 font-bold">
            THE 3-PART ACTIVATION FORMULA
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {formula.map((item: any, idx: number) => {
            const IconComp = idx === 0 ? Eye : idx === 1 ? MessageSquareHeart : Target;
            return (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/80 border border-violet-500/30 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-violet-500/20 text-violet-300">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.label}</h4>
                    <span className="text-[10px] font-mono text-violet-300">{item.desc}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2 rounded-xl border border-slate-850">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Touchpoints Subtitle */}
      <div className="mb-2 flex items-center justify-between animate-slide-up stagger-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
          Identify suitable on-ground touchpoints:
        </span>
        <span className="text-[11px] font-mono text-violet-400">6 Strategic Channels</span>
      </div>

      {/* 6 Touchpoint Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {touchpoints.map((tp: any, idx: number) => {
          const IconComp = touchpointIconMap[tp.icon] || MapPin;
          return (
            <div 
              key={idx}
              className={`p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between group animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
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

export const Slide8ActivationPlanning: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { questions } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/40">
          SECTION 02 — ACTIVATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 08 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Activation Planning Canvas
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Use this 6-question framework before locking any marketing activation plan
      </p>

      {/* 6-Question Canvas Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {questions.map((item: any, idx: number) => {
          return (
            <div 
              key={idx}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 hover:border-violet-400 transition-all flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    QUESTION 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">{item.prompt}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 font-display">
                  {item.q}
                </h3>
                <p className="text-xs font-semibold text-violet-300 mb-1.5">
                  Focus: {item.focus}
                </p>
                <p className="text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-xl border border-slate-800 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Field Ready Check</span>
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide9EngagementFunnel: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { funnel } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/40">
          SECTION 02 — ACTIVATION
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 09 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Maximum Customer Engagement
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Activation ke time in 5 sequential customer conversion stages par focus hona chahiye:
      </p>

      {/* 5 Funnel Stages */}
      <div className="flex flex-col sm:flex-row gap-3">
        {funnel.map((item: any, idx: number) => {
          return (
            <div 
              key={idx}
              className={`flex-1 p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 hover:border-violet-400 transition-all flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-black text-violet-400 px-2.5 py-0.5 rounded-lg bg-violet-950 border border-violet-800/60">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Stage</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 font-display">
                  {item.stage}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-semibold mb-2">
                  {item.question}
                </p>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  {item.detail}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-violet-300 font-bold block">
                  KPI: {item.metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-xs text-slate-300 gap-2 animate-slide-up stagger-6">
        <span className="font-bold text-rose-400">Ultimate Goal:</span> Har walk-in ko Brand Visibility se Qualified Sales Handover tak smoothly nurture karna.
      </div>
    </div>
  );
};
