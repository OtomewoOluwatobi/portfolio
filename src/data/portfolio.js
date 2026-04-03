export const skills = [
  {
    num: '01', title: 'Backend & APIs',
    bars: [
      { name: 'Node.js / TypeScript', pct: 95 },
      { name: 'Python / FastAPI', pct: 88 },
      { name: 'C# / .NET', pct: 85 },
      { name: 'Laravel / PHP', pct: 90 },
    ],
  },
  {
    num: '02', title: 'Data & Infrastructure',
    bars: [
      { name: 'PostgreSQL / MySQL', pct: 92 },
      { name: 'MongoDB', pct: 85 },
      { name: 'Redis Caching', pct: 88 },
      { name: 'AWS / Cloud', pct: 82 },
    ],
  },
  {
    num: '03', title: 'DevOps & Security',
    bars: [
      { name: 'Docker / CI/CD', pct: 90 },
      { name: 'RBAC / JWT Auth', pct: 93 },
      { name: 'Microservices', pct: 88 },
      { name: 'Event-driven Arch', pct: 85 },
    ],
  },
  {
    num: '04', title: 'Frontend',
    bars: [
      { name: 'React', pct: 80 },
      { name: 'React Native', pct: 78 },
      { name: 'Tailwind CSS', pct: 82 },
      { name: 'WCAG Accessibility', pct: 85 },
    ],
  },
  {
    num: '05', title: 'Leadership',
    bars: [
      { name: 'Technical Strategy', pct: 90 },
      { name: 'Agile Delivery', pct: 95 },
      { name: 'Mentoring Teams', pct: 88 },
      { name: 'Stakeholder Comms', pct: 85 },
    ],
  },
];

export const experience = [
  {
    period: 'Jun 2023 — Present',
    badge: 'Full-time', badgeClass: 'tb-ft',
    role: 'Senior Backend Developer',
    company: 'HMS (ATSL) — United State',
    points: [
      'Architected a <strong>multi-tenant RBAC</strong> system with JWT + session security serving 10K+ daily users.',
      'Migrated legacy monolith to <strong>Node.js/TypeScript microservices</strong>; achieved 99.9% uptime SLA.',
      'Engineered real-time ICU alert platform with <strong>FHIR HL7 spec</strong> and NHS security standards.',
      'Led an 8-engineer team with weekly sprints, design reviews and cross-functional stakeholder alignment.',
    ],
  },
  {
    period: 'Apr 2025 — Dec 2025',
    badge: 'Contract', badgeClass: 'tb-ct',
    role: 'Lead Backend Developer',
    company: 'Swiftze — (Nigeria | UAE)',
    points: [
      'Built a <strong>cross-border payments API</strong> (Flutterwave / Stripe) with automatic currency conversion.',
      'Designed an <strong>AI-powered KYC verification</strong> pipeline cutting onboarding fraud by 34%.',
      'Implemented event-driven webhooks with Redis pub/sub for real-time transaction notifications.',
    ],
  },
  {
    period: 'Jan 2024 — Jul 2025',
    badge: 'Contract', badgeClass: 'tb-ct',
    role: 'Lead Backend Developer',
    company: 'South-way Centre — United Kingdom',
    points: [
      'Built a <strong>compliance & case-management</strong> platform managing sensitive NHS-regulated data.',
      'GDPR-compliant data pipeline for multi-agency referrals with field-level encryption.',
      'Integrated automated reporting module (PDF) reducing manual admin work by 70%.',
    ],
  },
  {
    period: 'Aug 2024 — Oct 2025',
    badge: 'Remote', badgeClass: 'tb-rm',
    role: 'Senior Software Developer',
    company: 'The Envoy Nation — United Kingdom',
    points: [
      'Engineered a <strong>multi-channel push/email notification</strong> engine delivering 250K+ messages/day.',
      'API performance optimisation via Redis caching dropped average response time by <strong>60%</strong>.',
      'Mentored 4 junior engineers; delivered 95% on-time sprint completion across 12 sprints.',
    ],
  },
  {
    period: 'Aug 2021 — Aug 2023',
    badge: 'Full-time', badgeClass: 'tb-ft',
    role: 'Lead Backend Developer',
    company: 'ASCO — Nigeria',
    points: [
      'Designed <strong>supply-chain ERP</strong> with Node.js/TypeScript handling ₦500M+ daily transactions.',
      'Built CI/CD pipelines (GitHub Actions + Docker) reducing deployment errors by <strong>45%</strong>.',
      'Implemented bulk-import system for inventory; 98% data accuracy across 50K+ records.',
    ],
  },
  {
    period: 'Aug 2018 — Aug 2023',
    badge: 'Full-time', badgeClass: 'tb-ft',
    role: 'Lead Backend Developer',
    company: 'Hostel.ng / Zimmr — Nigeria',
    points: [
      'Built <strong>real-time property and booking system</strong> handling 500+ concurrent socket connections.',
      'Architected multi-tenancy with role-based access; reduced security incidents by <strong>40%</strong>.',
      'Geolocation search API (PostGIS + Redis) returning results in under 200ms.',
    ],
  },
  {
    period: 'Jun 2020 — Jun 2022',
    badge: 'Contract', badgeClass: 'tb-ct',
    role: 'Full Stack Developer',
    company: 'Impact One (RGDN) — Nigeria',
    points: [
      'Developed a <strong>data-driven grant management</strong> platform for NGO reporting and disbursement.',
      'Built a React dashboard with real-time analytics; improved stakeholder report speed by 55%.',
      'Implemented SMS alert system (Twilio) reaching 3,500+ beneficiary households monthly.',
    ],
  },
];

export const impact = [
  { big: '99.9%', desc: 'System uptime across all critical production deployments — zero critical failures in 18 months', span: true, odd: true },
  { big: '+60%', desc: 'API performance improvement via Redis caching & query optimisation', odd: false },
  { big: '−45%', desc: 'Deployment errors after CI/CD pipeline automation & automated testing', odd: true },
  { big: '−40%', desc: 'Security incidents after RBAC, JWT hardening & audit-log architecture', odd: false },
  { big: '10K+', desc: 'Daily active users supported across healthcare & fintech platforms', odd: true },
  { big: '95%', desc: 'Sprint success rate over 12 consecutive sprints as engineering lead', odd: false },
  { big: '+30%', desc: 'System performance boost from infrastructure refactors & indexing strategies', odd: true },
  { big: '+25%', desc: 'Release velocity gained through streamlined CI/CD and code review culture', odd: false },
];

export const education = [
  { deg: 'MSc Management and Data Analysis', school: 'BPP University', yr: '2023 — 2024' },
  { deg: 'BSc Computer Science', school: 'Samuel Adegboyega University', yr: '2014 — 2018' },
  { deg: 'Oracle Database Associate', school: 'NIIT Benin', yr: '2016' },
  { deg: 'ND Software Engineering', school: 'NIIT', yr: '2011 — 2013' },
];

export const awards = [
  { emoji: '🏆', name: 'Lagos State Research & Innovation Council Grant', yr: '2021' },
  { emoji: '🚀', name: 'TVC Labs Accelerator Program', yr: '2020' },
];

export const contact = {
  email: 'otomewooluwatobi@gmail.com',
  phone: '+44 7490 257169',
  linkedin: 'linkedin.com/in/oluwatobiotomewo',
  location: 'United Kingdom',
};

export const marqueeItems = [
  { txt: 'Node.js', dc: true },
  { txt: 'TypeScript', dl: true },
  { txt: 'Python', dc: true },
  { txt: 'FastAPI', dl: true },
  { txt: 'PostgreSQL', dc: true },
  { txt: 'MongoDB', dl: true },
  { txt: 'Redis', dc: true },
  { txt: 'Docker', dl: true },
  { txt: 'AWS', dc: true },
  { txt: 'React', dl: true },
  { txt: 'Microservices', dc: true },
  { txt: 'GraphQL', dl: true },
  { txt: 'C# / .NET', dc: true },
  { txt: 'Laravel', dl: true },
  { txt: 'Next.js', dc: true },
  { txt: 'CI/CD', dl: true },
  { txt: 'RBAC', dc: true },
  { txt: 'JWT', dl: true },
  { txt: 'Kafka', dc: true },
  { txt: 'gRPC', dl: true },
];
