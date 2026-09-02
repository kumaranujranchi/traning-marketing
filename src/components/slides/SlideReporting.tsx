import React from 'react';
import { 
  BarChart3, 
  MapPin, 
  Store, 
  Users, 
  Camera, 
  Flame
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

const reportingIconMap: Record<string, any> = {
  MapPin,
  Store,
  Users,
  Camera
};

export const Slide17WhyReporting: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { reportingQuestions, goldenRule } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
          SECTION 05 — REPORTING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 17 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Why Reporting Matters?
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        Reporting ka purpose leadership ko ground realities aur ROI ke baare me yeh 7 dimensions batana hai:
      </p>

      {/* 7 Questions Detailed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-4">
        {reportingQuestions.map((item: any, idx: number) => (
          <div key={idx} className={`p-3 rounded-2xl bg-slate-900/85 border border-slate-800 flex flex-col justify-between animate-slide-up stagger-${(idx % 4) + 1}`}>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="p-1 rounded-md bg-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold">
                  DIMENSION 0{idx + 1}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                {item.q}
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Axiom Banner */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-cyan-500/15 to-blue-500/15 border border-indigo-500/40 flex items-center gap-3.5 shadow-xl animate-slide-up stagger-6">
        <div className="p-2.5 rounded-xl bg-indigo-400 text-slate-950 flex-shrink-0 shadow-md">
          <Flame className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block">
            CORE REPORTING AXIOM
          </span>
          <p className="text-xs sm:text-base font-bold text-white">
            “{goldenRule}”
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide18DailyReporting: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { categories } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
          SECTION 05 — REPORTING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 18 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Daily Reporting Structure
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-4 animate-slide-up stagger-2">
        Every evening submission must comprehensively cover these 4 functional pillars:
      </p>

      {/* 4 Pillars Detailed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {categories.map((cat: any, idx: number) => {
          const IconComp = reportingIconMap[cat.icon] || BarChart3;
          return (
            <div 
              key={idx}
              className={`p-4 sm:p-5 rounded-3xl bg-slate-900/85 border border-slate-800 hover:border-indigo-400 transition-all flex flex-col justify-between animate-slide-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-indigo-300 uppercase">{cat.tag}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">{cat.num}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2.5 font-display">
                  {cat.name}
                </h3>

                <div className="space-y-1.5">
                  {cat.items.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 pt-2 border-t border-slate-800 text-[10px] font-mono text-cyan-300 flex items-center justify-between">
                <span>Deliverable:</span>
                <span className="font-bold text-white">{cat.deliverable}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Slide19WeeklyReporting: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { matrix } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
          SECTION 05 — REPORTING
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 19 / 31</span>
      </div>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-1.5 animate-slide-up stagger-1">
        Weekly Reporting Matrix
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 mb-3.5 animate-slide-up stagger-2">
        The 8-row weekly tracking matrix for comprehensive leadership review
      </p>

      {/* High-density Matrix Table */}
      <div className="rounded-3xl bg-slate-900/85 border border-slate-800 overflow-hidden shadow-xl animate-slide-up stagger-3">
        <div className="grid grid-cols-12 bg-slate-800/90 px-4 py-2 text-xs font-mono font-bold text-slate-300 uppercase tracking-wider border-b border-slate-700">
          <div className="col-span-3">Area</div>
          <div className="col-span-5">What to Track</div>
          <div className="col-span-2 text-center">Benchmark</div>
          <div className="col-span-2 text-right">Review Metric</div>
        </div>

        <div className="divide-y divide-slate-800/60">
          {matrix.map((row: any, idx: number) => (
            <div key={idx} className="grid grid-cols-12 px-4 py-2 text-xs items-center hover:bg-slate-800/40 transition-colors">
              <div className="col-span-3 font-bold text-cyan-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                {row.area}
              </div>
              <div className="col-span-5 text-slate-200 font-medium">
                {row.track}
              </div>
              <div className="col-span-2 text-center text-slate-400 font-mono text-[11px]">
                {row.benchmark}
              </div>
              <div className="col-span-2 text-right">
                <span className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 font-mono text-[10px] text-slate-300">
                  {row.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
