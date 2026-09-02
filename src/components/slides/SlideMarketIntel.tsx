import React from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  FileSpreadsheet, 
  ShieldAlert 
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';

export const Slide14MarketVisit: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { objectives } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 4 — MARKET VISITS
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 17 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Purpose of Regular Market Visits
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* Objectives with Step Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {objectives && objectives.map((obj: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: obj.title,
                category: 'MARKET VISIT OBJECTIVE',
                description: obj.desc,
                deliverables: obj.points,
                executionTips: ['Conduct weekly physical ground surveys across all major competitor corridors.']
              })}
              className={`p-4 sm:p-5 rounded-3xl bg-slate-900/85 border border-slate-750 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800">
                  <span className="font-mono text-xs font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-950 border border-rose-800">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {obj.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  {obj.desc}
                </p>
                <div className="space-y-1.5">
                  {obj.points && obj.points.map((pt: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide15CompetitorTracking: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { trackingAreas } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 4 — COMPETITOR TRACKING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 18 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Competitor Activity Tracking
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 6 Tracking Radar Cards with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {trackingAreas && trackingAreas.map((area: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: area.area,
                category: 'COMPETITOR TRACKING DIMENSION',
                description: area.desc,
                deliverables: [`Standard: ${area.desc}`, 'Include photo and pricing proof in weekly intel submission.'],
                executionTips: ['Monitor rival banners, promotional offers, and customer response trends.']
              })}
              className={`p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-cyan-400">DIMENSION 0{idx + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Radar
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {area.area}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide16MarketIntelReport: React.FC<{ 
  slide: SlideContent;
  revealedCount?: number;
  onOpenReference?: (data: CardReferenceData) => void;
}> = ({ slide, revealedCount = 99, onOpenReference }) => {
  const { components } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          PART 4 — MARKET INTELLIGENCE
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 19 / 34</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5">
        Market Intelligence Report Structure
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        {slide.subtitle}
      </p>

      {/* 4 Report Components with Step Reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
        {components && components.map((item: any, idx: number) => {
          const isRevealed = idx < revealedCount;
          return (
            <div 
              key={idx}
              onClick={() => onOpenReference && onOpenReference({
                title: item.title,
                category: 'REPORT COMPONENT',
                description: item.desc,
                deliverables: [`Standard: ${item.desc}`, 'Mandatory weekly submission'],
                executionTips: ['Back up insights with real numbers and verifiable facts.']
              })}
              className={`p-4 rounded-3xl bg-slate-900/85 border border-slate-700/60 transition-all flex flex-col justify-between ${
                isRevealed ? 'card-revealed cursor-pointer hover:border-cyan-400' : 'card-hidden'
              }`}
            >
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 mb-1 block">SECTION 0{idx + 1}</span>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
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
