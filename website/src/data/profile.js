export const profile = {
  name: 'Luis E. De Pombo Puerta',
  shortName: 'Luis De Pombo',
  title: 'Builder · Engineer · Founder',
  tagline:
    'Building AI products at the intersection of civil engineering, space research, and human-centered technology.',
  bio: 'Builder/Founder at PsychNow & SoberCount. Engineer at NASA OSDR Analysis Working Group. Previously RLHF at Scale AI and tech governance at Colombia\'s Ministry of Transport. BSc & MSc in Civil Engineering from the University of Illinois Urbana-Champaign.',
  location: 'Cartagena, Colombia',
  email: 'depombo2@gmail.com',
  avatar: '/assets/photo-of-Luis.jpeg',
  social: {
    x: {
      handle: 'luisdepombo',
      url: 'https://x.com/luisdepombo',
      followers: 118,
      following: 831,
    },
    github: {
      handle: 'ledp1',
      url: 'https://github.com/ledp1',
    },
    linkedin: {
      handle: 'luis-eduardo-de-pombo-puerta',
      url: 'https://www.linkedin.com/in/luis-eduardo-de-pombo-puerta/',
    },
  },
};

export const experience = [
  {
    id: 1,
    role: 'Builder / Founder',
    company: 'PsychNow',
    companyUrl: 'https://psychnow.co',
    period: 'Present',
    description:
      'Co-building PsychNow — a mental health platform focused on accessible, technology-driven care.',
    skills: ['Product', 'AI', 'Healthcare', 'Startup'],
  },
  {
    id: 2,
    role: 'Builder / Founder',
    company: 'SoberCount',
    companyUrl: 'https://sobercount.com',
    period: 'Present',
    description:
      'Co-founding SoberCount — a recovery and sobriety tracking platform helping people stay accountable.',
    skills: ['Product', 'Mobile', 'Health Tech', 'Startup'],
  },
  {
    id: 3,
    role: 'Engineer',
    company: 'NASA OSDR Analysis Working Group',
    companyUrl: 'https://awg.osdr.space',
    period: 'Present',
    description:
      'Contributing structural integrity models for ISS centrifuges and lunar rover wheels. Direct contributor to the NASA OSDR SPLASH database and Hardware AWG adopt-an-instrument initiative.',
    skills: ['Space Research', 'Structural Engineering', 'Python', 'SymPy'],
  },
  {
    id: 4,
    role: 'RLHF Engineer',
    company: 'Scale AI',
    companyUrl: 'https://scale.com',
    period: 'Previous',
    description:
      'Worked on Reinforcement Learning from Human Feedback (RLHF) pipelines to improve large language model alignment and quality.',
    skills: ['RLHF', 'LLMs', 'Machine Learning', 'AI Safety'],
  },
  {
    id: 5,
    role: 'Tech Governance',
    company: 'Ministry of Transport, Colombia',
    companyUrl: 'https://www.mintransporte.gov.co',
    period: 'Previous',
    description:
      'Advised on technology governance and digital transformation initiatives for Colombia\'s transportation sector.',
    skills: ['Policy', 'Governance', 'Digital Transformation'],
  },
];

export const education = [
  {
    degree: 'Master of Science in Civil Engineering',
    school: 'University of Illinois Urbana-Champaign',
    schoolUrl: 'https://grainger.illinois.edu',
    detail: 'Specialized in construction management and technology.',
  },
  {
    degree: 'Bachelor of Science in Civil Engineering',
    school: 'University of Illinois Urbana-Champaign',
    schoolUrl: 'https://grainger.illinois.edu',
    detail: 'Focused on core engineering principles and sustainable design.',
  },
];

export const skills = [
  'Machine Learning',
  'RLHF & LLMs',
  'Python',
  'React',
  'FastAPI',
  'AWS',
  'Databricks',
  'Docker',
  'Structural Engineering',
  'Space Research',
  'SysML / MBSE',
  'Git',
];

export const projects = [
  {
    id: 1,
    title: 'Hive',
    description:
      'Outcome-driven agent development framework that evolves — building autonomous AI agents with measurable results.',
    tags: ['AI Agents', 'Python', 'Framework'],
    link: 'https://github.com/ledp1/hive',
    featured: true,
  },
  {
    id: 2,
    title: 'Recommendation System',
    description:
      'Production movie recommendation system with Databricks, AWS Lambda, and ALS collaborative filtering.',
    tags: ['ML', 'AWS', 'Databricks'],
    link: 'https://github.com/ledp1/recommendation-system',
    featured: true,
  },
  {
    id: 3,
    title: 'AWG Hardware Models',
    description:
      'Structural integrity models (SymPy) for active ISS centrifuges and lunar rover wheels. Direct contribution to NASA OSDR SPLASH database.',
    tags: ['NASA', 'Space', 'SymPy'],
    link: 'https://github.com/ledp1/awg-hardware-models',
    featured: true,
  },
  {
    id: 4,
    title: 'Mars Mission Planner',
    description:
      'Full-stack Mars mission planning & simulation with real orbital mechanics calculations and 3D visualization.',
    tags: ['Space', 'React', 'Orbital Mechanics'],
    link: 'https://github.com/ledp1/mars-mission-planner',
    featured: false,
  },
  {
    id: 5,
    title: 'AI-MBSE',
    description:
      'AI-powered MBSE tool for analyzing SysML Activity Diagrams with a focus on aerospace safety.',
    tags: ['Aerospace', 'SysML', 'FastAPI'],
    link: 'https://github.com/ledp1/ai-mbse',
    featured: false,
  },
  {
    id: 6,
    title: 'LuisQuisite',
    description: 'The voice agent for robot waitresses — conversational AI for hospitality robotics.',
    tags: ['Voice AI', 'Robotics', 'NLP'],
    link: 'https://github.com/ledp1/luisquisite',
    featured: false,
  },
  {
    id: 7,
    title: 'Tunnel Network Optimizer',
    description:
      'Advanced tunnel network planning and optimization system for high-speed transit infrastructure.',
    tags: ['Civil Engineering', 'Optimization', 'Infrastructure'],
    link: 'https://github.com/ledp1/tunnel-network-optimizer',
    featured: false,
  },
  {
    id: 8,
    title: 'xAI Distributed Training',
    description:
      'High-performance distributed training framework for reasoning models.',
    tags: ['Deep Learning', 'Distributed Systems', 'LLMs'],
    link: 'https://github.com/ledp1/xai-distributed-training',
    featured: false,
  },
];

export const interests = [
  'Space exploration & NASA open science',
  'AI agents & LLM alignment',
  'Civil engineering & infrastructure',
  'Mental health technology',
  'Open source developer tools',
];
