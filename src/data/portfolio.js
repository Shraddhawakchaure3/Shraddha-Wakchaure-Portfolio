// ─── Personal Info ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Shraddha Wakchaure",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "AI Builder",
  ],
  tagline: "Full Stack  ·  Cybersecurity  ·  AI  ·  Blockchain",
  location: "Maharashtra, India",
  email: "shraddhawakchaure3@gmail.com",
  phone: "+91 9322226759",
  cgpa: "9.31",
  bio: "Third-year B.Tech IT student with Cybersecurity Honours, actively building software products across AI, Full Stack Development, Blockchain, IoT, and Security. I enjoy solving real-world problems through code — whether that's automating procurement with AI, tracking carbon credits on-chain, or building CTF platforms that simulate real cyber investigations.",
  social: {
    github:    "https://github.com/shraddha-wakchaure",
    linkedin:  "https://linkedin.com/in/shraddha-wakchaure",
    leetcode:  "https://leetcode.com/shraddha-wakchaure",
    tryhackme: "https://tryhackme.com/p/shraddha-wakchaure",
  },
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
  { label: "CGPA",            value: 9.31, prefix: "",     suffix: "",         decimals: 2 },
  { label: "Projects Built",  value: 6,    prefix: "",     suffix: "+",        decimals: 0 },
  { label: "Certifications",  value: 10,   prefix: "",     suffix: "+",        decimals: 0 },
  { label: "TryHackMe Rank",  value: 2,    prefix: "Top ", suffix: "% Global", decimals: 0 },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experience = [
  {
    company:     "Infosys Springboard",
    role:        "Virtual Intern — Java Development (Spring Boot)",
    type:        "Internship",
    period:      "2024",
    location:    "Virtual",
    description: "Developed an Automated Task Reminder System using Spring Boot with scheduling, email notifications, and database integration as part of Infosys Springboard Virtual Internship 6.0.",
    tags:        ["Spring Boot", "Java", "MySQL", "REST APIs", "Email Integration"],
  },
  {
    company:     "Infosys",
    role:        "Cohort 4 Participant",
    type:        "Industry Program",
    period:      "2024",
    location:    "External Activity",
    description: "Selected for an industry-led cohort program by Infosys, gaining exposure to enterprise project development, secure coding practices, and professional engineering workflows.",
    tags:        ["Enterprise Dev", "Secure Coding", "Professional Workflow"],
  },
  {
    company:     "Sanjivani College of Engineering",
    role:        "B.Tech IT — Cybersecurity Honours",
    type:        "Education",
    period:      "2023 – Present",
    location:    "Kopargaon, Maharashtra",
    description: "Maintaining a 9.31 CGPA while building production-grade projects across AI, Blockchain, Full Stack, and Cybersecurity domains. Active participant in hackathons and global security platforms.",
    tags:        ["AI", "Blockchain", "Full Stack", "Cybersecurity", "9.31 CGPA"],
  },
];

// ─── Skill Categories ──────────────────────────────────────────────────────────
export const skillCategories = [
  {
    name:   "Programming",
    icon:   "Code2",
    skills: ["Java", "Python", "JavaScript", "SQL", "Bash"],
  },
  {
    name:   "Frontend",
    icon:   "Layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name:   "Backend",
    icon:   "Server",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    name:   "Databases",
    icon:   "Database",
    skills: ["MongoDB", "MySQL", "Firebase", "H2"],
  },
  {
    name:   "Cybersecurity",
    icon:   "Shield",
    skills: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "Nessus"],
  },
  {
    name:   "Core CS",
    icon:   "Cpu",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
  },
  {
    name:   "Tools",
    icon:   "Wrench",
    skills: ["Git", "GitHub", "Linux", "VS Code", "IntelliJ IDEA"],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    id:          "01",
    title:       "ShadowNet AI",
    category:    "Cybersecurity · AI",
    status:      "building",
    featured:    true,
    description: "AI-powered OSINT and attack surface analysis tool. Domain intelligence gathering, risk correlation, and adversarial attack path simulation powered by Claude AI with integrations across Shodan, VirusTotal, and AbuseIPDB.",
    tech:        ["FastAPI", "React", "MongoDB", "Claude AI", "Shodan", "VirusTotal"],
    github:      "#",
    demo:        null,
  },
  {
    id:          "02",
    title:       "ProcureAI",
    category:    "AI · Full Stack",
    status:      "completed",
    featured:    true,
    description: "AI-powered platform for tender eligibility analysis and automated compliance checking. Intelligent document processing extracts requirements and delivers structured procurement decision support.",
    tech:        ["Python", "React.js", "Node.js", "MongoDB"],
    github:      "#",
    demo:        null,
  },
  {
    id:          "03",
    title:       "Blue Carbon Registry & MRV",
    category:    "Blockchain · Web3",
    status:      "completed",
    featured:    false,
    description: "Blockchain-based platform for carbon credit tracking, verification, and tamper-proof environmental record management. Smart contracts on Polygon with IPFS for decentralized, transparent storage.",
    tech:        ["Solidity", "React.js", "Node.js", "IPFS", "Polygon"],
    github:      "#",
    demo:        null,
  },
  {
    id:          "04",
    title:       "Operation Silent Breach",
    category:    "Cybersecurity · Full Stack",
    status:      "completed",
    featured:    false,
    description: "Full-stack cybersecurity CTF platform simulating real-world cyber investigation scenarios. Modules cover web security, reconnaissance, cryptography, threat intelligence, and log analysis.",
    tech:        ["React.js", "Node.js", "MongoDB", "Vercel"],
    github:      "#",
    demo:        null,
  },
  {
    id:          "05",
    title:       "SaiKrupa Polymers ERP",
    category:    "Full Stack · ERP",
    status:      "completed",
    featured:    false,
    description: "Full-stack business management system replacing manual workflows with secure digital operations. Handles inventory, order tracking, customer management, and daily business reporting.",
    tech:        ["React.js", "Node.js", "MongoDB", "Express.js"],
    github:      "#",
    demo:        null,
  },
  {
    id:          "06",
    title:       "Online Voting System",
    category:    "Web · Security",
    status:      "completed",
    featured:    false,
    description: "Secure web-based voting platform with user authentication, ballot management, vote casting, and result processing — designed with data integrity and session security in mind.",
    tech:        ["HTML", "CSS", "JavaScript", "MySQL"],
    github:      "#",
    demo:        null,
  },
];

// ─── Achievements ──────────────────────────────────────────────────────────────
export const achievements = [
  {
    icon:        "Trophy",
    title:       "TryHackMe — Top 2% Global",
    description: "Ranked among the top 2% of users worldwide through consistent completion of cybersecurity labs, penetration testing challenges, and practical security exercises.",
    tag:         "Security",
  },
  {
    icon:        "Award",
    title:       "Smart India Hackathon 2025",
    description: "Built Blockchain-Based Blue Carbon Registry & MRV System (Problem ID 25038) using Solidity, Polygon, and IPFS for decentralized and tamper-proof carbon credit tracking.",
    tag:         "Hackathon",
  },
  {
    icon:        "Users",
    title:       "Infosys Cohort 4",
    description: "Selected for an industry-led enterprise cohort program by Infosys, gaining exposure to professional workflows, enterprise-grade development standards, and secure coding practices.",
    tag:         "Industry",
  },
  {
    icon:        "Shield",
    title:       "Advent of Cyber 2025",
    description: "Completed TryHackMe Advent of Cyber 2025 — hands-on challenges spanning web security, networking, incident response, and defensive security concepts.",
    tag:         "Security",
  },
  {
    icon:        "BookOpen",
    title:       "NPTEL Certifications",
    description: "Nationally recognized certifications in Foundations of Cryptography, Programming in Java, and Joy of Computing using Python from IIT faculty.",
    tag:         "Academic",
  },
  {
    icon:        "Star",
    title:       "Infosys Springboard Certs",
    description: "Completed Fundamentals of Information Security, Cyber Threat Hunting, Java Development, and Front-End Developer certifications through Infosys Springboard.",
    tag:         "Certification",
  },
];
