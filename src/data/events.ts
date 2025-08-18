// Events data structure
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'workshop' | 'hackathon' | 'talk' | 'meeting' | 'social';
  spots?: number;
  registrationLink?: string;
  isRegistrationOpen?: boolean;
  prerequisites?: string[];
  materials?: string[];
}

export const upcomingEvents: Event[] = [
  {
    id: "react-workshop-mar",
    title: "React Workshop",
    date: "2024-03-15",
    time: "6:00 PM - 8:00 PM",
    location: "Computer Lab A",
    description: "Learn modern React development with hooks and state management. We'll build a complete todo app from scratch.",
    type: "workshop",
    spots: 25,
    registrationLink: "https://forms.google.com/react-workshop",
    isRegistrationOpen: true,
    prerequisites: ["Basic JavaScript knowledge", "Node.js installed"],
    materials: ["Laptop", "Code editor (VS Code recommended)"]
  },
  {
    id: "spring-hackathon",
    title: "Spring Hackathon 2024",
    date: "2024-03-22",
    time: "9:00 AM - 9:00 AM (+1 day)",
    location: "Main Auditorium & Computer Labs",
    description: "24-hour coding competition with amazing prizes. Teams of 2-4 people. Build anything you want!",
    type: "hackathon",
    spots: 50,
    registrationLink: "https://forms.google.com/spring-hackathon",
    isRegistrationOpen: true,
    materials: ["Laptop", "Chargers", "Sleeping bag (optional)"]
  },
  {
    id: "ai-industry-talk",
    title: "Guest Speaker: AI in Industry",
    date: "2024-03-29",
    time: "7:00 PM - 8:30 PM",
    location: "Lecture Hall B",
    description: "Industry expert from Google AI discusses real-world AI applications and career opportunities",
    type: "talk",
    spots: 100,
    registrationLink: "https://forms.google.com/ai-talk",
    isRegistrationOpen: true
  },
  {
    id: "python-fundamentals",
    title: "Python Fundamentals for Beginners",
    date: "2024-04-05",
    time: "6:00 PM - 8:00 PM", 
    location: "Computer Lab B",
    description: "Introduction to Python programming for absolute beginners. No prior experience required!",
    type: "workshop",
    spots: 30,
    registrationLink: "https://forms.google.com/python-basics",
    isRegistrationOpen: true,
    prerequisites: ["None - beginner friendly!"],
    materials: ["Laptop"]
  }
];

export const pastEvents: Event[] = [
  {
    id: "python-basics-feb",
    title: "Python Fundamentals",
    date: "2024-02-15",
    time: "6:00 PM - 8:00 PM",
    location: "Computer Lab A",
    description: "Introduction to Python programming for beginners",
    type: "workshop"
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    date: "2024-02-08",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Lab A & B",
    description: "Full-stack web development using HTML, CSS, JavaScript, and Node.js",
    type: "workshop"
  },
  {
    id: "winter-hackathon",
    title: "Winter Hackathon 2024",
    date: "2024-02-01",
    time: "6:00 PM - 6:00 PM (+1 day)",
    location: "Main Auditorium",
    description: "24-hour winter-themed hackathon with 40+ participants",
    type: "hackathon"
  }
];