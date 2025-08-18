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
    id: "dina-sara-custo",
    name: "Dina Sara Custo",
    position: "",
    bio: "Junior CS major with a passion for software development and community engagement",
    email: "",
    linkedin: "",
    github: "",
    initials: "DS",
  },
  {
    id: "elta",
    name: "Elta Bajrami",
    position: "",
    bio: "Senior CS major with a passion for software development and community building",
    email: "",
    linkedin: "",
    github: "",
    initials: "EB",
  },
  {
    id: "tanish-pradhan-wong-ah-sui",
    name: "Tanish Pradhan Wong Ah Sui",
    position: "",
    bio: "Senior CS and Physics double major with a passion for machine learning and software development",
    email: "tpradhanwongahsui@vassar.edu",
    linkedin: "https://www.linkedin.com/in/tanish-pradhan-wong-ah-sui/",
    github: "https://github.com/tanwasp",
    initials: "TW",
  },
  // {
  //   id: "maria-johnson",
  //   name: "Maria Johnson",
  //   position: "Vice President",
  //   bio: "Junior CS major with expertise in cybersecurity and software engineering",
  //   email: "maria.johnson@college.edu",
  //   linkedin: "https://linkedin.com/in/maria-johnson",
  //   github: "https://github.com/mariajohnson",
  //   initials: "MJ"
  // },
  // {
  //   id: "david-lee",
  //   name: "David Lee",
  //   position: "Technical Lead",
  //   bio: "Senior CS major passionate about mobile development and UI/UX design",
  //   email: "david.lee@college.edu",
  //   linkedin: "https://linkedin.com/in/david-lee",
  //   github: "https://github.com/davidlee",
  //   initials: "DL"
  // },
  // {
  //   id: "sarah-chen",
  //   name: "Sarah Chen",
  //   position: "Events Coordinator",
  //   bio: "Junior CS major focused on data science and artificial intelligence",
  //   email: "sarah.chen@college.edu",
  //   linkedin: "https://linkedin.com/in/sarah-chen",
  //   github: "https://github.com/sarahchen",
  //   initials: "SC"
  // }
];
