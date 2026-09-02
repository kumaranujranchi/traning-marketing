import React from 'react';
import { X, Command, Keyboard } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / ↓ / Space / PgDn', desc: 'Next Slide' },
    { key: '← / ↑ / PgUp', desc: 'Previous Slide' },
    { key: 'Home / End', desc: 'Jump to First / Last Slide' },
    { key: 'F', desc: 'Toggle Fullscreen Presentation' },
    { key: 'O / Tab', desc: 'Slide Overview Drawer' },
    { key: 'N', desc: 'Toggle Speaker / Trainer Notes' },
    { key: '?', desc: 'Show / Hide Keyboard Shortcuts' },
    { key: 'Esc', desc: 'Close any active overlay or exit fullscreen' },
    { key: 'Scroll Wheel', desc: 'Smooth throttled slide transitions' },
    { key: 'Touch Swipe', desc: 'Next / Previous on mobile & tablet' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fade-in-up">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900/95 border border-slate-700/70 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">Keynote Controls</h2>
              <p className="text-xs text-slate-400">Master the presentation with speed shortcuts</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 divide-y divide-slate-800/60 overflow-y-auto max-h-[60vh]">
          {shortcuts.map((item, idx) => (
            <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-300 font-medium">{item.desc}</span>
              <kbd className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-cyan-300 font-semibold text-xs shadow-inner">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
          <span>Operate seamlessly without touching mouse</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
