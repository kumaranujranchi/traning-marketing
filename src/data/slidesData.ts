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
  if (d.nowMarketing) return d.nowMarketing.length;
  if (d.earlierSales && !d.nowMarketing) return d.earlierSales.length;
  if (d.objectives) return d.objectives.length;
  if (d.coreComparison) return d.coreComparison.length;
  if (d.concepts) return d.concepts.length;
  if (d.pillars) return d.pillars.length;
  if (d.activities) return d.activities.length;
  if (d.stages) return d.stages.length;
  if (d.checkpoints) return d.checkpoints.length;
  if (d.whyActivation) return d.whyActivation.length;
  if (d.touchpoints) return d.touchpoints.length;
  if (d.questions) return d.questions.length;
  if (d.funnel) return d.funnel.length;
  if (d.responsibilities) return d.responsibilities.length;
  if (d.channels) return d.channels.length;
  if (d.steps) return d.steps.length;
  if (d.checklist) return d.checklist.length;
  if (d.trackingAreas) return d.trackingAreas.length;
  if (d.components) return d.components.length;
  if (d.reasons) return d.reasons.length;
  if (d.deliverables) return d.deliverables.length;
  if (d.matrix) return d.matrix.length;
  if (d.modules) return d.modules.length;
  if (d.fields) return d.fields.length;
  if (d.pipeline) return d.pipeline.length;
  if (d.kpis) return d.kpis.length;
  if (d.dimensions) return d.dimensions.length;
  if (d.cycle) return d.cycle.length;
  if (d.weeks) return d.weeks.length;
  if (d.dos) return 2;
  if (d.factors) return d.factors.length;
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
    sectionId: 'field-intel-hub',
    sectionNumber: 'PART 4',
    sectionTitle: 'FIELD INTEL & GOVERNANCE',
    title: 'Field Intelligence, Lead Quality & Reporting Hub',
    subtitle: 'The unified operational engine: Lead quality criteria, catchment recon, competitor radar, and daily reporting governance',
    badge: 'UNIFIED FIELD ENGINE',
    speakerNotes: 'Walk through the 3 tabs: 1. Lead Quality verification, 2. Competitor Tracking radar, and 3. Daily Reporting deliverables before the 8:00 PM cutoff.',
    data: {
      qualityEquation: 'Relevant Customer + Correct Information + Genuine Requirement = High-Conversion Lead',
      pillars: ['Lead Quality', 'Competitor Radar', 'Daily Reporting'],
      dailyDeliverables: ['Route Log', 'Canopy Log', 'Lead Batch', 'Photo Proof Bundle']
    }
  },

  // 05 — WEEKLY REPORTING MATRIX (Slide 17)
  {
    id: 17,
    slideNumber: 17,
    sectionId: 'reporting',
    sectionNumber: 'PART 5',
    sectionTitle: 'REPORTING & PERFORMANCE',
    title: 'Weekly Reporting Matrix',
    subtitle: 'Comprehensive 8-dimension scorecard for weekly management review',
    badge: 'WEEKLY AUDIT',
    speakerNotes: 'Explain how weekly reviews aggregate daily data into strategic insights.',
    data: {
      matrix: [
        { metric: 'Locations Covered', desc: 'Total catchments and commercial nodes audited during the week', benchmark: '15+ Nodes' },
        { metric: 'Activations Done', desc: 'Society canopies, promotional kiosks, and corporate desks executed', benchmark: '4-6 Activations' },
        { metric: 'Leads Generated', desc: 'Total fresh prospective customer inquiries captured and verified', benchmark: '50-80 Leads' },
        { metric: 'Lead Quality Rate', desc: 'Percentage of leads meeting budget and purchase timeline criteria', benchmark: '> 75% High-Intent' },
        { metric: 'Promoter Efficiency', desc: 'Average active prospect engagements per promoter per hour', benchmark: '12+ Interventions' },
        { metric: 'Material Audit', desc: 'Proper placement, condition, and illumination of Vastu Vihar assets', benchmark: '100% Intact' },
        { metric: 'Intel Insights', desc: 'Actionable competitor maneuvers and emerging catchment discoveries', benchmark: 'Weekly Submission' },
        { metric: 'Sales Conversion', desc: 'Site visit commitments and booking transitions resulting from leads', benchmark: 'Continuous Sync' }
      ]
    }
  },

  // PART 6 — MARKETING WEB / APP (Slide 18)
  {
    id: 18,
    slideNumber: 18,
    sectionId: 'web-app',
    sectionNumber: 'PART 6',
    sectionTitle: 'MARKETING WEB / APP',
    title: 'Marketing Web / App System Overview',
    subtitle: 'Your central digital command center for all field operations and lead recording',
    badge: 'DIGITAL WORKSPACE',
    speakerNotes: 'Explain the core modules of the app. Emphasize that it is designed to empower field officers, not burden them.',
    data: {
      modules: [
        { module: 'User Login & Attendance', desc: 'Geo-fenced start-of-day attendance marking and territory check-in', tag: 'Auth & Attendance' },
        { module: 'Lead Management', desc: 'Digital capture, duplicate verification, and lead pipeline tracking', tag: 'CRM & Pipeline' },
        { module: 'Activity Scheduling', desc: 'Pre-planning canopies, requesting collaterals, and getting approvals', tag: 'Campaign Planner' },
        { module: 'Geo-Tagged Photo Upload', desc: 'Real-time camera upload with GPS timestamp watermarking', tag: 'Proof & Audit' },
        { module: 'Competitor Intelligence', desc: 'Direct logging of competitor sightings, flyers, and pricing notes', tag: 'Market Intel' },
        { module: 'Daily Reporting Module', desc: 'Automated end-of-day summary generation and manager submission', tag: 'Daily EOD' },
        { module: 'Performance Analytics', desc: 'Personal scorecard showing daily leads, rank, and KPI progress', tag: 'KPI Dashboard' },
        { module: 'Collateral Tracker', desc: 'Inventory management for brochures, standees, and merchandise', tag: 'Inventory' },
        { module: 'Sales Sync Feed', desc: 'Live notifications when sales connects with your generated leads', tag: 'Sales Sync' },
        { module: 'Notification Center', desc: 'Urgent announcements, territory targets, and management alerts', tag: 'Broadcasts' },
        { module: 'Help & Escalation', desc: 'Instant support for field issues, permission snags, and logistics', tag: 'Support' }
      ]
    }
  },

  // SLIDE 19 — LEAD ENTRY IN SYSTEM
  {
    id: 19,
    slideNumber: 19,
    sectionId: 'web-app',
    sectionNumber: 'PART 6',
    sectionTitle: 'MARKETING WEB / APP',
    title: 'How to Enter a Lead in the System',
    subtitle: 'A standardized 7-field digital entry process ensuring complete data integrity',
    badge: 'DATA INTEGRITY',
    speakerNotes: 'Walk trainees through the form. Explain why incomplete phone numbers or vague budgets hurt conversion.',
    data: {
      fields: [
        { field: 'Customer Full Name', desc: 'Accurate name with title (Mr./Ms./Dr.) as provided by customer' },
        { field: 'Contact Phone Number', desc: '10-Digit verified primary mobile number + alternate contact' },
        { field: 'Customer Locality / Address', desc: 'Current residential society, sector, or workplace location' },
        { field: 'Preferred Configuration', desc: 'Selection of 1BHK, 2BHK, 3BHK, 4BHK, Villa, or Commercial' },
        { field: 'Budget Bracket', desc: 'Budget range (e.g. ₹35L - ₹50L, ₹50L - ₹75L, ₹1Cr+)' },
        { field: 'Lead Source & Campaign', desc: 'Specific activity tag (e.g. Canopy - Sec 62, Society Kiosk - Green Park)' },
        { field: 'Notes & Follow-up Urgency', desc: 'Key buyer remarks, family size, purchase timeline (0-3 months, 3-6 months)' }
      ],
      rule: '“Enter leads immediately during or right after the conversation. Never postpone to the next day.”'
    }
  },

  // SLIDE 20 — ACTIVITY ENTRY IN SYSTEM
  {
    id: 20,
    slideNumber: 20,
    sectionId: 'web-app',
    sectionNumber: 'PART 6',
    sectionTitle: 'MARKETING WEB / APP',
    title: 'How to Enter an Activity in the System',
    subtitle: 'Structured 6-point verification for every completed on-ground campaign',
    badge: 'ACTIVITY AUDIT',
    speakerNotes: 'Explain the activity form. Point out that photos without GPS tag will be flagged by central audit.',
    data: {
      fields: [
        { field: 'Activity Type & Objective', desc: 'Selection from Canopy, Leafleting, Society Kiosk, Corporate Desk, Market Survey' },
        { field: 'Location & Geo-Coordinates', desc: 'Exact venue address with auto-captured GPS coordinates from mobile device' },
        { field: 'Date, Start & End Time', desc: 'Precise operational duration (e.g. 10:00 AM to 6:00 PM)' },
        { field: 'Team & Promoter Count', desc: 'Names of marketing officers and number of promoters deployed' },
        { field: 'Metrics & Footfall Summary', desc: 'Estimated footfall, brochures distributed, and total leads captured' },
        { field: 'Proof Photographs Upload', desc: 'Minimum 3 photos: Setup overview, customer engagement, and promoter team' }
      ],
      rule: '“An unrecorded activity equals zero business contribution. Make digital logging your daily discipline.”'
    }
  },

  // SLIDE 21 — KPIS (Slide 21)
  {
    id: 21,
    slideNumber: 21,
    sectionId: 'kpi',
    sectionNumber: 'PART 7',
    sectionTitle: 'KPI & PERFORMANCE',
    title: 'Key Performance Indicators (KPIs)',
    subtitle: 'The 8 core metrics that define marketing excellence and career growth at Vastu Vihar',
    badge: 'EXCELLENCE METRICS',
    speakerNotes: 'Walk through all 8 KPIs. Explain how they connect directly to monthly performance incentives.',
    data: {
      kpis: [
        { kpi: 'Activities Completed', desc: 'Number of approved marketing activities executed vs monthly target', benchmark: '20+ / Month' },
        { kpi: 'Fresh Leads Generated', desc: 'Total volume of verified, new customer contacts captured', benchmark: '150-250 / Month' },
        { kpi: 'Lead Quality Rate', desc: 'Percentage of leads validated as genuine buyers with budget match', benchmark: '> 75%' },
        { kpi: 'Resulting Site Visits', desc: 'Prospect site visits resulting from marketing lead generation', benchmark: '30+ Visits' },
        { kpi: 'Catchment Coverage', desc: 'Number of distinct residential and commercial zones activated', benchmark: '10+ Zones' },
        { kpi: 'Market Intel Reports', desc: 'Weekly competitor analysis and opportunity reports submitted', benchmark: '4 / Month' },
        { kpi: 'App Logging Compliance', desc: 'On-time, same-day submission rate of leads and activity logs', benchmark: '> 95%' },
        { kpi: 'Sales Team Synergy', desc: 'Speed and quality of lead handovers and regular feedback loop sync', benchmark: 'High Synergy' }
      ]
    }
  },

  // SLIDE 22 — PERFORMANCE EVALUATION (Slide 22)
  {
    id: 22,
    slideNumber: 22,
    sectionId: 'kpi',
    sectionNumber: 'PART 7',
    sectionTitle: 'KPI & PERFORMANCE',
    title: 'How Marketing Performance is Evaluated',
    subtitle: 'A transparent, weighted 5-pillar evaluation framework for quarterly appraisals',
    badge: 'APPRAISAL SYSTEM',
    speakerNotes: 'Explain the weightage distribution. Show that lead generation is the largest component, but discipline and quality are equally vital.',
    data: {
      dimensions: [
        { dimension: '1. Lead Generation (Volume & Quality)', weight: '35%', desc: 'Total qualified, high-intent leads generated meeting target thresholds' },
        { dimension: '2. Activity Execution (Quantity & Quality)', weight: '25%', desc: 'Number of successful BTL/activations done adhering to brand standards' },
        { dimension: '3. Digital & Reporting Discipline', weight: '15%', desc: 'Consistency, accuracy, and timeliness of app data and photo proofs' },
        { dimension: '4. Market Knowledge & Intel', weight: '15%', desc: 'Depth of territory understanding, competitor tracking, and new area exploration' },
        { dimension: '5. Teamwork & Sales Collaboration', weight: '10%', desc: 'Effective coordination with sales officers, prompt follow-ups, and positive attitude' }
      ]
    }
  },

  // SLIDE 23 — COLLABORATION (Slide 23)
  {
    id: 23,
    slideNumber: 23,
    sectionId: 'collaboration',
    sectionNumber: 'PART 8',
    sectionTitle: 'SALES + MARKETING COLLABORATION',
    title: 'Sales + Marketing: One Unified Revenue Engine',
    subtitle: 'Building a seamless bridge between demand generation and deal conversion',
    badge: 'ONE TEAM ONE GOAL',
    speakerNotes: 'Frame this as a partnership. Marketing feeds Sales, and Sales validates Marketing.',
    data: {
      marketingRole: 'Creates Demand & Delivers Qualified Prospects',
      salesRole: 'Nurtures Interest & Converts to Confirmed Bookings',
      touchpoints: [
        {
          num: '01',
          title: 'Immediate Lead Handover',
          rule: 'Within 2 hours of collection',
          desc: 'Share verified contact, context notes, configuration preference, and hot/warm status immediately.'
        },
        {
          num: '02',
          title: 'Joint Territory Briefings',
          rule: 'Weekly Monday alignment',
          desc: 'Marketing shares upcoming activation calendar; Sales shares inventory priorities and customer feedback.'
        },
        {
          num: '03',
          title: 'Site Visit Coordination',
          rule: 'Active follow-through',
          desc: 'Marketing alerts Sales when an activation prospect schedules an upcoming sample flat visit.'
        },
        {
          num: '04',
          title: 'Closed-Loop Quality Feedback',
          rule: 'Continuous improvement',
          desc: 'Sales provides structured feedback on lead relevance to help Marketing refine future catchments.'
        }
      ],
      goldenQuote: '“When Marketing and Sales operate in perfect alignment, revenue targets become inevitable milestones.”'
    }
  },

  // SLIDE 24 — DAILY OPERATING MODEL (Slide 24)
  {
    id: 24,
    slideNumber: 24,
    sectionId: 'daily-model',
    sectionNumber: 'PART 9',
    sectionTitle: 'DAILY OPERATING MODEL',
    title: 'Your Daily Operating Model (Step-by-Step)',
    subtitle: 'The 9-step daily rhythm of a high-performing Vastu Vihar marketing professional',
    badge: 'DAILY CADENCE',
    speakerNotes: 'Walk through a typical day from 9:00 AM to 7:00 PM. Emphasize that top performers follow this daily discipline religiously.',
    data: {
      cycle: [
        { time: '09:00 AM', title: 'Plan the Day', desc: 'Review daily target, confirm activation location, and verify permissions.' },
        { time: '09:30 AM', title: 'Prepare Materials', desc: 'Collect brochures, standees, canopy kit, visitor register, and charge mobile device.' },
        { time: '10:30 AM', title: 'Reach Location', desc: 'Arrive on time, survey spot, set up canopy/standees as per brand guidelines.' },
        { time: '11:00 AM', title: 'Brief Promoters', desc: 'Align promoter pitch, check attire and grooming, assign specific roles.' },
        { time: '11:30 AM', title: 'Engage Customers', desc: 'Actively greet visitors, deliver elevator pitch, demonstrate project features.' },
        { time: '01:30 PM', title: 'Midday Review', desc: 'Audit lead collection quality, adjust promoter positioning, verify data entered.' },
        { time: '03:00 PM', title: 'Afternoon Drive', desc: 'Resume peak afternoon/evening engagement, target high-traffic footfall.' },
        { time: '06:00 PM', title: 'Wrap Up & Pack', desc: 'Safely pack all materials, ensure venue is clean, thank venue management.' },
        { time: '07:00 PM', title: 'Complete App Reporting', desc: 'Upload all leads, submit activity report with photos, share handover with Sales.' }
      ]
    }
  },

  // SLIDE 25 — SELF-REVIEW CHECKLIST (Slide 25)
  {
    id: 25,
    slideNumber: 25,
    sectionId: 'daily-model',
    sectionNumber: 'PART 9',
    sectionTitle: 'DAILY OPERATING MODEL',
    title: 'Daily Self-Review Checklist',
    subtitle: '7 questions to ask yourself every evening before closing your day',
    badge: 'SELF AUDIT',
    speakerNotes: 'Encourage trainees to build a habit of evening reflection. Self-awareness drives continuous improvement.',
    data: {
      questions: [
        { q: 'Did I complete my planned activity today?', desc: 'Executed as per approved schedule without unauthorized shortcuts' },
        { q: 'Did I meet my daily lead generation target?', desc: 'Captured expected volume of fresh prospective buyers' },
        { q: 'Are all collected leads high quality and verified?', desc: 'Accurate phone numbers, real purchase intent, budget match' },
        { q: 'Did I enter all leads and activity logs in the app?', desc: '100% data sync completed with timestamped photo proofs' },
        { q: 'Did I observe any new competitor activity today?', desc: 'Recorded competitor banners, pricing schemes, or activation spots' },
        { q: 'Did I coordinate and share updates with the Sales team?', desc: 'Handed over hot leads with detailed context notes' },
        { q: 'What is my specific plan and location for tomorrow?', desc: 'Tomorrow’s venue, materials, and target finalized in advance' }
      ],
      rule: '“If your answer to all 7 is YES, you had a champion day. If any is NO, fix it tomorrow morning.”'
    }
  },

  // SLIDE 26 — FIRST 30 DAYS EXPECTATIONS (Slide 26)
  {
    id: 26,
    slideNumber: 26,
    sectionId: 'first-30-days',
    sectionNumber: 'PART 10',
    sectionTitle: 'FIRST 30 DAYS ROADMAP',
    title: 'First 30 Days Expectations',
    subtitle: 'A structured 4-week ramp-up roadmap from orientation to independent excellence',
    badge: 'ONBOARDING ROADMAP',
    speakerNotes: 'Set clear expectations for each week. Trainees should know exactly what success looks like at day 7, 14, 21, and 30.',
    data: {
      weeks: [
        {
          week: 'Week 1',
          focus: 'Learn & Shadow',
          goal: 'Knowledge & System Mastery',
          deliverables: [
            'Deep-dive into Vastu Vihar township portfolio, floor plans & USPs',
            'Master the Marketing Web / App workflows and digital reporting',
            'Shadow senior marketing officers on 3 live field activations',
            'Study territory catchments, competitor landscape, and pricing'
          ]
        },
        {
          week: 'Week 2',
          focus: 'Execute with Guidance',
          goal: 'Assisted Field Practice',
          deliverables: [
            'Plan and execute 2 BTL activities with manager supervision',
            'Generate 25+ verified leads and log them accurately in the app',
            'Conduct 2 structured competitor market reconnaissance visits',
            'Practice customer elevator pitch and objection handling'
          ]
        },
        {
          week: 'Week 3',
          focus: 'Drive Independently',
          goal: 'Autonomous Execution',
          deliverables: [
            'Independently organize and execute 3 full-day field activations',
            'Meet daily target of 8-10 qualified leads per activity day',
            'Submit complete daily reports and photo proofs before 8:00 PM',
            'Establish smooth daily handover rhythm with assigned sales team'
          ]
        },
        {
          week: 'Week 4',
          focus: 'Optimize & Excel',
          goal: 'Consistent High Performance',
          deliverables: [
            'Explore 2 new unexplored catchments or corporate channels',
            'Achieve monthly target of 60+ qualified leads generated',
            'Deliver first weekly market intelligence report with insights',
            'Complete first 30-day performance review with territory manager'
          ]
        }
      ],
      commitment: '“Your first 30 days lay the foundation for your entire career trajectory at Vastu Vihar.”'
    }
  },

  // SLIDE 27 — DO'S AND DON'TS (Slide 27)
  {
    id: 27,
    slideNumber: 27,
    sectionId: 'dos-donts',
    sectionNumber: 'PART 11',
    sectionTitle: "DO'S & DON'TS",
    title: "Marketing Team Do's & Don'ts",
    subtitle: 'Clear behavioral and operational boundaries for professional excellence',
    badge: 'OPERATIONAL CODE',
    speakerNotes: 'Review both columns with equal weight. The Don’ts protect company reputation; the Do’s drive career success.',
    data: {
      dos: [
        { title: 'Arrive Early & Be Prepared', desc: 'Reach venue 30 mins before start; ensure all materials, standees & devices are ready.' },
        { title: 'Maintain Professional Grooming', desc: 'Wear formal/smart attire, Vastu Vihar badge, and maintain energetic posture.' },
        { title: 'Collect Verified & Genuine Leads', desc: 'Verify phone numbers and purchase intent; focus on quality over raw count.' },
        { title: 'Log Everything on the Same Day', desc: 'Submit leads and activity reports on the app before 8:00 PM every single day.' },
        { title: 'Build Strong Synergy with Sales', desc: 'Share hot leads promptly; follow up on customer visit status and feedback.' },
        { title: 'Keep Exploring New Catchments', desc: 'Regularly identify fresh residential hubs, commercial zones, and corporate offices.' }
      ],
      donts: [
        { title: 'Never Collect or Submit Fake Leads', desc: 'Submitting directory contacts or unverified numbers is strict zero-tolerance.' },
        { title: 'Never Leave Canopies Unattended', desc: 'An empty stall damages brand image; ensure active presence at all times.' },
        { title: 'Never Delay Daily Reporting', desc: 'Postponing reporting to the next day leads to lost data and audit penalties.' },
        { title: 'Never Make False Product Promises', desc: 'Always communicate verified township specifications, pricing, and possession dates.' },
        { title: 'Never Use Damaged Brand Collaterals', desc: 'Torn banners, bent standees, or crumpled brochures must never be displayed.' },
        { title: 'Never Work in Isolation from Sales', desc: 'Disconnected marketing produces wasted leads; stay in daily communication.' }
      ]
    }
  },

  // SLIDE 28 — CLOSING (Slide 28)
  {
    id: 28,
    slideNumber: 28,
    sectionId: 'closing',
    sectionNumber: 'CORE PHILOSOPHY',
    sectionTitle: 'FINAL PHILOSOPHY',
    title: 'The Marketing Philosophy',
    subtitle: 'Creating measurable, high-impact business growth through excellence in execution',
    badge: 'KEYNOTE CLIMAX',
    speakerNotes: 'Deliver this closing message with high energy and conviction.',
    data: {
      heroQuote: 'Marketing is not just about activities. Marketing is about creating measurable business opportunities.',
      factors: [
        { title: 'RIGHT LOCATION', desc: 'Prime High-Intent Catchment' },
        { title: 'RIGHT AUDIENCE', desc: 'Target Buying Demographics' },
        { title: 'RIGHT ACTIVITY', desc: 'Engaging BTL / Activation' },
        { title: 'RIGHT EXECUTION', desc: 'Flawless On-Ground Quality' },
        { title: 'RIGHT DATA', desc: 'Accurate App Sync & Notes' },
        { title: 'RIGHT FOLLOW-UP', desc: 'Speedy Sales Team Handover' }
      ],
      goldenThought: 'Marketing creates demand. Sales converts demand. Together, we build world-class Vastu Vihar townships.'
    }
  },

  // SLIDE 29 — PRACTICAL EXERCISE (Slide 29)
  {
    id: 29,
    slideNumber: 29,
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
  { id: 'field', title: '03 — Field Marketing & Lead Gen', slideRange: '13 - 15', color: 'amber', firstSlide: 13 },
  { id: 'field-intel-hub', title: '04 — Field Intel & Governance', slideRange: '16', color: 'rose', firstSlide: 16 },
  { id: 'reporting', title: '05 — Weekly Matrix', slideRange: '17', color: 'indigo', firstSlide: 17 },
  { id: 'web-app', title: 'Part 6 — Marketing App Training', slideRange: '18 - 20', color: 'teal', firstSlide: 18 },
  { id: 'kpi', title: 'Part 7 — KPI & Performance Evaluation', slideRange: '21 - 22', color: 'purple', firstSlide: 21 },
  { id: 'collaboration', title: 'Part 8 — Sales + Marketing Synergy', slideRange: '23', color: 'sky', firstSlide: 23 },
  { id: 'daily-model', title: 'Part 9 — Daily Operating Model', slideRange: '24 - 25', color: 'emerald', firstSlide: 24 },
  { id: 'first-30-days', title: 'Part 10 — First 30 Days Roadmap', slideRange: '26', color: 'cyan', firstSlide: 26 },
  { id: 'dos-donts', title: "Part 11 — Do's & Don'ts", slideRange: '27', color: 'amber', firstSlide: 27 },
  { id: 'closing', title: 'Part 12 — Final Philosophy', slideRange: '28', color: 'rose', firstSlide: 28 },
  { id: 'exercise', title: 'Workshop Exercise Canvas', slideRange: '29', color: 'emerald', firstSlide: 29 }
];
