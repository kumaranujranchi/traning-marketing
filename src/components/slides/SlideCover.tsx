import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Users, 
  ArrowRight, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { SlideContent } from '../../data/slidesData';

interface SlideCoverProps {
  slide: SlideContent;
  onJumpSlide?: (index: number) => void;
}

export const Slide1Cover: React.FC<SlideCoverProps> = ({ slide, onJumpSlide }) => {
  const { trainingDate, venue, organizer, audience, keyThemes } = slide.data;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center h-full py-2 px-3 sm:px-6 text-center">
      {/* Top Tagline Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-950/40 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          VASTU VIHAR • EXCELLENCE IN MARKETING
        </span>
      </div>

      {/* Main Logo Emblem Display */}
      <div className="mb-3 p-3 rounded-2xl bg-slate-900/90 border-2 border-rose-500/40 shadow-2xl shadow-rose-950/40 flex items-center gap-3 backdrop-blur-xl">
        <div className="h-12 w-auto bg-white rounded-xl p-1 px-3 flex items-center justify-center shadow-md">
          <img 
            src="/logo.jpg" 
            alt="Vastu Vihar Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="text-left pr-2">
          <h3 className="text-base sm:text-lg font-black tracking-tight text-white font-display">
            VASTU VIHAR
          </h3>
          <p className="text-[11px] font-medium text-slate-300 -mt-0.5">
            A World-Class Township
          </p>
        </div>
      </div>

      {/* Huge Keynote Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight mb-2">
        Marketing Team Induction <br />
        <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
          & Role Training
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-base text-slate-300 max-w-2xl mb-5 leading-relaxed font-medium">
        {slide.subtitle}
      </p>

      {/* Official Metadata Glass Cards: Date, Venue, Organizer, Audience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-4xl mb-5">
        {/* Date Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-rose-950/40 border border-rose-500/40 shadow-xl flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 flex-shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">
              TRAINING DATE
            </span>
            <span className="text-xs sm:text-sm font-bold text-white block">
              {trainingDate}
            </span>
          </div>
        </div>

        {/* Venue Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-xl flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              VENUE
            </span>
            <span className="text-xs sm:text-sm font-bold text-white block">
              {venue}
            </span>
          </div>
        </div>

        {/* Host / Division Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-amber-950/40 border border-amber-500/40 shadow-xl flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 flex-shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
              ORGANIZED BY
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-white block leading-tight">
              {organizer}
            </span>
          </div>
        </div>

        {/* Audience Card */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-950/40 border border-emerald-500/40 shadow-xl flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
              PARTICIPANTS
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-white block leading-tight">
              Marketing Team & Inductees
            </span>
          </div>
        </div>
      </div>

      {/* Start Button & Quick Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => onJumpSlide && onJumpSlide(1)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-rose-950/50 hover:scale-105 active:scale-95 transition-all group"
        >
          <span>Begin Training Program</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-xs">
          {keyThemes.map((theme: any, idx: number) => (
            <button
              key={idx}
              type="button"
              onClick={() => onJumpSlide && onJumpSlide(idx + 4)} // Jumps to corresponding section
              className="px-2.5 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-750 hover:text-cyan-300 text-slate-300 text-[11px] font-medium transition-colors"
            >
              {theme.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
