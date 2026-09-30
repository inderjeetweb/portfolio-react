// All of the site's copy lives in this file.
// Edit the text here and the components pick it up — no JSX changes needed.
// (SEO/social-preview tags are static and live in public/index.html.)

// Used in several places below — update it once here.
const yearsOfExperience = '9+';

export const profile = {
  name: 'Inderjeet Das',
  currentTitle: 'Technical Lead',
  company: 'Junglee Games',
  location: 'Gurugram, Haryana',
  email: 'inderjeetweb@gmail.com',
  phone: { display: '+91 95602 32327', href: 'tel:+919560232327' },
  photo: {
    src: '/images/profile-960.jpg',
    srcSet: '/images/profile-480.jpg 480w, /images/profile-720.jpg 720w, /images/profile-960.jpg 960w',
    alt: 'Portrait of Inderjeet Das smiling, in a white shirt',
    width: 960,
    height: 1200,
  },
  // Point this at your latest CV — e.g. drop a PDF in /public and use '/resume.pdf'.
  resumeUrl: 'https://drive.google.com/uc?id=1hCApd2XOS_bo66yJui_wK3CVYm4NHdbJ&export=download',
};

// Section ids double as the in-page anchors used by the navbar.
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const socials = [
  { id: 'github', label: 'GitHub', handle: 'inderjeetweb', href: 'https://github.com/inderjeetweb' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'inderjeetweb', href: 'https://www.linkedin.com/in/inderjeetweb' },
  { id: 'x', label: 'X (Twitter)', handle: '@indjeet19', href: 'https://x.com/indjeet19' },
  { id: 'facebook', label: 'Facebook', handle: 'Inderjeet Das', href: 'https://www.facebook.com/inderjeetweb' },
];

export const hero = {
  greeting: 'Hi, I’m',
  // Cycled by the typing effect (the first one is shown when motion is reduced).
  roles: ['Full Stack Developer', 'Technical Lead', 'Laravel & Node.js Developer', 'UI Developer'],
  tagline:
    'I build responsive, high-traffic web experiences — and the dashboards, APIs and tools that power them.',
  primaryCta: 'View Projects',
  secondaryCta: 'Download Resume',
  // Shown in the code card beside the hero on large screens.
  codeCard: {
    fileName: 'inderjeet.ts',
    experience: `${yearsOfExperience} years`,
    stack: ['Laravel', 'Nest.js', 'Angular', 'MySQL'],
  },
};

export const sections = {
  about: { eyebrow: 'About', title: 'Building for the web since 2016' },
  skills: {
    eyebrow: 'Skills',
    title: 'My toolkit',
    description: 'A full-stack toolkit — from pixel-perfect interfaces to APIs, servers and databases.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I’ve worked',
    description: `${yearsOfExperience} years of building, shipping and leading — from intern to Technical Lead.`,
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected work',
    description:
      'Key projects and modules I’ve built at Junglee Games, the internal dashboards behind them, and the live products I’ve worked on.',
  },
  education: {
    eyebrow: 'Education',
    title: 'Education & training',
    description: 'Formal education, professional courses and the languages I speak.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    description:
      'Have a project, a role or a question in mind? Send a message or reach out directly — I’d love to hear from you.',
  },
};

export const about = {
  paragraphs: [
    `I’m a Full Stack Developer with ${yearsOfExperience} years of experience designing and developing user interfaces, testing, debugging, and mentoring teams on modern web technologies.`,
    'I build dynamic, interactive and responsive websites that drive high traffic, improve user engagement and deliver exceptional user experiences. I’ve contributed to both small-scale and enterprise-level projects across a range of domains.',
  ],
  stats: [
    { value: yearsOfExperience, label: 'Years of experience' },
    { value: '5+', label: 'Years at Junglee Games' },
    { value: '12', label: 'Live websites contributed to' },
    { value: '7', label: 'Internal dashboards developed' },
  ],
};

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'Responsive Design', 'Angular 2+', 'TypeScript'],
  },
  { category: 'Backend', items: ['Core PHP', 'Laravel', 'Node.js', 'Express', 'Nest.js', 'RESTful APIs'] },
  { category: 'Server & Cloud', items: ['Ubuntu', 'CentOS', 'AWS'] },
  { category: 'Database', items: ['MySQL', 'MongoDB', 'Redis'] },
  { category: 'Design', items: ['Adobe Photoshop', 'Adobe Illustrator'] },
  { category: 'CMS', items: ['WordPress'] },
];

export const experience = [
  {
    company: 'Junglee Games India Pvt Ltd',
    period: 'Apr 2020 – Present',
    duration: '5+ years',
    location: 'Gurugram, Haryana',
    roles: [
      {
        title: 'Technical Lead (Full Stack Developer)',
        period: 'Feb 2024 – Present',
        duration: '1 yr 7 mos',
        current: true,
        highlights: [
          'Lead and develop multiple internal projects as a Full Stack Developer and Team Lead.',
          'Responsible for architecture design, development and team coordination.',
        ],
      },
      {
        title: 'SDE III',
        period: 'Apr 2022 – Feb 2024',
        duration: '1 yr 11 mos',
        highlights: [
          'Monitored server performance, analyzed access logs and proactively resolved production issues.',
          'Collaborated with stakeholders to gather requirements and translate them into technical solutions.',
          'Led and mentored team members, ensuring smooth project execution and supporting team growth.',
        ],
      },
      {
        title: 'SDE II',
        period: 'Apr 2020 – May 2022',
        duration: '2 yrs 2 mos',
        highlights: [
          'Developed backend APIs and services using PHP and Laravel to support scalable web applications.',
          'Designed and integrated RESTful APIs with a focus on security and performance.',
          'Partnered with frontend teams to deliver seamless end-to-end features.',
        ],
      },
      {
        title: 'Sr. Operations Executive – UI/UX',
        period: 'Apr 2020',
        duration: '1 mo',
        highlights: [
          'Converted PSD designs into responsive, pixel-perfect HTML/CSS with cross-browser compatibility.',
          'Designed and implemented visually appealing, user-friendly interfaces to improve the overall UX.',
          'Collaborated with stakeholders to translate requirements into intuitive UI flows and components.',
        ],
      },
    ],
  },
  {
    company: 'Kliff Technologies Pvt Ltd',
    period: 'Nov 2016 – Apr 2020',
    duration: '3 yrs 6 mos',
    location: 'Delhi',
    roles: [
      {
        title: 'Web Developer',
        period: 'Jan 2017 – Apr 2020',
        duration: '3 yrs 3 mos',
        highlights: [
          'Worked as a Full Stack Developer, handling client communication, requirements gathering and project delivery.',
          'Managed teams and ensured smooth execution of multiple client projects.',
        ],
      },
      {
        title: 'Intern',
        period: 'Nov 2016 – Jan 2017',
        duration: '3 mos',
        highlights: [
          'Designed and implemented responsive user interfaces using HTML, CSS and JavaScript.',
          'Collaborated with senior developers to enhance UI/UX and improve overall application usability.',
        ],
      },
    ],
  },
];

// `icon` keys map to icons in src/lib/icons.js. Add `live` / `code` URLs to show those buttons.
export const projects = {
  heading: 'Key projects at Junglee Games',
  items: [
    {
      title: 'Rummy School',
      kicker: 'Learning module',
      icon: 'school',
      description:
        'A learning module where players watch tutorial videos to learn the rules of rummy, then take easy, medium and hard quizzes — earning rewards based on their scores.',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://m.jungleerummy.com/rummyschool',
    },
    {
      title: 'Influencers Program',
      kicker: 'Referral system',
      icon: 'users',
      description:
        'A referral-based system where users invite friends and earn money based on their friends’ gameplay and winnings.',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      live: 'https://m.jungleerummy.com/ma/influencers',
    },
    {
      title: 'The Grand Rummy Playground',
      kicker: 'Versions I–IV',
      icon: 'party',
      description:
        'Multiple editions of a large-scale rummy event, with an enhanced UI and engagement features.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Rummy Tournaments & Leaderboards',
      kicker: 'Competitive play',
      icon: 'trophy',
      description:
        'Tournament structures with dynamic leaderboards that display player rankings.',
      tags: ['Laravel', 'Nest.js', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Dynamic Promotions',
      kicker: 'Campaigns',
      icon: 'megaphone',
      description: 'A configurable promotions system for running personalized campaigns for users.',
      tags: ['Laravel', 'Nest.js', 'HTML', 'CSS', 'JavaScript'],
    },
  ],
};

export const dashboards = {
  heading: 'Internal dashboards',
  description: 'Developed and maintained multiple dashboards for analytics, user insights and campaign management.',
  note: 'Internal tool',
  items: [
    {
      title: 'Porto',
      kicker: 'Asset management',
      icon: 'images',
      description:
        'An asset management system for uploading and managing photos, videos, audio files and fonts — with CDN integration and version control for seamless asset delivery.',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Nova',
      kicker: 'Performance',
      icon: 'chartColumn',
      description:
        'A performance dashboard that monitors rake metrics across categories, segmented by state, city, VIP tier and time period (hourly, daily, monthly).',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Luna',
      kicker: 'API dashboard',
      icon: 'webhook',
      description: 'An API-focused dashboard powered by Nest.js for efficient backend service management.',
      tags: ['Nest.js', 'Node.js'],
    },
    {
      title: 'Fornax',
      kicker: 'Ad analytics',
      icon: 'chartPie',
      description:
        'An advertising analytics dashboard that tracks company ad spend across Google Ads, YouTube and Facebook, with automated alerts.',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Corvus, Elara & Stack',
      kicker: 'User & campaign insights',
      icon: 'chartLine',
      description:
        'Dashboards for analyzing user data and campaign performance, giving insight into campaign activity and user engagement.',
      tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    },
  ],
};

export const liveSites = {
  heading: 'Live products I’ve worked on',
  urls: [
    'https://jungleegames.com',
    'https://jungleerummy.com',
    'https://m.jungleerummy.com/rummyschool',
    'https://m.jungleerummy.com/ma/influencers',
    'https://rummy.com',
    'https://howzat.com',
    'https://jungleepoker.com',
    'https://pokerstars.com',
    'https://jungleerummy.com/blog',
    'https://rummy.com/blog',
    'https://howzat.com/blog',
    'https://klifftechnologies.com',
  ],
};

export const education = {
  academic: {
    heading: 'Academic',
    items: [
      { title: 'Graduation', institution: 'Delhi University — School of Open Learning (SOL)', year: '2016' },
      { title: 'Class 12 (Senior Secondary)', institution: 'Haryana Board', year: '2012' },
      { title: 'Class 10 (Secondary)', institution: 'Haryana Board', year: '2010' },
    ],
  },
  courses: {
    heading: 'Courses & training',
    items: [
      { title: 'Angular 2+ Course', institution: 'SDK ITS Solution Pvt. Ltd.', year: '2018' },
      { title: 'Web Designing Course', institution: 'Ducat', year: '2016' },
    ],
  },
  languages: {
    heading: 'Languages',
    items: [
      { name: 'English', level: 'Bilingual' },
      { name: 'Hindi', level: 'Fluent' },
    ],
  },
};

export const contact = {
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitLabel: 'Send message',
    mailtoSubject: 'Hello from your portfolio',
  },
};

export const footer = {
  note: 'Built with React, Tailwind CSS & Framer Motion.',
};
