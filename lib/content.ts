/**
 * ============================================================
 * GROW PALM BEACH — SITE CONTENT
 * ============================================================
 * Edit this file to update all text, images, and links across
 * the site. Save → commit → push → Vercel auto-deploys.
 *
 * Images live in /public/images/ — reference them as
 * '/images/filename.jpg'
 * ============================================================
 */

export const site = {
  name: 'Grow Palm Beach',
  tagline: 'AI-Optimized Local Marketing for Palm Beach Businesses',
  url: 'https://www.growpalmbeach.com',
  phone: '(561) 401-0695',
  phoneRaw: '+15614010695',
  email: 'matthew@growpalmbeach.com',
  address: 'West Palm Beach, FL',
  calendly: 'https://calendly.com/matthewdurnya/30min',
};

export const images = {
  hero: '/images/founder.jpg',
  founder: '/images/founder.jpg',
caseStudy: '/images/case-study.png',
  ogImage: '',
};

export const clientLogos = [
  { name: "Hector's Car Wash", url: '/images/hectors_car_wash_logo.png', site: 'https://www.hectorcarwash.com' },
  { name: 'Brothers Taquizas', url: '/images/BT_Logo.png', site: 'https://brotherstaquizas.com' },
  { name: 'PAM Executive Parking', url: '/images/PAM_logo.png', site: 'https://executiveparkingpb.com' },
  { name: "Antonio's Italian Market & Deli", url: '/images/antonios_logo.png', site: 'https://www.antoniospb.com' },
  { name: 'La Esquina Guatemalteca', url: '/images/laesquina_logo.png', site: 'https://www.laesquinaguatemalteca.com' },
  { name: 'Sorgente', url: '/images/sorgente_logo.png', site: 'https://www.sorgentepb.com' },
];

export const announcement = {
  show: true,
  label: 'Free:',
  text: '15-minute call — I\'ll tell you exactly what I\'d fix first →',
  cta: 'Book it',
};

export const hero = {
  eyebrow: 'AI-optimized local marketing',
  headlineStart: 'When locals search for what you do, ',
  headlineEm: 'you should be the one they call',
  headlineEnd: '.',
  sub: "I build AI-optimized websites and run local marketing for Palm Beach businesses — structured so Google and AI tools like ChatGPT can find you and recommend you. No jargon, no long contracts, no giant check up front.",
  primaryCta: 'Book a free 15-min call',
  secondaryCta: 'See plans + pricing',
  trustHeadline: 'Trusted by Palm Beach businesses',
  trustSub: "Hector's Car Wash · Antonio's Italian Market · Brothers Taquizas",
  floatCard1: { label: '+312% leads', sub: 'Local home services client' },
  floatCard2: { label: 'Ranked #1', sub: '"SEO Palm Beach" — Google' },
};

// "AI is the new word of mouth" section
export const aiSection = {
  eyebrow: 'Why this matters right now',
  title: 'AI is the new word of mouth.',
  sub: 'ChatGPT and Google AI now recommend local businesses directly. Every site I build is structured so both search engines and AI tools can find you — and send customers your way.',
  stats: [
    { num: '46%', label: 'of all Google searches are people looking for something local' },
    { num: '76%', label: 'of "near me" searches lead to a business visit within 24 hours' },
    { num: '88%', label: "of people trust Google reviews as much as a friend's recommendation" },
  ],
};

export const stats = [
  { num: '3', suffix: 'x', label: 'Average lead growth in first 90 days' },
  { num: '$4M', suffix: '+', label: 'Client revenue generated through campaigns' },
  { num: '25', suffix: '+', label: 'Palm Beach businesses scaled since launch' },
  { num: '100', suffix: '%', label: 'Founder-led — you work directly with Matthew' },
];

// Three-tier pricing
export const pricing = {
  eyebrow: 'Plans + pricing',
  title: 'Pick the plan that fits where you are.',
  sub: 'I handle everything — you just answer the phone. Websites start at $3,000, plans start at $750/mo.',
  plans: [
    {
      name: 'Just a Website',
      price: '$3,000',
      priceNote: 'one-time',
      subNote: 'Split into 3 payments of $1,000 · then $99/mo care plan',
      bestFor: 'Businesses that just need a solid online home base.',
      features: [
        'A fast, AI-optimized website you own outright — built and live in 30 days',
        'Looks great on phones, where most of your customers are',
        'Care plan covers hosting, security, and any small changes — just call or text me',
      ],
      cta: 'Start with a website',
      popular: false,
    },
    {
      name: 'Growth Plan',
      price: '$750',
      priceNote: '/month',
      subNote: 'Website included · 6 months to start, then month-to-month · 30-day out: if you don\u2019t like how I work in the first 30 days, walk away',
      bestFor: 'Businesses that want the phone ringing more.',
      features: [
        'Brand-new AI-optimized website included — no $3,000 up front',
        'Show up on Google when locals search for what you do',
        'Your name, address & phone listed correctly across 40+ sites Google trusts',
        'A page for every service you offer and every town you serve',
        'After every job, your customer gets a text asking for a Google review',
        'Basic email marketing: one campaign a month to your customer list \u2014 offers, specials, win-backs',
        'One-page report each month: where you rank, how many calls came from Google',
      ],
      cta: 'Start growing',
      popular: true,
    },
    {
      name: 'Full Growth',
      price: '$1,500',
      priceNote: '/mo + ad budget',
      subNote: 'Everything in Growth, plus paid ads',
      bestFor: 'Businesses that want more work now and can handle the volume.',
      features: [
        'Everything in the Growth Plan',
        'Google & Facebook/Instagram ads, built and managed for you',
        'Leads start in weeks, not months — ads work while your Google ranking climbs',
        '3x your leads in 90 days — or my management fee is free',
      ],
      cta: 'Go all in',
      popular: false,
      guarantee: true,
    },
  ],
  guaranteeNote:
    "The 3x guarantee applies to the Full Growth plan: if I don't triple your inbound leads in the first 90 days, you don't pay my management fee. Simple as that.",
};

export const processSteps = [
  {
    title: 'Free 15-min call',
    description: "Quick call to understand your business and audit what's broken. No pitch, no pressure — I'll tell you exactly what I'd fix first.",
  },
  {
    title: 'Pick your plan',
    description: 'Website, Growth, or Full Growth. Clear pricing, no long contracts, no giant check up front.',
  },
  {
    title: 'Live in 30 days',
    description: 'Your AI-optimized site is built and live within 30 days. Growth work starts immediately alongside it.',
  },
  {
    title: 'You answer the phone',
    description: 'I handle the marketing, send you a one-page report each month, and you get me directly — not an account manager.',
  },
];

export const testimonials = [
  {
    quote: "One week after our new site went live, we landed our biggest catering order ever.",
    result: 'Biggest order in week one',
    name: 'Brothers Taquizas',
    title: 'Catering · Palm Beach County',
    avatar: '',
    featured: false,
  },
  {
    quote: "Our old site was a one-pager from 2021 built by a company we could never get ahold of. The site Matthew built books detailing appointments for us around the clock — it's paid for itself more than 10 times over, and our monthly bill is actually lower than what we were paying before.",
    result: 'Paid for itself 10x over',
    name: "Hector's Car Wash",
    title: 'Car Wash & Detailing · West Palm Beach',
    avatar: '',
    featured: true,
  },
  {
    quote: "Our website had the wrong phone number and outdated information for who knows how long. Matthew is the first person I've paid where I genuinely feel like I'm getting something for my money. I've had some bad experiences — this is not one of them.",
    result: 'Wrong number fixed, calls coming in',
    name: "Antonio's Italian Market",
    title: 'Italian Market · Palm Beach County',
    avatar: '',
    featured: false,
  },
];

export const caseStudy = {
  eyebrow: 'Featured case study',
  title: 'From quiet weekends to fully booked.',
  body: 'A local Palm Beach service business came to me with a beautiful website and zero leads. I rebuilt their local SEO foundation, launched targeted Google + Meta campaigns, and tied every dollar to a tracked phone call or form fill. 90 days later — fully booked.',
  metrics: [
    { num: '+312%', label: 'Lead volume' },
    { num: '90 days', label: 'Time to result' },
    { num: '4.2x', label: 'Return on ad spend' },
  ],
};

export const founder = {
  eyebrow: 'Who you\'re working with',
  title: 'When you call, you get me — not an account manager.',
  paragraphs: [
    "I'm Matthew Durnya — founder of Grow Palm Beach, based in West Palm Beach. I've built and scaled businesses myself, and I'm an IRONMAN finisher, so I don't quit halfway.",
    'Every account is handled by me personally. No offshore team, no handoffs, no jargon. You get my cell, and I answer it.',
  ],
  credentials: [
    { icon: '★', text: 'Built + scaled businesses myself' },
    { icon: '↗', text: '$0 → $4M case study' },
    { icon: '●', text: 'IRONMAN finisher' },
  ],
  cta: 'Book a free 15-min call',
};

export const faqs = [
  {
    q: 'How does the "3x leads or free" guarantee work?',
    a: "It applies to the Full Growth plan. We define qualified leads together in writing during onboarding and measure them with independent tracking (GA4, call tracking, your CRM). If I don't triple your inbound leads in the first 90 days, you don't pay my management fee. Simple as that.",
  },
  {
    q: 'How long until I see results?',
    a: 'On Full Growth, paid ads typically start producing leads within weeks — they work while your Google ranking climbs. Organic Google results start showing in week 4-6 and compound from there. Your website is built and live within 30 days on any plan.',
  },
  {
    q: 'I run a restaurant / shop with online ordering. Do I have to switch systems?',
    a: "No. Keep the system you already use — Toast, Square, ChowNow, whatever's working. I build around it and make sure Google sends people to it. No switching, no disruption.",
  },
  {
    q: 'Are there long contracts?',
    a: 'No long contracts and no giant check up front. The website can be split into 3 payments of $1,000. The Growth Plan is 6 months to start, then month-to-month \u2014 with a 30-day out: if you don\u2019t like how I work in the first month, walk away, no hard feelings. I earn your business every month.',
  },
  {
    q: 'What happens on the free call?',
    a: "15 minutes, free. No pitch, no pressure — I'll look at your current setup and tell you exactly what I'd fix first, whether you hire me or not.",
  },
];

export const bookCall = {
  eyebrow: 'Free 15-min call',
  headlineStart: "Let's talk. ",
  headlineEm: '15 minutes, free',
  headlineEnd: '.',
  sub: "No pitch, no pressure — I'll look at your current setup and tell you exactly what I'd fix first. Whether you hire me or not, you'll leave the call knowing your next move.",
  hostName: 'Matthew Durnya',
  hostTitle: 'Founder, Grow Palm Beach',
  meta: [
    { icon: '⏱', label: '15 minutes', text: 'Quick, focused, no time wasted' },
    { icon: '📹', label: 'Phone or Google Meet', text: 'Whichever works for you' },
    { icon: '✓', label: 'No pitch, no pressure', text: "I'll tell you what I'd fix first" },
    { icon: '$', label: 'Free', text: 'Real advice you can use either way' },
  ],
  promises: [
    "An honest read on what's working and what isn't",
    "Exactly what I'd fix first — and why",
    'Which plan fits your situation (or none, if that\'s the truth)',
    'Clear pricing if you want it — websites start at $3,000, plans at $750/mo',
  ],
  testimonial: {
    quote: "Matthew is the first person I've paid where I genuinely feel like I'm getting something for my money. I've had some bad experiences — this is not one of them.",
    author: "Antonio's Italian Market",
    title: 'Palm Beach County',
  },
  faqs: [
    {
      q: 'What should I have ready for the call?',
      a: "Nothing required. If you have your Google Business Profile login or know roughly what you spend on marketing, it helps — but I'll pull most of what I need from public data and a quick conversation.",
    },
    {
      q: "Is this really free? What's the catch?",
      a: 'No catch. Most businesses I talk to either become clients or refer someone who does. Even if neither happens, you walk away knowing exactly what to fix.',
    },
    {
      q: 'Will I be sold to?',
      a: "No pitch deck, no scripted close. I'll tell you what I'd fix first. If it makes sense to talk about working together, we will — but only if you bring it up.",
    },
    {
      q: 'What if I need to reschedule?',
      a: "No problem. You'll get a calendar invite with a reschedule link after booking.",
    },
  ],
};

/* ============================================================
 * SERVICES
 * Hub page at /services, individual pages at /services/[slug].
 * Edit copy here. To add a service later, copy a block, change
 * the slug, and it goes live automatically.
 * ============================================================ */

export const servicesHub = {
  eyebrow: 'Services',
  title: 'Everything your business needs to get found and get calls.',
  sub: "Every service below is something I deliver personally. No offshore team, no handoffs. Most of it is bundled into the plans, but here's exactly what I do and how it works.",
  otherTitle: 'And when you need more',
  otherSub: "I ran a technology company before this. Hardware for data centers, app development, software teams, consulting. If your business needs something built, I've either built it or managed the people who did. Here's the longer list:",
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  cardBlurb: string;
  icon: string;
  eyebrow: string;
  headlineStart: string;
  headlineEm: string;
  headlineEnd: string;
  sub: string;
  painTitle: string;
  painPoints: { title: string; body: string }[];
  deliverTitle: string;
  deliverables: string[];
  planNote: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'web-design',
    name: 'Web Design & Development',
    navLabel: 'Web Design',
    metaTitle: 'Web Design West Palm Beach | AI-Optimized Websites from $3,000',
    metaDescription:
      'Custom, AI-optimized websites for Palm Beach businesses. Built in 30 days, mobile-first, structured so Google and ChatGPT can recommend you. From $3,000, split into 3 payments.',
    cardBlurb: 'A fast, AI-optimized website you own outright. Built and live in 30 days.',
    icon: '⌘',
    eyebrow: 'Web design & development',
    headlineStart: 'A website that ',
    headlineEm: 'makes the phone ring',
    headlineEnd: ', not just sits there.',
    sub: "Most local business websites are digital business cards nobody reads. I build sites structured so Google ranks them, AI tools recommend them, and customers actually call. Live in 30 days, and you own it outright.",
    painTitle: 'Sound familiar?',
    painPoints: [
      {
        title: 'Your site was built years ago and you can\'t reach the person who made it',
        body: "I hear this at least once a week. Old one-pagers, wrong phone numbers, businesses paying monthly for a site nobody will update. When you work with me, you get my cell. Changes happen the same day you ask.",
      },
      {
        title: 'You have a website but zero calls come from it',
        body: 'A pretty site that Google can\'t read is invisible. I build every page with the structure search engines and AI tools need: service pages, city pages, schema markup, fast load times, click-to-call everywhere.',
      },
      {
        title: 'You\'re stuck on a free subdomain or a template that mentions the wrong city',
        body: "Toast pages, thecut.co links, templates that say a city you don't serve. These quietly kill your Google ranking. I move you to a domain you own with content written for your actual business and area.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'Custom design, no recycled templates',
      'Built mobile-first, because that\'s where your customers are',
      'AI-optimized structure so Google and ChatGPT can find and recommend you',
      'A page for every service you offer and every town you serve',
      'Click-to-call, booking, and quote forms wired in',
      'Works with your existing ordering system: Toast, Square, ChowNow, no switching',
      'Live in 30 days, and you own the site outright',
      '$99/mo care plan: hosting, security, and small changes handled, just call or text me',
    ],
    planNote:
      'Websites start at $3,000, split into 3 payments of $1,000, then $99/mo for the care plan. On the Growth Plan the website is included at no upfront cost.',
    faqs: [
      {
        q: 'How long does it take?',
        a: 'Live in 30 days on any plan. Most sites are done sooner. I build fast because I build myself, no agency queue.',
      },
      {
        q: 'Do I own the website?',
        a: 'Yes, outright. Your domain, your site, your content. If we ever part ways, everything stays with you.',
      },
      {
        q: 'I already have online ordering. Do I have to switch?',
        a: "No. Keep Toast, Square, ChowNow, whatever's working. I build around it and make sure Google sends people to it.",
      },
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO & Google Business Profile',
    navLabel: 'Local SEO',
    metaTitle: 'Local SEO West Palm Beach | Google Business Profile Management',
    metaDescription:
      'Local SEO for Palm Beach County businesses. Google Business Profile optimization, duplicate listing cleanup, citations across 40+ directories, and monthly rank reports.',
    cardBlurb: 'Show up when locals search for what you do. GBP, citations, rankings.',
    icon: '◎',
    eyebrow: 'Local SEO',
    headlineStart: 'When someone nearby searches for what you do, ',
    headlineEm: 'you show up first',
    headlineEnd: '.',
    sub: "46% of Google searches are local. If you're not in the map pack when someone types your service plus your city, that customer calls your competitor. I fix that, and I show you the proof every month.",
    painTitle: 'What I find when I audit local businesses',
    painPoints: [
      {
        title: 'Duplicate Google listings splitting your reviews',
        body: "Two profiles, each with half your reviews, both ranking worse than one strong profile would. I merge them, recover the reviews, and lock the listing down so it doesn't happen again.",
      },
      {
        title: 'Your name, address, and phone number are different everywhere',
        body: "Yelp says one number, your site says another, an old directory has your previous address. Google sees the mess and stops trusting your listing. I fix your info across 40+ sites Google actually checks.",
      },
      {
        title: 'A dead or wrong website linked on your profile',
        body: "I regularly find Google Business Profiles pointing at domains that don't exist anymore, or someone else's site. Every click that should be a customer hits a dead end. This is usually the first thing I fix.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'Full Google Business Profile optimization: categories, services, photos, posts',
      'Duplicate listing cleanup and review recovery',
      'Name, address, and phone corrected across 40+ directories Google trusts',
      'A page on your site for every service and every town you serve',
      'Keyword tracking for the searches that actually bring you customers',
      'One-page report each month: where you rank, how many calls came from Google',
    ],
    planNote:
      'Local SEO is the core of the Growth Plan at $750/mo, website included. It also powers the Full Growth plan alongside paid ads.',
    faqs: [
      {
        q: 'How long until I rank?',
        a: 'Movement typically starts in weeks 4 to 6 and compounds from there. Local SEO is the asset that keeps paying: once you hold the top spots, the calls come in without ad spend.',
      },
      {
        q: 'What is the map pack and why does it matter?',
        a: 'The three businesses Google shows on the map at the top of local searches. Most calls go to those three. Getting you in the pack for your service and city is the main goal of this work.',
      },
      {
        q: 'Can you fix my Google Business Profile if it was suspended or has wrong info?',
        a: "Yes. Suspensions, wrong numbers, duplicate listings, ownership disputes. I've dealt with all of it. This is often what I fix in the first week.",
      },
    ],
  },
  {
    slug: 'ai-search-optimization',
    name: 'AI Search Optimization',
    navLabel: 'AI Search',
    metaTitle: 'AI Search Optimization Palm Beach | Get Recommended by ChatGPT',
    metaDescription:
      'AI is the new word of mouth. I structure Palm Beach business websites so ChatGPT, Google AI, and other AI tools can find you and recommend you to local customers.',
    cardBlurb: 'AI is the new word of mouth. Get recommended by ChatGPT and Google AI.',
    icon: '✦',
    eyebrow: 'AI search optimization',
    headlineStart: 'AI is the new word of mouth. ',
    headlineEm: 'Make sure it knows your name',
    headlineEnd: '.',
    sub: "People now ask ChatGPT and Google AI who to hire the same way they used to ask a neighbor. Those tools recommend businesses whose websites they can read and trust. Almost no local business is built for this yet. That's the opportunity.",
    painTitle: 'What\'s changing',
    painPoints: [
      {
        title: 'Google now answers questions before anyone sees the links',
        body: "AI Overviews sit at the top of search results and answer the question directly, citing a handful of businesses. If your site isn't structured so AI can pull from it, you're below the answer, and most people never scroll past it.",
      },
      {
        title: 'ChatGPT recommends specific local businesses by name',
        body: 'Ask it for a plumber, a detailer, or a caterer in your city and it names names. Those names come from sites with clear services, real reviews, consistent business info, and structured data. That can be you.',
      },
      {
        title: 'AI scraper sites are filling the vacuum you left',
        body: "When your business has a thin web presence, auto-generated directory pages rank in your place, with your name on them and their ads. The fix is a real site that outranks the junk.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'Schema markup that tells AI exactly who you are, what you do, and where',
      'Content written to answer the questions customers actually ask AI',
      'Consistent business info everywhere, because AI cross-checks sources before recommending',
      'Review signals structured so AI tools can read and cite them',
      'Fast, clean pages that AI crawlers can parse without errors',
      'Included in every website I build, this is not an add-on fee',
    ],
    planNote:
      'AI optimization is built into every plan. It\'s how I build, not an upsell. Websites from $3,000, Growth Plan from $750/mo.',
    faqs: [
      {
        q: 'Is this different from regular SEO?',
        a: 'It builds on it. Good local SEO is the foundation. AI optimization adds the structure and content depth AI tools need to confidently cite you. You need both, and I do both together.',
      },
      {
        q: 'Can you really guarantee ChatGPT recommends me?',
        a: "No one can force an AI to recommend anyone, and anyone who promises that is lying to you. What I do is make you maximally findable and citable. In practice, that's what gets local businesses named.",
      },
      {
        q: 'Does this matter for a small blue-collar business?',
        a: "Especially for you. Your competitors aren't doing it yet. Being the one AI-readable plumber or detailer in your city is a first-mover advantage that gets harder to claim every month.",
      },
    ],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads Management',
    navLabel: 'Google Ads',
    metaTitle: 'Google Ads Management Palm Beach | PPC for Local Businesses',
    metaDescription:
      'Google Ads management for Palm Beach County businesses. Search campaigns built around tracked calls and form fills, managed by the founder. Part of the Full Growth plan.',
    cardBlurb: 'Leads in weeks, not months. Every dollar tied to a tracked call.',
    icon: '▲',
    eyebrow: 'Google Ads (PPC)',
    headlineStart: 'Show up at the exact moment ',
    headlineEm: 'someone needs what you do',
    headlineEnd: '.',
    sub: "SEO compounds, but it takes months. Google Ads puts you at the top of the page tomorrow, for searches like 'ac repair near me' typed by someone whose AC just died. I build campaigns where every dollar is tied to a tracked phone call or form fill.",
    painTitle: 'Why most local Google Ads waste money',
    painPoints: [
      {
        title: 'Broad keywords burning budget on the wrong clicks',
        body: "Agencies love broad match because it spends your budget fast. I build tight keyword lists around buying-intent searches in your service area, with negative keywords blocking the junk.",
      },
      {
        title: 'Ads pointing at a homepage that doesn\'t convert',
        body: "Clicks mean nothing if the page doesn't turn them into calls. Every campaign I run lands on a page built for it, with the offer, the proof, and a click-to-call button above the fold.",
      },
      {
        title: 'No idea what you\'re actually getting for the money',
        body: "If your current agency's report is impressions and clicks, you're being managed, not served. I report tracked calls and form fills, cost per lead, and what I changed this month. One page.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'Search campaigns built around buying-intent keywords in your service area',
      'Landing pages designed to convert, not just look nice',
      'Call tracking so every lead is counted and recorded',
      'Negative keyword lists that block wasted spend',
      'Ongoing bid, ad copy, and budget optimization',
      'One-page monthly report: leads, cost per lead, what changed',
    ],
    planNote:
      'Google Ads management is part of the Full Growth plan at $1,500/mo plus your ad budget. Full Growth carries my 3x-leads-in-90-days guarantee: triple your inbound leads in the first 90 days or my management fee is free.',
    faqs: [
      {
        q: 'How much ad budget do I need?',
        a: 'For most Palm Beach service businesses, $1,000 to $2,500/mo in ad spend is a realistic starting range. We set it together based on your market and how much new work you can actually handle.',
      },
      {
        q: 'How fast do leads start?',
        a: 'Typically within the first two weeks. That\'s the point of pairing ads with SEO: ads produce now while your organic ranking climbs and eventually lets you dial spend down.',
      },
      {
        q: 'Do you take a percentage of ad spend?',
        a: 'No. Flat management fee within Full Growth. Your ad budget goes to Google, not to me, so I have no incentive to inflate your spend.',
      },
    ],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    navLabel: 'Meta Ads',
    metaTitle: 'Facebook & Instagram Ads Palm Beach | Meta Ads Management',
    metaDescription:
      'Facebook and Instagram ads for Palm Beach businesses. Local awareness and lead campaigns with real creative, managed by the founder. Part of the Full Growth plan.',
    cardBlurb: 'Put your business in front of locals scrolling Facebook and Instagram.',
    icon: '◈',
    eyebrow: 'Meta ads',
    headlineStart: 'Be the business ',
    headlineEm: 'everyone in town keeps seeing',
    headlineEnd: '.',
    sub: "Google catches people already searching. Facebook and Instagram put you in front of locals before they search, so when they need a caterer, a detailer, or a repair, your name is the one they already know. For restaurants and local services, this is the awareness engine.",
    painTitle: 'Where local Meta ads go wrong',
    painPoints: [
      {
        title: 'Boosting posts and calling it advertising',
        body: "The blue Boost button is Meta's tax on business owners. Real campaigns use proper objectives, audience targeting by area and interest, and creative built to stop the scroll. Different tool entirely.",
      },
      {
        title: 'Running ads with no way to capture the interest',
        body: 'Awareness without capture is money evaporating. I pair campaigns with lead forms, offers, and retargeting so interest turns into names, numbers, and orders.',
      },
      {
        title: 'Generic stock-photo creative locals scroll right past',
        body: "Your actual food, your actual trucks, your actual before-and-afters outperform stock photos every time. I help you capture the real thing and turn it into ads that feel local because they are.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'Campaigns targeted to your service area and the people most likely to buy',
      'Ad creative built from your real work, not stock photos',
      'Lead forms and offers that capture interest instead of letting it scroll by',
      'Retargeting so people who visited your site keep seeing you',
      'A/B testing on creative and offers, winners scale, losers die fast',
      'Included in the same one-page monthly report as everything else',
    ],
    planNote:
      'Meta ads are part of the Full Growth plan at $1,500/mo plus ad budget, alongside Google Ads, and covered by the same 3x-leads-in-90-days guarantee.',
    faqs: [
      {
        q: 'Google Ads or Meta ads, which do I need?',
        a: "Google catches demand that exists, Meta creates demand that doesn't yet. Emergency services lean Google. Restaurants, catering, and anything visual lean Meta. Full Growth runs both, and the results tell us where your money works hardest.",
      },
      {
        q: 'Do I need to be on camera or make content?',
        a: 'No. Photos of your work, your team, and your results are enough. I handle the copy, the design, and the targeting. If you want to shoot quick phone videos, even better, but it\'s not required.',
      },
      {
        q: 'What budget makes sense for Meta?',
        a: 'Local campaigns can start meaningful testing around $600 to $1,500/mo depending on your goal. We set it inside your overall Full Growth ad budget so the two platforms complement each other.',
      },
    ],
  },
  {
    slug: 'content-writing',
    name: 'Content Writing & Blogging',
    navLabel: 'Content Writing',
    metaTitle: 'Content Writing for Palm Beach Businesses | SEO Blog Writing',
    metaDescription:
      'Service pages, city pages, and blog content for Palm Beach businesses. Written to rank on Google, get cited by AI tools, and sound like you, not a content mill.',
    cardBlurb: 'Pages and posts that rank on Google and sound like an actual human.',
    icon: '✎',
    eyebrow: 'Content writing',
    headlineStart: 'Every page you publish is ',
    headlineEm: 'another way customers find you',
    headlineEnd: '.',
    sub: "A page for every service. A page for every town you serve. Answers to the questions your customers type into Google and ask ChatGPT. That's how small local sites beat bigger competitors, and it's writing most owners never have time to do. I do it for you.",
    painTitle: 'Why content is usually the missing piece',
    painPoints: [
      {
        title: 'One page trying to rank for twenty different searches',
        body: "Google ranks pages, not businesses. If your whole operation lives on one homepage, you're invisible for every specific service and city you don't have a page for. Each new page is a new door in.",
      },
      {
        title: 'AI tools have nothing of yours to cite',
        body: 'When ChatGPT answers "who does mobile detailing in Lake Worth," it pulls from businesses whose sites actually answer that question. Content depth is what gets you cited.',
      },
      {
        title: 'Content-mill writing that reads like a robot wrote it',
        body: "Keyword-stuffed junk hurts more than it helps now. I write in your voice, about your actual work, for your actual area. Locals can tell the difference, and so can Google.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'A dedicated page for every service you offer',
      'City pages for every town in your service area',
      'Blog posts answering the questions your customers actually search',
      'Everything written in your voice, reviewed by you before it goes live',
      'Structured for both Google rankings and AI citations',
      'Published, formatted, and interlinked, not dumped in a doc for you to deal with',
    ],
    planNote:
      'Service and city pages are included in the Growth Plan at $750/mo. Ongoing blog content is scoped based on your market and goals.',
    faqs: [
      {
        q: 'How do you write about my trade accurately?',
        a: "A short conversation with you, plus research. You know the work, I know what Google and AI need. You review everything before it publishes, and after the first few pages I'll have your voice down.",
      },
      {
        q: 'How much content do I need?',
        a: "Enough pages to cover every service-plus-city combination that matters, then steady posts to stay fresh. For most local businesses that's 10 to 30 pages up front, then a sustainable monthly rhythm.",
      },
      {
        q: 'Is AI writing this content?',
        a: "I use modern tools like any serious operator, but nothing publishes without my hands on it and your review. The keyword stuffing and generic filler that gets sites penalized is exactly what I'm hired to prevent.",
      },
    ],
  },
  {
    slug: 'social-media',
    name: 'Social Media Management',
    navLabel: 'Social Media',
    metaTitle: 'Social Media Management Palm Beach | Facebook & Instagram for Local Business',
    metaDescription:
      'Social media management for Palm Beach restaurants and local businesses. Consistent posting, real photos of your work, and profiles that turn followers into customers.',
    cardBlurb: 'Consistent, real posts that make your business look alive and worth calling.',
    icon: '❋',
    eyebrow: 'Social media management',
    headlineStart: 'A dead Instagram page ',
    headlineEm: 'costs you customers',
    headlineEnd: ' you never see.',
    sub: "Before locals call, they check. A Facebook page last updated in 2023 reads as 'maybe closed.' A feed with this week's plates, jobs, and happy customers reads as 'these people are busy for a reason.' I keep you looking alive without you touching it.",
    painTitle: 'The reality for busy owners',
    painPoints: [
      {
        title: 'You know you should post but you never do',
        body: "You're running a business. Posting falls to the bottom of the list every single day, and the gap grows. I take it off your plate entirely: you send me photos from your phone, I do the rest.",
      },
      {
        title: 'Your last post is from months ago and it shows',
        body: 'People checking you out see the silence and quietly pick the competitor whose page looks active. Consistency matters more than brilliance here. Steady beats clever.',
      },
      {
        title: 'Followers that never turn into orders',
        body: "Likes don't pay rent. Every post I make points somewhere: your menu, your booking link, your phone number, your offer. Social is a channel to your register, not a popularity contest.",
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'A consistent posting schedule on Facebook and Instagram',
      'Posts built from your real photos: the food, the jobs, the results',
      'Captions in your voice with local flavor, not corporate filler',
      'Every post linked to an action: call, order, book',
      'Comments and messages monitored so no customer question sits unanswered',
      'Pairs with Meta ads on Full Growth: your best posts become your best ads',
    ],
    planNote:
      'Social media management is scoped to your business and volume. It slots alongside the Growth Plan or Full Growth, and I\'ll quote it straight on the free call.',
    faqs: [
      {
        q: 'What do you need from me?',
        a: "Photos from your phone, sent whenever you have them. A batch of pictures from one busy Saturday can fuel weeks of posts. That's genuinely the whole ask.",
      },
      {
        q: 'Which platforms should I be on?',
        a: 'For Palm Beach local businesses: Facebook and Instagram, done well. Everything else is optional. I\'d rather you dominate two platforms than trickle onto five.',
      },
      {
        q: 'Can you handle my Google Business Profile posts too?',
        a: 'Yes, and you should want that. GBP posts show up right in your Google listing when locals search for you, and almost no competitor is using them.',
      },
    ],
  },
  {
    slug: 'review-management',
    name: 'Review Generation & Reputation',
    navLabel: 'Reviews',
    metaTitle: 'Review Generation Palm Beach | Get More Google Reviews',
    metaDescription:
      'Automated Google review generation for Palm Beach businesses. After every job, your customer gets a text asking for a review. More stars, better rankings, more calls.',
    cardBlurb: 'After every job, a text asking for a Google review. Automatically.',
    icon: '★',
    eyebrow: 'Review generation & reputation',
    headlineStart: 'Your happiest customers ',
    headlineEm: 'would leave a review',
    headlineEnd: '. Nobody asks them.',
    sub: "88% of people trust Google reviews as much as a friend's recommendation, and Google ranks businesses partly on review count and freshness. The businesses winning your market aren't better than you. They just ask, every time, automatically.",
    painTitle: 'Why your review count is stuck',
    painPoints: [
      {
        title: 'Asking depends on you remembering, so it rarely happens',
        body: "You mean to ask. The day gets busy. The moment passes, and a five-star experience becomes zero stars online. I automate the ask so it happens after every single job without anyone remembering anything.",
      },
      {
        title: 'A competitor with 300 reviews outranks your better work',
        body: "Review volume is a ranking signal and a trust signal. The gap compounds monthly: they ask, you don't, and Google keeps score. The only fix is a system that closes the gap on autopilot.",
      },
      {
        title: 'One bad review sitting unanswered at the top of your profile',
        body: 'An ignored complaint reads as guilt. A calm, professional response read by every future customer turns the same review into an asset. I monitor and help you respond to everything.',
      },
    ],
    deliverTitle: 'What you get',
    deliverables: [
      'After every job, your customer gets a text with a direct link to review you on Google',
      'Timing and wording tuned so people actually follow through',
      'Review monitoring across Google and the sites that matter for your trade',
      'Professional responses to every review, good and bad',
      'Review highlights fed to your website and social proof',
      'Duplicate listing cleanup so all your reviews count in one place',
    ],
    planNote:
      'Review generation is included in the Growth Plan at $750/mo. It\'s one of the fastest-visible wins: most clients see new reviews in the first two weeks.',
    faqs: [
      {
        q: 'Is asking for reviews allowed?',
        a: "Asking is fine and every serious business does it. What's not allowed is paying for reviews or filtering out unhappy customers before they can post, and I don't do either. Real asks, real customers, real reviews.",
      },
      {
        q: 'What about bad reviews?',
        a: "They happen to everyone, and a profile with nothing but perfect fives actually reads as fake. What matters is the ratio and the response. I help you respond well and keep the five-star volume growing around it.",
      },
      {
        q: 'How fast does this show results?',
        a: 'New reviews typically start within days of turning it on, because the system asks customers you\'re already serving. The ranking benefit builds as the count and freshness compound.',
      },
    ],
  },
];

export const otherCapabilities = [
  { name: 'Voice AI Phone Answering', blurb: 'An AI receptionist that answers when you can\'t, books the job, and texts back every missed call before they dial your competitor.' },
  { name: 'Chatbots & Lead Capture', blurb: 'A chat widget on your site that answers questions and captures the lead at 11pm when nobody\'s at the desk.' },
  { name: 'Local Services Ads (Google Guaranteed)', blurb: 'The green-checkmark ads above everything else on Google. Setup, verification, and management for contractors and home services.' },
  { name: 'Citation Building & Directory Cleanup', blurb: 'Your business info corrected and built out across the directories Google trusts. The unglamorous work that moves rankings.' },
  { name: 'Wi-Fi Marketing for Restaurants', blurb: 'Guest Wi-Fi that collects emails and brings customers back with offers. Your busiest asset, finally working for you.' },
  { name: 'Email & SMS Marketing', blurb: 'Repeat business on autopilot: offers, reminders, and win-back campaigns to the customer list you already own.' },
  { name: 'Landing Pages & Funnels', blurb: 'Dedicated pages for promotions and ad campaigns, built to convert one specific visitor into one specific action.' },
  { name: 'Ebooks & Lead Magnets', blurb: 'Guides and giveaways that trade value for contact info and fill the top of your funnel.' },
  { name: 'E-commerce & Online Ordering', blurb: 'Online stores and ordering that work with what you already use: Toast, Square, ChowNow. No switching, no disruption.' },
  { name: 'App Development', blurb: 'iOS and Android apps, scoped and built right. I managed app development at a technology company before this, so I know what it should cost and how long it should take.' },
  { name: 'Branding & Logo Design', blurb: 'A clean identity locals recognize on the truck, the sign, and the search result.' },
  { name: 'Photo & Video Coordination', blurb: 'Getting real photos and video of your work, your team, and your results, then putting them everywhere they earn money.' },
  { name: 'Analytics & Call Tracking', blurb: 'Every lead counted and every dollar traced. If I can\'t measure it, I don\'t consider it working.' },
  { name: 'Website Care Plans & Hosting', blurb: 'Hosting, security, backups, and same-day small changes for $99/mo. Just call or text me.' },
  { name: 'IT & Tech Consulting', blurb: 'From data center hardware to software teams, I ran a tech company before Grow Palm Beach. If it plugs in or compiles, I can advise on it.' },
];

/* ============================================================
 * ROUTER POPUP
 * The two-path popup. Shows once per visitor per week, after
 * 15 seconds or 50% scroll, never on /book-call.
 * ============================================================ */

export const popup = {
  question: 'Quick question — which sounds more like you?',
  sub: "30 seconds. I'll point you at the right fix.",
  paths: [
    {
      id: 'website',
      button: 'My website is embarrassing (or doesn\u2019t exist)',
      headline: 'That\u2019s costing you customers every single day.',
      body: 'People are searching for what you do right now, and they\u2019re finding someone else. I\u2019ll look at your web presence before we ever talk — then walk you through exactly what\u2019s broken and what it\u2019s costing you on a free 15-minute call. No pitch, no pressure.',
      proof: '\u201cThe site Matthew built has paid for itself more than 10 times over.\u201d — Hector\u2019s Car Wash',
    },
    {
      id: 'growth',
      button: 'I get some business online, but I\u2019m leaving money on the table',
      headline: 'You\u2019re probably right — and it\u2019s usually fixable fast.',
      body: 'If you\u2019re getting some calls, the foundation works. The gap is usually rankings, reviews, or ad money quietly going to waste. On a free 15-minute call I\u2019ll tell you where you\u2019re leaking leads and what I\u2019d fix first. No pitch, no pressure.',
      proof: 'A Palm Beach client went from a quiet calendar to +312% lead volume in 90 days.',
    },
  ],
  cta: 'Book my free 15-min call',
  or: 'or just call me right now',
};

/* ============================================================
 * PORTFOLIO — sites I built. Screenshot optional; falls back
 * to the client logo in a browser frame.
 * ============================================================ */

export const portfolio = {
  eyebrow: 'The work',
  title: 'Sites I built. Go click them.',
  sub: 'These aren\u2019t mockups \u2014 they\u2019re live client sites earning money right now. Every one designed, built, and maintained by me.',
  items: [
    {
      name: 'Hector\u2019s Car Wash',
      tag: 'Car Wash & Detailing \u00b7 West Palm Beach',
      line: 'Replaced an unreachable one-pager from 2021. Now books detailing appointments around the clock.',
      logo: '/images/hectors_car_wash_logo.png',
      screenshot: '',
      url: 'https://www.hectorcarwash.com',
    },
    {
      name: 'Antonio\u2019s Italian Market & Deli',
      tag: 'Italian Market \u00b7 Juno Beach',
      line: 'Fixed a site with the wrong phone number and years-old info. Works with their existing ordering.',
      logo: '/images/antonios_logo.png',
      screenshot: '',
      url: 'https://www.antoniospb.com',
    },
    {
      name: 'Brothers Taquizas',
      tag: 'Catering \u00b7 Palm Beach County',
      line: 'New site landed their biggest catering order ever in week one.',
      logo: '/images/BT_Logo.png',
      screenshot: '',
      url: 'https://brotherstaquizas.com',
    },
    {
      name: 'PAM Executive Parking',
      tag: 'Luxury Valet \u00b7 West Palm Beach',
      line: 'A clean, fast site built to match a high-end clientele.',
      logo: '/images/PAM_logo.png',
      screenshot: '',
      url: 'https://executiveparkingpb.com',
    },
    {
      name: 'La Esquina Guatemalteca',
      tag: 'Guatemalan Restaurant \u00b7 Jupiter',
      line: 'Full site build for a family-run Guatemalan kitchen \u2014 menu, catering, and their Guatamigos food truck, all in one place.',
      logo: '/images/laesquina_logo.png',
      screenshot: '',
      url: 'https://www.laesquinaguatemalteca.com',
    },
    {
      name: 'Sorgente',
      tag: 'Luxury Water Delivery \u00b7 Palm Beach',
      line: 'My own brand \u2014 built on the exact same stack I sell. I use what I build.',
      logo: '/images/sorgente_logo.png',
      screenshot: '',
      url: 'https://www.sorgentepb.com',
    },
  ],
};

/* ============================================================
 * CONTACT FORM — "Tell me what's broken"
 * ============================================================ */

export const contact = {
  eyebrow: 'No call required',
  title: 'Rather not call? Tell me what\u2019s broken.',
  sub: 'Three fields, thirty seconds. I read every one of these myself and reply the same day \u2014 personally, not an autoresponder.',
  namePlaceholder: 'Your name',
  phonePlaceholder: 'Phone or email',
  messagePlaceholder: 'What\u2019s going on with your website / Google / marketing?',
  button: 'Send it to Matthew',
  success: 'Got it. I\u2019ll get back to you today. \u2014 Matthew',
  textLine: 'Or skip the form and text me right now',
  capacity: 'I take on 3 new clients a month \u2014 every account is me personally, so that\u2019s the honest limit.',
};
