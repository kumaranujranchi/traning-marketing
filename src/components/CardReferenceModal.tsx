import React from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles, Building2, ExternalLink } from 'lucide-react';

export interface CardReferenceData {
  title: string;
  category: string;
  tag?: string;
  description: string;
  deliverables?: string[];
  executionTips?: string[];
  qualityGate?: string;
  formula?: string;
  benchmark?: string;
}

interface CardReferenceModalProps {
  data: CardReferenceData | null;
  onClose: () => void;
}

export const CardReferenceModal: React.FC<CardReferenceModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-850/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-md">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {data.category || 'VASTU VIHAR SOP'}
                </span>
                {data.tag && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-rose-300 bg-rose-950/80 border border-rose-800/60">
                    {data.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-0.5">
                {data.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {/* Main Description */}
          <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700 text-slate-200 leading-relaxed">
            {data.description}
          </div>

          {/* Quality Benchmark / Formula Banner */}
          {data.formula && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/60 via-slate-900 to-cyan-950/60 border border-rose-500/40 text-center">
              <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-0.5">
                EXECUTION EQUATION
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white">
                {data.formula}
              </span>
            </div>
          )}

          {/* Deliverables / Checklist */}
          {data.deliverables && data.deliverables.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Key Deliverables & Action Checklist:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {data.deliverables.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-750 text-slate-200 text-xs flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Execution SOP Tips */}
          {data.executionTips && data.executionTips.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Field Best Practices & SOP Guidelines:
              </span>
              <div className="space-y-1.5 pt-1">
                {data.executionTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="font-mono text-amber-400 font-bold">0{i+1}.</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quality Gate / Benchmark */}
          {data.qualityGate && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span><strong>Quality Gate:</strong> {data.qualityGate}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 px-6 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Esc</kbd> or click outside to close</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all text-xs"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
