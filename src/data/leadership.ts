// Leadership team information
export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  email?: string;
  linkedin?: string;
  github?: string;
  initials: string;
}

export const leadership: LeadershipMember[] = [
  {
    id: "alex-smith",
    name: "Alex Smith",
    position: "President",
    bio: "Senior CS major specializing in full-stack development and machine learning",
    email: "alex.smith@college.edu",
    linkedin: "https://linkedin.com/in/alex-smith",
    github: "https://github.com/alexsmith",
    initials: "AS"
  },
  {
    id: "maria-johnson", 
    name: "Maria Johnson",
    position: "Vice President",
    bio: "Junior CS major with expertise in cybersecurity and software engineering",
    email: "maria.johnson@college.edu",
    linkedin: "https://linkedin.com/in/maria-johnson",
    github: "https://github.com/mariajohnson",
    initials: "MJ"
  },
  {
    id: "david-lee",
    name: "David Lee", 
    position: "Technical Lead",
    bio: "Senior CS major passionate about mobile development and UI/UX design",
    email: "david.lee@college.edu",
    linkedin: "https://linkedin.com/in/david-lee",
    github: "https://github.com/davidlee",
    initials: "DL"
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    position: "Events Coordinator", 
    bio: "Junior CS major focused on data science and artificial intelligence",
    email: "sarah.chen@college.edu",
    linkedin: "https://linkedin.com/in/sarah-chen",
    github: "https://github.com/sarahchen",
    initials: "SC"
  }
];