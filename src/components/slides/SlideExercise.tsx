import React, { useState, useEffect } from 'react';
import { 
  Save, 
  RotateCcw, 
  Printer, 
  CheckCircle2, 
  Edit3,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SlideContent } from '../../data/slidesData';

const STORAGE_KEY = 'marketing_training_slide31_exercise';

export const Slide31Exercise: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const { fields, instructions } = slide.data;

  const [formData, setFormData] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [traineeName, setTraineeName] = useState(() => {
    return localStorage.getItem('trainee_name') || '';
  });

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      localStorage.setItem('trainee_name', traineeName);
    } catch {
      // ignore
    }
  }, [formData, traineeName]);

  const handleChange = (key: string, val: string) => {
    setFormData(prev => ({ ...prev, [key]: val }));
    setIsSaved(false);
  };

  const handleSaveAndCelebrate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your exercise answers?')) {
      setFormData({});
      localStorage.removeItem(STORAGE_KEY);
      setIsSaved(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-2 px-2 sm:px-6">
      <div className="flex items-center justify-between mb-1.5 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            WORKSHOP ASSIGNMENT
          </span>
          <span className="text-xs font-mono text-slate-400">SLIDE 31 / 31</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-rose-300 border border-slate-700 text-xs font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5 animate-slide-up stagger-1">
        <div>
          <h2 className="text-xl sm:text-3xl font-black font-display text-white">
            Design Your First Marketing Activity
          </h2>
          <p className="text-xs text-slate-400">
            {instructions}
          </p>
        </div>

        {/* Trainee Name Input */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 whitespace-nowrap">Trainee Name:</span>
          <input
            type="text"
            value={traineeName}
            onChange={(e) => setTraineeName(e.target.value)}
            placeholder="Your Full Name"
            className="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-cyan-300 font-semibold focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Interactive Form Canvas Grid */}
      <form onSubmit={handleSaveAndCelebrate} className="flex-1 overflow-y-auto max-h-[58vh] pr-1 space-y-2.5 animate-slide-up stagger-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {fields.map((fld: any) => (
            <div key={fld.key} className="p-3 rounded-2xl bg-slate-900/85 border border-slate-800 focus-within:border-emerald-500/60 transition-colors">
              <label className="text-xs font-bold text-slate-200 block mb-1 font-display flex items-center justify-between">
                <span>{fld.label}</span>
                <Edit3 className="w-3 h-3 text-slate-500" />
              </label>
              <textarea
                rows={2}
                value={formData[fld.key] || ''}
                onChange={(e) => handleChange(fld.key, e.target.value)}
                placeholder={fld.placeholder}
                className="w-full p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none font-sans"
              />
            </div>
          ))}
        </div>

        {/* Submit Bar */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            {isSaved ? (
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold font-mono">
                <CheckCircle2 className="w-4 h-4" /> Activity Plan Locked & Saved to Memory!
              </span>
            ) : (
              <span className="text-slate-500 text-[11px] font-mono">
                Auto-saved in browser memory
              </span>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <Save className="w-4 h-4 text-slate-950" />
            <span>Lock & Submit Activity Plan</span>
          </button>
        </div>
      </form>
    </div>
  );
};
