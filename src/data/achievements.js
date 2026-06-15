// ─── Featured Achievements (Homepage Preview — 4 cards only) ────────────────
export const featuredAchievements = [
  {
    icon: "Trophy",
    category: "Cybersecurity Achievement",
    title: "TryHackMe — Top 2% Global",
    organization: "TryHackMe",
    description:
      "Ranked among the Top 2% of users worldwide through hands-on cybersecurity labs, penetration testing challenges, and practical security exercises.",
    cta: "View Profile →",
    ctaUrl: "https://tryhackme.com/p/shraddhawak20",
  },
  {
    icon: "Rocket",
    category: "Global Hackathon",
    title: "NASA Space Apps Challenge",
    organization: "NASA",
    description:
      "Participated in NASA's international hackathon, developing innovative solutions using satellite and space-related datasets.",
    cta: "View Certificate →",
    ctaUrl:
      "https://drive.google.com/file/d/1aEqAQkOkcOtR0axxXvCMQKWPLrw4jOW1/view?usp=drive_link",
  },
  {
    icon: "BookOpen",
    category: "Academic Excellence",
    title: "NPTEL Elite Certifications",
    organization: "IIT Kharagpur & IIT Madras",
    description:
      "Completed multiple Elite certifications in Programming in Java, Joy of Computing using Python, Cryptography, and E-Business.",
    cta: "Explore Certificates →",
    ctaUrl: null,
  },
  {
    icon: "Briefcase",
    category: "Industry Experience",
    title: "Infosys Springboard Internship",
    organization: "Infosys Springboard",
    description:
      "Completed a software development internship focused on full-stack development, enterprise software engineering, and secure application development.",
    cta: "View Internship →",
    ctaUrl: null,
  },
];

// ─── All Achievements (Dedicated Page) ─────────────────────────────────────────
export const allAchievements = [
  // ── Cybersecurity ──
  {
    id: "tryhackme-top2",
    icon: "Trophy",
    title: "TryHackMe — Top 2% Global",
    issuer: "TryHackMe",
    issueDate: "Ongoing",
    category: "Cybersecurity",
    description:
      "Ranked among the Top 2% of users worldwide through consistent completion of cybersecurity labs, penetration testing challenges, and practical security exercises.",
    tech: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
    certUrl: "https://tryhackme.com/p/shraddhawak20",
    credentialId: null,
  },
  {
    id: "advent-of-cyber",
    icon: "Shield",
    title: "Advent of Cyber 2025",
    issuer: "TryHackMe",
    issueDate: "Dec 2025",
    category: "Cybersecurity",
    description:
      "Completed 25-day cybersecurity challenge spanning web security, networking, incident response, log analysis, and defensive security concepts.",
    tech: ["Web Security", "Networking", "DFIR", "Log Analysis"],
    certUrl:
      "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YGVAHNX2YW.pdf",
    credentialId: "THM-YGVAHNX2YW",
  },
  {
    id: "pre-security",
    icon: "Shield",
    title: "Pre Security Path",
    issuer: "TryHackMe",
    issueDate: "2024",
    category: "Cybersecurity",
    description:
      "Completed the foundational cybersecurity learning path covering networking basics, web fundamentals, Linux, and Windows security essentials.",
    tech: ["Networking", "Linux", "Web Security", "Windows"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "network-fundamentals",
    icon: "Shield",
    title: "Network Fundamentals",
    issuer: "TryHackMe",
    issueDate: "2024",
    category: "Cybersecurity",
    description:
      "Mastered core networking concepts including OSI model, TCP/IP, DNS, HTTP, and packet analysis through hands-on exercises.",
    tech: ["TCP/IP", "DNS", "HTTP", "Packet Analysis"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "cyber-threat-hunting",
    icon: "Shield",
    title: "Cyber Threat Hunting",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    category: "Cybersecurity",
    description:
      "Completed advanced threat hunting certification covering threat intelligence, security monitoring, IOC analysis, and proactive defense techniques.",
    tech: ["Threat Intelligence", "SIEM", "IOC Analysis"],
    certUrl: null,
    credentialId: null,
  },

  // ── Programming / NPTEL ──
  {
    id: "nptel-java",
    icon: "BookOpen",
    title: "Programming in Java",
    issuer: "NPTEL — IIT Kharagpur",
    issueDate: "2024",
    category: "NPTEL",
    description:
      "Elite certification in Java programming covering OOP concepts, multithreading, collections framework, JDBC, and enterprise application development.",
    tech: ["Java", "OOP", "Multithreading", "JDBC"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "nptel-python",
    icon: "BookOpen",
    title: "Joy of Computing using Python",
    issuer: "NPTEL — IIT Madras",
    issueDate: "2024",
    category: "NPTEL",
    description:
      "Elite certification covering computational thinking, algorithms, data visualization, and problem solving using Python.",
    tech: ["Python", "Algorithms", "Data Visualization"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "nptel-crypto",
    icon: "BookOpen",
    title: "Foundations of Cryptography",
    issuer: "NPTEL — IIT Kharagpur",
    issueDate: "2024",
    category: "NPTEL",
    description:
      "Elite certification in cryptographic principles including symmetric encryption, asymmetric cryptography, hash functions, and digital signatures.",
    tech: ["Cryptography", "RSA", "AES", "Digital Signatures"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "nptel-ebusiness",
    icon: "BookOpen",
    title: "E-Business",
    issuer: "NPTEL — IIT Kharagpur",
    issueDate: "2024",
    category: "NPTEL",
    description:
      "Certification covering electronic business fundamentals, digital marketing strategies, e-commerce platforms, and business process management.",
    tech: ["E-Commerce", "Digital Marketing", "Business Strategy"],
    certUrl: null,
    credentialId: null,
  },

  // ── Hackathons ──
  {
    id: "nasa-space-apps",
    icon: "Rocket",
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    issueDate: "2024",
    category: "Hackathons",
    description:
      "Participated in NASA's international hackathon, developing innovative solutions using satellite and space-related datasets.",
    tech: ["Space Data", "Innovation", "Team Collaboration"],
    certUrl:
      "https://drive.google.com/file/d/1aEqAQkOkcOtR0axxXvCMQKWPLrw4jOW1/view?usp=drive_link",
    credentialId: null,
  },
  {
    id: "sih-2025",
    icon: "Award",
    title: "Smart India Hackathon 2025",
    issuer: "Government of India",
    issueDate: "2025",
    category: "Hackathons",
    status: "Participant",
    description:
      "Blockchain-based Blue Carbon Registry & MRV System (Problem ID 25038) using Solidity, Polygon, and IPFS for decentralized carbon credit tracking.",
    tech: ["Solidity", "Polygon", "IPFS", "Blockchain"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "technova-finalist",
    icon: "Zap",
    title: "Technova Finalist",
    issuer: "Technova",
    issueDate: "2024",
    category: "Hackathons",
    description:
      "Selected as a finalist in the Technova hackathon for building an innovative technical solution under competitive constraints.",
    tech: ["Innovation", "Problem Solving"],
    certUrl: null,
    credentialId: null,
  },

  // ── Internships ──
  {
    id: "infosys-internship",
    icon: "Briefcase",
    title: "Software Development Intern (VI 6.0)",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    category: "Internships",
    description:
      "Developed a full-stack task reminder application using Java, Spring Boot, H2 Database, REST APIs, and Email Services with enterprise-level architecture.",
    tech: ["Java", "Spring Boot", "H2", "REST APIs"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "pragati-internship",
    icon: "Briefcase",
    title: "Pragati Cohort 4",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    category: "Internships",
    description:
      "Selected for an industry-led cohort focused on software engineering, enterprise workflows, and professional development.",
    tech: ["Software Engineering", "Enterprise Workflows"],
    certUrl: null,
    credentialId: null,
  },

  // ── Infosys Certifications ──
  {
    id: "infosys-infosec",
    icon: "Star",
    title: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    category: "Infosys",
    description:
      "Certification covering information security principles, risk management, access control, network security, and organizational security policies.",
    tech: ["InfoSec", "Risk Management", "Access Control"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "infosys-java",
    icon: "Star",
    title: "Java Development",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    category: "Infosys",
    description:
      "Certification in Java development covering core Java concepts, object-oriented programming, and enterprise application development patterns.",
    tech: ["Java", "OOP", "Enterprise Development"],
    certUrl: null,
    credentialId: null,
  },
  {
    id: "infosys-frontend",
    icon: "Star",
    title: "Front-End Development",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    category: "Infosys",
    description:
      "Certification covering modern front-end development with HTML5, CSS3, JavaScript, responsive design, and UI/UX fundamentals.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    certUrl: null,
    credentialId: null,
  },

  // ── Achievements ──
  // (Add any additional achievements/certificates here following the same schema)
];

// ─── Filter Categories ──────────────────────────────────────────────────────────
export const filterCategories = [
  "All",
  "Cybersecurity",
  "Programming",
  "NPTEL",
  "Infosys",
  "Hackathons",
  "Internships",
  "Achievements",
  "AI",
  "Blockchain",
];
