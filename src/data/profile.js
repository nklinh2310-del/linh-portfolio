export const profile = {
  name: 'TEST UPDATE',
  headline: 'Strategy, finance, and ESG-focused consulting candidate',
  location: 'Los Angeles, CA',
  email: 'nklinh2310@gmail.com',
  linkedin: 'https://www.linkedin.com/in/linh-kristine-nguyen',
  headshot: '/images/headshot.jpg',
  resume: {
    available: true,
    path: '/documents/resume.pdf',
    note: 'Add your resume PDF at public/documents/resume.pdf and set available to true in src/data/profile.js.'
  },
  positioning:
    'I bring structured problem solving, analytical rigor, and clear executive communication to ambiguous business questions. My work spans market strategy, financial analysis, ESG benchmarking, and consulting-style deliverables built for decision makers.',
  proofPoints: [
    'Consulting-style project work across growth, ESG, and market-entry questions',
    'Slide decks and analytical work products available for recruiter review',
    'Recommendation-backed work ethic, professionalism, and client readiness'
  ],
  metrics: [
    { value: '5', label: 'Featured work samples' },
    { value: 'KPMG', label: 'Endorsement material' },
    { value: 'MBB', label: 'Recruiting-ready format' }
  ],
  projects: [
    {
      title: 'BCG-Style Strategic Pitch Deck',
      eyebrow: 'Featured deck',
      summary:
        'A concise strategy presentation built to communicate a recommendation, supporting logic, and implementation implications in a client-ready format.',
      skills: ['PowerPoint storytelling', 'Market framing', 'Recommendation logic', 'Executive communication'],
      file: '/documents/bcg-pitch-deck.pdf',
      accent: 'oxblood'
    },
    {
      title: 'Bain Hypothetical Case Work',
      eyebrow: 'Case analysis',
      summary:
        'A consulting-style case document demonstrating issue structuring, prioritized analysis, and decision-oriented synthesis.',
      skills: ['Problem structuring', 'Data-driven judgment', 'Business case logic', 'Prioritization'],
      file: '/documents/bain-hypothetical.pdf',
      accent: 'fern'
    },
    {
      title: 'Hypothetical Consulting Workplan',
      eyebrow: 'Work planning',
      summary:
        'A workplan translating a broad project objective into workstreams, milestones, analytical tasks, and deliverables.',
      skills: ['Workstream design', 'Project management', 'Hypothesis-driven planning', 'Stakeholder alignment'],
      file: '/documents/hypothetical-workplan.pdf',
      accent: 'brass'
    },
    {
      title: 'Financial Ratios Analysis',
      eyebrow: 'Financial analysis',
      summary:
        'A compact finance work sample focused on ratio analysis, business interpretation, and disciplined presentation of quantitative findings.',
      skills: ['Excel modeling', 'Financial ratios', 'Analytical synthesis', 'Business interpretation'],
      file: '/documents/financial-ratios.pdf',
      accent: 'graphite'
    }
  ],
  recommendation: {
    title: 'KPMG Recommendation Letter',
    file: '/documents/kpmg-recommendation.pdf',
    excerpt:
      'A professional endorsement highlighting reliability, quality of work, communication, and readiness for client-facing environments.',
    summary:
      'Positioned as trust-building evidence near the top of the site, the letter supports the candidate narrative with third-party validation from a professional services setting.'
  },
  about:
    'I am a consulting-oriented candidate focused on helping teams clarify problems, pressure-test assumptions, and turn analysis into practical recommendations. I am especially interested in strategy, growth, ESG, and finance work where strong judgment, structured communication, and stakeholder awareness matter.',
  experience: [
    {
      company: 'KPMG',
      role: 'Risk & ESG Consulting Intern',
      period: 'Recommendation-supported experience',
      bullets: [
        'Led analytical workstreams across 4 ESG client engagements, structuring fragmented regulatory and sustainability data into prioritized insights to support strategic recommendations under tight timelines',
        'Built client-ready deliverables, including Excel-based decision tools (60+ solutions) and PowerPoint decks, translating complex ESG frameworks into actionable implementation roadmaps',
        'Assessed carbon credit feasibility for a petrochemical client by structuring inputs from Verra, Gold Standard, and regulatory sources into a process flow and data-visualization framework to evaluate project pathways',
        'Conducted ESG benchmarking of 4 global utilities (EDF, ENEL, KEPCO), identifying performance gaps and informing phased transition strategies (4-month / 1-year roadmap).'
      ]
    },
    {
      company: 'Consulting Project Work',
      role: 'Strategy and Analysis Candidate Portfolio',
      period: 'Featured work samples',
      bullets: [
        'Developed consulting-style decks that move from business question to structured recommendation.',
        'Translated ambiguous prompts into workstreams, hypotheses, analyses, and executive-facing outputs.',
        'Applied market analysis, financial reasoning, ESG benchmarking, and implementation planning across multiple work products.'
      ]
    },
    {
      company: 'Leadership and Campus Engagement',
      role: 'UCLA Bruin Finance Society | Offbeat Sessions | Consulting Connect',
      period: 'UCLA Business Economics',
      bullets: [
       'Scaled Offbeat Sessions to 1,000+ followers and 183K views in 30 days through data-driven content strategy, increasing conversion rates by 520%',
       'Selected for Consulting Connect; collaborating in a 9-member team to develop revenue diversification strategies for a sustainability nonprofit using structured problem solving and benchmarking',
      'Analyzed business cases in Bruin Finance Society, breaking down ambiguous problems into frameworks and presenting recommendations to mentors.'
      ]
    }
  ],
  skills: [
    'Excel',
    'PowerPoint',
    'Market analysis',
    'Strategy development',
    'Data-driven decision-making',
    'ESG benchmarking',
    'Financial ratios',
    'Executive communication',
    'Problem structuring',
    'Workstream planning',
    'Stakeholder management',
    'Research synthesis'
  ]
};
