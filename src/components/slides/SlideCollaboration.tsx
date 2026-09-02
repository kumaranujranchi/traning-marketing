import React from 'react';
import { 
  ArrowRight, 
  RefreshCw, 
  Users, 
  UserCheck, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide25Collaboration: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const d = slide.data || {};
  const touchpoints = d.touchpoints || [
    { num: '01', title: 'Immediate Lead Handover', rule: 'Within 2 hours', desc: 'Share verified contact, context notes, configuration preference, and hot/warm status immediately.' },
    { num: '02', title: 'Joint Territory Briefings', rule: 'Weekly alignment', desc: 'Marketing shares upcoming activation calendar; Sales shares inventory priorities and customer feedback.' },
    { num: '03', title: 'Site Visit Coordination', rule: 'Active follow-through', desc: 'Marketing alerts Sales when an activation prospect schedules an upcoming sample flat visit.' },
    { num: '04', title: 'Closed-Loop Quality Feedback', rule: 'Continuous improvement', desc: 'Sales provides structured feedback on lead relevance to help Marketing refine future catchments.' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/40">
          PART 8 — SYNERGY
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 23 / 29</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Sales + Marketing: One Unified Revenue Engine
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-3.5">
        {slide.subtitle || 'Building a seamless bridge between demand generation and deal conversion'}
      </p>

      {/* Dual Roles Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
        <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">MARKETING ROLE</span>
            <span className="text-xs sm:text-sm font-bold text-white">
              {d.marketingRole || 'Creates Demand & Delivers Qualified Prospects'}
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase block">SALES ROLE</span>
            <span className="text-xs sm:text-sm font-bold text-white">
              {d.salesRole || 'Nurtures Interest & Converts to Confirmed Bookings'}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Touchpoints Grid with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
        {touchpoints.map((tp: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: tp.title,
                category: 'SYNERGY PROTOCOL',
                tag: tp.rule,
                description: tp.desc,
                deliverables: [`Standard: ${tp.desc}`, `Rhythm: ${tp.rule}`],
                executionTips: ['Never hold back hot leads. Immediate speed to lead determines booking success.']
              })}
              className={`glass-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between border-slate-700/60 transition-all ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-sky-400">PROTOCOL 0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                    {tp.rule}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">{tp.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{tp.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Quote */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-500/40 text-center">
        <span className="text-xs sm:text-sm font-bold text-white">
          {d.goldenQuote || '“When Marketing and Sales operate in perfect alignment, revenue targets become inevitable milestones.”'}
        </span>
      </div>
    </div>
  );
};
