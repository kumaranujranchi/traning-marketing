import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { SlideContent } from '../../data/slidesData';

export const Slide30Closing: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { equation, heroQuote } = slide.data;

  useEffect(() => {
    // Subtle keynote celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-2 animate-slide-up">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
          CORE PHILOSOPHY & CLIMAX
        </span>
        <span className="text-xs font-mono text-slate-400">SLIDE 30 / 31</span>
      </div>

      {/* Hero Climax Quote */}
      <div className="my-2.5 sm:my-3 p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-rose-950/60 via-slate-900/90 to-cyan-950/60 border-2 border-rose-500/40 shadow-2xl relative overflow-hidden animate-slide-up stagger-1">
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 block mb-1.5">
          THE VASTU VIHAR MARKETING CREED
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white leading-tight">
          “Marketing is not just about activities.<br />
          <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
            Marketing is about creating measurable business opportunities.
          </span>”
        </h2>
      </div>

      {/* 6-Factor Equation Grid with Detailed Descriptions */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/85 border border-slate-800 shadow-xl animate-slide-up stagger-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
          THE 6-FACTOR FORMULA FOR HIGH PERFORMANCE
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3.5">
          {equation.factors.map((fac: any, idx: number) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 block font-bold">0{idx + 1}</span>
                <span className="text-xs font-bold text-white block mt-0.5">{fac.title}</span>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">{fac.desc}</span>
            </div>
          ))}
        </div>

        {/* Final Result */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-amber-500 to-cyan-500 text-slate-950 font-black text-center shadow-lg">
          <span className="text-[10px] uppercase font-mono tracking-widest block opacity-90 font-bold">EQUALS</span>
          <span className="text-sm sm:text-base font-display tracking-wide">{equation.result}</span>
        </div>
      </div>
    </div>
  );
};
