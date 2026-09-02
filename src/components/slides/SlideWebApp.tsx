import React from 'react';
import { 
  Smartphone, 
  Database, 
  MapPin, 
  Camera, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ListOrdered 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide20WebApp: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { modules } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 6 — DIGITAL APP
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 23 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Marketing Web / App System Overview
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 11 App Modules Grid with Step Reveal */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-4">
        {modules && modules.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.module,
                category: 'DIGITAL APP MODULE',
                tag: item.tag,
                description: item.desc,
                deliverables: [`Feature: ${item.module}`, `Specification: ${item.desc}`],
                executionTips: ['Keep GPS and camera permissions active at all times on your mobile device.']
              })}
              className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">MODULE 0{idx + 1}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.module}
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

export const Slide21LeadEntry: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { fields, rule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 6 — LEAD ENTRY
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 24 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        How to Enter a Lead in the System
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 7 Mandatory Fields with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {fields && fields.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.field,
                category: 'MANDATORY LEAD FIELD',
                description: item.desc,
                deliverables: [`Field: ${item.field}`, `Standard: ${item.desc}`],
                executionTips: ['Verify customer phone number before submitting form.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex items-start gap-2.5 ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <span className="font-mono text-xs font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-950 border border-rose-800 flex-shrink-0">
                0{idx + 1}
              </span>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {item.field}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {item.desc}
                </p>
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

export const Slide22ActivityEntry: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { fields, rule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 6 — ACTIVITY ENTRY
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 25 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        How to Enter an Activity in the System
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 6 Activity Log Fields with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {fields && fields.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.field,
                category: 'ACTIVITY LOG FIELD',
                description: item.desc,
                deliverables: [`Field: ${item.field}`, `Standard: ${item.desc}`],
                executionTips: ['Upload high-res timestamped photo proof directly from camera.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex items-start gap-2.5 ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 flex-shrink-0">
                0{idx + 1}
              </span>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {item.field}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {item.desc}
                </p>
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
