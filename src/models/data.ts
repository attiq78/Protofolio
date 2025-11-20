import { Education, PersonalInfo, Project, Skill } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'MUHAMMAD ATTIQUE',
  title: 'Full Stack Developer',
  bio: 'I can build user-friendly Full Stack applications for you.\n ',
  skill: 'NextJS, ReactJs, NodeJS, MongoDB.',
  email: 'attiq1367@gmail.com',
  location: 'Karachi, Pakistan',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/attiq78',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-attiq-1b5b09268',
      icon: 'linkedin',
    },
    
  ],
};

export const skills: Skill[] = [
  { name: 'HTML', level: 95, category: 'frontend', icon: 'HTML', color: '#F97316' },
  { name: 'CSS', level: 94, category: 'frontend', icon: 'CSS', color: '#2563EB' },
  { name: 'Bootstrap', level: 92, category: 'frontend', icon: 'B', color: '#7C3AED' },
  { name: 'Tailwind CSS', level: 93, category: 'frontend', icon: 'TW', color: '#0EA5E9' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: 'JS', color: '#FACC15' },
  { name: 'TypeScript', level: 88, category: 'frontend', icon: 'TS', color: '#3B82F6' },
  { name: 'ReactJS', level: 90, category: 'frontend', icon: '⚛︎', color: '#38BDF8' },
  { name: 'NextJS', level: 70, category: 'frontend', icon: 'NEXT', color: '#3B82F6' },
  { name: 'NodeJS', level: 85, category: 'backend', icon: 'Node', color: '#22C55E' },
  { name: 'ExpressJS', level: 82, category: 'backend', icon: 'Ex', color: '#475569' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: 'DB', color: '#16A34A' },
  { name: 'SQL', level: 78, category: 'backend', icon: 'SQL', color: '#0EA5E9' },
  
  { name: 'Git', level: 88, category: 'tools', icon: '</>', color: '#F97316' },
  { name: 'GitHub', level: 87, category: 'tools', icon: '{}', color: '#111827' },
  { name: 'Postman', level: 76, category: 'tools', icon: 'PM', color: '#F97316' },
  { name: 'C#', level: 72, category: 'other', icon: 'C#', color: '#6366F1' },
];

export const education: Education[] = [
  {
    institution: 'Bahria University Karachi Campus',
    degree: 'Bachelor of Software Engineering',
    period: '2021 - 2025',
    logo: '/bse.jpeg',
    description: 'Focused on software engineering fundamentals, distributed systems, and modern web technologies.',
  },
  {
    institution: 'Fazaia Degree College Faisal Base',
    degree: 'Intermediate · Pre-Engineering',
    period: '2019 - 2021',
    logo: '/inter.jpeg',
    description: 'Built a strong foundation in mathematics and physics with early exposure to programming concepts.',
  },
  {
    institution: 'Bahria Model School Hanif SRE',
    degree: 'Matriculation · Computer Science',
    period: '2018 - 2019',
    logo: '/matric.jpeg',
    description: 'Introduced to core computer science ideas and problem solving through practical projects.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: '/Ecommerce.JPG',
    technologies: ['React', 'Next.js', 'TypeScript', 'NextAuth', 'Tailwind CSS','Node.js', 'MongoDB', 'stripe'],
    githubUrl: 'https://github.com/attiq78/Flock-by-Attiq',
    liveUrl: 'https://flock-by-attiq-vddl.vercel.app',
  },
  {
    id: '2',
    title: 'Expense Management',
    description: 'A smart expense management app that helps users track spending, categorize transactions, and monitor budgets effortlessly.',
    image: '/Expense.JPG',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/attiq78/Expense-Management',
    liveUrl: 'https://expense-management-eight-xi.vercel.app/',
  },
  {
    id: '3',
    title: 'Quiz App',
    description: 'A modern, responsive quiz application offering timed questions, instant results, and performance tracking.',
    image: '/Quiz.JPG',
    technologies: ['Next.js', 'javascript', 'CSS'],
    githubUrl: 'https://github.com/attiq78/Quiz-app',
    liveUrl: 'https://quiz-app-red-eta.vercel.app/',
  },
  // {
  //   id: '4',
  //   title: 'Weather Dashboard',
  //   description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
  //   image: '/Weather.JPG',
  //   technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
  //   githubUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  // },
  
];

