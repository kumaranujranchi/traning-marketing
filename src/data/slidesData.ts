export interface SlideContent {
  id: number;
  slideNumber: number;
  sectionId: string;
  sectionNumber?: string;
  sectionTitle: string;
  title: string;
  subtitle?: string;
  badge?: string;
  speakerNotes: string;
  data: Record<string, any>;
}

export const getSlideMaxSteps = (slide: SlideContent): number => {
  if (!slide || !slide.data) return 1;
  const d = slide.data;
  if (d.objectives) return d.objectives.length;
  if (d.coreComparison) return d.coreComparison.length;
  if (d.concepts) return d.concepts.length;
  if (d.pillars) return d.pillars.length;
  if (d.activities) return d.activities.length;
  if (d.stages) return d.stages.length;
  if (d.checkpoints) return d.checkpoints.length;
  if (d.touchpoints) return d.touchpoints.length;
  if (d.questions) return d.questions.length;
  if (d.funnel) return d.funnel.length;
  if (d.responsibilities) return d.responsibilities.length;
  if (d.channels) return d.channels.length;
  if (d.steps) return d.steps.length;
  if (d.matrix) return d.matrix.length;
  if (d.modules) return d.modules.length;
  if (d.fields) return d.fields.length;
  if (d.pipeline) return d.pipeline.length;
  if (d.kpis) return d.kpis.length;
  if (d.dimensions) return d.dimensions.length;
  if (d.cycle) return d.cycle.length;
  if (d.weeks) return d.weeks.length;
  if (d.dos) return 2;
  if (d.equation && d.equation.factors) return d.equation.factors.length;
  return 1;
};

export const SLIDES: SlideContent[] = [
  // SLIDE 1 — OFFICIAL COVER PAGE
  {
    id: 1,
    slideNumber: 1,
    sectionId: 'part-0',
    sectionNumber: 'WELCOME',
    sectionTitle: 'KEYNOTE COVER',
    title: 'Marketing Team Induction & Role Training',
    subtitle: 'A Strategic Capability Building & Field Marketing Excellence Workshop for Vastu Vihar Townships',
    badge: 'OFFICIAL KEYNOTE',
    speakerNotes: 'Welcome all inductees and marketing officers to the annual Marketing Team Induction at Sambodhi Retreat, Bodhgaya. Set an inspiring, high-energy tone.',
    data: {
      trainingDate: '3rd Sep 2026',
      venue: 'Sambodhi Retreat, Bodhgaya',
      organizer: 'Vastu Vihar Corporate Marketing Division',
      audience: 'Marketing Officers, Territory Managers & New Inductees',
      keyThemes: [
        { label: 'Sales vs Marketing', code: '01' },
        { label: 'ATL vs BTL Concepts', code: '02' },
        { label: 'BTL & Activations', code: '03' },
        { label: 'Field Marketing', code: '04' },
        { label: 'Reporting & Performance', code: '05' }
      ]
    }
  },

  // SLIDE 2 — INDUCTION & 6 PILLARS ROADMAP
  {
    id: 2,
    slideNumber: 2,
    sectionId: 'part-0',
    sectionNumber: 'PART 0',
    sectionTitle: 'INDUCTION & ORIENTATION',
    title: 'Training Objectives & Core Pillars',
    subtitle: 'Comprehensive roadmap covering foundational concepts, field execution, digital systems, and evaluation standards',
    badge: 'PROGRAM BLUEPRINT',
    speakerNotes: 'Review the 6 core pillars that will be mastered during this training workshop.',
    data: {
      objectives: [
        {
          num: '01',
          title: 'Marketing Fundamentals',
          description: 'Master the core differences between Sales vs Marketing, and understand ATL, BTL, and TTL marketing concepts.',
          tag: 'Core Concepts',
          deliverable: 'Concept Clarity',
          targetSlide: 3
        },
        {
          num: '02',
          title: '5 Core Responsibilities',
          description: 'Master the 5 foundational pillars of BTL, Activations, Field Visits, Market Intelligence, and Reporting.',
          tag: 'Field Operations',
          deliverable: 'Pillar Mastery',
          targetSlide: 6
        },
        {
          num: '03',
          title: 'BTL & Activations',
          description: 'Execute high-impact society kiosks, canopy campaigns, corporate desks, and interactive customer events.',
          tag: 'Campaign Execution',
          deliverable: 'On-Ground Reach',
          targetSlide: 7
        },
        {
          num: '04',
          title: 'Quality Lead Generation',
          description: 'Identify genuine buyers, verify accurate requirements, and build high-intent pipelines for Sales.',
          tag: 'Revenue Engine',
          deliverable: 'High Conversion',
          targetSlide: 15
        },
        {
          num: '05',
          title: 'Digital App & Reporting',
          description: 'Maintain strict discipline in daily geo-tagged app logging, photo documentation, and KPI tracking.',
          tag: 'Digital Governance',
          deliverable: '100% App Sync',
          targetSlide: 23
        },
        {
          num: '06',
          title: 'Sales Synergy & 30-Day Plan',
          description: 'Establish continuous feedback loops with Sales and execute the 4-week roadmap to independent excellence.',
          tag: 'Synergy & Growth',
          deliverable: 'Autonomous Scale',
          targetSlide: 28
        }
      ]
    }
  },

  // SLIDE 3 — DIFFERENCE BETWEEN SALES AND MARKETING
  {
    id: 3,
    slideNumber: 3,
    sectionId: 'part-0',
    sectionNumber: 'PART 0',
    sectionTitle: 'MARKETING FUNDAMENTALS',
    title: 'Difference Between Sales & Marketing',
    subtitle: 'Understanding the distinct roles, objectives, and synergy between demand generation and revenue conversion',
    badge: 'CORE DISTINCTION',
    speakerNotes: 'Explain clearly that Marketing creates the pull and feeds qualified buyers into the pipeline, while Sales pushes deals to final closure and booking.',
    data: {
      coreComparison: [
        {
          dimension: 'Primary Objective',
          marketing: 'Build brand awareness, generate customer desire, and capture verified buyer leads.',
          sales: 'Convert qualified inquiries into confirmed property site visits, bookings, and revenue.'
        },
        {
          dimension: 'Target Focus',
          marketing: 'Broad target audience, residential societies, corporate hubs & territory catchments.',
          sales: 'Individual prospective buyers, specific active inquiries, and negotiating customers.'
        },
        {
          dimension: 'Operational Horizon',
          marketing: 'Medium to long-term pipeline building, brand preference, and continuous market reach.',
          sales: 'Short-term daily/monthly booking closures, immediate payment collections, and agreements.'
        },
        {
          dimension: 'Core Activities',
          marketing: 'BTL activations, canopies, society drives, competitor intel, market mapping & promotions.',
          sales: 'Sales presentations, sample flat walkthroughs, objection handling, negotiations & closing.'
        },
        {
          dimension: 'Primary KPI / Output',
          marketing: 'Cost per lead (CPL), verified high-intent leads volume, and brand share of voice.',
          sales: 'Booking conversion rate, total revenue collected, and units booked.'
        }
      ],
      goldenSynergy: 'Marketing pulls the customer in. Sales closes the deal and secures the booking.'
    }
  },

  // SLIDE 4 — WHAT IS ATL & BTL IN MARKETING TERMS
  {
    id: 4,
    slideNumber: 4,
    sectionId: 'part-0',
    sectionNumber: 'PART 0',
    sectionTitle: 'MARKETING FUNDAMENTALS',
    title: 'What is ATL & BTL in Marketing Terms?',
    subtitle: 'Understanding Above-The-Line (ATL), Below-The-Line (BTL), and Through-The-Line (TTL) marketing channels',
    badge: 'MARKETING TERMINOLOGY',
    speakerNotes: 'Walk through ATL mass branding versus BTL direct field activations. Highlight why BTL is the primary revenue driver for Vastu Vihar on-ground lead generation.',
    data: {
      concepts: [
        {
          type: 'ATL (Above The Line)',
          tag: 'Mass Awareness',
          color: 'rose',
          definition: 'Mass-media marketing targeted at a large, untargeted audience to build broad brand recognition and prestige.',
          channels: ['Newspaper Front Pages & Inserts', 'Highway Billboards & Hoardings', 'Radio & TV Commercials', 'Cinema Hall Advertising'],
          strengths: ['Massive brand recall across entire city', 'Establishes developer stature & credibility', 'Builds public prestige for township'],
          measurement: 'Measured via Reach, Impressions & Brand Recall (Indirect ROI)'
        },
        {
          type: 'BTL (Below The Line)',
          tag: 'Direct Action & Leads',
          color: 'cyan',
          definition: 'Direct, highly-targeted marketing focused on specific consumer groups to generate immediate interaction and verified leads.',
          channels: ['Society Canopies & Weekend Kiosks', 'Corporate Office Desk Activations', 'Direct Leaflet Handover & Stall Melas', 'Local Catchment Outreach & Expos'],
          strengths: ['One-on-one personal customer dialogue', 'Instant phone number & budget qualification', 'Highly cost-effective with measurable ROI'],
          measurement: 'Measured directly via Verified Leads & Cost Per Lead (Direct ROI)'
        },
        {
          type: 'TTL (Through The Line)',
          tag: '360° Integrated',
          color: 'amber',
          definition: 'Integrated strategy combining broad mass visibility with targeted field engagement for maximum conversion synergy.',
          channels: ['Geo-targeted Digital Ads + On-Ground Stalls', 'Hoardings with QR codes leading to local canopies', 'Event sponsorships with on-site booth lead capture'],
          strengths: ['Reinforces messaging at multiple touchpoints', 'Boosts trust when customer sees both hoarding and stall'],
          measurement: 'Measured via multi-touchpoint attribution & total footfall'
        }
      ],
      whyBTLForVastuVihar: 'For Vastu Vihar Townships, BTL is our primary powerhouse because real-estate decisions require trust, personal interaction, and qualified on-ground conversations.'
    }
  },

  // SLIDE 5 — FROM SALES TO MARKETING (MINDSET SHIFT)
  {
    id: 5,
    slideNumber: 5,
    sectionId: 'part-0',
    sectionNumber: 'PART 0',
    sectionTitle: 'MINDSET SHIFT',
    title: 'From Sales to Marketing',
    subtitle: 'Understanding the shift from closing assigned leads to proactively creating fresh market demand',
    badge: 'STRATEGIC TRANSITION',
    speakerNotes: 'Explain clearly: Sales operates on warm leads given to them. Marketing goes into the field, builds visibility, creates customer desire, and feeds Sales with high-intent buyers.',
    data: {
      earlierSales: [
        { title: 'Working on Assigned Leads', detail: 'Contacting and following up on inquiries received through campaigns' },
        { title: 'Customer Interaction & Queries', detail: 'Handling individual buyer questions and explaining specific flat features' },
        { title: 'Site Visits & Follow-up', detail: 'Organizing property visits and conducting walkthroughs in sample units' },
        { title: 'Deal Conversion & Closing', detail: 'Finalizing booking forms, documentation, and securing initial deposits' }
      ],
      nowMarketing: [
        { title: 'Identifying Market Opportunities', detail: 'Spotting high-income catchments, commercial corridors, and residential hubs' },
        { title: 'Creating High Brand Visibility', detail: 'Dominating prime locations with Vastu Vihar hoardings, standees, and canopies' },
        { title: 'Executing BTL & Activations', detail: 'Organizing society kiosks, corporate fairs, weekend melas, and promo drives' },
        { title: 'Generating High-Intent Leads', detail: 'Direct on-ground conversations to identify active prospective home buyers' },
        { title: 'Ensuring High Lead Quality', detail: 'Verifying buyer budgets, timelines, and configurations before sales handover' },
        { title: 'Tracking Market & Competitor Intel', detail: 'Monitoring competitor pricing, schemes, offers, and ground market response' }
      ],
      keyThought: 'Sales converts leads. Marketing creates and improves opportunities.'
    }
  },

  // SLIDE 6 — 5 CORE RESPONSIBILITIES
  {
    id: 6,
    slideNumber: 6,
    sectionId: 'part-1',
    sectionNumber: 'PART 1',
    sectionTitle: 'CORE PILLARS',
    title: 'Your 5 Core Responsibilities',
    subtitle: 'Your marketing role is structured across 5 strategic execution pillars',
    badge: 'PERFORMANCE BLUEPRINT',
    speakerNotes: 'These 5 pillars form the foundational blueprint of daily evaluation for every marketing professional.',
    data: {
      intro: 'Your daily performance and career progression will be measured across these 5 core areas:',
      pillars: [
        {
          num: '01',
          code: 'BTL',
          title: 'BTL & Offline Marketing',
          desc: 'Leaflet distribution, hoardings, society kiosks, local promotions & campaigns',
          details: 'Catchment selection, vendor coordination, collateral readiness & on-ground execution',
          kpi: 'Campaign Frequency & Reach',
          accent: 'emerald'
        },
        {
          num: '02',
          code: 'ACT',
          title: 'Marketing Activation',
          desc: 'High-visibility events, interactive stalls, customer touchpoint engagements',
          details: 'Gated societies, corporate complexes, exhibitions & festival stalls setup with branded assets',
          kpi: 'Footfall Engagement & Interaction',
          accent: 'violet'
        },
        {
          num: '03',
          code: 'FLD',
          title: 'Field Marketing & Lead Gen',
          desc: 'Targeted catchment exploration, customer interactions, capturing high-intent leads',
          details: 'Daily field market visits, understanding buyer requirements, capturing genuine home seeker details',
          kpi: 'High-Intent Verified Leads',
          accent: 'amber'
        },
        {
          num: '04',
          code: 'INT',
          title: 'Market & Competitor Activity',
          desc: 'Real-time field intelligence, competitor tracking, pricing & offer analysis',
          details: 'Local market rates, competitor brochures, schemes, payment plans & customer feedback observation',
          kpi: 'Actionable Field Intelligence',
          accent: 'rose'
        },
        {
          num: '05',
          code: 'REP',
          title: 'Reporting & Performance',
          desc: 'Disciplined app entry, timely daily reporting, data accuracy & conversion tracking',
          details: 'Same-day Marketing App lead sync, activity photo proofs, daily summary & weekly review',
          kpi: 'Timely & 100% Accurate Data',
          accent: 'cyan'
        }
      ]
    }
  },

  // 01 — BTL & OFFLINE MARKETING
  {
    id: 7,
    slideNumber: 7,
    sectionId: 'btl',
    sectionNumber: 'SECTION 01',
    sectionTitle: 'BTL & OFFLINE MARKETING',
    title: 'BTL & Offline Marketing Ecosystem',
    subtitle: 'Plan, execute, and monitor diverse offline marketing activities across assigned territories',
    badge: 'ACTIVITY PORTFOLIO',
    speakerNotes: 'Execution is only one part of the job. Planning, monitoring, measuring, and reporting make campaigns effective.',
    data: {
      responsibility: 'Plan and execute diverse BTL & Offline Marketing activities across designated catchments.',
      activities: [
        { name: 'Leaflet Distribution', icon: 'FileText', desc: 'Newspaper inserts & targeted catchment hand-delivery' },
        { name: 'Kiosk Activities', icon: 'Store', desc: 'Branded canopies & stalls in busy retail & commercial zones' },
        { name: 'Hoardings & Outdoor', icon: 'Image', desc: 'Strategic highway & main junction high-impact visibility' },
        { name: 'Local Branding', icon: 'Sparkles', desc: 'Auto branding, pole kiosks, banners & direction signages' },
        { name: 'Local Promotions', icon: 'Megaphone', desc: 'RWA announcements, festival sponsorships & local partnerships' },
        { name: 'Society Activities', icon: 'Building2', desc: 'Weekend engagement drives & family interactions in societies' },
        { name: 'Events & Expos', icon: 'Calendar', desc: 'Property expos, corporate campus fairs & community melas' },
        { name: 'Other Campaigns', icon: 'Target', desc: 'Co-branded merchant tie-ups & transit hub activations' }
      ],
      corePrinciple: 'Your job is NOT only to execute. End-to-end discipline is mandatory:',
      workflow: [
        { step: 'PLAN', desc: 'Budget & Catchment' },
        { step: 'EXECUTE', desc: 'On-Ground Setup' },
        { step: 'MONITOR', desc: 'Quality & Grooming' },
        { step: 'MEASURE', desc: 'Footfall & Leads' },
        { step: 'REPORT', desc: 'App Data & Photos' }
      ]
    }
  },
  {
    id: 8,
    slideNumber: 8,
    sectionId: 'btl',
    sectionNumber: 'SECTION 01',
    sectionTitle: 'BTL & OFFLINE MARKETING',
    title: 'How to Execute a BTL Activity?',
    subtitle: 'A disciplined 3-stage lifecycle for end-to-end on-ground success',
    badge: 'EXECUTION LIFECYCLE',
    speakerNotes: 'Walk through Before, During, and After stages. Highlight that skipping the prep stage causes execution failures.',
    data: {
      stages: [
        {
          id: 'before',
          stage: 'BEFORE ACTIVITY',
          subtitle: 'Preparation & Alignment',
          color: 'cyan',
          tag: 'Readiness Stage',
          items: [
            { main: 'Understand Approved Plan', detail: 'Verify campaign objectives, budget, target dates, and expected deliverables' },
            { main: 'Confirm Location & Permissions', detail: 'Obtain society RWA approvals, market spot licenses, and audit footfall potential' },
            { main: 'Identify Target Audience', detail: 'Profile local demographic, household income levels, and buyer preferences' },
            { main: 'Coordinate Vendors & Agencies', detail: 'Align canopy fabricators, sound equipment suppliers, and logistics schedules' },
            { main: 'Arrange & Brief Manpower', detail: 'Ensure promoter uniforms, grooming standards, and product pitch mastery' },
            { main: 'Inspect Marketing Collaterals', detail: 'Check brochure quantities, standees, rate cards, and promotional sample kits' }
          ]
        },
        {
          id: 'during',
          stage: 'DURING ACTIVITY',
          subtitle: 'On-Ground Quality Control',
          color: 'amber',
          tag: 'Live Execution',
          items: [
            { main: 'Adhere to Brand Guidelines', detail: 'Ensure official Vastu Vihar logo visibility, proper standee layout, and clean stall aesthetics' },
            { main: 'Monitor Execution Quality', detail: 'Keep the canopy clean, maintain energetic promoters, and manage crowd flow' },
            { main: 'Drive Customer Engagement', detail: 'Greet walk-ins warmly, deliver elevator pitches, and showcase township highlights' },
            { main: 'Identify High-Intent Prospects', detail: 'Capture active buyer contact numbers, budget range, and preferred configurations' },
            { main: 'Collect Proof Photographs', detail: 'Take wide-angle canopy photos, live customer interactions, and geo-tagged proof' }
          ]
        },
        {
          id: 'after',
          stage: 'AFTER ACTIVITY',
          subtitle: 'Data Sync & Review',
          color: 'emerald',
          tag: 'Closure & Sync',
          items: [
            { main: 'Sync Lead Data Immediately', detail: 'Log all captured customer information into the Marketing App on the same evening' },
            { main: 'Submit Activity Report', detail: 'Document total footfall, brochures distributed, operational timings, and costs' },
            { main: 'Document Issues & Feedback', detail: 'Record venue challenges, vendor delays, or recurring customer objections' },
            { main: 'Analyze Lead Generation ROI', detail: 'Calculate cost per lead and hot lead ratio to sharpen subsequent campaign plans' }
          ]
        }
      ]
    }
  },
  {
    id: 9,
    slideNumber: 9,
    sectionId: 'btl',
    sectionNumber: 'SECTION 01',
    sectionTitle: 'BTL & OFFLINE MARKETING',
    title: 'Activity Quality Checklist',
    subtitle: '9-Point quality audit for every single marketing activity',
    badge: 'QUALITY GOVERNANCE',
    speakerNotes: 'Read out the golden principle: Completing an activity is not enough. Executing it properly is what creates business value.',
    data: {
      checkpoints: [
        { id: 1, text: 'Approved location with high, unobstructed visibility', tag: 'Location', desc: 'Prominent placement in prime footfall corridor' },
        { id: 2, text: 'Pristine, undamaged Vastu Vihar brand assets', tag: 'Branding', desc: 'Logo clearly visible with modern clean standees' },
        { id: 3, text: 'Well-groomed, trained, and proactive promoters', tag: 'Staffing', desc: 'Formal attire with solid township knowledge' },
        { id: 4, text: 'Adequate stock of brochures, rate sheets & flyers', tag: 'Collateral', desc: 'Minimum 200+ collaterals readily available' },
        { id: 5, text: 'Strict adherence to company brand guidelines', tag: 'Compliance', desc: 'Official typography, approved pricing & messaging' },
        { id: 6, text: 'Polite, energetic, and active customer engagement', tag: 'Engagement', desc: 'Warm professional greeting with active listening' },
        { id: 7, text: 'Complete and verified lead data collection', tag: 'Lead Capture', desc: 'Full name, phone, budget, configuration & timeline' },
        { id: 8, text: 'High-resolution, geo-tagged activity photo proofs', tag: 'Documentation', desc: 'Timestamped visual proof of live stall setup' },
        { id: 9, text: 'Same-day reporting submitted in Marketing App', tag: 'Reporting', desc: 'Complete submission logged before 8:00 PM' }
      ],
      goldenRule: 'Completing an activity is not enough. Executing it properly is what creates business value.'
    }
  },

  // 02 — MARKETING ACTIVATION
  {
    id: 10,
    slideNumber: 10,
    sectionId: 'activation',
    sectionNumber: 'SECTION 02',
    sectionTitle: 'MARKETING ACTIVATION',
    title: 'What is Marketing Activation?',
    subtitle: 'Transforming passive awareness into active customer engagement and verified leads',
    badge: 'ACTIVATION POWER',
    speakerNotes: 'Explain the activation formula: Visibility + Engagement + Lead Opportunity. It is interactive, not just static hoarding.',
    data: {
      formula: [
        { 
          label: 'Brand Visibility', 
          icon: 'Eye', 
          desc: 'Prominent Presence', 
          detail: 'Vastu Vihar township scale and amenities capture instant attention in busy commercial and residential catchments.' 
        },
        { 
          label: 'Customer Engagement', 
          icon: 'MessageSquareHeart', 
          desc: 'Live Interaction', 
          detail: 'Two-way interactive dialogue, virtual tour previews, floor plan walkthroughs, and spot consultations.' 
        },
        { 
          label: 'Lead Opportunity', 
          icon: 'Target', 
          desc: 'Verified Buyer Intent', 
          detail: 'Capturing active, qualified buyers ready for site visits and sales consultations.' 
        }
      ],
      touchpoints: [
        { name: 'Strategic Locations', desc: 'High-footfall transit intersections & commercial nodes', icon: 'MapPin', tag: 'Urban Catchment' },
        { name: 'Targeted Events', desc: 'Property expos, trade fairs, festivals & community melas', icon: 'Calendar', tag: 'Event Stalls' },
        { name: 'Residential Societies', desc: 'Gated high-density apartment RWAs & townships for home upgrades', icon: 'Building', tag: 'Society Canopies' },
        { name: 'Commercial Markets', desc: 'High-street retail corridors & prominent shopping districts', icon: 'ShoppingBag', tag: 'Retail Kiosks' },
        { name: 'Institutions & Corporates', desc: 'IT parks, public sector offices, banking hubs & hospital zones', icon: 'Landmark', tag: 'Corporate Desks' },
        { name: 'Customer Touchpoints', desc: 'Transit stations, clubhouses, fitness clubs & leisure spots', icon: 'Users', tag: 'Transit Nodes' }
      ]
    }
  },
  {
    id: 11,
    slideNumber: 11,
    sectionId: 'activation',
    sectionNumber: 'SECTION 02',
    sectionTitle: 'MARKETING ACTIVATION',
    title: 'Activation Planning Canvas',
    subtitle: 'The 6-Question Strategic Framework for flawless activation design',
    badge: 'STRATEGIC BLUEPRINT',
    speakerNotes: 'Every activation must answer all 6 questions before field execution starts.',
    data: {
      questions: [
        { 
          q: 'Identify — Where?', 
          focus: 'Location / Market / Society / Event', 
          icon: 'MapPin', 
          color: 'cyan', 
          prompt: 'Catchment Selection',
          detail: 'Select catchments with dense target buyer concentration, high footfall, and easy accessibility.'
        },
        { 
          q: 'Who?', 
          focus: 'Target Customer Profile & Demographics', 
          icon: 'Users', 
          color: 'violet', 
          prompt: 'Audience Alignment',
          detail: 'Define age bracket, salaried/business income mix, purchasing power, and upgrade aspirations.'
        },
        { 
          q: 'What?', 
          focus: 'Activation Concept, Theme & Hook', 
          icon: 'Sparkles', 
          color: 'amber', 
          prompt: 'Creative Engagement',
          detail: 'Design an interactive hook: Virtual Reality township tour, spot consultation, or festive offer.'
        },
        { 
          q: 'How?', 
          focus: 'Manpower + Material + Branding Assets', 
          icon: 'Wrench', 
          color: 'emerald', 
          prompt: 'Operational Setup',
          detail: 'Organize branded canopy, standees, brochure inventory, tablets for lead entry, and trained promoters.'
        },
        { 
          q: 'Why?', 
          focus: 'Visibility / Engagement / Lead Generation', 
          icon: 'HelpCircle', 
          color: 'rose', 
          prompt: 'Strategic Rationale',
          detail: 'Establish clear objectives: New tower launch, weekend site visit drive, or regional brand dominance.'
        },
        { 
          q: 'Result?', 
          focus: 'Engagement + Leads + Business Opportunity', 
          icon: 'TrendingUp', 
          color: 'blue', 
          prompt: 'Measurable Impact',
          detail: 'Target minimum 30+ verified leads, 10+ site visit commitments, and actionable competitor insights.'
        }
      ]
    }
  },
  {
    id: 12,
    slideNumber: 12,
    sectionId: 'activation',
    sectionNumber: 'SECTION 02',
    sectionTitle: 'MARKETING ACTIVATION',
    title: 'Maximum Customer Engagement',
    subtitle: 'Guiding potential buyers through the 5 stages of on-ground conversion',
    badge: 'ENGAGEMENT FUNNEL',
    speakerNotes: 'Ensure trainees understand the journey from visual attraction to qualified sales handover.',
    data: {
      funnel: [
        {
          step: '01',
          stage: 'Visibility',
          question: 'Is the brand clearly visible from afar?',
          metric: 'Eyeballs & Footfall Attraction',
          detail: 'High-contrast Vastu Vihar standees and banners capture the attention of passing footfall.'
        },
        {
          step: '02',
          stage: 'Engagement',
          question: 'Are customers pausing to interact?',
          metric: 'Interactive Participation',
          detail: 'Visitors pause at the stall, collect brochures, and ask introductory project questions.'
        },
        {
          step: '03',
          stage: 'Interest',
          question: 'Is the buyer exploring project details?',
          metric: 'Brochure Review & Queries',
          detail: 'Detailed discussion on township amenities, floor plans, location advantages, and price brackets.'
        },
        {
          step: '04',
          stage: 'Lead',
          question: 'Was verified customer data recorded?',
          metric: 'Accurate Form Entry',
          detail: 'Capturing verified phone, email, budget, preferred unit type, and tentative site visit schedule.'
        },
        {
          step: '05',
          stage: 'Handover',
          question: 'Was the lead seamlessly transferred to Sales?',
          metric: 'Immediate CRM / Sales Sync',
          detail: 'Instant notification to assigned sales executive for high-speed same-day phone follow-up.'
        }
      ]
    }
  },

  // 03 — FIELD MARKETING & LEAD GENERATION
  {
    id: 13,
    slideNumber: 13,
    sectionId: 'field',
    sectionNumber: 'SECTION 03',
    sectionTitle: 'FIELD MARKETING & LEAD GEN',
    title: 'Field Marketing Essentials',
    subtitle: 'Proactive on-ground market presence and structured opportunity hunting',
    badge: 'GROUND REALITY',
    speakerNotes: 'Stress that marketing cannot be done sitting behind a desk. Field presence drives true opportunity.',
    data: {
      formula: 'Field Visit → Opportunity → Interaction → Lead → Sales Handover',
      responsibilities: [
        { title: 'Regular & Disciplined Field Visits', detail: 'Systematically cover 3-4 prime catchments within your assigned territory daily.' },
        { title: 'Potential Customer Identification', detail: 'Spot prospective buyers in commercial centers, business hubs, and residential pockets.' },
        { title: 'New Opportunity Discovery', detail: 'Identify untapped residential societies, emerging office complexes, and retail nodes.' },
        { title: 'Comprehensive Territory Coverage', detail: 'Ensure brand saturation so Vastu Vihar is established as the premier regional developer.' },
        { title: 'On-Ground Campaign Execution', detail: 'Smoothly run canopies, kiosk drives, leaflet distributions, and local micro-events.' },
        { title: 'Direct Customer Interaction', detail: 'Deliver confident, articulate presentations on Vastu Vihar township lifestyle and value.' },
        { title: 'High-Intent Lead Collection', detail: 'Accurately secure buyer credentials, budget criteria, and verified contact numbers.' }
      ]
    }
  },
  {
    id: 14,
    slideNumber: 14,
    sectionId: 'field',
    sectionNumber: 'SECTION 03',
    sectionTitle: 'FIELD MARKETING & LEAD GEN',
    title: 'Explore New Areas & Channels',
    subtitle: 'Breaking beyond existing routines to discover untapped market demand',
    badge: 'EXPANSION MINDSET',
    speakerNotes: 'Inspire trainees to think like growth explorers. Never limit activities to old, saturated spots.',
    data: {
      premise: 'Marketing teams must never rely solely on existing locations. Exponential growth comes from discovering fresh catchments.',
      channels: [
        { name: 'New Commercial Markets', desc: 'Unexplored retail belts and emerging shopping avenues', icon: 'ShoppingBag', tip: 'Target emerging business corridors' },
        { name: 'New Residential Societies', desc: 'Newly occupied apartment complexes & RWAs', icon: 'Building2', tip: 'Approach RWA committees for weekend drives' },
        { name: 'Institutions & Corporates', desc: 'Corporate office parks, educational campuses & hospitals', icon: 'Landmark', tip: 'Setup corporate desk during lunch hours' },
        { name: 'Lifestyle Touchpoints', desc: 'High-density sports clubs, gym chains & recreation centers', icon: 'Compass', tip: 'Engage high-earning health & lifestyle buyers' },
        { name: 'Local Gatherings', desc: 'Community festivals, cultural fairs & weekend markets', icon: 'Sparkles', tip: 'Leverage heavy weekend family footfall' },
        { name: 'Offline Channel Tie-ups', desc: 'Co-branding, merchant partnerships & transit spots', icon: 'Share2', tip: 'Partner with car showrooms & lifestyle brands' }
      ],
      keyQuestion: '“What new opportunity in this territory have we not explored yet?”'
    }
  },
  {
    id: 15,
    slideNumber: 15,
    sectionId: 'field',
    sectionNumber: 'SECTION 03',
    sectionTitle: 'FIELD MARKETING & LEAD GEN',
    title: 'Lead Generation Process',
    subtitle: 'The 9-Step end-to-end operational pipeline from catchment to quality improvement',
    badge: 'CORE PIPELINE',
    speakerNotes: 'Walk through all 9 steps in sequence. Emphasize that the cycle only closes with Sales Feedback and Quality Improvement.',
    data: {
      steps: [
        { num: '01', title: 'Identify Target Location', desc: 'High-potential catchment mapping & demographic verification' },
        { num: '02', title: 'Identify Potential Customer', desc: 'Target demographic profiling & active home seeker identification' },
        { num: '03', title: 'Customer Interaction', desc: 'Warm professional greeting, elevator pitch & project USP overview' },
        { num: '04', title: 'Understand Requirement', desc: 'Configuration (1/2/3 BHK, Villa), budget slab & purchase timeline' },
        { num: '05', title: 'Collect Lead', desc: 'Accurate full name, verified primary/alternate phone & locality' },
        { num: '06', title: 'Record Lead Properly', desc: 'Instant geo-tagged digital entry inside Vastu Vihar Marketing App' },
        { num: '07', title: 'Handover to Sales Team', desc: 'Direct assignment with customer background notes to sales team' },
        { num: '08', title: 'Sales Feedback', desc: 'Tracking customer responsiveness, call disposition & visit status' },
        { num: '09', title: 'Improve Lead Quality', desc: 'Feedback loop analysis to sharpen future catchment selection' }
      ]
    }
  },
  {
    id: 16,
    slideNumber: 16,
    sectionId: 'field',
    sectionNumber: 'SECTION 03',
    sectionTitle: 'FIELD MARKETING & LEAD GEN',
    title: 'Lead Quality vs Lead Quantity',
    subtitle: 'Why 10 high-intent leads beat 100 unqualified contacts every single time',
    badge: 'QUALITY MATTERS',
    speakerNotes: 'Explain that junk leads waste sales bandwidth and damage marketing credibility. Quality is the core benchmark.',
    data: {
      philosophy: 'The objective of marketing is not merely maximizing raw numbers. The true goal is delivering conversion-ready buyers to Sales.',
      equation: {
        factors: [
          { text: 'Relevant Customer', desc: 'Right demographic, stable income & active interest in township living' },
          { text: 'Correct Information', desc: 'Verified 10-digit mobile number, exact name & authentic address' },
          { text: 'Genuine Requirement', desc: 'Clear budget alignment, planned purchase horizon within 0-6 months' }
        ],
        result: 'QUALITY LEAD (HIGH CONVERSION POTENTIAL)'
      },
      salesFeedbackQuestions: [
        { q: 'Was the lead relevant?', sub: 'Did the customer match the project demographic and pricing profile?' },
        { q: 'Was the buyer genuinely interested?', sub: 'Did the customer answer positively and express purchase interest?' },
        { q: 'Did requirements match inventory?', sub: 'Were our available township units aligned with buyer preferences?' },
        { q: 'What is the conversion potential?', sub: 'Is the customer willing to schedule an upcoming site visit?' }
      ],
      closingNote: 'Use this feedback to refine catchment selection and improve future campaign yields.'
    }
  },

  // 04 — MARKET & COMPETITOR ACTIVITY
  {
    id: 17,
    slideNumber: 17,
    sectionId: 'market-intel',
    sectionNumber: 'SECTION 04',
    sectionTitle: 'MARKET & COMPETITOR ACTIVITY',
    title: 'The Real Purpose of Market Visits',
    subtitle: 'Dual-dimensional objective: Immediate Lead Generation + Long-term Market Intelligence',
    badge: 'MARKET VISION',
    speakerNotes: 'Teach team members to view every market visit through two lenses: direct leads and strategic intelligence.',
    data: {
      mainIdea: 'Field visits serve two critical purposes: generating immediate pipeline and gathering strategic market intelligence.',
      twoDimensions: [
        {
          title: 'Dimension A: Lead Generation (Immediate)',
          desc: 'Direct buyer conversations, canopy footfall capture, brochure distribution, and same-day sales handovers.',
          deliverables: ['Footfall Engagement', 'Lead Capture Sheet', 'Same-Day App Sync', 'Site Visit Commitments']
        },
        {
          title: 'Dimension B: Market Intelligence (Strategic)',
          desc: 'Analyzing catchment dynamics, competitor pricing schemes, customer sentiment, and emerging expansion corridors.',
          deliverables: ['Competitor Schemes', 'Local Price Benchmarks', 'Catchment Saturation', 'New Growth Corridors']
        }
      ],
      intelligencePoints: [
        { title: 'Customer Demographics', desc: 'Are buyers seeking 2BHKs, 3BHKs, or luxury Villas? What is the budget sensitivity?' },
        { title: 'Competitor Footprint', desc: 'Which competitor developers are active in the catchment and what is their visibility?' },
        { title: 'Promotional Cadence', desc: 'How frequently are competitors organizing society kiosks, canopies, or flyer inserts?' },
        { title: 'Pricing & Special Offers', desc: 'Are competitors offering festive discounts, subvention schemes, or gold coin bonuses?' },
        { title: 'On-Ground Activations', desc: 'Which societies or retail avenues are competitors booking, and what is the crowd response?' },
        { title: 'Outdoor Visibility Share', desc: 'Who dominates the primary arterial junctions and highway hoarding spots?' },
        { title: 'Emerging Opportunities', desc: 'Which newly developing township cluster represents a first-mover advantage for Vastu Vihar?' }
      ]
    }
  },
  {
    id: 18,
    slideNumber: 18,
    sectionId: 'market-intel',
    sectionNumber: 'SECTION 04',
    sectionTitle: 'MARKET & COMPETITOR ACTIVITY',
    title: 'Competitor Tracking Radar',
    subtitle: 'Structured field observation framework to decode competitor maneuvers',
    badge: 'FIELD RECON',
    speakerNotes: 'Show how field observations must be transformed into insights and concrete actions.',
    data: {
      questions: [
        { q: 'Who?', title: 'Competitor Developer & Project', desc: 'Identify developer reputation, project phase, and construction status.' },
        { q: 'Where?', title: 'Exact Operational Territory', desc: 'Record exact location, society name, or commercial junction.' },
        { q: 'Offer?', title: 'Active Pricing & Schemes', desc: 'Track payment plans, launch discounts, waiver offers, or festival schemes.' },
        { q: 'Branding?', title: 'Branding & Message Hooks', desc: 'Analyze brochure quality, standee messaging, and outdoor advertisements.' },
        { q: 'Location?', title: 'Activation Format & Venue', desc: 'Identify whether it is a canopy, newspaper insert, van branding, or mall expo.' },
        { q: 'Response?', title: 'Customer Footfall & Interest', desc: 'Evaluate visitor engagement level and genuine buyer receptivity.' }
      ],
      outputFormula: 'OBSERVATION → INSIGHT → ACTION'
    }
  },
  {
    id: 19,
    slideNumber: 19,
    sectionId: 'market-intel',
    sectionNumber: 'SECTION 04',
    sectionTitle: 'MARKET & COMPETITOR ACTIVITY',
    title: 'Market Intelligence Report',
    subtitle: 'Converting raw field observations into actionable business opportunities',
    badge: 'INTELLIGENCE ENGINE',
    speakerNotes: 'Review the live example. Point out how a simple competitor observation becomes a profitable marketing test for our team.',
    data: {
      law: 'Do not just bring raw numbers from the field. Bring back strategic insights that accelerate sales.',
      equation: 'DATA + OBSERVATION + INSIGHT + OPPORTUNITY',
      caseStudy: {
        title: 'Real-World Field Intelligence Case Study',
        quote: '“Competitor X is regularly conducting 2-day society activations in Sector 62 and receiving strong response. By identifying adjacent societies with similar demographics, Vastu Vihar can launch targeted campaigns with superior value.”',
        breakdown: [
          { phase: '1. Observation', text: 'Competitor X setup a 2-day canopy in Green Park Society, capturing 45 inquiries.' },
          { phase: '2. Insight', text: 'Over 70% of residents are actively looking to upgrade from older 2BHKs to modern 3BHKs/Villas.' },
          { phase: '3. Opportunity', text: 'Vastu Vihar township amenities, gated security, and open green spaces provide ideal appeal.' },
          { phase: '4. Action', text: 'Schedule targeted Vastu Vihar upgrade kiosks across 3 adjacent societies next weekend.' }
        ]
      }
    }
  },

  // 05 — REPORTING & PERFORMANCE TRACKING
  {
    id: 20,
    slideNumber: 20,
    sectionId: 'reporting',
    sectionNumber: 'SECTION 05',
    sectionTitle: 'REPORTING & PERFORMANCE',
    title: 'Why Reporting Matters?',
    subtitle: 'Transparent measurement as the foundation of credibility and continuous improvement',
    badge: 'CORE LAW',
    speakerNotes: 'Emphasize: If it is not recorded, it cannot be properly measured. Reporting proves value and guides budget allocation.',
    data: {
      reportingQuestions: [
        { q: 'What activity was executed?', detail: 'Canopy stall, society drive, leaflet distribution, or corporate desk' },
        { q: 'Where was it conducted?', detail: 'Exact geo-tagged venue, locality, and catchment characteristics' },
        { q: 'How many locations covered?', detail: 'Total territory coverage and planned vs actual route progress' },
        { q: 'How many leads generated?', detail: 'Total volume of fresh customer contacts captured during field hours' },
        { q: 'What was the lead quality?', detail: 'Budget alignment, genuine purchase intent, and site visit readiness' },
        { q: 'Which activity had highest ROI?', detail: 'Comparative effectiveness of different campaigns in generating hot leads' },
        { q: 'What improvements are needed?', detail: 'Refinements for collaterals, timing, pitch, or promoter staffing' }
      ],
      goldenRule: 'If it is not recorded, it cannot be properly measured.'
    }
  },
  {
    id: 21,
    slideNumber: 21,
    sectionId: 'reporting',
    sectionNumber: 'SECTION 05',
    sectionTitle: 'REPORTING & PERFORMANCE',
    title: 'Daily Reporting Structure',
    subtitle: 'The 4 mandatory pillars of daily field documentation',
    badge: 'DAILY CADENCE',
    speakerNotes: 'Every day ends with these 4 updates submitted on the app.',
    data: {
      categories: [
        {
          num: '01',
          name: 'Field Activity',
          tag: 'Coverage',
          items: ['Timestamped route and locations visited', 'Purpose of visit and target buyer segment', 'Market observations and crowd footfall trends'],
          deliverable: 'Geo-tagged Route Log'
        },
        {
          num: '02',
          name: 'BTL / Activation',
          tag: 'Campaign',
          items: ['Campaign type executed (Canopy/Kiosk/Flyer)', 'Venue permission status and setup quality', 'Promoter headcount and operational hours', 'Operational challenges and resolution'],
          deliverable: 'Campaign Execution Log'
        },
        {
          num: '03',
          name: 'Lead Generation',
          tag: 'Sales Pipeline',
          items: ['Total fresh prospect contacts logged', 'Lead source attribution and channel tagging', 'Buyer budget and unit configuration profile', 'Hot, Warm, and Cold intent classification'],
          deliverable: 'Verified Lead Batch'
        },
        {
          num: '04',
          name: 'Documentation',
          tag: 'Proof & Audit',
          items: ['High-resolution canopy photo proofs', 'Live customer interaction pictures', 'Vendor setup verification timestamps', 'Comprehensive end-of-day summary notes'],
          deliverable: 'Photo Proof Bundle'
        }
      ]
    }
  },
  {
    id: 22,
    slideNumber: 22,
    sectionId: 'reporting',
    sectionNumber: 'SECTION 05',
    sectionTitle: 'REPORTING & PERFORMANCE',
    title: 'Weekly Reporting Matrix',
    subtitle: 'Comprehensive 8-dimension scorecard for weekly management review',
    badge: 'WEEKLY AUDIT',
    speakerNotes: 'Explain how weekly reviews aggregate daily data into strategic insights.',
    data: {
      matrix: [
        { area: 'BTL Activities', track: 'Total campaigns planned vs executed', benchmark: 'Min 4-6 campaigns/wk', badge: 'Execution Discipline' },
        { area: 'Marketing Activation', track: 'High-footfall society stalls & kiosks conducted', benchmark: 'Min 2 weekend drives', badge: 'Catchment Presence' },
        { area: 'Field Penetration', track: 'Total territory catchments systematically visited', benchmark: '15-20 locations/wk', badge: 'Territory Coverage' },
        { area: 'Offline Leads', track: 'Total volume of verified contacts captured', benchmark: '30-50 fresh leads/wk', badge: 'Volume Target' },
        { area: 'Lead Quality Rate', track: 'Verified genuine buyer requirement percentage', benchmark: '> 75% verified rate', badge: 'Intent Filter' },
        { area: 'Cost per Lead (CPL)', track: 'Campaign budget vs leads generated efficiency', benchmark: 'Optimal budget ROI', badge: 'Cost Efficiency' },
        { area: 'Sales Conversion', track: 'Site visits & bookings originated from your leads', benchmark: 'Min 25% site visit rate', badge: 'Revenue Impact' },
        { area: 'Reporting Compliance', track: 'Same-day daily app entry & completeness rate', benchmark: '100% on-time submission', badge: 'Operational SOP' }
      ]
    }
  },

  // PART 2 — MARKETING WEB / APP TRAINING
  {
    id: 23,
    slideNumber: 23,
    sectionId: 'web-app',
    sectionNumber: 'PART 2',
    sectionTitle: 'DIGITAL TOOLS TRAINING',
    title: 'Marketing Web / App System',
    subtitle: 'Your essential daily operating cockpit for field entries, leads, and analytics',
    badge: 'DIGITAL COCKPIT',
    speakerNotes: 'Stress that system entry is part of daily work, not an afterthought or extra burden.',
    data: {
      objective: 'The Marketing Web/App is your primary operating instrument. It maintains an immutable record of your daily achievements and productivity.',
      modules: [
        { name: 'Login & User Profile', desc: 'Secure agent authentication and territory configuration' },
        { name: 'Real-time Dashboard', desc: 'Daily KPI counters, target progress, and alerts' },
        { name: 'Activity Entry Module', desc: 'Logging BTL format, execution hours, and vendor metrics' },
        { name: 'Location Geo-tagging', desc: 'Pinpoint field coordinates and route verification' },
        { name: 'Instant Lead Entry', desc: 'Capturing customer phone, name, budget, and intent tags' },
        { name: 'Lead Source Tagging', desc: 'Attribution to exact canopy, flyer, or event campaign' },
        { name: 'Lead Status & Funnel', desc: 'Tracking: Fresh → Contacted → Site Visit → Closed' },
        { name: 'Sales Handover Protocol', desc: 'Instant automated lead routing to sales executives' },
        { name: 'Daily Activity Reporting', desc: 'Evening summary submission, metrics, and notes' },
        { name: 'Performance Analytics', desc: 'Individual weekly scorecards, rankings, and ROI' },
        { name: 'Data Audit & Verification', desc: 'Phone number verification and photo proof storage' }
      ],
      coreMotto: 'System updates are an integral part of daily work, not an extra burden.'
    }
  },
  {
    id: 24,
    slideNumber: 24,
    sectionId: 'web-app',
    sectionNumber: 'PART 2',
    sectionTitle: 'DIGITAL TOOLS TRAINING',
    title: 'Lead Entry: What Must Be Correct?',
    subtitle: '7 Mandatory data fields to ensure zero lead wastage and lightning-fast follow-up',
    badge: 'DATA INTEGRITY',
    speakerNotes: 'Explain the golden chain: Correct Lead → Correct Data → Correct Handover → Better Follow-up.',
    data: {
      fields: [
        { name: 'Customer Details', desc: 'Full official name, occupation & profession (Salaried/Govt/Business)', icon: 'User', critical: 'Must be authentic' },
        { name: 'Contact Details', desc: 'Verified 10-digit primary mobile number + optional alternate contact', icon: 'Phone', critical: 'Verify on spot' },
        { name: 'Current Location', desc: 'Current residential locality & city to determine catchment proximity', icon: 'MapPin', critical: 'Catchment mapping' },
        { name: 'Property Requirement', desc: 'Unit preference (2BHK / 3BHK / Villa), budget slab & timeline', icon: 'Home', critical: 'Core buying criteria' },
        { name: 'Exact Lead Source', desc: 'Canopy Stall / Society Mela / Flyer Drop / Direct Field Walk-in', icon: 'Target', critical: 'Campaign attribution' },
        { name: 'Activity Reference ID', desc: 'Specific Campaign ID / Venue tag for campaign ROI tracking', icon: 'Hash', critical: 'ROI accounting' },
        { name: 'Relevant Remarks', desc: 'Customer preferences, preferred call window, loan requirements & urgency', icon: 'FileText', critical: 'Sales context' }
      ],
      goldenRule: 'Correct Lead → Correct Data → Correct Handover → Better Follow-up'
    }
  },
  {
    id: 25,
    slideNumber: 25,
    sectionId: 'web-app',
    sectionNumber: 'PART 2',
    sectionTitle: 'DIGITAL TOOLS TRAINING',
    title: 'Activity Entry Pipeline',
    subtitle: 'Tracking every marketing initiative from concept to verified performance impact',
    badge: 'DATA PIPELINE',
    speakerNotes: 'This structured data helps management determine which activities deliver the highest ROI.',
    data: {
      pipeline: [
        { step: '01', name: 'Activity Type', desc: 'Canopy / Society Kiosk / Flyer Insert / Event Stall / Hoarding' },
        { step: '02', name: 'Location & Venue', desc: 'Exact geo-tagged address, society name, or commercial junction' },
        { step: '03', name: 'Date & Time Window', desc: 'Deployment time, peak footfall hours, and conclusion timestamp' },
        { step: '04', name: 'Execution Details', desc: 'Promoter headcount, collaterals utilized, and photo proofs' },
        { step: '05', name: 'Leads Generated', desc: 'Total fresh contacts logged, hot prospects count, and intent ratio' },
        { step: '06', name: 'Performance Analytics', desc: 'Cost per lead calculation and comparative campaign ROI ranking' }
      ],
      takeaway: 'Structured data capture reveals exactly which activities and locations generate genuine buyers.'
    }
  },

  // PART 3 — KPI & PERFORMANCE
  {
    id: 26,
    slideNumber: 26,
    sectionId: 'kpi',
    sectionNumber: 'PART 3',
    sectionTitle: 'KPI & PERFORMANCE',
    title: 'Your 8 Core KPIs',
    subtitle: 'Performance benchmarks aligned with JD expectations',
    badge: 'METRICS OF SUCCESS',
    speakerNotes: 'Go through each KPI clearly. Ensure trainees understand both volume metrics and efficiency/conversion metrics.',
    data: {
      kpis: [
        { num: '01', title: 'BTL Activities Executed', desc: 'Number of approved offline marketing activations successfully completed on-ground.', metric: 'Execution Volume' },
        { num: '02', title: 'Marketing Activations Conducted', desc: 'High-footfall society stalls, retail kiosks, expos & institutional corporate desks.', metric: 'Stall Cadence' },
        { num: '03', title: 'Field Visits & Locations Covered', desc: 'Target catchments systematically mapped and visited during territory field hours.', metric: 'Territory Coverage' },
        { num: '04', title: 'Offline Leads Generated', desc: 'Total volume of fresh prospective buyer contacts captured through field channels.', metric: 'Lead Volume' },
        { num: '05', title: 'Lead Quality & Authenticity', desc: 'Percentage of leads with genuine intent, verified numbers & budget matching.', metric: 'Quality Percentage' },
        { num: '06', title: 'Cost per Lead (CPL) Efficiency', desc: 'Smart management of campaign budgets to achieve maximum leads at optimal cost.', metric: 'ROI & Cost Control' },
        { num: '07', title: 'Sales Conversion Contribution', desc: 'Resulting site visits, customer walk-ins & confirmed township unit bookings.', metric: 'Revenue Realization' },
        { num: '08', title: 'Timely Execution & Reporting', desc: 'Zero delays in daily evening app logging, proof submissions & weekly scorecards.', metric: 'Process Discipline' }
      ]
    }
  },
  {
    id: 27,
    slideNumber: 27,
    sectionId: 'kpi',
    sectionNumber: 'PART 3',
    sectionTitle: 'KPI & PERFORMANCE',
    title: 'How Performance Will Be Evaluated',
    subtitle: 'The 5-Dimensional Balanced Performance Scorecard',
    badge: 'EVALUATION SCORECARD',
    speakerNotes: 'Help team members understand that performance is evaluated in a balanced manner across 5 pillars.',
    data: {
      dimensions: [
        {
          title: 'QUANTITY',
          focus: 'Volume & Coverage',
          question: 'How many activities were executed? How many field visits made? How many locations covered? How many total leads generated?',
          evaluates: 'On-ground activity cadence & territory saturation'
        },
        {
          title: 'QUALITY',
          focus: 'Intent & Accuracy',
          question: 'What is the authenticity of customer data? Are buyers financially qualified? How many agreed to site visits?',
          evaluates: 'Lead relevance, verification & purchasing capacity'
        },
        {
          title: 'EFFICIENCY',
          focus: 'Cost & Resource ROI',
          question: 'What was the cost per lead? How effectively were collaterals, promoters, and campaign budgets utilized?',
          evaluates: 'Cost per lead & resource optimization'
        },
        {
          title: 'BUSINESS IMPACT',
          focus: 'Revenue Generation',
          question: 'How many buyer site visits materialized? How many unit bookings were closed by Sales from marketing leads?',
          evaluates: 'Direct contribution towards township sales'
        },
        {
          title: 'DISCIPLINE',
          focus: 'SOP & Governance',
          question: 'Were campaigns executed on schedule? Was daily app reporting completed on time? Were brand guidelines followed?',
          evaluates: 'Punctuality, reporting compliance & brand integrity'
        }
      ]
    }
  },

  // PART 4 — SALES + MARKETING COLLABORATION
  {
    id: 28,
    slideNumber: 28,
    sectionId: 'collaboration',
    sectionNumber: 'PART 4',
    sectionTitle: 'SYNERGY ENGINE',
    title: 'Marketing & Sales Must Work Together',
    subtitle: 'Creating a seamless revenue engine through continuous bi-directional feedback',
    badge: 'UNIFIED ENGINE',
    speakerNotes: 'Illustrate how Marketing and Sales are two sides of the same revenue coin. Constant communication is vital.',
    data: {
      marketingFlow: {
        title: 'MARKETING ENGINE',
        tag: 'Demand Generation',
        steps: [
          { name: 'Market Intelligence', desc: 'Identify prime catchments & prospective buyer segments' },
          { name: 'Activity Execution', desc: 'Deploy high-impact canopies, hoardings & society drives' },
          { name: 'Lead Capture & Sync', desc: 'Secure verified intent details & handover to Sales team' }
        ]
      },
      salesFlow: {
        title: 'SALES ENGINE',
        tag: 'Revenue Conversion',
        steps: [
          { name: 'Immediate Follow-up', desc: 'Call buyer within 15-30 mins of lead capture' },
          { name: 'Site Visit & Walkthrough', desc: 'Host customer at Vastu Vihar township model flat' },
          { name: 'Deal Closure & Booking', desc: 'Finalize unit selection, financing & agreement' }
        ]
      },
      loopFormula: 'Lead Quality → Sales Feedback → Marketing Improvement',
      tagline: 'This is a continuous, self-improving revenue loop.'
    }
  },

  // PART 5 — DAILY WORKING MODEL
  {
    id: 29,
    slideNumber: 29,
    sectionId: 'daily-model',
    sectionNumber: 'PART 5',
    sectionTitle: 'OPERATING SYSTEM',
    title: 'Your Daily Operating Cycle',
    subtitle: 'The 9-Stage disciplined daily rhythm for consistent peak performance',
    badge: 'DAILY OPERATING LOOP',
    speakerNotes: 'Walk through the circular loop: Plan, Visit, Execute, Capture, Update, Handover, Report, Analyse, Next Day Plan.',
    data: {
      cycle: [
        { num: '01', name: 'PLAN', desc: 'Morning itinerary review, route alignment & collateral kit check' },
        { num: '02', name: 'FIELD VISIT', desc: 'Reach target catchment on time, survey footfall & position canopy' },
        { num: '03', name: 'ACTIVITY / ACTIVATION', desc: 'Execute on-ground engagement, flyer distribution & live pitches' },
        { num: '04', name: 'LEAD GENERATION', desc: 'Engage interested buyers, qualify budget & capture contact data' },
        { num: '05', name: 'DATA UPDATE', desc: 'Instant geo-tagged data logging inside Vastu Vihar Marketing App' },
        { num: '06', name: 'SALES HANDOVER', desc: 'Immediate handover & background briefing to assigned sales rep' },
        { num: '07', name: 'REPORTING', desc: 'Submit evening daily summary with geotagged photo proofs' },
        { num: '08', name: 'ANALYSIS', desc: 'Evaluate daily hit rate, lead quality & competitor observations' },
        { num: '09', name: 'NEXT DAY PLAN', desc: 'Finalize tomorrow’s target catchment, venue permissions & goals' }
      ]
    }
  },
  {
    id: 30,
    slideNumber: 30,
    sectionId: 'daily-model',
    sectionNumber: 'PART 5',
    sectionTitle: 'OPERATING SYSTEM',
    title: 'Daily Self-Review Checklist',
    subtitle: '7 Reflective accountability questions every team member must answer each evening',
    badge: 'PERSONAL ACCOUNTABILITY',
    speakerNotes: 'Encourage team members to make this 7-question self-audit an automatic evening habit.',
    data: {
      questions: [
        { q: 'How many locations did I cover today?', tip: 'Target: Minimum 3-4 distinct catchments visited' },
        { q: 'What specific activity did I execute?', tip: 'Canopy, society activation, leaflet distribution or corporate desk' },
        { q: 'How many fresh leads were generated?', tip: 'Target: Meet daily quota of high-intent customer contacts' },
        { q: 'What was the quality of generated leads?', tip: 'Verify authentic phone numbers, budget match & buying intent' },
        { q: 'What new insight did I learn from the market?', tip: 'Customer sentiment, preferred configurations & pricing feedback' },
        { q: 'What competitor information was uncovered?', tip: 'New schemes, hoarding placements & ongoing promotions' },
        { q: 'What will I improve tomorrow?', tip: 'Specific strategy adjustment for higher conversion tomorrow' }
      ]
    }
  },

  // FIRST 30 DAYS
  {
    id: 31,
    slideNumber: 31,
    sectionId: 'first-30-days',
    sectionNumber: 'ONBOARDING ROADMAP',
    sectionTitle: 'FIRST 30 DAYS',
    title: 'First 30 Days Expectations',
    subtitle: 'Your structured 4-week journey from induction to autonomous high performance',
    badge: '30-DAY MILESTONES',
    speakerNotes: 'Set clear expectations for week-by-week progression: Understand → Explore → Execute → Analyse.',
    data: {
      weeks: [
        {
          week: 'WEEK 1',
          theme: 'UNDERSTAND',
          focus: 'Foundational Mastery',
          color: 'cyan',
          items: [
            { title: 'Job Description & Scope', desc: 'Clear understanding of 5 core responsibilities and daily deliverable standards' },
            { title: 'Brand Guidelines & Values', desc: 'Vastu Vihar legacy, township vision, USPs, and brand ethics' },
            { title: 'Project Portfolio & Layout', desc: 'Master plans, unit configurations (1/2/3 BHK & Villas), pricing, and amenities' },
            { title: 'App & Tools Mastery', desc: 'Marketing App lead logging, activity check-ins, and photo upload workflows' }
          ]
        },
        {
          week: 'WEEK 2',
          theme: 'EXPLORE',
          focus: 'Territory Reconnaissance',
          color: 'violet',
          items: [
            { title: 'Catchment Mapping', desc: 'Map top 10 high-potential residential societies and commercial centers' },
            { title: 'Competitor Reconnaissance', desc: 'Track local developer campaigns, schemes, hoardings, and pricing trends' },
            { title: 'Customer Demographics', desc: 'Analyze local household income levels, buying habits, and upgrade patterns' },
            { title: 'Permission Framework', desc: 'Establish liaison with society RWAs and market association committees' }
          ]
        },
        {
          week: 'WEEK 3',
          theme: 'EXECUTE',
          focus: 'Live Field Execution',
          color: 'amber',
          items: [
            { title: 'BTL Campaign Launch', desc: 'Deploy targeted canopies, society kiosks, and flyer drops independently' },
            { title: 'Active Lead Capture', desc: 'Generate daily verified high-intent customer leads through direct engagement' },
            { title: 'Real-time App Sync', desc: 'Maintain same-day digital data entry and execute sales handover protocols' },
            { title: 'Quality Audits', desc: 'Ensure brand standee compliance, promoter grooming, and photo submissions' }
          ]
        },
        {
          week: 'WEEK 4',
          theme: 'ANALYSE',
          focus: 'Optimization & Scale',
          color: 'emerald',
          items: [
            { title: 'Performance Audit', desc: 'Evaluate total leads, cost per lead, and sales conversion contribution' },
            { title: 'Feedback Loop Review', desc: 'Refine catchment strategies based on Sales team disposition reviews' },
            { title: 'Cost Optimization', desc: 'Identify highest ROI channels and schedule the upcoming monthly calendar' },
            { title: 'Autonomous Excellence', desc: 'Operate as an autonomous field leader consistently exceeding targets' }
          ]
        }
      ]
    }
  },

  // DO'S & DON'TS
  {
    id: 32,
    slideNumber: 32,
    sectionId: 'dos-donts',
    sectionNumber: 'CODE OF EXCELLENCE',
    sectionTitle: "DO'S & DON'TS",
    title: "Marketing Team Do's & Don'ts",
    subtitle: 'Guiding principles to maintain professional standards and brand reputation',
    badge: 'OPERATIONAL INTEGRITY',
    speakerNotes: 'Go through Do\'s and Don\'ts. Emphasize that fake leads or missed reporting harm the entire company.',
    data: {
      dos: [
        { title: 'Plan Thoroughly Before Execution', detail: 'Prepare catchment analysis, permissions, manpower, and collateral kits in advance.' },
        { title: 'Follow Approved Marketing Plans', detail: 'Strictly adhere to management-approved schedules, routes, and budget SOPs.' },
        { title: 'Maintain Strict Brand Standards', detail: 'Ensure clean Vastu Vihar standees, pristine canopy setup, and formal grooming.' },
        { title: 'Coordinate Proactively with Vendors', detail: 'Maintain reliable communication with fabricators, printers, and logistics partners.' },
        { title: 'Continuously Explore New Pockets', detail: 'Regularly map emerging residential societies, corporate hubs, and retail centers.' },
        { title: 'Maintain 100% Accurate Lead Data', detail: 'Log verified 10-digit mobile numbers and authentic buyer requirements on the spot.' },
        { title: 'Embrace Sales Feedback Constructively', detail: 'Review sales disposition calls to continuously sharpen lead quality.' },
        { title: 'Submit Reports Punctually', detail: 'Complete daily app logging and photo proof uploads before evening deadlines.' },
        { title: 'Share Actionable Market Insights', detail: 'Communicate competitor schemes and ground customer demand trends to leadership.' }
      ],
      donts: [
        { title: 'Do Not Execute Without Approvals', detail: 'Never deploy on-ground stalls or campaigns without approved plans and permissions.' },
        { title: 'Do Not Compromise on Quality', detail: 'Never tolerate damaged banners, untrained promoters, or untidy stall environments.' },
        { title: 'Do Not Generate Fake / Junk Leads', detail: 'Never submit random phone numbers or fictitious names to artificially inflate targets.' },
        { title: 'Do Not Submit Incomplete Data', detail: 'Never leave buyer requirements, budget brackets, or source tags blank in the app.' },
        { title: 'Do Not Delay Daily Reporting', detail: 'Never postpone app logging to the next day; same-day evening entry is mandatory.' },
        { title: 'Do Not Ignore Competitor Activities', detail: 'Never overlook competitor campaigns or pricing shifts; document and report them.' },
        { title: 'Do Not Work in Isolation from Sales', detail: 'Never operate disconnected from Sales; maintain daily alignment on lead follow-ups.' }
      ]
    }
  },

  // CLOSING
  {
    id: 33,
    slideNumber: 33,
    sectionId: 'closing',
    sectionNumber: 'CORE PHILOSOPHY',
    sectionTitle: 'FINAL PHILOSOPHY',
    title: 'The Marketing Philosophy',
    subtitle: 'Creating measurable, high-impact business growth through excellence in execution',
    badge: 'KEYNOTE CLIMAX',
    speakerNotes: 'Deliver this closing message with high energy and conviction.',
    data: {
      heroQuote: 'Marketing is not just about activities. Marketing is about creating measurable business opportunities.',
      equation: {
        factors: [
          { title: 'RIGHT LOCATION', desc: 'Prime High-Intent Catchment' },
          { title: 'RIGHT AUDIENCE', desc: 'Target Buying Demographics' },
          { title: 'RIGHT ACTIVITY', desc: 'Engaging BTL / Activation' },
          { title: 'RIGHT EXECUTION', desc: 'Flawless On-Ground Quality' },
          { title: 'RIGHT DATA', desc: 'Accurate App Sync & Notes' },
          { title: 'RIGHT FOLLOW-UP', desc: 'Speedy Sales Team Handover' }
        ],
        result: 'BETTER LEADS & BETTER BUSINESS FOR VASTU VIHAR'
      }
    }
  },

  // PRACTICAL EXERCISE
  {
    id: 34,
    slideNumber: 34,
    sectionId: 'exercise',
    sectionNumber: 'WORKSHOP ASSIGNMENT',
    sectionTitle: 'PRACTICAL EXERCISE',
    title: 'Design Your First Marketing Activity',
    subtitle: 'Interactive activity planning canvas: Fill in your strategy, review, and export your action plan',
    badge: 'ACTION CANVAS',
    speakerNotes: 'Have trainees fill out their plan on screen. They can save their progress and export/print their submission.',
    data: {
      instructions: 'Each trainee must design their first marketing activity for Vastu Vihar townships using the 10 planning fields below.',
      fields: [
        { key: 'location', label: '1. Target Location & Catchment', placeholder: 'e.g. Sector 62 Main Market / Green Valley Township Clubhouse' },
        { key: 'targetAudience', label: '2. Target Customer Profile', placeholder: 'e.g. Salaried IT & banking professionals, age 30-48 yrs, seeking 2/3 BHK & Villas' },
        { key: 'activity', label: '3. Activity Format & Concept', placeholder: 'e.g. 2-Day Society Canopy Stall with Virtual Reality Township Tour & Spot Consultation' },
        { key: 'reasonForLocation', label: '4. Strategic Rationale for Location', placeholder: 'e.g. High concentration of mid-to-senior IT workforce with strong disposable income and rental upgrade demand' },
        { key: 'expectedFootfall', label: '5. Expected Footfall / Reach', placeholder: 'e.g. 1,500+ residents and market visitors over the weekend' },
        { key: 'expectedLeads', label: '6. Expected High-Intent Leads', placeholder: 'e.g. 40-50 verified prospective home buyers' },
        { key: 'leadCollectionMethod', label: '7. Lead Collection & Verification Method', placeholder: 'e.g. Direct Vastu Vihar Marketing App digital entry + instant QR brochure scan + phone verification' },
        { key: 'successMeasurement', label: '8. Success Measurement & ROI', placeholder: 'e.g. Verified lead count, cost per lead < ₹150, minimum 12+ site visit commitments within 7 days' },
        { key: 'reportingPlan', label: '9. Reporting & Documentation Plan', placeholder: 'e.g. Hourly footfall log, 10+ geo-tagged photo proofs, verified lead batch in app, vendor execution notes' },
        { key: 'competitorObservation', label: '10. Competitor Observation in Area', placeholder: 'e.g. Competitor Y active in adjacent commercial complex offering ₹50K festive booking discount' }
      ]
    }
  }
];

export const SECTIONS = [
  { id: 'part-0', title: 'Part 0 — Fundamentals & Mindset', slideRange: '1 - 5', color: 'cyan', firstSlide: 1 },
  { id: 'part-1', title: 'Part 1 — 5 Core Responsibilities', slideRange: '6', color: 'blue', firstSlide: 6 },
  { id: 'btl', title: '01 — BTL & Offline Marketing', slideRange: '7 - 9', color: 'emerald', firstSlide: 7 },
  { id: 'activation', title: '02 — Marketing Activation', slideRange: '10 - 12', color: 'violet', firstSlide: 10 },
  { id: 'field', title: '03 — Field Marketing & Lead Gen', slideRange: '13 - 16', color: 'amber', firstSlide: 13 },
  { id: 'market-intel', title: '04 — Market & Competitor Activity', slideRange: '17 - 19', color: 'rose', firstSlide: 17 },
  { id: 'reporting', title: '05 — Reporting & Performance', slideRange: '20 - 22', color: 'indigo', firstSlide: 20 },
  { id: 'web-app', title: 'Part 2 — Marketing Web / App Training', slideRange: '23 - 25', color: 'teal', firstSlide: 23 },
  { id: 'kpi', title: 'Part 3 — KPI & Performance Evaluation', slideRange: '26 - 27', color: 'purple', firstSlide: 26 },
  { id: 'collaboration', title: 'Part 4 — Sales + Marketing Collaboration', slideRange: '28', color: 'sky', firstSlide: 28 },
  { id: 'daily-model', title: 'Part 5 — Daily Operating Model & Review', slideRange: '29 - 30', color: 'emerald', firstSlide: 29 },
  { id: 'first-30-days', title: 'First 30 Days Roadmap', slideRange: '31', color: 'cyan', firstSlide: 31 },
  { id: 'dos-donts', title: "Do's & Don'ts", slideRange: '32', color: 'amber', firstSlide: 32 },
  { id: 'closing', title: 'Final Philosophy', slideRange: '33', color: 'rose', firstSlide: 33 },
  { id: 'exercise', title: 'Practical Exercise Canvas', slideRange: '34', color: 'emerald', firstSlide: 34 }
];
