// Learning resources and useful links
export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'tutorial' | 'documentation' | 'tool' | 'course' | 'book' | 'practice' | 'community';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  isExternal: boolean;
  isPaid?: boolean;
}

export const resources: Resource[] = [
  // Programming Fundamentals
  {
    id: "mdn-javascript",
    title: "MDN JavaScript Guide",
    description: "Comprehensive JavaScript documentation and tutorials",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    category: "documentation",
    difficulty: "beginner",
    tags: ["javascript", "web development", "fundamentals"],
    isExternal: true
  },
  {
    id: "python-org-tutorial",
    title: "Official Python Tutorial",
    description: "The official Python tutorial from python.org",
    url: "https://docs.python.org/3/tutorial/",
    category: "tutorial",
    difficulty: "beginner",
    tags: ["python", "fundamentals", "official"],
    isExternal: true
  },
  
  // Web Development
  {
    id: "react-docs",
    title: "React Documentation",
    description: "Official React documentation with examples and best practices",
    url: "https://react.dev/",
    category: "documentation",
    difficulty: "intermediate",
    tags: ["react", "frontend", "javascript"],
    isExternal: true
  },
  {
    id: "css-tricks",
    title: "CSS-Tricks",
    description: "Tips, tricks, and techniques on using CSS",
    url: "https://css-tricks.com/",
    category: "tutorial",
    difficulty: "beginner",
    tags: ["css", "frontend", "design"],
    isExternal: true
  },
  
  // Programming Practice
  {
    id: "leetcode",
    title: "LeetCode",
    description: "Platform for practicing coding problems and interview preparation",
    url: "https://leetcode.com/",
    category: "practice",
    difficulty: "intermediate",
    tags: ["algorithms", "data structures", "interview prep"],
    isExternal: true
  },
  {
    id: "codewars",
    title: "Codewars",
    description: "Achieve mastery through challenge",
    url: "https://www.codewars.com/",
    category: "practice",
    difficulty: "beginner",
    tags: ["practice", "kata", "multiple languages"],
    isExternal: true
  },
  
  // Tools
  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "Free code editor with powerful features and extensions",
    url: "https://code.visualstudio.com/",
    category: "tool",
    difficulty: "beginner",
    tags: ["editor", "development", "free"],
    isExternal: true
  },
  {
    id: "git-handbook",
    title: "Git Handbook",
    description: "Learn Git version control from GitHub",
    url: "https://guides.github.com/introduction/git-handbook/",
    category: "tutorial",
    difficulty: "beginner",
    tags: ["git", "version control", "github"],
    isExternal: true
  },
  
  // Courses
  {
    id: "cs50",
    title: "CS50: Introduction to Computer Science",
    description: "Harvard's introduction to computer science and programming",
    url: "https://cs50.harvard.edu/",
    category: "course",
    difficulty: "beginner",
    tags: ["computer science", "fundamentals", "harvard"],
    isExternal: true
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    description: "Learn to code for free with hands-on projects",
    url: "https://www.freecodecamp.org/",
    category: "course",
    difficulty: "beginner",
    tags: ["web development", "free", "projects"],
    isExternal: true
  },
  
  // Books
  {
    id: "clean-code",
    title: "Clean Code by Robert Martin",
    description: "A handbook of agile software craftsmanship",
    url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    category: "book",
    difficulty: "intermediate",
    tags: ["best practices", "software engineering"],
    isExternal: true,
    isPaid: true
  },
  {
    id: "eloquent-javascript",
    title: "Eloquent JavaScript",
    description: "A modern introduction to programming",
    url: "https://eloquentjavascript.net/",
    category: "book",
    difficulty: "beginner",
    tags: ["javascript", "fundamentals", "free"],
    isExternal: true
  },
  
  // Community
  {
    id: "stackoverflow",
    title: "Stack Overflow",
    description: "Q&A platform for programmers",
    url: "https://stackoverflow.com/",
    category: "community",
    difficulty: "beginner",
    tags: ["q&a", "community", "help"],
    isExternal: true
  },
  {
    id: "dev-to",
    title: "DEV Community",
    description: "A community of software developers getting together to help one another out",
    url: "https://dev.to/",
    category: "community",
    difficulty: "beginner",
    tags: ["community", "articles", "networking"],
    isExternal: true
  }
];

export const resourceCategories = [
  { key: 'all', label: 'All Resources' },
  { key: 'tutorial', label: 'Tutorials' },
  { key: 'documentation', label: 'Documentation' },
  { key: 'tool', label: 'Tools' },
  { key: 'course', label: 'Courses' },
  { key: 'book', label: 'Books' },
  { key: 'practice', label: 'Practice' },
  { key: 'community', label: 'Community' }
];

export const difficultyLevels = [
  { key: 'all', label: 'All Levels' },
  { key: 'beginner', label: 'Beginner' },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'advanced', label: 'Advanced' }
];