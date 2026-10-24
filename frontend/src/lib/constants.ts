// ─── Brand & Contact ────────────────────────────────────────────────────────
export const BRAND_NAME    = 'Task Nexio';
export const BRAND_TAGLINE = 'From Vision to Reality.';
export const PARENT_LABEL  = 'A Valen Labs product.';
export const CONTACT_EMAIL = 'contact@valenlabs.in';
export const DOMAIN        = 'tasknexio.com';

// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Work',    href: '#work'     },
  { label: 'Services', href: '#services' },
  { label: 'Studio',  href: '#studio'   },
  { label: 'Process', href: '#process'  },
  { label: 'Contact', href: '#contact'  },
] as const;

// ─── Products ────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id:         'valen-labs',
    index:      '01',
    category:   'AI, Engineering & Technology',
    title:      'Valen Labs',
    url:        'https://valenlabs.in',
    displayUrl: 'valenlabs.in',
    tagline:    'The technology platform behind our work.',
    description:
      'The technology and innovation platform exploring and building digital solutions, AI-powered products, and intelligent applications that drive real business outcomes.',
    cta:        'Explore Valen Labs',
    theme:      'dark' as const,
    accentHex:  '#2563EB',
  },
  {
    id:         'valen-live',
    index:      '02',
    category:   'Career Intelligence',
    title:      'Valen Live',
    url:        'https://valen.live',
    displayUrl: 'valen.live',
    tagline:    'AI-powered career readiness, built for ambition.',
    description:
      'An AI-powered career-readiness platform built around interview practice, coding assessments, and personalised career preparation — helping professionals reach the next level.',
    cta:        'Explore Valen Live',
    theme:      'light' as const,
    accentHex:  '#0D9488',
  },
] as const;

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    number: '01',
    title:  'Websites & Digital Experiences',
    body:   'Premium business websites, marketing pages, brand experiences, and conversion-focused digital interfaces — built to communicate clearly and make an impression.',
    icon:   'Monitor',
  },
  {
    number: '02',
    title:  'Business Portals & Applications',
    body:   'Custom dashboards, admin portals, customer platforms, internal tools, and business workflow systems — designed around how your organisation actually operates.',
    icon:   'LayoutDashboard',
  },
  {
    number: '03',
    title:  'AI-Powered Products',
    body:   'Custom AI applications, intelligent search, document-processing workflows, AI assistants, and tailored integrations — built around real problems, not generic demos.',
    icon:   'Cpu',
  },
  {
    number: '04',
    title:  'Custom Software & SaaS MVPs',
    body:   'From initial product concept to a functional, deployable software application — full-stack development, APIs, and scalable products designed for growth.',
    icon:   'Code2',
  },
] as const;

// ─── Process ─────────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: '01',
    title:  'Discover',
    body:   'Understand the business, users, challenges, and desired outcomes before any code is written.',
  },
  {
    number: '02',
    title:  'Define',
    body:   'Agree on requirements, scope, deliverables, milestones, and a clear timeline.',
  },
  {
    number: '03',
    title:  'Build',
    body:   'Design, develop, test, review, and refine iteratively with full transparency.',
  },
  {
    number: '04',
    title:  'Launch',
    body:   'Deploy the finished product, hand over documentation, and provide the agreed support.',
  },
] as const;

// ─── Studio principles ───────────────────────────────────────────────────────
export const PRINCIPLES = [
  'Understand before building.',
  'Design for real people.',
  'Engineer for maintainability.',
  'Deliver with clarity.',
] as const;

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: 'What types of projects does Task Nexio build?',
    a: 'We build business websites and landing pages, customer and admin portals, AI-powered applications, SaaS MVPs, and custom digital products across industries.',
  },
  {
    q: 'Can you build a product from scratch?',
    a: 'Yes. We work from early-stage ideas through to deployed products. If you have a concept and need help turning it into a working application, that is exactly what we do.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with founders, startups, SMEs, agencies, and consultants. The right fit is a team with a genuine problem to solve and a real commitment to building.',
  },
  {
    q: 'Can you integrate AI into an existing application?',
    a: 'Yes. Document processing, intelligent search, chat interfaces, workflow automation — we can add AI capabilities to existing applications or build AI-first products from the ground up.',
  },
  {
    q: 'How do projects begin?',
    a: 'Submit an enquiry via the form or email us directly. We will arrange a call, understand your requirements, and put together a scoped proposal with timeline and cost.',
  },
  {
    q: 'What happens after launch?',
    a: 'Handover documentation is standard. Ongoing support, maintenance, and future development are available and can be agreed as part of the project scope.',
  },
] as const;

// ─── Form options ─────────────────────────────────────────────────────────────
export const PROJECT_TYPES = [
  'Website or Landing Page',
  'Business Portal or Dashboard',
  'AI-Powered Application',
  'Custom Software or MVP',
  'API or Backend Integration',
  'Other / Not sure yet',
] as const;

export const BUDGET_OPTIONS = [
  'Under ₹1 lakh',
  '₹1 – 3 lakh',
  '₹3 – 7 lakh',
  '₹7 – 15 lakh',
  'Above ₹15 lakh',
  'Not sure yet',
] as const;
