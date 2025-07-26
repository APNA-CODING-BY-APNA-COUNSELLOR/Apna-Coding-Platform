export interface HackathonData {
  id: string
  title: string
  description: string
  image: string
  startDate: string
  endDate: string
  location: string
  prizePool: string
  participants: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  registrationOpen: boolean
  registrationLocked?: boolean
  technologies: string[]
  organizer: string
  partnerships: string[]
  registrationLink?: string
  whatsappLink?: string
  featured?: boolean
}

export const featuredHackathons: HackathonData[] = [
  {
    id: "bnb-ai-hack-mumbai-2025",
    title: "🚀 BNB AI Hack | Bombay Edition",
    description:
      "After the massive success in Delhi, we're back — this time in Bombay — with double the energy, ideas, and innovation! Open to Students, Developers, AI/ML Engineers, Startups & Designers. Tracks: AI | DeSoc | DeSci | DePIN. Onsite perks: BNB goodies, mentorship, food & top-tier networking.",
    image: "https://i.ibb.co/VWH05XNG/Whats-App-Image-2025-07-06-at-21-43-31-0cab0a8e.jpg"
    startDate: "2025-08-22",
    endDate: "2025-08-24",
    location: "Mumbai, India",
    prizePool: "$100K+",
    participants: 100,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["AI", "DeSoc", "DeSci", "DePIN", "Blockchain", "Web3"],
    organizer: "BNB Chain",
    partnerships: ["Fluxor.io"],
    registrationLink: "https://lu.ma/eh5zbws2?tk=6ShEgk",
    whatsappLink: "https://chat.whatsapp.com/BNBAIHackMumbai2025",
    featured: true,
  },
]

export const hackathons: HackathonData[] = [
  ...featuredHackathons,
  {
    id: "smart-india-hackathon-2025",
    title: "Smart India Hackathon 2025",
    description:
      "India's biggest hackathon bringing together students, startups, and innovators to solve real-world problems using cutting-edge technology. Join thousands of participants across multiple cities.",
    image: "/images/smart-india-hackathon.jpeg",
    startDate: "2025-08-15",
    endDate: "2025-08-17",
    location: "Multiple Cities, India",
    prizePool: "₹50 Lakhs",
    participants: 15000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["AI/ML", "IoT", "Blockchain", "AR/VR", "Cybersecurity"],
    organizer: "Government of India",
    partnerships: ["AICTE", "Ministry of Education"],
    registrationLink: "https://www.sih.gov.in/register",
    whatsappLink: "https://chat.whatsapp.com/SmartIndiaHackathon2025",
    featured: false,
  },
  {
    id: "google-solution-challenge-2025",
    title: "Google Solution Challenge 2025",
    description:
      "Build solutions for local community problems using Google technologies. Open to university students worldwide. Create impactful solutions using Google Cloud, Firebase, and other Google developer tools.",
    image: "/images/google-solution-challenge.jpeg",
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    location: "Global (Virtual)",
    prizePool: "$100,000",
    participants: 8000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Flutter", "Firebase", "Google Cloud", "TensorFlow", "Android"],
    organizer: "Google",
    partnerships: ["Google Developer Groups"],
    registrationLink: "https://developers.google.com/community/gdsc-solution-challenge",
    whatsappLink: "https://chat.whatsapp.com/GoogleSolutionChallenge2025",
    featured: false,
  },
  {
    id: "microsoft-imagine-cup-2025",
    title: "Microsoft Imagine Cup 2025",
    description:
      "The world's premier student technology competition. Create innovative solutions using Microsoft technologies and compete for amazing prizes. Open to students worldwide with local and global rounds.",
    image: "/images/microsoft-imagine-cup.jpeg",
    startDate: "2025-10-15",
    endDate: "2025-10-17",
    location: "Seattle, USA",
    prizePool: "$200,000",
    participants: 12000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Azure", ".NET", "AI", "Mixed Reality", "Power Platform"],
    organizer: "Microsoft",
    partnerships: ["Microsoft Student Partners"],
    registrationLink: "https://imaginecup.microsoft.com/register",
    whatsappLink: "https://chat.whatsapp.com/MicrosoftImagineCup2025",
    featured: false,
  },
  {
    id: "eth-india-2025",
    title: "ETHIndia 2025",
    description:
      "India's largest Ethereum hackathon bringing together developers, designers, and blockchain enthusiasts. Build the future of decentralized applications with amazing prizes and mentorship from industry experts.",
    image: "/images/eth-india-2025.jpeg",
    startDate: "2025-12-01",
    endDate: "2025-12-03",
    location: "Bangalore, India",
    prizePool: "$150,000",
    participants: 3000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Ethereum", "Solidity", "Web3", "DeFi", "NFTs"],
    organizer: "Ethereum Foundation",
    partnerships: ["Polygon", "Chainlink", "The Graph"],
    registrationLink: "https://ethindia.co/register",
    whatsappLink: "https://chat.whatsapp.com/ETHIndia2025",
    featured: false,
  },
  {
    id: "nasa-space-apps-2025",
    title: "NASA Space Apps Challenge 2025",
    description:
      "International hackathon focused on space exploration and Earth science challenges using NASA's open data. Join the global community of space enthusiasts and innovators.",
    image: "/images/nasa-space-apps.jpeg",
    startDate: "2025-10-05",
    endDate: "2025-10-07",
    location: "Global (Multiple Cities)",
    prizePool: "$50,000",
    participants: 25000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Data Science", "Machine Learning", "Satellite Imagery", "APIs"],
    organizer: "NASA",
    partnerships: ["ESA", "JAXA", "Space Agencies"],
    registrationLink: "https://www.spaceappschallenge.org/register",
    whatsappLink: "https://chat.whatsapp.com/NASASpaceApps2025",
    featured: false,
  },
  {
    id: "techcrunch-disrupt-2025",
    title: "TechCrunch Disrupt Hackathon 2025",
    description:
      "Build the next big thing in 24 hours at one of the most prestigious startup events in the world. Network with VCs, entrepreneurs, and fellow hackers in San Francisco.",
    image: "/images/techcrunch-disrupt.jpeg",
    startDate: "2025-09-20",
    endDate: "2025-09-22",
    location: "San Francisco, USA",
    prizePool: "$75,000",
    participants: 1500,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Startups", "AI", "Fintech", "Healthtech", "Climate Tech"],
    organizer: "TechCrunch",
    partnerships: ["Y Combinator", "Sequoia Capital"],
    registrationLink: "https://techcrunch.com/events/disrupt-2025/hackathon",
    whatsappLink: "https://chat.whatsapp.com/TechCrunchDisrupt2025",
    featured: false,
  },
  {
    id: "junction-2025",
    title: "Junction 2025",
    description:
      "Europe's leading hackathon bringing together the world's most talented developers, designers, and entrepreneurs. Experience the Nordic innovation culture in Helsinki.",
    image: "/images/junction-2025.jpeg",
    startDate: "2025-11-08",
    endDate: "2025-11-10",
    location: "Helsinki, Finland",
    prizePool: "€100,000",
    participants: 1500,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Full Stack", "Mobile", "IoT", "AI", "Sustainability"],
    organizer: "Junction",
    partnerships: ["Nokia", "Wolt", "Supercell"],
    registrationLink: "https://www.junction2025.com/register",
    whatsappLink: "https://chat.whatsapp.com/Junction2025",
    featured: false,
  },
  {
    id: "devpost-global-2025",
    title: "Devpost Global Hackathon 2025",
    description:
      "The world's largest virtual hackathon platform hosting multiple themed challenges throughout the year. Participate from anywhere and showcase your skills globally.",
    image: "/images/devpost-global.jpeg",
    startDate: "2025-08-01",
    endDate: "2025-08-31",
    location: "Global (Virtual)",
    prizePool: "$250,000",
    participants: 50000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Web Development", "Mobile Apps", "AI/ML", "Blockchain", "IoT"],
    organizer: "Devpost",
    partnerships: ["GitHub", "AWS", "Twilio"],
    registrationLink: "https://devpost.com/hackathons",
    whatsappLink: "https://chat.whatsapp.com/DevpostGlobal2025",
    featured: false,
  },
  {
    id: "hack-the-north-2025",
    title: "Hack the North 2025",
    description:
      "Canada's biggest hackathon hosted by University of Waterloo, bringing together 1000+ hackers from around the world. Experience the Canadian tech scene and innovation culture.",
    image: "/images/hack-the-north.jpeg",
    startDate: "2025-09-13",
    endDate: "2025-09-15",
    location: "Waterloo, Canada",
    prizePool: "CAD $75,000",
    participants: 1000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["Software Development", "Hardware", "AI", "Fintech", "Social Good"],
    organizer: "University of Waterloo",
    partnerships: ["Google", "Microsoft", "Facebook"],
    registrationLink: "https://hackthenorth.com/register",
    whatsappLink: "https://chat.whatsapp.com/HackTheNorth2025",
    featured: false,
  },
  {
    id: "mlh-localhost-2025",
    title: "MLH Localhost 2025",
    description:
      "Learn new technologies through hands-on workshops and build projects with fellow developers in your local community. Multiple events throughout the year in various cities.",
    image: "/images/mlh-localhost.jpeg",
    startDate: "2025-07-15",
    endDate: "2025-07-16",
    location: "Multiple Cities Worldwide",
    prizePool: "$25,000",
    participants: 5000,
    status: "upcoming",
    registrationOpen: true,
    registrationLocked: false,
    technologies: ["React", "Node.js", "Python", "Machine Learning", "Mobile Development"],
    organizer: "Major League Hacking",
    partnerships: ["GitHub", "DigitalOcean", "Twilio"],
    registrationLink: "https://mlh.io/localhost",
    whatsappLink: "https://chat.whatsapp.com/MLHLocalhost2025",
    featured: false,
  },
]

export const searchHackathons = (query: string): HackathonData[] => {
  if (!query.trim()) return hackathons

  const lowercaseQuery = query.toLowerCase()
  return hackathons.filter(
    (hackathon) =>
      hackathon.title.toLowerCase().includes(lowercaseQuery) ||
      hackathon.description.toLowerCase().includes(lowercaseQuery) ||
      hackathon.location.toLowerCase().includes(lowercaseQuery) ||
      hackathon.technologies.some((tech) => tech.toLowerCase().includes(lowercaseQuery)) ||
      hackathon.organizer.toLowerCase().includes(lowercaseQuery),
  )
}
