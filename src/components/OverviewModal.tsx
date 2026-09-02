import React, { useState } from 'react';
import { X, Search, Grid, CheckCircle2, ChevronRight } from 'lucide-react';
import { SlideContent, SECTIONS } from '../data/slidesData';

interface OverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideContent[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentIndex,
  onSelectSlide
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('all');

  if (!isOpen) return null;

  const filteredSlides = slides.filter(slide => {
    const matchesSearch = 
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (slide.subtitle && slide.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      String(slide.slideNumber).includes(searchQuery);

    const matchesSection = selectedSection === 'all' || slide.sectionId === selectedSection;

    return matchesSearch && matchesSection;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fade-in-up">
      <div className="w-full max-w-6xl h-[85vh] flex flex-col rounded-3xl bg-slate-900/95 border border-slate-700/70 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Grid className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-display">Slide Overview</h2>
              <p className="text-xs text-slate-400">Jump directly to any of the {slides.length} training presentation slides</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <div className="relative w-48 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search slides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Filters */}
        <div className="px-6 py-3 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedSection === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-750'
            }`}
          >
            All Slides (31)
          </button>
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedSection === sec.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        <div className="flex-1 p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSlides.map((slide) => {
            const isCurrent = slides.indexOf(slide) === currentIndex;
            const index = slides.indexOf(slide);

            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  onClose();
                }}
                className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-br from-cyan-950/80 to-slate-900 border-2 border-cyan-400 shadow-xl shadow-cyan-900/30'
                    : 'bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-500'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      isCurrent ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-300'
                    }`}>
                      #{String(slide.slideNumber).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                      {slide.sectionNumber || 'CORE'}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {slide.title}
                  </h4>

                  {slide.subtitle && (
                    <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate max-w-[140px]">{slide.sectionTitle}</span>
                  {isCurrent ? (
                    <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Current
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
