import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Search, 
  Radar, 
  FileCheck2, 
  TrendingUp, 
  Sparkles, 
  Flame, 
  Building2, 
  Clock, 
  Camera, 
  ShieldCheck, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const SlideFieldIntelligenceHub: React.FC<{
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const [activeTab, setActiveTab] = useState<'quality' | 'competitor' | 'reporting'>('quality');
  const d = slide.data || {};

  const handleCardClick = (title: string, category: string, description: string, deliverables: string[], tips: string[]) => {
    if (onOpenReference) {
      onOpenReference({
        title,
        category,
        description,
        deliverables,
        executionTips: tips,
        qualityGate: '100% ground compliance & verified same-day submission in Vastu Vihar App.'
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      {/* Top Tag & Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            PART 4 — UNIFIED FIELD INTELLIGENCE & GOVERNANCE
          </span>
          <span className="text-xs font-mono text-slate-400">SLIDE 16</span>
        </div>

        {/* 3 Interactive Sub-Pillars Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <button
            onClick={() => setActiveTab('quality')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'quality'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>1. Lead Quality</span>
          </button>
          <button
            onClick={() => setActiveTab('competitor')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'competitor'
                ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Radar className="w-3.5 h-3.5" />
            <span>2. Competitor Intel</span>
          </button>
          <button
            onClick={() => setActiveTab('reporting')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'reporting'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>3. Daily Reporting</span>
          </button>
        </div>
      </div>

      {/* Main Slide Header */}
      <h2 className="text-2xl sm:text-4xl font-black font-display text-white mb-1 leading-tight">
        Field Intelligence, Lead Quality & Reporting Hub
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-3.5">
        Mastering buyer intent verification, competitor field reconnaissance, and daily operational discipline in one unified system.
      </p>

      {/* Tab 1: Lead Quality Engine */}
      {activeTab === 'quality' && (
        <div className="space-y-3">
          {/* Quality Formula Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-cyan-950/70 border border-rose-500/40 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500 text-white font-bold">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">CORE QUALITY LAW</span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  Relevant Customer + Correct Information + Genuine Requirement = High-Conversion Lead
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
              Zero Junk Leads
            </span>
          </div>

          {/* 3 Quality Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                title: 'Relevant Customer',
                desc: 'Target demographic profile with stable income, local business, or salaried corporate background matching Vastu Vihar township pricing.',
                deliverable: 'Demographic Alignment',
                tag: 'Targeting'
              },
              {
                title: 'Verified 10-Digit Contact',
                desc: 'Accurate caller validation on the spot, active alternate contact, and verified residential locality or workplace.',
                deliverable: '100% Verified Phone',
                tag: 'Data Integrity'
              },
              {
                title: 'Clear Budget & Timeline',
                desc: 'Specific configuration preference (2BHK, 3BHK, Luxury Villa), confirmed budget slab, and purchase horizon within 0-6 months.',
                deliverable: 'Purchase Horizon < 6 Mo',
                tag: 'High Intent'
              }
            ].map((col, idx) => (
              <div 
                key={idx}
                onClick={() => handleCardClick(
                  col.title,
                  'LEAD QUALITY CRITERIA',
                  col.desc,
                  [`Standard: ${col.deliverable}`, 'Mandatory verified field before sales handover.'],
                  ['Validate buyer mobile number on the spot before logging.', 'Never submit uncontacted directory numbers.']
                )}
                className="glass-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between border-slate-700/60 cursor-pointer hover:border-cyan-400 transition-all card-revealed"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-rose-400">CRITERIA 0{idx + 1}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">{col.tag}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{col.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{col.desc}</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] font-mono text-cyan-400 font-bold">
                  ✓ {col.deliverable}
                </div>
              </div>
            ))}
          </div>

          {/* Sales Feedback Alignment */}
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <strong>Sales Closed-Loop Feedback:</strong> Track site visit scheduling rate & buyer disposition weekly.
            </span>
            <span className="font-mono text-[11px] text-cyan-300 font-bold">Target: &gt; 35% Site Visit Rate</span>
          </div>
        </div>
      )}

      {/* Tab 2: Competitor Reconnaissance & Radar */}
      {activeTab === 'competitor' && (
        <div className="space-y-3">
          {/* Radar Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { label: 'Who?', title: 'Rival Developer', desc: 'Project phase & developer credibility', tag: 'Identity' },
              { label: 'Where?', title: 'Catchment Node', desc: 'Exact locality, society & junction', tag: 'Location' },
              { label: 'Offer?', title: 'Pricing & Schemes', desc: 'Subvention, gold coins, discounts', tag: 'Commercials' },
              { label: 'Branding?', title: 'Message Hooks', desc: 'Brochure quality, hoarding pitch', tag: 'Creative' },
              { label: 'Format?', title: 'Activation Venue', desc: 'Canopy, mall expo, flyer insert', tag: 'Channel' },
              { label: 'Response?', title: 'Crowd Footfall', desc: 'Visitor volume & genuine interest', tag: 'Yield' }
            ].map((radar, idx) => (
              <div 
                key={idx}
                onClick={() => handleCardClick(
                  radar.title,
                  'COMPETITOR RADAR DIMENSION',
                  radar.desc,
                  [`Tracking Focus: ${radar.label}`, `Analysis: ${radar.desc}`],
                  ['Capture photo proofs of competitor banners and flyers.', 'Include pricing benchmarks in Saturday intel report.']
                )}
                className="p-3 rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-amber-400 cursor-pointer transition-all flex flex-col justify-between card-revealed"
              >
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">{radar.label}</span>
                  <h4 className="text-xs font-bold text-white mb-1">{radar.title}</h4>
                  <p className="text-[10px] text-slate-300 leading-tight">{radar.desc}</p>
                </div>
                <span className="mt-2 text-[9px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded text-center">
                  {radar.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Action Formula & Real-World Example */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-rose-950/40 border border-amber-500/30">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                OPERATIONAL FORMULA: OBSERVATION → INSIGHT → ACTION
              </span>
              <span className="text-[10px] font-mono text-cyan-300">Live Territory Example</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              “When Competitor X captures strong response in Green Park Society with 2BHK upgrades, Vastu Vihar immediately schedules targeted township upgrade kiosks in adjacent societies with superior amenities and price value.”
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Daily Reporting Deliverables & Accountability */}
      {activeTab === 'reporting' && (
        <div className="space-y-3">
          {/* 4 Daily Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                num: '01',
                name: 'Field Route Log',
                tag: 'Coverage',
                desc: 'Timestamped GPS routes, catchments covered, and footfall crowd observations.',
                deadline: '6:00 PM'
              },
              {
                num: '02',
                name: 'BTL Campaign Log',
                tag: 'Execution',
                desc: 'Canopy venue permission, promoter headcount, materials used, and crowd engagement.',
                deadline: '7:00 PM'
              },
              {
                num: '03',
                name: 'Lead Batch Sync',
                tag: 'Sales Pipeline',
                desc: 'Complete customer profiles logged into app with budget, unit preference, and hot/warm status.',
                deadline: '7:30 PM'
              },
              {
                num: '04',
                name: 'Photo Proof Bundle',
                tag: 'Audit Proof',
                desc: 'Wide-angle canopy photos, active customer consultations, and geo-tagged timestamps.',
                deadline: '8:00 PM Cutoff'
              }
            ].map((rep, idx) => (
              <div 
                key={idx}
                onClick={() => handleCardClick(
                  rep.name,
                  'DAILY REPORTING DELIVERABLE',
                  rep.desc,
                  [`Deadline: ${rep.deadline}`, `Classification: ${rep.tag}`, `Standard: ${rep.desc}`],
                  ['Submit directly in the Vastu Vihar Marketing App before 8:00 PM.', 'Ensure clear lighting on all setup photo proofs.']
                )}
                className="glass-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between border-slate-700/60 cursor-pointer hover:border-cyan-400 transition-all card-revealed"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-rose-400">#{rep.num}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">{rep.tag}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-1">{rep.name}</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed mb-2">{rep.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-amber-300 font-bold flex items-center justify-between">
                  <span>Cutoff:</span>
                  <span>{rep.deadline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Governance Law Banner */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-rose-500/20 to-cyan-500/20 border border-rose-500/40 text-center text-xs font-bold text-white">
            “If it is not recorded in the app with photo proofs, it cannot be measured or rewarded.”
          </div>
        </div>
      )}
    </div>
  );
};
