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
    period: 'Apr 2025 — Dec 2025',
    badge: 'Contract', badgeClass: 'tb-ct',
    role: 'Lead Backend Developer',
    company: 'Swiftze — Remote',
    points: [
      'Architected and delivered backend services using <strong>Python (Fast API)</strong>, supporting internal dashboards and API-driven workflows.',
      'Implemented asynchronous processing and real-time feedback mechanisms, improving system responsiveness and user experience.',
      'Provided architectural guidance and mentorship to engineers, promoting scalable, maintainable backend patterns.',
      'Worked closely with product and design teams to iterate rapidly while maintaining security and data integrity.',
    ],
  },
  {
    period: 'Aug 2024 — Oct 2025',
    badge: 'Remote', badgeClass: 'tb-rm',
    role: 'Senior Software Developer',
    company: 'The Envoy Nation — Remote',
    points: [
      'Acted as a hands-on technical lead, shaping backend architecture and influencing technical direction across <strong>C#/.NET microservices</strong> and event-driven systems.',
      'Designed and delivered scalable, cloud-ready APIs, ensuring maintainability, security, and alignment with modern engineering best practices.',
      'Worked closely with product managers and senior stakeholders to translate complex requirements into robust, production-ready solutions.',
      'Remained close to the code, delivering backend services and supporting admin-facing UI features while improving auditability and system reliability.',
    ],
  },
  {
    period: 'Jan 2024 — Jul 2025',
    badge: 'Contract', badgeClass: 'tb-ct',
    role: 'Lead Backend Developer',
    company: 'South-way Centre — United Kingdom',
    points: [
      'Built data-driven platforms using <strong>Node.js / TypeScript</strong> backend, delivering scalable APIs and internal services.',
      'Designed backend services following serverless and managed-cloud design principles, improving scalability and deployment efficiency.',
      'Owned features end-to-end across API design, data modelling, and authentication, supporting rapid and reliable product iteration.',
      'Optimised frontend–API communication and caching strategies, improving perceived performance by <strong>60%</strong> across customer-facing workflows.',
    ],
  },
  {
    period: 'Jun 2023 — Present',
    badge: 'Full-time', badgeClass: 'tb-ft',
    role: 'Senior Backend Developer',
    company: 'HMS (ATSL) — United Kingdom',
    points: [
      'Delivered hands-on backend development for business-critical platforms, building and maintaining <strong>Node.js / TypeScript</strong> and C# APIs supporting enterprise workflows.',
      'Contributed to backend services designed around <strong>event-driven and serverless-style patterns</strong>, improving scalability and reducing operational overhead.',
      'Collaborated closely with product, compliance, and delivery teams to design <strong>API-first solutions</strong>, database schemas, and authentication flows aligned with regulatory requirements.',
      'Improved engineering standards and delivery quality through <strong>CI/CD automation</strong>, automated testing, and cloud-native deployment practices.',
    ],
  },
  {
    period: 'Aug 2021 — Aug 2023',
    badge: 'Full-time', badgeClass: 'tb-ft',
    role: 'Lead Backend Developer',
    company: 'ASCO — Nigeria',
    points: [
      'Architected and maintained high-availability enterprise platforms using <strong>Laravel and .NET</strong>, achieving 99.9% uptime.',
      'Implemented secure authentication and <strong>RBAC controls</strong>, reducing unauthorised access attempts by 40%.',
      'Introduced <strong>Docker-based deployments and CI/CD pipelines</strong>, reducing deployment errors by 45%.',
      'Led cross-functional Agile delivery, improving sprint success rates to 95% through structured planning and code review practices.',
    ],
  },
  {
    period: 'Jun 2020 — Jun 2022',
    badge: 'Contract', badgeClass: 'tb-ct',
    role: 'Full Stack Developer',
    company: 'Impact One (RGDN) — Nigeria',
    points: [
      'Delivered full-stack features using <strong>Laravel, React Native, and REST APIs</strong>, improving response times by 40%.',
      'Built secure authentication and access-control modules aligned with industry best practices.',
      'Optimised database queries and API performance, improving system efficiency by 30%.',
      'Supported production operations through automation, documentation, and CI/CD integration.',
    ],
  },
  {
    period: 'Aug 2018 — Aug 2023',
    badge: 'Full-time', badgeClass: 'tb-ft',
    role: 'Lead Backend Developer',
    company: 'Hostel.ng / Zimmr — Nigeria',
    points: [
      'Built and scaled cloud-hosted backend services supporting <strong>10,000+ daily users</strong>, improving overall system performance by 30%.',
      'Led microservice refactoring initiatives, improving platform reliability and release velocity by 25%.',
      'Integrated third-party APIs and payment gateways following secure encryption and compliance standards.',
      'Implemented monitoring and observability tooling, reducing production incidents by <strong>40%</strong>.',
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
