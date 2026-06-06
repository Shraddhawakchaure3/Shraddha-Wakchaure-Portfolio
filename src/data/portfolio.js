// ─── Personal Info ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Shraddha Wakchaure",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Backend Developer",
  ],
  tagline: "Software Engineering  ·  Full Stack  ·  Backend  ·  Cybersecurity",
  location: "Ahilyanagar, Maharashtra, India",
  email: "shraddhawakchaure3@gmail.com",
  phone: "+91 9322226759",
  cgpa: "9.31",
  bio: `I'm Shraddha Wakchaure, a B.Tech Information Technology student with Cybersecurity Honors and a passion for building secure, scalable, and impactful software solutions.

My interests span Software Engineering, Full Stack Development, Backend Systems, and Cybersecurity. From developing cybersecurity platforms and enterprise applications to intelligent software solutions, I enjoy transforming complex problems into practical products.

I continuously explore new technologies through projects, hackathons, and hands-on security labs, with the goal of building systems that are secure, reliable, and user-centric.`,
  social: {
    github: "https://github.com/Shraddhawakchaure3",
    linkedin: "https://www.linkedin.com/in/shraddhavilaswakchaure/",
    leetcode: "https://leetcode.com/u/shraddha_wak20/",
    tryhackme: "https://tryhackme.com/p/shraddhawak20",
  },
  resumeUrl: "/Shraddha_Wakchaure_Software_Engineer_Resume.pdf",
  // Get your free Access Key at https://web3forms.com to receive email submissions
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
};

// ─── Education ─────────────────────────────────────────────────────────────────
export const education = [
  {
    institution: "Sanjivani College of Engineering, Kopargaon",
    degree: "B.Tech in Information Technology (Cybersecurity Honours)",
    period: "2023 – Present",
    grade: "CGPA: 9.31 / 10.00",
  },
  {
    institution: "Shri Ganesh Junior College, Korhale",
    degree: "HSC — Higher Secondary Certificate",
    period: "2021 – 2022",
    grade: "82.50%",
  },
  {
    institution: "Shree Saibaba English Medium School, Shirdi",
    degree: "SSC — Secondary School Certificate",
    period: "2019 – 2020",
    grade: "93.80%",
  },
];

// ─── Stats (animated counters) ─────────────────────────────────────────────────
export const stats = [
  { label: "CGPA", value: 9.31, prefix: "", suffix: "", decimals: 2 },
  { label: "Projects Built", value: 6, prefix: "", suffix: "+", decimals: 0 },
  { label: "Certifications", value: 10, prefix: "", suffix: "+", decimals: 0 },
  { label: "TryHackMe Rank", value: 2, prefix: "Top ", suffix: "% Global", decimals: 0 },
];

// ─── Experience Timeline ───────────────────────────────────────────────────────
export const timeline = [
  {
    title: "Software Development Intern (VI 6.0)",
    organization: "Infosys Springboard",
    period: "2025",
    type: "Internship",
    bullets: [
      "Developed a full-stack task reminder application using Java, Spring Boot, H2 Database, REST APIs, and Email Services.",
      "Implemented CRUD operations, scheduling, CSV export, and layered architecture following enterprise development practices.",
    ],
    tech: ["Java", "Spring Boot", "H2", "REST APIs"],
  },
  {
    title: "Pragati Cohort 4",
    organization: "Infosys Springboard",
    period: "2024",
    type: "Industry Program",
    bullets: [
      "Selected for an industry-led cohort focused on software engineering, enterprise workflows, and professional development.",
    ],
    tech: [],
  },

  {
    title: "TryHackMe — Top 2% Global",
    organization: "TryHackMe",
    period: "Ongoing",
    type: "Security",
    bullets: [
      "Top 2% Global Ranking through practical cybersecurity labs, penetration testing exercises, and security challenges.",
    ],
    tech: [],
  },
];

// ─── Skill Categories ──────────────────────────────────────────────────────────
export const skillCategories = [
  {
    name: "Programming",
    icon: "Code2",
    skills: ["Java", "Python", "C", "JavaScript", "SQL", "Bash"],
  },
  {
    name: "Frontend",
    icon: "Layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MongoDB", "MySQL", "Firebase", "H2"],
  },
  {
    name: "Cybersecurity",
    icon: "Shield",
    skills: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "Nessus"],
  },
  {
    name: "Core CS",
    icon: "Cpu",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Linux", "VS Code", "IntelliJ IDEA"],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "01",
    title: "ProcureAI",
    category: "AI · Full Stack",
    status: "completed",
    featured: true,
    description: "AI-powered platform for tender eligibility analysis and automated compliance checking. Intelligent document processing extracts requirements and delivers structured procurement decision support.",
    tech: ["Python", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/Shraddhawakchaure3/ProcureAI",
    demo: null,
  },
  {
    id: "02",
    title: "Operation Silent Breach",
    category: "Cybersecurity · Full Stack",
    status: "completed",
    featured: false,
    description: "Full-stack cybersecurity CTF platform simulating real-world cyber investigation scenarios. Modules cover web security, reconnaissance, cryptography, threat intelligence, and log analysis.",
    tech: ["React.js", "Node.js", "MongoDB", "Vercel"],
    github: "#",
    demo: null,
  },
  {
    id: "03",
    title: "SaiKrupa Polymers ERP",
    category: "Full Stack · ERP",
    status: "completed",
    featured: false,
    description: "Full-stack business management system replacing manual workflows with secure digital operations. Handles inventory, order tracking, customer management, and daily business reporting.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/hiteshpatil2005/Saikrupa-Polymers-LTD",
    demo: "https://saikrupa-polymers-ltd.vercel.app/",
  },
  {
    id: "04",
    title: "Online Voting System",
    category: "Web · Security",
    status: "completed",
    featured: false,
    description: "Secure web-based voting platform with user authentication, ballot management, vote casting, and result processing — designed with data integrity and session security in mind.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "#",
    demo: null,
  },
  {
    id: "05",
    title: "ShadowNet AI",
    category: "Cybersecurity · AI",
    status: "building",
    featured: true,
    description: "AI-powered OSINT and attack surface analysis tool. Domain intelligence gathering, risk correlation, and adversarial attack path simulation powered by Claude AI with integrations across Shodan, VirusTotal, and AbuseIPDB.",
    tech: ["FastAPI", "React", "MongoDB", "Claude AI", "Shodan", "VirusTotal"],
    github: "https://github.com/hiteshpatil2005/ShadowNet",
    demo: null,
  },
];

// ─── Achievements ──────────────────────────────────────────────────────────────
export const achievements = [
  {
    icon: "Trophy",
    title: "TryHackMe — Top 2% Global",
    description: "Ranked among the top 2% of users worldwide through consistent completion of cybersecurity labs, penetration testing challenges, and practical security exercises.",
    tag: "Security",
    linkLabel: "View Profile",
    linkUrl: "https://tryhackme.com/p/shraddhawak20",
  },
  {
    icon: "Rocket",
    title: "NASA Space Apps Challenge",
    description: "Participated in the world's largest annual global hackathon organized by NASA, developing innovative solutions addressing real-world space and earth science challenges.",
    tag: "Hackathon",
    linkLabel: "View Certificate",
    linkUrl: "https://drive.google.com/file/d/1aEqAQkOkcOtR0axxXvCMQKWPLrw4jOW1/view?usp=drive_link",
  },
  {
    icon: "Award",
    title: "Smart India Hackathon 2025",
    description: "Built Blockchain-Based Blue Carbon Registry & MRV System (Problem ID 25038) using Solidity, Polygon, and IPFS for decentralized and tamper-proof carbon credit tracking.",
    tag: "Hackathon",
    linkLabel: null,
    linkUrl: null,
  },
  {
    icon: "Shield",
    title: "Advent of Cyber 2025",
    description: "Completed TryHackMe Advent of Cyber 2025 — hands-on challenges spanning web security, networking, incident response, and defensive security concepts.",
    tag: "Security",
    linkLabel: "View Certificate",
    linkUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YGVAHNX2YW.pdf",
  },
  {
    icon: "BookOpen",
    title: "NPTEL Certifications",
    description: "Nationally recognized certifications in Foundations of Cryptography, Programming in Java, and Joy of Computing using Python from IIT faculty.",
    tag: "Academic",
    linkLabel: null,
    linkUrl: null,
  },
  {
    icon: "Star",
    title: "Infosys Springboard Certs",
    description: "Completed Fundamentals of Information Security, Cyber Threat Hunting, Java Development, and Front-End Developer certifications through Infosys Springboard.",
    tag: "Certification",
    linkLabel: null,
    linkUrl: null,
  },
];
