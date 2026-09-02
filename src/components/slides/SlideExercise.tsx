import React, { useState, useEffect } from 'react';
import { 
  Save, 
  RotateCcw, 
  Printer, 
  CheckCircle2, 
  Edit3,
  Building2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SlideContent } from '../../data/slidesData';

const STORAGE_KEY = 'marketing_training_slide29_exercise';

export const Slide31Exercise: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const d = slide.data || {};
  const fields = d.fields || [];
  const instructions = d.instructions || 'Each trainee must design their first marketing activity for Vastu Vihar townships using the 10 planning fields below.';

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
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            WORKSHOP ASSIGNMENT
          </span>
          <span className="text-xs font-mono text-slate-400">SLIDE 29 / 29</span>
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

      <h2 className="text-xl sm:text-3xl font-black font-display text-white mb-0.5">
        Design Your First Marketing Activity
      </h2>
      <p className="text-xs text-slate-300 mb-2">
        {instructions}
      </p>

      {/* Trainee Name Bar */}
      <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-750 flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 flex-1">
          <Edit3 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <input
            type="text"
            value={traineeName}
            onChange={(e) => setTraineeName(e.target.value)}
            placeholder="Enter Your Full Name & Territory..."
            className="bg-transparent text-xs sm:text-sm font-bold text-white placeholder:text-slate-500 outline-none w-full"
          />
        </div>
        {isSaved && (
          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" /> Saved
          </span>
        )}
      </div>

      {/* Form Fields Grid */}
      <form onSubmit={handleSaveAndCelebrate} className="flex-1 flex flex-col justify-between overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto max-h-[50vh] pr-1 py-1">
          {fields.map((f: any, idx: number) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col focus-within:border-cyan-500/60 transition-colors">
              <label className="text-[11px] font-mono font-bold text-cyan-300 mb-1">
                {f.label}
              </label>
              <textarea
                rows={2}
                value={formData[f.key] || ''}
                onChange={(e) => handleChange(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full bg-slate-950/60 border border-slate-800/80 rounded-lg p-1.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 resize-none font-sans"
              />
            </div>
          ))}
        </div>

        {/* Submit Bar */}
        <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-800">
          <span className="text-[10px] font-mono text-slate-400">
            Answers are auto-saved to your browser storage.
          </span>
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Save & Complete Assignment</span>
          </button>
        </div>
      </form>
    </div>
  );
};
