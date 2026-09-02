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

export const Slide4BTL: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { responsibility, activities, corePrinciple, workflow } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          SECTION 01 — BTL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 04 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        BTL & Offline Marketing Ecosystem
      </h2>
      <p className="text-xs sm:text-sm text-emerald-300 font-medium mb-4 animate-slide-up stagger-2">
        {responsibility}
      </p>

      {/* 8 Activities Detailed Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {activities.map((act: any, idx: number) => {
          const IconComp = iconMap[act.icon] || Target;
          return (
            <div 
              key={idx}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between group animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">ACT 0{idx + 1}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {act.name}
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {act.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Principle Workflow */}
      <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-950/50 via-slate-900/90 to-cyan-950/50 border border-emerald-500/30 shadow-xl animate-slide-up stagger-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            END-TO-END DISCIPLINE FLOW
          </span>
          <span className="text-xs text-slate-300 italic font-medium">
            {corePrinciple}
          </span>
        </div>

        {/* 5-Step Connected Flow with Descriptions */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
          {workflow.map((item: any, idx: number) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-800/80 border border-emerald-500/20 text-center">
              <span className="text-[10px] font-mono text-emerald-400 block font-bold">0{idx + 1}</span>
              <span className="text-xs sm:text-sm font-black text-white tracking-wide block">{item.step}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Slide5BTLProcess: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { stages } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          SECTION 01 — BTL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 05 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        How to Execute a BTL Activity?
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        A disciplined 3-stage lifecycle: Detailed before, during, and after action checkpoints
      </p>

      {/* 3 Stages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stages.map((stg: any, idx: number) => {
          const isCyan = stg.color === 'cyan';
          const isAmber = stg.color === 'amber';

          const borderClass = isCyan ? 'border-cyan-500/40' : isAmber ? 'border-amber-500/40' : 'border-emerald-500/40';
          const badgeClass = isCyan ? 'bg-cyan-500/20 text-cyan-300' : isAmber ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300';
          const dotColor = isCyan ? 'bg-cyan-400' : isAmber ? 'bg-amber-400' : 'bg-emerald-400';

          return (
            <div 
              key={idx}
              className={`p-4 sm:p-5 rounded-3xl bg-slate-900/85 border ${borderClass} shadow-xl flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold">STAGE 0{idx + 1}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {stg.stage}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${badgeClass}`}>
                    {stg.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  {stg.items.map((item: any, i: number) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-800/50 border border-slate-800/80 flex flex-col">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} flex-shrink-0`} />
                        <span>{item.main}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 ml-3 leading-tight">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{stg.items.length} Quality Gates</span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isCyan ? 'text-cyan-400' : isAmber ? 'text-amber-400' : 'text-emerald-400'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide6BTLChecklist: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { checkpoints, goldenRule } = slide.data;
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          SECTION 01 — BTL
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 06 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Activity Quality Checklist
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        Activity execute karte waqt yeh 9 execution checkpoints verify karein:
      </p>

      {/* Checklist Interactive Detailed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {checkpoints.map((chk: any, idx: number) => {
          const isChecked = !!checkedItems[chk.id];
          return (
            <div
              key={chk.id}
              onClick={() => toggleCheck(chk.id)}
              className={`p-3 rounded-2xl cursor-pointer transition-all flex items-start gap-3 border animate-slide-up stagger-${(idx % 4) + 1} ${
                isChecked
                  ? 'bg-emerald-950/50 border-emerald-500/60 text-white shadow-lg shadow-emerald-950/30'
                  : 'bg-slate-900/75 border-slate-800 text-slate-300 hover:border-slate-600'
              }`}
            >
              <div className="mt-0.5 text-emerald-400 flex-shrink-0">
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Square className="w-5 h-5 text-slate-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-mono text-slate-500">#{chk.id}</span>
                  <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                    {chk.tag}
                  </span>
                </div>
                <h5 className="text-xs sm:text-sm font-semibold leading-snug">
                  {chk.text}
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                  {chk.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Callout Banner */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-cyan-500/15 border border-amber-500/40 flex items-center gap-3.5 shadow-xl animate-slide-up stagger-5">
        <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 flex-shrink-0 shadow-md">
          <Flame className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
            CORE GOLDEN PRINCIPLE
          </span>
          <p className="text-xs sm:text-base font-bold text-white">
            “{goldenRule}”
          </p>
        </div>
      </div>
    </div>
  );
};
