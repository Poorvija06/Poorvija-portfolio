// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update anything on the site — no need to
// touch component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Poorvija Dhanu Sri D',
  firstName: 'Poorvija',
  initials: 'PD',
  title: 'Front-End Developer',
  subtitle: 'B.E. Computer Science Engineering —Final Year',
  location: 'Tiruchirappalli, Tamil Nadu, India',
  email: 'poorvija@gmail.com',
  github: 'https://github.com/Poorvija06',
  linkedin: 'https://www.linkedin.com/in/poorvija-dhanu-sri-d-b31886297',
  photo: '/images/Poorvija.jpg',
  tagline: 'I build interfaces that feel as good as they look.',
  bio: [
    "I'm a Final year Computer Science Engineering student who fell in love with the front end — the exact point where logic meets feeling. My days go into React components, Tailwind utility classes, and just enough JavaScript to make things move the way I imagine them.",
    "Alongside coursework, I've spent this year in internships that stretched me across full-stack development, AI-powered analytics, and UI/UX — proof that I'd rather learn by shipping than by watching.",
  ],
  resumeUrl: '/resume/Poorvija_Dhanusri_Resume final.pdf',
  availability: 'Open to Front-End & Full-Stack Internships',
}

export const stats = [
  { label: 'Internships Completed', value: '4' },
  { label: 'Live Projects Shipped', value: '3' },
  { label: 'Certifications Earned', value: '7' },
]

export const skills = [
  {
    category: 'Languages & Core',
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    category: 'Frameworks & Styling',
    items: [
      { name: 'React.js', level: 82 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Vercel', level: 78 },
      { name: 'Render', level: 75 },
    ],
  },
  {
    category: 'Exploring',
    items: [
      { name: 'Artificial Intelligence', level: 60 },
      { name: 'MongoDB', level: 55 },
      { name: 'Cloud Computing', level: 55 },
    ],
  },
]

// Unified chronological journey — education + experience merged
// into a single timeline, newest first.
export const journey = [
  {
    type: 'experience',
    title: 'AI Internship',
    org: 'Thiagarajar College of Engineering',
    period: 'Jun 2026',
    location: 'Madurai, Tamil Nadu · Hybrid',
    description:
      'Working on an AI-powered predictive analytics and decision-support system as part of a multi-domain applications summer internship run by the TCE AI Consortium.',
    tags: ['AI', 'Predictive Analytics', 'Python'],
  },
  {
    type: 'experience',
    title: 'Full-Stack Development Internship',
    org: 'NoviTech R&D Pvt Ltd',
    period: 'Apr 2026 — Present',
    location: 'Coimbatore, Tamil Nadu',
    description:
      'Completing a 30-day intensive MasterClass in full-stack development, building complete web applications from database to deployed front end.',
    tags: ['Full-Stack', 'React', 'Node.js'],
  },
  {
    type: 'experience',
    title: 'Web Application Development Internship',
    org: 'Svasti Technology Solutions',
    period: 'Jul 2025',
    location: 'Tiruchirappalli, Tamil Nadu',
    description:
      'Focused on web application interface design and UX optimization, contributing to real project work in the Web Application Development & AI Tools domain.',
    tags: ['UI/UX', 'Web Apps', 'AI Tools'],
  },
  {
    type: 'experience',
    title: 'Web Developer Internship',
    org: 'Scripting Spider',
    period: 'Jul 2025',
    location: 'Theni, Tamil Nadu',
    description:
      'Completed a hands-on web development internship, translating design concepts into functional, responsive front-end pages.',
    tags: ['Web Development', 'Responsive Design'],
  },
  {
    type: 'education',
    title: 'B.E. Computer Science Engineering',
    org: 'M.A.M. College of Engineering and Technology',
    period: 'Sep 2023 — May 2027',
    location: 'Tiruchirappalli, Tamil Nadu',
    description:
      'Currently in Final year, maintaining a Grade A average while building a front-end specialization through internships and self-driven projects.',
    tags: ['CGPA: 8.24', 'Computer Science'],
  },
  {
    type: 'education',
    title: 'Higher Secondary — Mathematics & Computer Science',
    org: 'Don Bosco Matriculation Higher Secondary School, Paramakudi',
    period: 'Jun 2020 — May 2023',
    location: 'Paramakudi, Tamil Nadu',
    description:
      'Completed secondary and higher secondary education with a focus on Mathematics and Computer Science, graduating with a Grade A.',
    tags: ['Percentage : 87', 'Mathematics + Computer Science'],
  },
]

export const projects = [
  {
    title: 'Heaven Bite',
    tagline: 'Pizza ordering experience',
    description:
      'A multi-page food ordering website for a fictional pizza brand, featuring a menu system, offers & reviews page, and a contact flow — built to feel fast and appetite-driving from the first scroll.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://heaven-bite.vercel.app/',
    githubUrl: 'https://github.com/Poorvija06',
    accent: 'emerald',
  },
  {
    title: 'Focus & Freeze Studio',
    tagline: 'Photography & videography portfolio',
    description:
      "A cinematic multi-page site for a photography and videography studio in Chennai, with dedicated Services and Gallery pages designed to showcase visual work with minimal distraction.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://focus-freeze.vercel.app/',
    githubUrl: 'https://github.com/Poorvija06',
    accent: 'gold',
  },
  {
    title: 'House Price Predictor',
    tagline: 'Machine learning web application',
    description:
      'A deployed ML-powered web app that predicts house prices from key property features, connecting a trained regression model to a usable front-end interface and a live Render backend.',
    tech: ['Python', 'Machine Learning', 'Render'],
    liveUrl: 'https://house-pricepredictor.onrender.com/',
    githubUrl: 'https://github.com/Poorvija06',
    accent: 'emerald',
  },
]

export const certificates = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Jan — Apr 2025',
    image: '/certificates/nptel-cloud-computing.jpg',
    detail: '12-week course · Consolidated score 55% · 3–4 recommended credits',
  },
  {
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB, Inc.',
    date: 'Apr 2025',
    image: '/certificates/mongodb-basics.jpg',
    detail: 'Proof of completion, issued by MongoDB Education',
  },
  {
    title: 'IP Utsav — Masterclass Series',
    issuer: 'AICTE & MoE Innovation Cell',
    date: 'Apr 2025',
    image: '/certificates/ip-utsav.jpg',
    detail: 'Certificate of Participation, Ministry of Education Innovation Cell',
  },
  {
    title: 'Full Stack Development MasterClass',
    issuer: 'NoviTech R&D Pvt Ltd',
    date: 'Mar — Apr 2026',
    image: '/certificates/novitech-fullstack.jpg',
    detail: '30-day intensive certificate of completion',
  },
  {
    title: 'Web Application Development Internship',
    issuer: 'Svasti Technology Solutions',
    date: 'Jul 2025',
    image: '/certificates/svasti-internship.jpg',
    detail: 'Two-week internship certificate, 70 hours',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Scripting Spider',
    date: 'Jul 2025',
    image: '/certificates/scripting-spider.jpg',
    detail: 'Certificate of internship completion',
  },
  {
    title: 'Summer Internship 2026',
    issuer: 'Thiagarajar College of Engineering',
    date: 'Jun 2026',
    image: '/certificates/thiagarajar-internship.jpg',
    detail: 'AI-Powered Predictive Analytics & Decision Support System',
  },
]

export const socials = [
  { name: 'GitHub', url: profile.github, icon: 'Github' },
  { name: 'LinkedIn', url: profile.linkedin, icon: 'Linkedin' },
  { name: 'Email', url: `mailto:${profile.email}`, icon: 'Mail' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]
