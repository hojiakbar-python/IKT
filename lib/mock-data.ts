export type Course = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  ratingCount: number;
  price: number;
  originalPrice?: number;
  students: number;
  duration: string;
  lessons: number;
  publishedAt: string;
  instructor: string;
  description: string;
  previewTitle: string;
  outcomes: string[];
  curriculum: { title: string; lessons: string[] }[];
};

export const categories = [
  "Product Design",
  "Frontend Engineering",
  "Data Analytics",
  "Marketing Growth",
  "Product Management",
  "No-code"
];

export const courses: Course[] = [
  {
    id: "c1",
    slug: "product-design-foundation",
    title: "Product Design Foundation",
    category: "Product Design",
    level: "Beginner",
    rating: 4.8,
    ratingCount: 842,
    price: 720000,
    originalPrice: 920000,
    students: 6200,
    duration: "6 hafta",
    lessons: 36,
    publishedAt: "2024-07-15",
    instructor: "Aziza Iskandar",
    description:
      "Figma, user research va prototiplarni o'rganib, real mahsulot dizayn qilasiz.",
    previewTitle: "Foydalanuvchi flowlarini yaratish",
    outcomes: [
      "Figma asoslari va komponentlar",
      "UX tadqiqot va intervyu",
      "Wireframe va prototip",
      "Design system qurish",
      "Portfolio tayyorlash",
      "Mentor feedback olish"
    ],
    curriculum: [
      {
        title: "Week 1: UX Research",
        lessons: ["User persona", "Problem framing", "Interview guide"]
      },
      {
        title: "Week 2: UI Foundation",
        lessons: ["Typography", "Grid system", "Auto layout"]
      },
      {
        title: "Week 3: Prototyping",
        lessons: ["Flows", "Interactive prototype", "Usability test"]
      }
    ]
  },
  {
    id: "c2",
    slug: "frontend-pro",
    title: "Frontend Pro",
    category: "Frontend Engineering",
    level: "Intermediate",
    rating: 4.9,
    ratingCount: 1140,
    price: 1120000,
    originalPrice: 1290000,
    students: 9800,
    duration: "8 hafta",
    lessons: 40,
    publishedAt: "2024-08-02",
    instructor: "Jahongir Bozor",
    description:
      "React, Next.js va real API bilan ishlash. Deploy va testing ham bor.",
    previewTitle: "Server actions va caching",
    outcomes: [
      "React state management",
      "Next.js App Router",
      "API integration",
      "Testing va deploy",
      "Performance optimizatsiya",
      "Portfolio project"
    ],
    curriculum: [
      {
        title: "Week 1: React Core",
        lessons: ["Components", "Hooks", "State patterns"]
      },
      {
        title: "Week 3: Next.js",
        lessons: ["Routing", "Data fetching", "Layouts"]
      },
      {
        title: "Week 6: Testing",
        lessons: ["Unit tests", "E2E basics", "CI setup"]
      }
    ]
  },
  {
    id: "c3",
    slug: "data-analytics-bootcamp",
    title: "Data Analytics Bootcamp",
    category: "Data Analytics",
    level: "Intermediate",
    rating: 4.7,
    ratingCount: 760,
    price: 980000,
    students: 5100,
    duration: "7 hafta",
    lessons: 34,
    publishedAt: "2024-06-20",
    instructor: "Dinara Nor",
    description:
      "SQL, Python va Power BI bilan real datasetlar ustida ishlaysiz.",
    previewTitle: "Dashboard yaratish",
    outcomes: [
      "SQL querylar",
      "Python pandas",
      "Data cleaning",
      "Vizualizatsiya",
      "Business insight",
      "Storytelling"
    ],
    curriculum: [
      {
        title: "Week 1: SQL",
        lessons: ["Joinlar", "Aggregation", "CTE"]
      },
      {
        title: "Week 3: Python",
        lessons: ["Pandas", "Numpy", "EDA"]
      },
      {
        title: "Week 5: BI Tools",
        lessons: ["Power BI", "Dashboards", "KPIs"]
      }
    ]
  },
  {
    id: "c4",
    slug: "growth-marketing-lab",
    title: "Growth Marketing Lab",
    category: "Marketing Growth",
    level: "Beginner",
    rating: 4.6,
    ratingCount: 420,
    price: 650000,
    students: 3300,
    duration: "5 hafta",
    lessons: 28,
    publishedAt: "2024-05-10",
    instructor: "Nodira Karim",
    description:
      "Funnel, performance ads va analytics orqali o'sish strategiyasi.",
    previewTitle: "Funnel audit",
    outcomes: [
      "Marketing funnel",
      "Performance ads",
      "Landing page optimizatsiya",
      "Analytics va KPI",
      "Retention strategiya",
      "Growth eksperimenti"
    ],
    curriculum: [
      {
        title: "Week 1: Strategy",
        lessons: ["Audience", "Channel mix", "Value proposition"]
      },
      {
        title: "Week 2: Ads",
        lessons: ["Creative", "Targeting", "Budgeting"]
      },
      {
        title: "Week 4: Analytics",
        lessons: ["KPI tracking", "Cohort", "Insights"]
      }
    ]
  },
  {
    id: "c5",
    slug: "product-manager-essentials",
    title: "Product Manager Essentials",
    category: "Product Management",
    level: "Beginner",
    rating: 4.8,
    ratingCount: 560,
    price: 880000,
    students: 4100,
    duration: "6 hafta",
    lessons: 32,
    publishedAt: "2024-07-02",
    instructor: "Kamol Nur",
    description:
      "Roadmap, research va stakeholder management bilan mahsulotni boshqarish.",
    previewTitle: "Roadmap yaratish",
    outcomes: [
      "Product discovery",
      "Roadmap planning",
      "Stakeholder management",
      "Metrics va OKR",
      "Go-to-market",
      "Case study"
    ],
    curriculum: [
      {
        title: "Week 1: Discovery",
        lessons: ["JTBD", "User journey", "Problem statements"]
      },
      {
        title: "Week 3: Delivery",
        lessons: ["Sprint planning", "Spec writing", "QA flow"]
      }
    ]
  },
  {
    id: "c6",
    slug: "nocode-builder",
    title: "No-code Builder",
    category: "No-code",
    level: "Beginner",
    rating: 4.5,
    ratingCount: 300,
    price: 540000,
    students: 2100,
    duration: "4 hafta",
    lessons: 20,
    publishedAt: "2024-04-18",
    instructor: "Sardor Vali",
    description:
      "Webflow, Airtable va Zapier orqali mahsulotni kodsiz ishga tushiring.",
    previewTitle: "Webflow layout",
    outcomes: [
      "Webflow dizayn",
      "Database basics",
      "Automation",
      "MVP launch",
      "Landing page",
      "Client handoff"
    ],
    curriculum: [
      {
        title: "Week 1: Webflow",
        lessons: ["CMS", "Responsive", "Animations"]
      },
      {
        title: "Week 3: Automation",
        lessons: ["Zapier", "API basics", "Triggers"]
      }
    ]
  },
  {
    id: "c7",
    slug: "advanced-frontend-architecture",
    title: "Advanced Frontend Architecture",
    category: "Frontend Engineering",
    level: "Advanced",
    rating: 4.9,
    ratingCount: 280,
    price: 1420000,
    students: 1400,
    duration: "6 hafta",
    lessons: 30,
    publishedAt: "2024-08-20",
    instructor: "Jahongir Bozor",
    description:
      "Micro-frontend, performance va large-scale UI engineering.",
    previewTitle: "Performance audit",
    outcomes: [
      "Monorepo setup",
      "Design systems",
      "Performance metrics",
      "Micro-frontend",
      "DX tools",
      "Scalable architecture"
    ],
    curriculum: [
      {
        title: "Week 1: Architecture",
        lessons: ["Modularization", "Boundaries", "Scalability"]
      },
      {
        title: "Week 4: Performance",
        lessons: ["Core Web Vitals", "Bundle analysis", "Caching"]
      }
    ]
  },
  {
    id: "c8",
    slug: "ai-product-manager",
    title: "AI Product Manager",
    category: "Product Management",
    level: "Intermediate",
    rating: 4.7,
    ratingCount: 210,
    price: 1180000,
    students: 1700,
    duration: "5 hafta",
    lessons: 24,
    publishedAt: "2024-08-28",
    instructor: "Kamol Nur",
    description:
      "AI roadmap, data strategy va ML team bilan ishlash ko'nikmalari.",
    previewTitle: "AI roadmap",
    outcomes: [
      "AI use-case",
      "Model lifecycle",
      "Data strategy",
      "Ethics va compliance",
      "Go-to-market",
      "Stakeholder alignment"
    ],
    curriculum: [
      {
        title: "Week 1: AI Basics",
        lessons: ["ML overview", "Use cases", "Risks"]
      },
      {
        title: "Week 3: Delivery",
        lessons: ["Experiment design", "Metrics", "Launch"]
      }
    ]
  },
  {
    id: "c9",
    slug: "design-leadership",
    title: "Design Leadership",
    category: "Product Design",
    level: "Advanced",
    rating: 4.8,
    ratingCount: 190,
    price: 1360000,
    students: 1200,
    duration: "5 hafta",
    lessons: 22,
    publishedAt: "2024-06-05",
    instructor: "Aziza Iskandar",
    description:
      "Design ops, team management va strategik dizayn qarorlari.",
    previewTitle: "Design ops",
    outcomes: [
      "Design strategy",
      "Leadership toolkit",
      "Team rituals",
      "Stakeholder alignment",
      "Design reviews",
      "Roadmap influence"
    ],
    curriculum: [
      {
        title: "Week 1: Strategy",
        lessons: ["Vision", "North star", "Metrics"]
      },
      {
        title: "Week 3: Operations",
        lessons: ["Process", "Hiring", "Culture"]
      }
    ]
  },
  {
    id: "c10",
    slug: "marketing-analytics",
    title: "Marketing Analytics",
    category: "Marketing Growth",
    level: "Intermediate",
    rating: 4.6,
    ratingCount: 260,
    price: 790000,
    students: 2300,
    duration: "6 hafta",
    lessons: 26,
    publishedAt: "2024-05-28",
    instructor: "Nodira Karim",
    description:
      "Attribution, cohort va kampaniya analizini chuqur o'rganing.",
    previewTitle: "Attribution model",
    outcomes: [
      "Attribution models",
      "Cohort analysis",
      "Campaign ROI",
      "Dashboarding",
      "Forecasting",
      "Insight storytelling"
    ],
    curriculum: [
      {
        title: "Week 2: Data",
        lessons: ["Tracking", "UTM", "Pixel setup"]
      },
      {
        title: "Week 5: Insights",
        lessons: ["Segmentation", "Reporting", "Optimization"]
      }
    ]
  },
  {
    id: "c11",
    slug: "data-storytelling",
    title: "Data Storytelling",
    category: "Data Analytics",
    level: "Beginner",
    rating: 4.5,
    ratingCount: 180,
    price: 590000,
    students: 1900,
    duration: "4 hafta",
    lessons: 18,
    publishedAt: "2024-03-30",
    instructor: "Dinara Nor",
    description:
      "Insightlarni story formatida taqdim etish va prezentatsiya qilish.",
    previewTitle: "Story framework",
    outcomes: [
      "Narrative structure",
      "Visualization basics",
      "Stakeholder deck",
      "Executive summary",
      "Call to action",
      "Story practice"
    ],
    curriculum: [
      {
        title: "Week 1: Narrative",
        lessons: ["Story arcs", "Audience", "Messaging"]
      },
      {
        title: "Week 3: Presenting",
        lessons: ["Delivery", "Q&A", "Feedback"]
      }
    ]
  },
  {
    id: "c12",
    slug: "frontend-ui-engineering",
    title: "UI Engineering for Design Systems",
    category: "Frontend Engineering",
    level: "Intermediate",
    rating: 4.8,
    ratingCount: 320,
    price: 990000,
    students: 2400,
    duration: "6 hafta",
    lessons: 30,
    publishedAt: "2024-07-28",
    instructor: "Jahongir Bozor",
    description:
      "Design system komponentlarini ishlab chiqish va scale qilish.",
    previewTitle: "Component architecture",
    outcomes: [
      "Component API",
      "Token system",
      "Storybook basics",
      "Accessibility",
      "Team workflows",
      "Documentation"
    ],
    curriculum: [
      {
        title: "Week 1: Foundations",
        lessons: ["Tokens", "Variants", "Accessibility"]
      },
      {
        title: "Week 4: Scale",
        lessons: ["Migration", "Governance", "Release"]
      }
    ]
  }
];
