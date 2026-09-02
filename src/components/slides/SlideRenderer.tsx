import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { CardReferenceData } from '../CardReferenceModal';
import { Slide1Cover } from './SlideCover';
import { Slide2Objectives, Slide3Transition, Slide4Responsibilities } from './SlideIntro';
import { Slide3SalesVsMarketing, Slide4ATLvsBTL } from './SlideFundamentals';
import { Slide4BTL, Slide5BTLProcess, Slide6BTLChecklist } from './SlideBTL';
import { Slide7Activation, Slide8ActivationPlanning, Slide9EngagementFunnel } from './SlideActivation';
import { Slide10FieldMarketing, Slide11ExploreNewAreas, Slide12LeadGenProcess, Slide13LeadQuality } from './SlideFieldMarketing';
import { Slide14MarketVisit, Slide15CompetitorTracking, Slide16MarketIntelReport } from './SlideMarketIntel';
import { Slide17WhyReporting, Slide18DailyReporting, Slide19WeeklyReporting } from './SlideReporting';
import { Slide20WebApp, Slide21LeadEntry, Slide22ActivityEntry } from './SlideWebApp';
import { Slide23KPIs, Slide24Evaluation } from './SlideKPI';
import { Slide25Collaboration } from './SlideCollaboration';
import { Slide26DailyCycle, Slide27SelfReview } from './SlideDailyModel';
import { Slide28First30Days } from './SlideFirst30Days';
import { Slide29DosDonts } from './SlideDosDonts';
import { Slide30Closing } from './SlideClosing';
import { Slide31Exercise } from './SlideExercise';

interface SlideRendererProps {
  slide: SlideContent;
  revealedCount?: number;
  onJumpSlide?: (index: number) => void;
  onOpenReference?: (data: CardReferenceData) => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ 
  slide, 
  revealedCount = 99, 
  onJumpSlide, 
  onOpenReference 
}) => {
  switch (slide.id) {
    case 1:
      return <Slide1Cover slide={slide} onJumpSlide={onJumpSlide} />;
    case 2:
      return (
        <Slide2Objectives 
          slide={slide} 
          revealedCount={revealedCount} 
          onJumpSlide={onJumpSlide} 
          onOpenReference={onOpenReference} 
        />
      );
    case 3:
      return (
        <Slide3SalesVsMarketing 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 4:
      return (
        <Slide4ATLvsBTL 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 5:
      return (
        <Slide3Transition 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 6:
      return (
        <Slide4Responsibilities 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 7:
      return (
        <Slide4BTL 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 8:
      return (
        <Slide5BTLProcess 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 9:
      return (
        <Slide6BTLChecklist 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 10:
      return (
        <Slide7Activation 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 11:
      return (
        <Slide8ActivationPlanning 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 12:
      return (
        <Slide9EngagementFunnel 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 13:
      return (
        <Slide10FieldMarketing 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 14:
      return (
        <Slide11ExploreNewAreas 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 15:
      return (
        <Slide12LeadGenProcess 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 16:
      return (
        <Slide13LeadQuality 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 17:
      return (
        <Slide14MarketVisit 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 18:
      return (
        <Slide15CompetitorTracking 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 19:
      return (
        <Slide16MarketIntelReport 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 20:
      return (
        <Slide17WhyReporting 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 21:
      return (
        <Slide18DailyReporting 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 22:
      return (
        <Slide19WeeklyReporting 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 23:
      return (
        <Slide20WebApp 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 24:
      return (
        <Slide21LeadEntry 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 25:
      return (
        <Slide22ActivityEntry 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 26:
      return (
        <Slide23KPIs 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 27:
      return (
        <Slide24Evaluation 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 28:
      return <Slide25Collaboration slide={slide} />;
    case 29:
      return (
        <Slide26DailyCycle 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 30:
      return (
        <Slide27SelfReview 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 31:
      return (
        <Slide28First30Days 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 32:
      return <Slide29DosDonts slide={slide} />;
    case 33:
      return (
        <Slide30Closing 
          slide={slide} 
          revealedCount={revealedCount} 
          onOpenReference={onOpenReference} 
        />
      );
    case 34:
      return <Slide31Exercise slide={slide} />;
    default:
      return <Slide1Cover slide={slide} onJumpSlide={onJumpSlide} />;
  }
};
