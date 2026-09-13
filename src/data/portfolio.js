export const skills = [
  {
    num: '01', title: 'Backend Engineering',
    tags: ['Java', 'Kotlin', 'C# / .NET', 'Node.js', 'TypeScript', 'Python / FastAPI', 'Laravel'],
  },
  {
    num: '02', title: 'APIs & Integration',
    tags: ['REST APIs', 'Third-party integrations', 'API Gateway', 'Microservices', 'JSON APIs'],
  },
  {
    num: '03', title: 'Distributed Systems',
    tags: ['Kafka', 'Event-driven', 'Async processing', 'Resilience patterns', 'Messaging'],
  },
  {
    num: '04', title: 'Data',
    tags: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'MongoDB', 'Redis'],
  },
  {
    num: '05', title: 'Cloud & DevOps',
    tags: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Serverless', 'Containers'],
  },
  {
    num: '06', title: 'Reliability',
    tags: ['Automated testing', 'Observability', 'Logging', 'Metrics', 'Tracing', 'Alerting'],
  },
];

export const experienceGroups = [
  {
    kind: 'primary',
    jobs: [
      {
        period: 'Mar 2026 — Present',
        badge: 'Full-time', badgeClass: 'tb-ft',
        role: 'Lead Backend Developer',
        company: 'Sweeetboards — Remote',
        points: [
          'Led backend development of a scalable <strong>event experience platform</strong> in Node.js and TypeScript — REST APIs and modular services for events, plans and entitlements, RSVP, guests, check-in, gifting, media, and live experiences.',
          'Designed event-driven and async workflows for media processing, payment webhooks, notifications, and moderation, using queues, idempotency, retries, and resilience patterns.',
          'Built secure integrations across <strong>PostgreSQL, MongoDB, AWS, and Docker</strong> — RBAC, signed media access, webhook verification, audit logging — with CI/CD, observability, and caching for high-volume guest traffic.',
        ],
      },
      {
        period: 'Jun 2023 — Feb 2026',
        badge: 'Full-time', badgeClass: 'tb-ft',
        role: 'Senior Backend Developer',
        company: 'HMS (ATSL) — Remote',
        points: [
          'Engineered scalable backend services across <strong>Java, .NET, and Node.js</strong>, delivering cloud-native components for high-volume operational workflows.',
          'Designed REST APIs and third-party integrations with authentication, resilience patterns, and monitoring — faster partner onboarding and more reliable connectivity.',
          'Built reusable integration frameworks and raised production resilience through observability (logs, metrics, tracing, alerting) and incident response.',
        ],
      },
    ],
  },
  {
    kind: 'cluster',
    label: 'Concurrent contracts',
    note: 'Alongside HMS',
    jobs: [
      {
        period: 'Apr 2025 — Dec 2025',
        badge: 'Contract', badgeClass: 'tb-ct',
        role: 'Lead Backend Developer',
        company: 'Swiftze — Remote',
        points: [
          'Delivered <strong>Python / FastAPI</strong> services for high-performance internal dashboards and API-driven workflows.',
          'Implemented asynchronous pipelines and real-time feedback loops, improving system responsiveness.',
          'Provided architectural leadership and mentorship, establishing maintainable backend patterns.',
        ],
      },
      {
        period: 'Aug 2024 — Oct 2025',
        badge: 'Contract', badgeClass: 'tb-ct',
        role: 'Senior Software Developer',
        company: 'The Envoy Nation — Remote',
        points: [
          'Led hands-on development across <strong>C# / .NET microservices</strong> powering internal platforms and admin applications.',
          'Improved legacy reliability by introducing clearer service boundaries and scalable backend patterns.',
          'Supported production through incident response, troubleshooting, and continuous reliability work.',
        ],
      },
      {
        period: 'Jan 2024 — Jul 2025',
        badge: 'Contract', badgeClass: 'tb-ct',
        role: 'Lead Backend Developer',
        company: 'South-way Centre — United Kingdom',
        points: [
          'Built <strong>Node.js / TypeScript</strong> REST APIs and internal platform integrations, owning features from design through production support.',
          'Designed serverless and managed-cloud architectures that improved scalability and deployment speed.',
          'Optimised API communication and caching, improving perceived frontend performance by <strong>60%</strong>.',
        ],
      },
    ],
  },
  {
    kind: 'primary',
    jobs: [
      {
        period: 'Aug 2018 — Aug 2023',
        badge: 'Full-time', badgeClass: 'tb-ft',
        role: 'Lead Backend Developer',
        company: 'Hostel.ng / Zimmr — Nigeria',
        points: [
          'Built and scaled cloud-hosted backend services supporting <strong>10,000+ daily users</strong>, with stronger performance and reliability.',
          'Led backend modernisation and integrated secure payments and third-party services over resilient REST APIs.',
          'Implemented monitoring and alerting to support operational stability and incident management.',
        ],
      },
    ],
  },
  {
    kind: 'cluster',
    label: 'Parallel roles',
    note: 'Alongside Hostel.ng',
    jobs: [
      {
        period: 'Aug 2021 — Aug 2023',
        badge: 'Full-time', badgeClass: 'tb-ft',
        role: 'Lead Backend Developer',
        company: 'ASCO — Nigeria',
        points: [
          'Architected enterprise backend platforms using <strong>Java and Laravel</strong> within distributed cloud environments.',
          'Integrated secure REST/JSON APIs with third-party providers — authentication, fault tolerance, and resilient communication.',
          'Developed event-driven workflows and strengthened releases with automated testing, CI/CD, and observability.',
        ],
      },
      {
        period: 'Jun 2020 — Jun 2022',
        badge: 'Contract', badgeClass: 'tb-ct',
        role: 'Full Stack Developer',
        company: 'Impact One (RGDN) — Nigeria',
        points: [
          'Delivered a cross-platform mobile app using <strong>React Native and Expo</strong> for iOS and Android.',
          'Integrated mobile clients with REST APIs and implemented offline-first behaviour with caching and sync.',
          'Managed App Store and Play Store releases, including deployment configuration and post-launch support.',
        ],
      },
    ],
  },
];

export const impact = [
  { big: '+60%', desc: 'Perceived API performance at South-way through caching and tighter frontend–API communication', span: true },
  { big: '10K+', desc: 'Daily users supported on Hostel.ng with improved reliability and monitoring' },
  { big: '+40%', desc: 'Faster system response times through scalable API and service design' },
  { big: '+30%', desc: 'Efficiency from database tuning, caching, async processing, and event-driven patterns' },
  { big: 'OAuth2', desc: 'JWT, OAuth2, and RBAC authentication shipped across JVM and non-JVM stacks' },
  { big: 'CI/CD', desc: 'Delivery automation plus observability — logs, metrics, tracing, and alerting', span: true },
];

export const education = [
  { deg: 'MSc Management and Data Analysis', school: 'BPP University', yr: '2023 — 2024' },
  { deg: 'BSc Computer Science', school: 'Samuel Adegboyega University', yr: '2014 — 2018' },
  { deg: 'National Innovative Diploma, Software Engineering', school: 'NIIT', yr: '2011 — 2013' },
  { deg: 'Oracle Certified Associate (OCA)', school: 'Oracle / NIIT', yr: '2016', cert: true },
];

export const awards = [
  { emoji: '🏆', name: 'Lagos State Research & Innovation Council Grant', yr: '2021' },
  { emoji: '🚀', name: 'TVC Labs Accelerator Program', yr: '2020' },
];

export const contact = {
  email: 'otomewooluwatobi@gmail.com',
  phone: '+44 7490 257169',
  linkedin: 'linkedin.com/in/oluwatobiotomewo',
  location: 'Leicester, United Kingdom',
};

export const projects = [
  {
    id: 'sweeetboards',
    cat: 'events',
    catLabel: 'Live Events',
    catClass: 'cat-events',
    link: { href: 'https://sweeetboards.com/', label: 'Visit Live' },
    name: 'Sweeetboards — Wishes, Memories & Gifts',
    role: 'Lead Backend Developer · Sweeetboards',
    desc: 'A collaborative event experience platform where groups create digital boards for birthdays, weddings, retirements, and other milestones — collecting wishes, photos, videos, GIFs, and gift contributions. I lead the Node.js / TypeScript backend: REST APIs, plans and entitlements, RSVP and guest flows, check-in, media collection, payment webhooks, and live experiences.',
    metrics: ['Plans & entitlements', 'RSVP + guest check-in', 'Signed media access', 'Payment webhooks'],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'REST', 'RBAC', 'Webhooks', 'Queues'],
    visualType: 'image',
    visualBg: 'linear-gradient(135deg,#2A1018,#3A1520,#1A0C10)',
    imageSrc: 'https://sweeetboards.com/sweeetboards-og-image.png?v=2',
    imageAlt: 'Sweeetboards — Where Wishes, Memories & Gifts Come Together',
    fallbackTitle: 'SWEEETBOARDS',
    fallbackSub: 'EVENT EXPERIENCE PLATFORM',
    fallbackTitleColor: '#FF8FA3',
  },
  {
    id: 'hostel',
    cat: 'marketplace',
    catLabel: 'Marketplace',
    catClass: 'cat-marketplace',
    link: { href: 'https://hostel.ng', label: 'Visit Live' },
    name: 'Hostel.ng — Student Accommodation Marketplace',
    role: 'Lead Backend Developer · Hostel.ng / Zimmr',
    desc: "Nigeria's leading platform for students to discover, compare, and book hostel accommodation. I owned the backend — API design, payments, third-party integrations, and cloud deployment — scaling it to a product serving over 10,000 daily users with monitoring and alerting for operational stability.",
    metrics: ['10,000+ daily users', 'Secure payments', 'Third-party APIs', 'Monitoring & alerting'],
    stack: ['Laravel', 'TypeScript', 'MySQL', 'JWT', 'Redis', 'AWS', 'Docker', 'Payment APIs', 'REST'],
    visualType: 'fallback',
    visualBg: 'linear-gradient(135deg,#1A0800 0%,#2E1200 50%,#3A1500 100%)',
    imageSrc: "https://hostel.ng/static/media/hostelng_logo.212b475260cd54ad10e7.png",
    fallbackTitle: 'HOSTEL.NG',
    fallbackSub: 'STUDENT ACCOMMODATION PLATFORM',
    fallbackBadges: [
      { label: 'MARKETPLACE', color: 'var(--lime)', bg: 'rgba(255,179,71,0.12)', border: 'rgba(255,179,71,0.22)' },
      { label: 'LIVE', color: 'var(--g3)', bg: 'rgba(232,98,26,0.15)', border: 'rgba(232,98,26,0.28)' },
    ],
  },
  {
    id: 'sanan',
    cat: 'realestate',
    catLabel: 'Real Estate',
    catClass: 'cat-realestate',
    link: { href: 'https://backoffice.sananrealhomes.com/login', label: 'Admin Panel' },
    name: 'Sanan Real Homes — Property Management Platform',
    role: 'Lead Backend Developer · Sanan Real Homes',
    desc: 'A full-featured real estate management system with a Next.js admin backoffice. Covers property listings, agent CRM, transaction tracking, document management, and client communications — backed by a serverless-first Node.js API with role-based access control and JWT authentication.',
    metrics: ['Property + agent CRM', 'RBAC + JWT auth', 'Serverless-first infra'],
    stack: ['Node.js', 'TypeScript', 'Next.js', 'MySQL', 'Redis', 'JWT / RBAC', 'AWS', 'Docker', 'CI/CD'],
    visualType: 'image',
    visualBg: 'linear-gradient(135deg,#0A1628,#0D2445,#1A3A6E)',
    imageSrc: 'https://backoffice.sananrealhomes.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsanan1.e5fea874.jpg&w=1200&q=75',
    imageAlt: 'Sanan Real Homes',
    fallbackTitle: 'SANAN REAL HOMES',
    fallbackSub: 'REAL ESTATE ADMIN DASHBOARD',
    fallbackTitleColor: '#7AB8FF',
  },
  {
    id: 'hms',
    cat: 'api',
    catLabel: 'Backend API',
    catClass: 'cat-api',
    link: null,
    name: 'HMS Platform API — Healthcare Integrations',
    role: 'Senior Backend Developer · HMS (ATSL)',
    desc: 'Enterprise integration platform for healthcare operations. Built across Java, .NET, and Node.js — partner onboarding, third-party REST APIs, resilience patterns, and observability (logs, metrics, tracing) for high-availability operational workflows.',
    metrics: ['Java · .NET · Node.js', 'Partner onboarding', 'Observability', 'Resilience patterns'],
    stack: ['Java', 'C# / .NET', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST', 'Docker', 'CI/CD', 'AWS', 'JWT'],
    visualType: 'api',
    visualBg: 'linear-gradient(135deg,#1A0800,#2E1200,#3A1500)',
    apiIconColor: '#F07830',
    apiIconBorder: 'rgba(232,98,26,0.25)',
    apiIconBg: 'rgba(232,98,26,0.06)',
    apiRoutes: [
      { method: 'GET',  path: '/api/v1/health',         methodColor: '#F07830', rowBg: 'rgba(232,98,26,0.12)',  rowColor: '#F59050' },
      { method: 'POST', path: '/api/v1/auth/login',     methodColor: null,      rowBg: 'rgba(255,179,71,0.10)', rowColor: '#FFB347' },
      { method: 'GET',  path: '/api/v1/partners',       methodColor: '#F07830', rowBg: 'rgba(232,98,26,0.12)',  rowColor: '#F59050' },
      { method: 'POST', path: '/api/v1/integrations',   methodColor: null,      rowBg: 'rgba(255,179,71,0.10)', rowColor: '#FFB347' },
    ],
  },
  {
    id: 'asco',
    cat: 'enterprise',
    catLabel: 'Enterprise',
    catClass: 'cat-enterprise',
    link: null,
    name: 'ASCO Enterprise Platform — Operations Suite',
    role: 'Lead Backend Developer · ASCO · Nigeria',
    desc: 'Enterprise operations platform for a large-scale Nigerian organisation. Architected with Java and Laravel in a distributed cloud environment — secure REST/JSON integrations, event-driven workflows, automated testing, and containerised CI/CD with production observability.',
    metrics: ['Java + Laravel', 'Event-driven workflows', 'Third-party APIs', 'CI/CD + observability'],
    stack: ['Java', 'Laravel', 'PHP', 'MySQL', 'Redis', 'REST', 'Docker', 'CI/CD', 'Kafka', 'Microservices'],
    visualType: 'api',
    visualBg: 'linear-gradient(135deg,#0D0520,#1A0A3D,#240F52)',
    apiIconColor: '#A478FF',
    apiIconBorder: 'rgba(164,120,255,0.25)',
    apiIconBg: 'rgba(164,120,255,0.06)',
    apiRoutes: [
      { method: 'GET',  path: '/api/enterprise/dashboard', methodColor: '#A478FF', rowBg: 'rgba(164,120,255,0.1)',  rowColor: '#C4A8FF' },
      { method: 'POST', path: '/api/auth/rbac/assign',     methodColor: null,      rowBg: 'rgba(255,179,71,0.08)', rowColor: '#FFB347' },
      { method: 'GET',  path: '/api/reports/analytics',    methodColor: '#A478FF', rowBg: 'rgba(164,120,255,0.1)',  rowColor: '#C4A8FF' },
      { method: 'PUT',  path: '/api/integrations/sync',    methodColor: null,      rowBg: 'rgba(255,179,71,0.08)', rowColor: '#FFB347' },
    ],
  },
];

export const marqueeItems = [
  { txt: 'Java', dc: true },
  { txt: 'Kotlin', dl: true },
  { txt: 'Node.js', dc: true },
  { txt: 'TypeScript', dl: true },
  { txt: 'C# / .NET', dc: true },
  { txt: 'Python', dl: true },
  { txt: 'FastAPI', dc: true },
  { txt: 'Kafka', dl: true },
  { txt: 'PostgreSQL', dc: true },
  { txt: 'Redis', dl: true },
  { txt: 'AWS', dc: true },
  { txt: 'Azure', dl: true },
  { txt: 'Docker', dc: true },
  { txt: 'CI/CD', dl: true },
  { txt: 'Microservices', dc: true },
  { txt: 'REST APIs', dl: true },
  { txt: 'Laravel', dc: true },
  { txt: 'Observability', dl: true },
  { txt: 'OAuth2', dc: true },
  { txt: 'MongoDB', dl: true },
];
