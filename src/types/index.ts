export type SectionId = 
  | 'part-0' 
  | 'part-1' 
  | 'btl' 
  | 'activation' 
  | 'field' 
  | 'market-intel' 
  | 'reporting' 
  | 'web-app' 
  | 'kpi' 
  | 'collaboration' 
  | 'daily-model' 
  | 'first-30-days' 
  | 'dos-donts' 
  | 'closing' 
  | 'exercise';

export interface SlideData {
  id: number;
  slideNumber: number;
  totalSlides: number;
  sectionId: SectionId;
  sectionNumber?: string;
  sectionTitle: string;
  title: string;
  subtitle?: string;
  badge?: string;
  speakerNotes: string;
}

export interface PracticalExerciseData {
  location: string;
  targetAudience: string;
  activity: string;
  reasonForLocation: string;
  expectedFootfall: string;
  expectedLeads: string;
  leadCollectionMethod: string;
  successMeasurement: string;
  reportingPlan: string;
  competitorObservation: string;
  traineeName?: string;
  date?: string;
}
