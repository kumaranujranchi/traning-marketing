import React from 'react';
import { 
  Users, 
  Target, 
  Radio, 
  Store, 
  Layers, 
  CheckCircle2, 
  Flame, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  HelpCircle,
  Building2
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide3SalesVsMarketing: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { coreComparison, goldenSynergy } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      {/* Top Section Tag */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          PART 0 — MARKETING FUNDAMENTALS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 03 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 leading-tight">
        Difference Between <span className="text-cyan-400">Sales</span> & <span className="text-rose-400">Marketing</span>
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* Comparison Matrix Table with Progressive Step Reveal */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 overflow-hidden shadow-xl mb-3.5">
        {/* Header Row */}
        <div className="grid grid-cols-12 bg-slate-850 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider border-b border-slate-700">
          <div className="col-span-3 text-slate-400">Dimension</div>
          <div className="col-span-4 text-rose-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            Marketing (Demand Creation)
          </div>
          <div className="col-span-5 text-cyan-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Sales (Revenue Conversion)
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-800/80">
          {coreComparison.map((row: any, idx: number) => {
            const isRevealed = idx < revealedCount;
            return (
              <div 
                key={idx} 
                onClick={() => onOpenReference && onOpenReference({
                  title: `${row.dimension}: Sales vs Marketing`,
                  category: 'COMPARATIVE MATRIX',
                  description: `Marketing: ${row.marketing} | Sales: ${row.sales}`,
                  deliverables: ['Clear division of role responsibilities', 'Zero friction handovers', 'Mutual accountability for revenue targets'],
                  executionTips: ['Marketing focuses on territory reach and high-intent prospect generation.', 'Sales focuses on unit walkthroughs, negotiation, and closing agreements.']
                })}
                className={`grid grid-cols-12 px-4 py-2.5 text-xs items-center cursor-pointer transition-all ${
                  isRevealed ? 'card-revealed hover:bg-slate-800/60' : 'card-hidden'
                }`}
              >
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  {row.dimension}
                </div>
                <div className="col-span-4 text-slate-200 pr-2 leading-relaxed">
                  {row.marketing}
                </div>
                <div className="col-span-5 text-slate-300 leading-relaxed font-medium">
                  {row.sales}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Golden Synergy Callout */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-500/20 via-slate-900/80 to-cyan-500/20 border border-rose-500/40 flex items-center gap-3 shadow-lg">
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-slate-950 flex-shrink-0 shadow-md">
          <Flame className="w-4 h-4 text-slate-950" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
            CORE REVENUE ENGINE SYNERGY
          </span>
          <p className="text-xs sm:text-base font-bold text-white">
            “{goldenSynergy}”
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide4ATLvsBTL: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { concepts, whyBTLForVastuVihar } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      {/* Top Section Tag */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          PART 0 — MARKETING FUNDAMENTALS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 04 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 leading-tight">
        What is <span className="text-rose-400">ATL</span> & <span className="text-cyan-400">BTL</span> in Marketing?
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-3.5">
        Understanding Above-The-Line, Below-The-Line, and Through-The-Line communication channels
      </p>

      {/* 3 Columns: ATL, BTL, TTL with Progressive Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-3.5">
        {concepts.map((item: any, idx: number) => {
          const isBTL = idx === 1;
          const isATL = idx === 0;
          const isRevealed = idx < revealedCount;

          return (
            <div
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.type,
                category: 'MARKETING CHANNEL',
                tag: item.tag,
                description: item.definition,
                deliverables: item.channels.map((c: string) => `Channel: ${c}`),
                executionTips: item.strengths,
                qualityGate: item.measurement
              })}
              className={`p-4 rounded-3xl flex flex-col justify-between transition-all cursor-pointer ${
                isBTL 
                  ? 'bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-900 border-2 border-cyan-400/60 shadow-xl shadow-cyan-950/40 scale-[1.02]' 
                  : 'bg-slate-900/85 border border-slate-800'
              } ${isRevealed ? 'card-revealed' : 'card-hidden'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-xl ${isBTL ? 'bg-cyan-500/20 text-cyan-400' : isATL ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {isBTL ? <Store className="w-4 h-4" /> : isATL ? <Radio className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-display">
                      {item.type}
                    </h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                    isBTL ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : isATL ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  {item.definition}
                </p>

                {/* Key Channels */}
                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">Primary Channels:</span>
                  {item.channels.map((ch: string, i: number) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-200">
                      <span className={`w-1.5 h-1.5 rounded-full ${isBTL ? 'bg-cyan-400' : isATL ? 'bg-rose-400' : 'bg-amber-400'}`} />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI & Measurement Tag */}
              <div className="pt-2.5 border-t border-slate-800 text-[10px] font-mono">
                <span className="text-slate-400 block mb-0.5">Measurement:</span>
                <span className={`font-bold ${isBTL ? 'text-cyan-300' : isATL ? 'text-rose-300' : 'text-amber-300'}`}>
                  {item.measurement}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why BTL Matters for Vastu Vihar */}
      <div className="p-3 rounded-2xl bg-slate-900/80 border border-cyan-500/40 text-center flex items-center justify-center gap-2">
        <Building2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <span className="text-xs text-cyan-200 font-medium">
          {whyBTLForVastuVihar}
        </span>
      </div>
    </div>
  );
};
