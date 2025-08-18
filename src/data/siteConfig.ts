// Site-wide configuration and customizable content
export const siteConfig = {
  // Basic site information
  siteName: "VC++",
  tagline: "Vassar College Computer Science Club",
  description:
    "Join us for coding workshops, hackathons, tech talks, and collaborative projects. Build your skills, network with peers, and shape the future of technology.",

  // Contact information
  contact: {
    email: "vcplusplus.vsa@vassar.edu",
    meetingTime: "TBD",
    location: "TBD",
  },

  // Social media links - toggle enabled/disabled
  socialMedia: [
    {
      name: "Discord",
      url: "https://discord.gg/vcpp",
      enabled: false, // Set to true to show Discord link
      icon: "discord",
      bgColor: "bg-indigo-500",
      displayText: "D",
    },
    {
      name: "GitHub",
      url: "https://github.com/vcplusplus",
      enabled: true,
      icon: "github",
      bgColor: "bg-gray-900",
      displayText: null, // Uses SVG icon instead
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/vcpp",
      enabled: false,
      icon: "linkedin",
      bgColor: "bg-blue-600",
      displayText: "in",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/vcpp_club",
      enabled: true,
      icon: "instagram",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      displayText: "IG",
    },
  ],

  // Club mission and values
  mission: {
    title: "Our Mission",
    description:
      "VC++ Computer Science Club is dedicated to fostering a collaborative learning environment where students can enhance their programming skills, explore new technologies, and build meaningful connections within the tech community.",
    vision:
      "We believe that learning programming is best done through hands-on experience, peer collaboration, and real-world projects. Our club provides the platform for students to grow from beginners to confident developers.",
    values: ["Learning", "Innovation", "Community", "Growth"],
  },

  // What the club offers
  offerings: [
    {
      title: "Coding Workshops",
      description:
        "Weekly hands-on sessions covering everything from web development to machine learning",
      icon: "code",
    },
    {
      title: "Hackathons",
      description:
        "Participate in competitive programming events and build innovative solutions",
      icon: "users",
    },
    {
      title: "Project Showcase",
      description:
        "Display your work, get feedback, and collaborate on exciting projects",
      icon: "presentation",
    },
  ],

  // Activities list
  activities: [
    "Weekly coding workshops and tutorials",
    "Competitive programming events",
    "Industry guest speakers and tech talks",
    "Collaborative project development",
    "Career guidance and networking",
  ],
};
