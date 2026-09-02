import React from 'react';
import { 
  Smartphone, 
  User, 
  Phone, 
  MapPin, 
  Home, 
  Target, 
  Hash, 
  FileText, 
  Flame, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Database
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

const leadIconMap: Record<string, any> = {
  User,
  Phone,
  MapPin,
  Home,
  Target,
  Hash,
  FileText
};

export const Slide20WebApp: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { objective, modules, coreMotto } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/40">
          PART 2 — DIGITAL TOOLS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 20 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Marketing Web / App System
      </h2>
      <p className="text-xs sm:text-sm text-teal-300 font-medium mb-3.5 animate-slide-up stagger-2">
        {objective}
      </p>

      {/* Modules Detailed Grid */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/85 border border-slate-800 mb-4 animate-slide-up stagger-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-3">
          11 Core Digital Modules to Master:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {modules.map((mod: any, idx: number) => (
            <div 
              key={idx}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-teal-500/20 flex flex-col hover:border-teal-400 transition-colors"
            >
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {mod.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 ml-3 leading-tight">{mod.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Principle Banner */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-teal-500/20 via-emerald-500/15 to-cyan-500/15 border border-teal-500/40 flex items-center gap-3.5 shadow-xl animate-slide-up stagger-4">
        <div className="p-2.5 rounded-xl bg-teal-400 text-slate-950 flex-shrink-0 shadow-md">
          <Flame className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block">
            CORE OPERATING LAW
          </span>
          <p className="text-xs sm:text-base font-bold text-white">
            “{coreMotto}”
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide21LeadEntry: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { fields, goldenRule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/40">
          PART 2 — DIGITAL TOOLS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 21 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Lead Entry: What Must Be Correct?
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        Lead enter karte waqt in 7 critical parameters ko verify karein:
      </p>

      {/* 7 Fields Detailed Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-3.5">
        {fields.map((fld: any, idx: number) => {
          const IconComp = leadIconMap[fld.icon] || FileText;
          const isSpan = idx === 6;
          return (
            <div key={idx} className={`p-3 rounded-2xl bg-slate-900/85 border border-slate-800 flex flex-col justify-between animate-slide-up stagger-${(idx % 4) + 1} ${isSpan ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{fld.name}</h4>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-300 font-bold px-1.5 py-0.2 rounded bg-cyan-950 border border-cyan-800">{fld.critical}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight mt-1">{fld.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Chain Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900/90 to-cyan-950/60 border border-teal-500/40 text-center shadow-xl animate-slide-up stagger-5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-0.5">
          THE GOLDEN CONVERSION CHAIN
        </span>
        <div className="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">
          {goldenRule}
        </div>
      </div>
    </div>
  );
};

export const Slide22ActivityEntry: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { pipeline, takeaway } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/40">
          PART 2 — DIGITAL TOOLS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 22 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Activity Entry Pipeline
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Every single on-ground activity must be logged with structured accountability:
      </p>

      {/* 6 Step Pipeline Detailed Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-4">
        {pipeline.map((item: any, idx: number) => (
          <div key={idx} className={`p-3.5 rounded-2xl bg-slate-900/85 border border-slate-800 flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}>
            <div>
              <span className="text-[10px] font-mono text-teal-400 font-bold block mb-1">STEP {item.step}</span>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{item.name}</h4>
              <p className="text-[11px] text-slate-300 leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Takeaway */}
      <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-teal-500/40 text-center text-xs sm:text-sm font-semibold text-teal-300 shadow-md animate-slide-up stagger-6">
        “{takeaway}”
      </div>
    </div>
  );
};
