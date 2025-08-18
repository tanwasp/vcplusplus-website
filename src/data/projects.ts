// Projects showcase data
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'game' | 'system' | 'other';
  status: 'completed' | 'in-progress' | 'planning';
  teamMembers: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
  dateCreated: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "club-website",
    title: "VC++ Club Website",
    description: "Modern, responsive website for the computer science club built with Next.js and Tailwind CSS",
    longDescription: "A comprehensive website featuring event management, member profiles, project showcase, and resource sharing. Built with modern web technologies and responsive design principles.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "web",
    status: "completed",
    teamMembers: ["Alex Smith", "David Lee"],
    githubLink: "https://github.com/vcpp-club/website",
    liveLink: "https://vcpp-club.vercel.app",
    dateCreated: "2024-01-15",
    featured: true
  },
  {
    id: "study-buddy-app",
    title: "StudyBuddy Mobile App",
    description: "Cross-platform mobile app to help students find study partners and form study groups",
    longDescription: "A React Native application that connects students based on their courses, study preferences, and schedules. Features real-time messaging, group creation, and study session planning.",
    technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
    category: "mobile",
    status: "in-progress",
    teamMembers: ["Maria Johnson", "Sarah Chen", "Alex Smith"],
    githubLink: "https://github.com/vcpp-club/study-buddy",
    dateCreated: "2024-02-01",
    featured: true
  },
  {
    id: "grade-predictor",
    title: "Grade Predictor AI",
    description: "Machine learning model that predicts student performance based on study habits and assignment scores",
    longDescription: "Using scikit-learn and TensorFlow, this project analyzes student data to predict final grades and identify students who might need additional support.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Flask"],
    category: "ai",
    status: "completed",
    teamMembers: ["Sarah Chen", "David Lee"],
    githubLink: "https://github.com/vcpp-club/grade-predictor",
    dateCreated: "2024-01-20",
    featured: false
  },
  {
    id: "campus-navigator",
    title: "Campus Navigator",
    description: "Interactive campus map with pathfinding and room booking integration",
    longDescription: "A web application that helps new students navigate the campus, find available study rooms, and get directions between buildings.",
    technologies: ["JavaScript", "Leaflet.js", "Node.js", "MongoDB"],
    category: "web",
    status: "in-progress",
    teamMembers: ["David Lee", "Maria Johnson"],
    githubLink: "https://github.com/vcpp-club/campus-navigator",
    dateCreated: "2024-02-15",
    featured: true
  },
  {
    id: "code-reviewer-bot",
    title: "Automated Code Review Bot",
    description: "GitHub bot that provides automated code review suggestions using static analysis",
    longDescription: "A Node.js bot that integrates with GitHub to automatically review pull requests, check code quality, and suggest improvements.",
    technologies: ["Node.js", "GitHub API", "ESLint", "Docker"],
    category: "system",
    status: "planning",
    teamMembers: ["Alex Smith"],
    githubLink: "https://github.com/vcpp-club/code-reviewer-bot",
    dateCreated: "2024-03-01",
    featured: false
  },
  {
    id: "retro-snake-game",
    title: "Retro Snake Game",
    description: "Classic snake game with modern twist, built during Winter Hackathon 2024",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS"],
    category: "game",
    status: "completed",
    teamMembers: ["Various hackathon participants"],
    githubLink: "https://github.com/vcpp-club/retro-snake",
    liveLink: "https://vcpp-club.github.io/retro-snake",
    dateCreated: "2024-02-01",
    featured: false
  }
];

export const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'ai', label: 'AI/ML' },
  { key: 'game', label: 'Games' },
  { key: 'system', label: 'Systems' },
  { key: 'other', label: 'Other' }
];