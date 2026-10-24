// ─── Brand & Contact ────────────────────────────────────────────────────────
export const BRAND_NAME      = 'Task Nexio';
export const BRAND_TAGLINE   = 'Digital Products. Built for Business.';
export const PARENT_COMPANY  = 'Valen Labs Private Limited';
export const CONTACT_EMAIL   = 'contact@valenlabs.in';
export const INTENDED_DOMAIN = 'tasknexio.com';

// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services',    href: '#services'  },
  { label: 'Our Process', href: '#process'   },
  { label: 'Work',        href: '#work'      },
  { label: 'About',       href: '#about'     },
  { label: 'Contact',     href: '#contact'   },
] as const;

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id:          'websites',
    title:       'Websites & Landing Pages',
    description: 'High-quality, responsive websites built to establish credibility, communicate your value, and generate qualified enquiries.',
    outcome:     'Credibility. Conversions. Traffic.',
    icon:        'Monitor',
  },
  {
    id:          'portals',
    title:       'Business Portals & Dashboards',
    description: 'Custom interfaces, admin portals, customer-facing portals, internal tools, and operational dashboards tailored to how your team works.',
    outcome:     'Operational clarity. Efficiency.',
    icon:        'LayoutDashboard',
  },
  {
    id:          'ai',
    title:       'AI-Powered Applications',
    description: 'AI integrations, document intelligence, intelligent search, assistants, and tailored AI workflows designed around real business problems.',
    outcome:     'Automation. Intelligence. Scale.',
    icon:        'Cpu',
  },
  {
    id:          'software',
    title:       'Custom Software & MVPs',
    description: 'Full-stack web applications, SaaS prototypes, APIs, and digital products designed around your business requirements and growth goals.',
    outcome:     'From concept to deployed product.',
    icon:        'Code2',
  },
] as const;

// ─── Process ─────────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number:      '01',
    title:       'Discover',
    description: 'We start by understanding your business, users, goals, and technical requirements—before writing a single line of code.',
  },
  {
    number:      '02',
    title:       'Define',
    description: 'We agree on scope, deliverables, timeline, and milestones. No surprises, no scope creep without mutual agreement.',
  },
  {
    number:      '03',
    title:       'Build',
    description: 'We design, develop, test, and refine. You have visibility throughout, with regular updates and checkpoints.',
  },
  {
    number:      '04',
    title:       'Deploy',
    description: 'We launch the product, walk you through the handover, and discuss ongoing support options that match your needs.',
  },
] as const;

// ─── Differentiators ─────────────────────────────────────────────────────────
export const DIFFERENTIATORS = [
  {
    title:       'Business-first thinking',
    description: 'Every decision is framed around business value—not just technical elegance or design novelty.',
    icon:        'Target',
  },
  {
    title:       'Tailored, not templated',
    description: 'We build around your specific requirements, not a generic template stretched to fit.',
    icon:        'Layers',
  },
  {
    title:       'Modern engineering & design',
    description: 'We use current tools, frameworks, and design systems to deliver work that holds up over time.',
    icon:        'Zap',
  },
  {
    title:       'Clear communication',
    description: 'Defined milestones, honest timelines, and direct communication from scoping to launch.',
    icon:        'MessageSquare',
  },
] as const;

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: 'What types of projects does Task Nexio build?',
    answer:   'We build premium business websites and landing pages, customer and admin portals, AI-powered web applications, SaaS MVPs, and custom digital products for businesses across industries.',
  },
  {
    question: 'Can you build a product from scratch?',
    answer:   'Yes. We work from early-stage ideas through to deployed products. If you have a concept and need help turning it into a working application, that is exactly what we do.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer:   'Yes. We work with founders, startups, SMEs, agencies, and consultants. The right fit is a team or business with a clear problem to solve and a real commitment to building something.',
  },
  {
    question: 'Can you integrate AI into an existing application?',
    answer:   'Yes. We can add AI capabilities—document processing, intelligent search, chat interfaces, workflow automation—to existing applications or build new AI-first products from the ground up.',
  },
  {
    question: 'How do projects begin?',
    answer:   'Start by submitting an enquiry via our contact form or emailing us directly. We will set up a call to understand your requirements, then put together a scoped proposal with timeline and cost.',
  },
  {
    question: 'What happens after launch?',
    answer:   'We offer handover documentation as standard. Ongoing support, maintenance, and future development are available and can be discussed as part of the project scope.',
  },
] as const;

// ─── Conceptual work showcases ────────────────────────────────────────────────
export const WORK_ITEMS = [
  {
    category:    'Website & Brand Presence',
    title:       'Premium Business Website',
    description: 'A concept for a professional services firm needing a credibility-first web presence with clear service communication and a focused enquiry path.',
    tags:        ['React', 'TypeScript', 'Tailwind CSS'],
    note:        'Conceptual demonstration',
    accentColor: '#6366f1',
  },
  {
    category:    'Business Portal',
    title:       'Operations Management Dashboard',
    description: 'A concept for an internal operations portal with role-based access, data visualisation, and workflow management for a logistics business.',
    tags:        ['Next.js', 'TypeScript', 'PostgreSQL'],
    note:        'Conceptual demonstration',
    accentColor: '#8b5cf6',
  },
  {
    category:    'AI Application',
    title:       'Document Intelligence Platform',
    description: 'A concept for an AI-powered document analysis tool that extracts, categorises, and surfaces information from large document sets for a professional services team.',
    tags:        ['Python', 'LLM Integration', 'React'],
    note:        'Conceptual demonstration',
    accentColor: '#06b6d4',
  },
] as const;

// ─── Budget options ───────────────────────────────────────────────────────────
export const BUDGET_OPTIONS = [
  'Under ₹1 lakh',
  '₹1 – 3 lakh',
  '₹3 – 7 lakh',
  '₹7 – 15 lakh',
  'Above ₹15 lakh',
  'Not sure yet',
] as const;

export const PROJECT_TYPES = [
  'Website or Landing Page',
  'Business Portal or Dashboard',
  'AI-Powered Application',
  'Custom Software or MVP',
  'API or Backend Integration',
  'Other / Not sure',
] as const;
