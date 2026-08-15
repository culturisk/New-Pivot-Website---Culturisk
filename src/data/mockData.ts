import { ServiceItem, TestimonialItem, ArticleItem, CaseStudy, QuizQuestion } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'linkedin-operations',
    title: 'LinkedIn Operations & Page Management',
    description: 'End-to-end management of your corporate LinkedIn presence, ensuring a consistent, engaging, and professional brand voice.',
    iconName: 'megaphone',
    badgeColor: 'bg-blue-50 text-[#0A66C2]',
    imageType: 'recruitment-post',
    coreCapabilities: [
      'Comprehensive Content Strategy',
      'Scheduled Publishing & Calendar Management',
      'Creative Carousels & Visual Assets',
      'Community Moderation & Engagement'
    ]
  },
  {
    id: 'recruitment-marketing',
    title: 'Recruitment Marketing & Jobs Lifecycle',
    description: 'Attract top talent with visually compelling job listings and strategic network sharing that highlights your unique value proposition.',
    iconName: 'briefcase',
    badgeColor: 'bg-indigo-50 text-indigo-600',
    imageType: 'webinar-banner',
    coreCapabilities: [
      'Visual Candidate Attraction Campaigns',
      'Optimized Job Listing Setup',
      'Organic Network Sharing Strategies',
      'Talent Pipeline Nurturing'
    ]
  },
  {
    id: 'employer-brand',
    title: 'Employer Brand & Culture Content',
    description: 'Showcase the authentic heart of your organization through compelling employee stories and culture-driven content.',
    iconName: 'users',
    badgeColor: 'bg-blue-50 text-[#0A66C2]',
    imageType: 'thought-leadership',
    coreCapabilities: [
      'Employee Workplace Stories',
      'Culture Campaign Development',
      'Internal Milestones & Celebrations',
      'DEI & Values Communication'
    ]
  },
  {
    id: 'leadership-presence',
    title: 'Leadership Presence & LinkedIn Events',
    description: 'Elevate C-suite visibility and thought leadership while driving engagement through strategic LinkedIn Events.',
    iconName: 'user-check',
    badgeColor: 'bg-sky-50 text-sky-600',
    imageType: 'linkedin-event',
    coreCapabilities: [
      'C-suite Ghostwriting (CEOs/CHROs)',
      'Thought Leadership Content',
      'LinkedIn Events Setup & Promotion',
      'Executive Profile Optimization'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sarah-jenkins',
    quote: 'Culturisk transformed our employer brand from a ghost town into a talent magnet. Our cost-per-hire dropped by 30% in just six months.',
    author: 'Sarah Jenkins',
    role: 'VP of People',
    company: 'TechStream',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    highlightMetric: '30% Cost-Per-Hire Reduction'
  },
  {
    id: 'michael-chen',
    quote: 'The executive ghostwriting service is a game-changer. I spend 15 minutes a month on a call, and my LinkedIn presence has never been stronger.',
    author: 'Michael Chen',
    role: 'CEO at Nexus',
    company: 'Nexus Solutions',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    highlightMetric: '15 Min/Month Time Investment'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your current organization size?',
    description: 'Organization size directly correlates to recruiting volume and the operational overhead of LinkedIn management.',
    options: [
      {
        id: '1-50',
        title: '1 – 50 Employees',
        subtitle: 'Startup / Small Business',
        leakageWeight: 4,
        hoursWastedEst: 15
      },
      {
        id: '51-200',
        title: '51 – 200 Employees',
        subtitle: 'Mid-Market Growth',
        leakageWeight: 7,
        hoursWastedEst: 35
      },
      {
        id: '201-1000',
        title: '201 – 1000 Employees',
        subtitle: 'Enterprise Scaling',
        leakageWeight: 9,
        hoursWastedEst: 65
      },
      {
        id: '1000+',
        title: '1000+ Employees',
        subtitle: 'Large Enterprise',
        leakageWeight: 10,
        hoursWastedEst: 110
      }
    ]
  },
  {
    id: 2,
    question: 'Who currently handles your company’s LinkedIn content and job postings?',
    description: 'Assigning high-value recruiters or executives to design posts creates critical operational bottlenecks.',
    options: [
      {
        id: 'hr-talent',
        title: 'In-House Talent Acquisition / HR',
        subtitle: 'Recruiters are juggling job postings between candidate screening calls',
        leakageWeight: 9,
        hoursWastedEst: 40
      },
      {
        id: 'solo-marketing',
        title: 'General Marketing Team (Secondary Priority)',
        subtitle: 'Marketing focuses on product/leads; employer brand is an afterthought',
        leakageWeight: 6,
        hoursWastedEst: 20
      },
      {
        id: 'founders-leaders',
        title: 'Founders / Executives Themselves',
        subtitle: 'Posting irregularly whenever a critical vacancy spikes urgency',
        leakageWeight: 8,
        hoursWastedEst: 30
      },
      {
        id: 'external-agency',
        title: 'Traditional Generic Social Agency',
        subtitle: 'Agency lacks deep HR/talent understanding and produces vanity fluff',
        leakageWeight: 5,
        hoursWastedEst: 15
      }
    ]
  },
  {
    id: 3,
    question: 'How many total hours per week does your team spend on social recruiting tasks?',
    description: 'Includes copywriting, Canva graphics, approvals, scheduling, and responding to candidate comments.',
    options: [
      {
        id: 'hrs-0-5',
        title: 'Less than 5 Hours / Week',
        subtitle: 'Sporadic, inconsistent presence leading to cold candidate pools',
        leakageWeight: 6,
        hoursWastedEst: 10
      },
      {
        id: 'hrs-5-15',
        title: '5 to 15 Hours / Week',
        subtitle: 'Substantial talent bandwidth diverted from high-touch interviews',
        leakageWeight: 7,
        hoursWastedEst: 25
      },
      {
        id: 'hrs-15-30',
        title: '15 to 30 Hours / Week',
        subtitle: 'Significant operational drain equal to half a full-time recruiter salary',
        leakageWeight: 9,
        hoursWastedEst: 60
      },
      {
        id: 'hrs-30+',
        title: '30+ Hours / Week',
        subtitle: 'Critical resource leakage with multiple staff members sidetracked',
        leakageWeight: 10,
        hoursWastedEst: 95
      }
    ]
  },
  {
    id: 4,
    question: 'What is your primary hiring bottleneck today?',
    description: 'Understanding your conversion drop-off points lets us calculate your exact candidate leakage.',
    options: [
      {
        id: 'low-quality',
        title: 'High Volume, Low Quality Applicants',
        subtitle: 'HR spends 70% of time filtering out unqualified applicants',
        leakageWeight: 9,
        hoursWastedEst: 45
      },
      {
        id: 'slow-time-to-hire',
        title: 'Prolonged Time-to-Hire (60+ Days)',
        subtitle: 'Positions sit vacant because top-tier talent is not warm to your brand',
        leakageWeight: 8,
        hoursWastedEst: 35
      },
      {
        id: 'low-executive-reach',
        title: 'Invisible Executive / Leadership Brand',
        subtitle: 'Leaders have no organic pull to attract senior engineering or product leaders',
        leakageWeight: 7,
        hoursWastedEst: 25
      },
      {
        id: 'high-recruiter-burnout',
        title: 'Recruiter Burnout & Admin Fatigue',
        subtitle: 'Team is exhausted by manual candidate outreach with sub-5% response rates',
        leakageWeight: 10,
        hoursWastedEst: 50
      }
    ]
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'hidden-45k-waste',
    title: 'The Hidden $45K Waste in Your LinkedIn Recruiter Workflow',
    snippet: 'Uncovering the silent inefficiencies in standard LinkedIn recruitment operations and how strategic adjustments can save significant budget and hundreds of hours.',
    category: 'LinkedIn Operations',
    authorName: 'Rajat Maske',
    authorInitials: 'RM',
    readTime: '5 min read',
    publishedDate: 'Oct 12, 2024',
    imageType: 'dashboard-team',
    keyTakeaways: [
      'Recruiters spend an average of 14 hours per week on non-interview social tasks.',
      'Generic job posts convert at 1.8% vs 8.4% for culture-first visual narrative posts.',
      'Centralizing LinkedIn asset production cuts annual cost-per-hire by up to $45,000.'
    ],
    content: [
      'In high-growth companies, talent acquisition teams are frequently burdened with tasks that fall squarely outside their core competency: designing graphics in Canva, copywriting social media hooks, managing publication calendars, and manually monitoring comments.',
      'When calculated against an average senior recruiter compensation package ($110,000/year base), 12 hours weekly of graphic and copy admin equates to over $33,000 in diverted payroll per recruiter alone. When factored alongside external job board boosts and agency contingency fees for delayed hires, the total annual leakage frequently exceeds $45,000.',
      'By implementing a dedicated operations pipeline that handles content design, posting cadence, and candidate-warming collateral, talent teams can return 100% of their focus to what moves the needle: high-touch candidate vetting and relationship closing.'
    ]
  },
  {
    id: 'beyond-plain-job-description',
    title: 'Beyond the Plain Job Description: Crafting Culture Narratives That Convert',
    snippet: 'Strategies to elevate standard job postings into compelling employer brand narratives that attract top-tier talent in competitive markets.',
    category: 'Recruitment Marketing',
    authorName: 'Culturisk Content Team',
    authorInitials: 'CC',
    readTime: '8 min read',
    publishedDate: 'Oct 18, 2024',
    imageType: 'network-diagram',
    keyTakeaways: [
      'Top 5% talent rarely applies to bulleted responsibility lists.',
      'Visual storytelling increases qualified inbound applications by 156%.',
      'How to turn real team wins into scalable recruiting assets.'
    ],
    content: [
      'The traditional job description is broken. In a market where high-tier engineers and product leaders receive 15+ recruiter InMails a week, copying and pasting a 20-bullet qualification list onto LinkedIn guarantees low engagement and high unqualified applicant noise.',
      'Modern recruitment marketing requires treating job vacancies like high-conversion product launches. This means pairing the listing with employee day-in-the-life spotlights, architectural challenge breakdowns, and transparent compensation frameworks.',
      'When TechStream overhauled their generic postings with structured culture carousels, their qualified candidate pool expanded by 156% while reducing unqualified applicant review time by 42%.'
    ]
  },
  {
    id: 'zero-effort-executive',
    title: 'The Zero-Effort Executive: Thought Leadership Frameworks for C-Suite',
    snippet: 'How leadership can maintain a highly influential and consistent digital presence with streamlined operations and strategic content frameworks.',
    category: 'Executive Presence',
    authorName: 'Purogami',
    authorInitials: 'P',
    readTime: '6 min read',
    publishedDate: 'Nov 02, 2024',
    imageType: 'mobile-mockup',
    keyTakeaways: [
      'C-suite profiles generate 5.6x higher organic reach than corporate company pages.',
      'The 15-minute voice note framework for monthly executive ghostwriting.',
      'How executive visibility accelerates enterprise talent acquisition.'
    ],
    content: [
      'Top candidates do not join logos; they join leaders. Data across tech, biotech, and finance shows that executive profile posts garner substantially higher engagement and trust than standard corporate page updates.',
      'However, CEOs and CHROs do not have 5 hours a week to write LinkedIn posts. The solution is an asynchronous ghostwriting system: a monthly 15-minute voice interview or Slack voice note, translated by specialized ghostwriters into high-impact thought leadership pieces.',
      'This creates a compounding talent moat where senior candidates are pre-sold on company vision and executive leadership before the first phone screen even takes place.'
    ]
  },
  {
    id: 'employer-brand-scaling',
    title: 'How Mid-Market Tech Companies Win Talent Against Tech Giants',
    snippet: 'Leveraging agile employer branding and authentic employee spotlight series to out-recruit well-funded competitors without ballooning agency spend.',
    category: 'Employer Brand',
    authorName: 'Rajat Maske',
    authorInitials: 'RM',
    readTime: '7 min read',
    publishedDate: 'Nov 14, 2024',
    imageType: 'office-team',
    keyTakeaways: [
      'Authenticity beats bloated corporate video budgets.',
      'Micro-campaigns targeting specific tech stacks yield 3x candidate reply rates.',
      'Employee advocacy frameworks that scale organically.'
    ],
    content: [
      'Competing against Big Tech salaries is difficult. But mid-market companies possess an enormous advantage: autonomy, direct impact, and genuine cultural cohesion. The challenge is communicating that reality authentically on LinkedIn.',
      'By turning engineering team meetings, product hackathons, and internal mentorship stories into bite-sized LinkedIn carousels, organizations create an irresistible employer brand that stands out against sterile corporate marketing.'
    ]
  }
];

export const TECHSTREAM_CASE_STUDY: CaseStudy = {
  id: 'techstream',
  client: 'TechStream',
  title: '156% Increase in High-Quality Candidate Flow for TechStream.',
  subtitle: 'How transforming a generic employer brand into a targeted recruitment engine solved TechStream\'s critical hiring bottlenecks and saved hundreds of HR hours.',
  tags: ['Tech Industry', 'Enterprise Recruitment', 'Employer Brand'],
  heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  metrics: [
    {
      value: '+156%',
      label: 'Candidate Flow',
      description: 'Increase in qualified applicants matching precise technical requirements.',
      icon: 'user-plus'
    },
    {
      value: '42%',
      label: 'Time-to-Hire Reduction',
      description: 'Decrease in days-to-offer by attracting pre-warmed candidates.',
      icon: 'clock'
    },
    {
      value: '120+',
      label: 'HR Hours Saved',
      description: 'Time recuperated per quarter by filtering out misaligned applications.',
      icon: 'briefcase'
    }
  ],
  challenge: 'TechStream, a rapidly growing enterprise software provider, was struggling with a "leaky" recruitment funnel. Despite high spend on generic job boards, they were inundated with low-quality applicants who lacked the specific technical competencies required. Their HR team was overwhelmed, spending countless hours filtering through irrelevant resumes, leading to high burnout and prolonged critical vacancies.',
  strategySteps: [
    {
      step: 1,
      title: 'Employer Brand Audit',
      description: 'We analyzed their existing presence and identified key disconnects between internal culture and external messaging.'
    },
    {
      step: 2,
      title: 'Creative Content Overhaul',
      description: 'Developed high-impact employee testimonial videos and authentic behind-the-scenes content tailored for technical talent.'
    },
    {
      step: 3,
      title: 'Targeted LinkedIn Distribution',
      description: 'Launched hyper-targeted LinkedIn campaigns focusing on specific technical skills, minimizing waste and maximizing relevance.'
    }
  ],
  quote: {
    text: '"Culturisk didn\'t just bring us more candidates; they brought us the right candidates. The quality of our interviews has skyrocketed, and our recruitment team finally has the bandwidth to focus on strategic hiring rather than sifting through noise."',
    author: 'Sarah Jenkins',
    role: 'CHRO, TechStream',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  }
};
