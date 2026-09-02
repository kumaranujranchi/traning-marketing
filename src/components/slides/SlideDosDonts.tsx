import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide29DosDonts: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const d = slide.data || {};
  const dos = d.dos || [];
  const donts = d.donts || [];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
          PART 11 — OPERATIONAL CODE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 27 / 29</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Marketing Team Do's & Don'ts
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-3.5">
        {slide.subtitle || 'Clear behavioral and operational boundaries for professional excellence'}
      </p>

      {/* Two Columns Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* DO Column */}
        <div className="p-4 rounded-3xl bg-slate-900/90 border-2 border-emerald-500/40 shadow-xl">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-emerald-500/20">
            <h3 className="text-sm sm:text-base font-bold text-emerald-300 flex items-center gap-2 font-display">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> WHAT TO DO (✅)
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
              Standard
            </span>
          </div>

          <div className="space-y-2">
            {dos.map((item: any, idx: number) => (
              <div 
                key={idx} 
                onClick={() => onOpenReference && onOpenReference({
                  title: item.title,
                  category: 'OPERATIONAL DO (STANDARD)',
                  description: item.desc || item.detail,
                  deliverables: [`Standard: ${item.desc || item.detail}`, 'Mandatory daily practice'],
                  executionTips: ['Follow this standard on every field marketing activity.']
                })}
                className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-750 flex flex-col hover:border-emerald-400/50 cursor-pointer transition-all"
              >
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-300 mt-0.5 ml-5 leading-tight">
                  {item.desc || item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DON'T Column */}
        <div className="p-4 rounded-3xl bg-slate-900/90 border-2 border-rose-500/40 shadow-xl">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-rose-500/20">
            <h3 className="text-sm sm:text-base font-bold text-rose-300 flex items-center gap-2 font-display">
              <XCircle className="w-4 h-4 text-rose-400" /> WHAT TO AVOID (❌)
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
              Strictly Prohibited
            </span>
          </div>

          <div className="space-y-2">
            {donts.map((item: any, idx: number) => (
              <div 
                key={idx} 
                onClick={() => onOpenReference && onOpenReference({
                  title: item.title,
                  category: 'OPERATIONAL DON’T (PROHIBITED)',
                  description: item.desc || item.detail,
                  deliverables: [`Strict Rule: ${item.desc || item.detail}`, 'Zero Tolerance Policy'],
                  executionTips: ['Never compromise on brand standards or data authenticity.']
                })}
                className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-750 flex flex-col hover:border-rose-400/50 cursor-pointer transition-all"
              >
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-300 mt-0.5 ml-5 leading-tight">
                  {item.desc || item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
