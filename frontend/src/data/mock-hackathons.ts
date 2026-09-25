import { Hackathon } from "@/types/hackathon";

export const MOCK_HACKATHONS: Hackathon[] = [
  {
    id: "hack-1",
    slug: "ai-innovation-hackathon",
    title: "National Generative AI CodeSprint 2025",
    tagline: "Build multimodal agents and production-ready LLM pipelines.",
    description:
      "A premier 36-hour hackathon bringing together students, developers, and ML researchers to engineer autonomous AI agents, fine-tuned domain models, and developer workflows solving pressing societal challenges.",
    organizerName: "OpenAI Campus Guild & Microsoft Reactor",
    organizerType: "Corporate",
    category: "AI / ML",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-10-25",
    endDate: "2025-10-27",
    registrationDeadline: "2025-10-20",
    entryFee: "Free",
    isFree: true,
    prize: "₹3,50,000",
    prizeAmountNumber: 350000,
    eligibility: "Open to all College Students & Freshers",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 2140,
    status: "Open",
    registrationUrl: "https://example.com/register/ai-codesprint",
    websiteUrl: "https://example.com/ai-codesprint-2025",
    tags: ["Generative AI", "LLMs", "LangChain", "Autonomous Agents"],
    technologies: ["Python", "PyTorch", "Next.js", "FastAPI", "OpenAI API"],
    rules: [
      "All codebase commits must occur during the official hackathon sprint window.",
      "Teams can comprise 2 to 4 members. Inter-college teams are fully permitted.",
      "Pre-built commercial software or existing enterprise IP is strictly prohibited.",
      "Final submission requires a live demo URL, GitHub repository, and a 3-minute video pitch."
    ],
    timeline: [
      {
        title: "Registration & Team Formation",
        type: "Warmup",
        startDate: "2025-10-01",
        endDate: "2025-10-20",
        description: "Register your team and join the Discord hackathon workspace."
      },
      {
        title: "36-Hour Hackathon Sprint",
        type: "Hacking Sprint",
        startDate: "2025-10-25",
        endDate: "2025-10-27",
        description: "Non-stop building with scheduled mentor checkpoints and API office hours."
      },
      {
        title: "Jury Pitch & Award Ceremony",
        type: "Finale & Demos",
        startDate: "2025-10-27",
        endDate: "2025-10-27",
        description: "Top 12 teams present live to senior ML architects and founders."
      }
    ],
    rewards: [
      {
        position: "Grand Champion",
        amount: "₹1,75,000",
        perks: ["Azure GPU Compute Credits worth $10,000", "Direct Interview at Microsoft AI Lab", "Trophy & Swag Hamper"]
      },
      {
        position: "First Runner-Up",
        amount: "₹1,00,000",
        perks: ["Compute Credits worth $5,000", "Mentorship from AI Founders", "Certificates"]
      },
      {
        position: "Best Use of Open Models",
        amount: "₹75,000",
        perks: ["Hugging Face Pro Subscriptions", "Special Innovation Trophy"]
      }
    ],
    highlights: [
      "Mentorship from leading generative AI practitioners",
      "Complimentary cloud GPU compute credits for participants",
      "Direct fast-track interview consideration"
    ],
    createdAt: "2025-09-12T10:00:00Z"
  },
  {
    id: "hack-2",
    slug: "fintech-future-hackathon",
    title: "FinTech Future: Open Banking & UPI Sprint",
    tagline: "Re-imagining micro-lending, fraud security, and cross-border remittances.",
    description:
      "Build high-throughput payment pipelines, real-time transaction anomaly engines, and decentralized identity verification modules designed for India's evolving financial ecosystem.",
    organizerName: "Razorpay Developer Platform & NPCI",
    organizerType: "Corporate",
    category: "FinTech",
    mode: "Hybrid",
    location: "Bengaluru & Online",
    startDate: "2025-11-08",
    endDate: "2025-11-10",
    registrationDeadline: "2025-10-30",
    entryFee: "Free",
    isFree: true,
    prize: "₹4,00,000",
    prizeAmountNumber: 400000,
    eligibility: "Engineering & Polytechnic Students",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 1820,
    status: "Open",
    registrationUrl: "https://example.com/register/fintech-future",
    websiteUrl: "https://example.com/fintech-future-hack",
    tags: ["FinTech", "Payments", "UPI", "Fraud Detection", "WebSockets"],
    technologies: ["Node.js", "Go", "PostgreSQL", "Kafka", "React"],
    rules: [
      "Must utilize simulated payment gateway sandboxes provided at kickoff.",
      "Strict data encryption standards (AES-256) must be enforced for sensitive mock payloads.",
      "Demonstrate handling of concurrent transaction volume during jury load testing."
    ],
    timeline: [
      {
        title: "API Sandbox Access & Briefing",
        type: "Onboarding",
        startDate: "2025-11-01",
        endDate: "2025-11-07",
        description: "Developer onboarding and sandbox API keys distribution."
      },
      {
        title: "48-Hour Live Build Sprint",
        type: "Main Hackathon",
        startDate: "2025-11-08",
        endDate: "2025-11-10",
        description: "In-person at Razorpay Bengaluru campus or virtual submission."
      },
      {
        title: "Demo Day & Felicitation",
        type: "Grand Finale",
        startDate: "2025-11-10",
        endDate: "2025-11-10",
        description: "Live stress-testing demos in front of executive payment architects."
      }
    ],
    rewards: [
      {
        position: "1st Place (Fintech Innovator)",
        amount: "₹2,00,000",
        perks: ["Paid Engineering Summer Internship", "Exclusive FinTech Fellow Trophy"]
      },
      {
        position: "2nd Place",
        amount: "₹1,25,000",
        perks: ["Fast-Track Technical Screenings", "Razorpay Merch Kit"]
      },
      {
        position: "Best Security Architecture",
        amount: "₹75,000",
        perks: ["Security Audit Vouchers", "Certificates"]
      }
    ],
    createdAt: "2025-09-10T14:30:00Z"
  },
  {
    id: "hack-3",
    slug: "healthtech-diagnostics-hack",
    title: "MediHacks: AI Diagnostics & Telehealth",
    tagline: "Engineering accessible healthcare delivery for Tier-2 and rural centers.",
    description:
      "A healthcare-focused hackathon tackling remote patient triage, computerized radiology analysis, and offline-first EHR syncing for rural public health centers.",
    organizerName: "Apollo Health Ventures & AIIMS Tech Cell",
    organizerType: "College",
    category: "HealthTech",
    mode: "Online",
    location: "Virtual (Pan India)",
    startDate: "2025-10-18",
    endDate: "2025-10-20",
    registrationDeadline: "2025-10-14",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,50,000",
    prizeAmountNumber: 250000,
    eligibility: "Open to All College & Medical Students",
    teamSize: "1 - 4 Members",
    minTeamSize: 1,
    maxTeamSize: 4,
    registeredCount: 960,
    status: "Closing Soon",
    registrationUrl: "https://example.com/register/medihacks",
    tags: ["HealthTech", "Computer Vision", "Telehealth", "Offline-First"],
    technologies: ["TensorFlow", "React Native", "Flask", "SQLite", "WebRTC"],
    rules: [
      "Use publicly available, de-identified clinical datasets for algorithm validation.",
      "Prototypes must account for variable connectivity (low bandwidth / offline mode).",
      "Patient privacy guidelines (HIPAA/DISHA equivalent) must be documented in the README."
    ],
    timeline: [
      {
        title: "Clinical Dataset Release",
        type: "Orientation",
        startDate: "2025-10-14",
        endDate: "2025-10-17",
        description: "Access curated diagnostic imaging and vital metrics data."
      },
      {
        title: "Virtual Hack Weekend",
        type: "Hacking Sprint",
        startDate: "2025-10-18",
        endDate: "2025-10-20",
        description: "Build, train, and integrate health screening interfaces."
      }
    ],
    rewards: [
      {
        position: "Overall Winner",
        amount: "₹1,25,000",
        perks: ["Pilot Implementation Grant in Partner Clinics", "MedTech Trophy"]
      },
      {
        position: "Best Clinical Relevance",
        amount: "₹75,000",
        perks: ["Mentorship from AIIMS Senior Researchers", "Certificate"]
      },
      {
        position: "Community Choice",
        amount: "₹50,000",
        perks: ["HealthTech Gear Bundle"]
      }
    ],
    createdAt: "2025-09-08T11:00:00Z"
  },
  {
    id: "hack-4",
    slug: "eduinnovate-learning-hackathon",
    title: "EduInnovate: Vernacular Learning Hackathon",
    tagline: "Gamified learning platforms and vernacular voice assistants for students.",
    description:
      "Craft interactive educational tools, multilingual phonetic learning apps, and adaptive quiz engines designed for primary and middle school students in regional languages.",
    organizerName: "Central Education Foundation & Google for Education",
    organizerType: "Community",
    category: "EdTech",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-15",
    endDate: "2025-11-17",
    registrationDeadline: "2025-11-10",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,00,000",
    prizeAmountNumber: 200000,
    eligibility: "All Undergraduate & Postgraduate Students",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 1350,
    status: "Open",
    registrationUrl: "https://example.com/register/eduinnovate",
    tags: ["EdTech", "Speech-to-Text", "Vernacular", "Gamification"],
    technologies: ["React", "Flutter", "Whisper API", "Firebase", "Node.js"],
    rules: [
      "Solutions must support at least two regional Indian languages in addition to English.",
      "Gamified mechanics must emphasize mastery learning rather than passive consumption.",
      "All submissions must be open-sourced under an MIT or Apache license."
    ],
    timeline: [
      {
        title: "Idea & Wireframe Screening",
        type: "Stage 1",
        startDate: "2025-11-01",
        endDate: "2025-11-10",
        description: "Submit core pedagogical flow and interactive sketches."
      },
      {
        title: "48-Hour Development Sprint",
        type: "Stage 2",
        startDate: "2025-11-15",
        endDate: "2025-11-17",
        description: "Full-stack sprint with vernacular TTS/STT integration."
      }
    ],
    rewards: [
      {
        position: "First Prize (Edu Champion)",
        amount: "₹1,00,000",
        perks: ["Google Cloud Credits worth $3,000", "Pilot Deployment in 10 Schools"]
      },
      {
        position: "Second Prize",
        amount: "₹60,000",
        perks: ["Cloud Credits worth $1,500", "Certificate of Merit"]
      },
      {
        position: "Third Prize",
        amount: "₹40,000",
        perks: ["Developer Goodies Pack"]
      }
    ],
    createdAt: "2025-09-02T16:00:00Z"
  },
  {
    id: "hack-5",
    slug: "cyberdefense-hack-and-defend",
    title: "CyberDefense: Zero-Trust Security Challenge",
    tagline: "Build defensive micro-firewalls, audit automated pipelines, and detect intrusions.",
    description:
      "An intense 24-hour defensive engineering hackathon. Participants construct automated incident response bots, runtime container protection layers, and Zero-Trust identity bridges.",
    organizerName: "Nullcon Student Chapter & Cloudflare Guild",
    organizerType: "Community",
    category: "Cybersecurity",
    mode: "Online",
    location: "Online",
    startDate: "2025-10-28",
    endDate: "2025-10-29",
    registrationDeadline: "2025-10-24",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,80,000",
    prizeAmountNumber: 180000,
    eligibility: "Engineering, BCA & MCA Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1120,
    status: "Open",
    registrationUrl: "https://example.com/register/cyberdefense",
    tags: ["Cybersecurity", "Zero-Trust", "Docker", "eBPF", "SIEM"],
    technologies: ["Rust", "Python", "Docker", "Linux", "WireGuard"],
    rules: [
      "Attacking other teams' submission infrastructure results in immediate disqualification.",
      "Live stress scripts will inject automated synthetic attacks during scoring rounds.",
      "Submit comprehensive incident handling playbooks alongside your code."
    ],
    timeline: [
      {
        title: "Infrastructure Prep & Setup",
        type: "Setup",
        startDate: "2025-10-26",
        endDate: "2025-10-27",
        description: "Provision test VPC environments and receive attack simulator endpoints."
      },
      {
        title: "Live Defense Sprint",
        type: "Main Hackathon",
        startDate: "2025-10-28",
        endDate: "2025-10-29",
        description: "Continuous automated attack telemetry and defensive patch deployment."
      }
    ],
    rewards: [
      {
        position: "Best Defensive Bastion",
        amount: "₹90,000",
        perks: ["OffSec Course Voucher", "CyberDefense Champion Shield"]
      },
      {
        position: "Fastest Incident Response",
        amount: "₹55,000",
        perks: ["Cloudflare Pro Developer Plan for 2 Years", "Certificate"]
      },
      {
        position: "Innovative Architecture",
        amount: "₹35,000",
        perks: ["Hardware Security Keys Bundle"]
      }
    ],
    createdAt: "2025-08-28T09:00:00Z"
  },
  {
    id: "hack-6",
    slug: "green-tech-hackathon",
    title: "EcoHacks: Clean Energy & Climate Tech",
    tagline: "Optimize renewable grid dispatch, track carbon offsets, and monitor emissions.",
    description:
      "Harness IoT telemetry and cloud predictive models to optimize rooftop solar arrays, monitor EV charging fleet efficiency, and calculate corporate supply chain carbon footprints.",
    organizerName: "GreenTech Alliance & IIT Madras E-Cell",
    organizerType: "College",
    category: "Sustainability",
    mode: "Hybrid",
    location: "IIT Madras Research Park, Chennai",
    startDate: "2025-11-20",
    endDate: "2025-11-22",
    registrationDeadline: "2025-11-12",
    entryFee: "Free",
    isFree: true,
    prize: "₹3,00,000",
    prizeAmountNumber: 300000,
    eligibility: "All University & Diploma Students",
    teamSize: "2 - 5 Members",
    minTeamSize: 2,
    maxTeamSize: 5,
    registeredCount: 840,
    status: "Open",
    registrationUrl: "https://example.com/register/ecohacks",
    tags: ["Sustainability", "CleanTech", "Smart Grid", "IoT", "Carbon Footprint"],
    technologies: ["Python", "InfluxDB", "React", "ESP32", "MQTT"],
    rules: [
      "Hardware simulations or live sensor prototypes can be showcased during finals.",
      "Calculation methodology for emissions savings must reference verified IPPC/GHG standards.",
      "Final presentations delivered in-person at IIT Madras or virtually for remote teams."
    ],
    timeline: [
      {
        title: "Dataset & Problem Release",
        type: "Kickoff",
        startDate: "2025-11-01",
        endDate: "2025-11-12",
        description: "Access municipal solar generation and weather datasets."
      },
      {
        title: "Hackathon Sprint & Mentor Reviews",
        type: "Sprint",
        startDate: "2025-11-20",
        endDate: "2025-11-22",
        description: "48-hour development sprint with CleanTech venture mentor checkpoints."
      }
    ],
    rewards: [
      {
        position: "Green Innovation Winner",
        amount: "₹1,50,000",
        perks: ["IIT Madras Incubation Pre-Seed Grant Consideration", "Winner Plaque"]
      },
      {
        position: "Runner Up",
        amount: "₹90,000",
        perks: ["CleanTech Accelerator Mentorship", "Certificate"]
      },
      {
        position: "Best Hardware Prototype",
        amount: "₹60,000",
        perks: ["Component Lab Pass & Vouchers"]
      }
    ],
    createdAt: "2025-09-05T12:00:00Z"
  },
  {
    id: "hack-7",
    slug: "cloud-architects-codefest",
    title: "Serverless Cloud Builders Hackathon",
    tagline: "Build distributed, event-driven web apps with zero idle server overhead.",
    description:
      "A fast-paced developer sprint focused on edge computing, serverless workers, event streaming, and global microservice distribution with sub-10ms response times.",
    organizerName: "AWS Community Builders & Vercel Squad",
    organizerType: "Corporate",
    category: "Cloud",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-11-01",
    endDate: "2025-11-03",
    registrationDeadline: "2025-10-28",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,20,000",
    prizeAmountNumber: 220000,
    eligibility: "Engineering & Computer Science Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1680,
    status: "Open",
    registrationUrl: "https://example.com/register/cloud-builders",
    tags: ["Serverless", "Edge Computing", "Next.js", "Redis", "Cloud"],
    technologies: ["TypeScript", "Next.js", "AWS Lambda", "Upstash Redis", "Docker"],
    rules: [
      "All applications must be hosted on an accessible public edge URL.",
      "Architecture diagrams detailing cold-start mitigations must be submitted.",
      "Latency will be benchmarked automatically from 4 distinct global regions."
    ],
    timeline: [
      {
        title: "Edge Workshop & Kickoff",
        type: "Workshop",
        startDate: "2025-10-30",
        endDate: "2025-10-31",
        description: "Live session on serverless database connection pooling."
      },
      {
        title: "Hackathon Build Window",
        type: "Build Phase",
        startDate: "2025-11-01",
        endDate: "2025-11-03",
        description: "48-hour build sprint and automated latency scoring."
      }
    ],
    rewards: [
      {
        position: "Master Architect Award",
        amount: "₹1,10,000",
        perks: ["$5,000 AWS & Vercel Enterprise Credits", "AWS Certification Voucher"]
      },
      {
        position: "Second Place",
        amount: "₹70,000",
        perks: ["$2,500 Cloud Credits", "Certificates"]
      },
      {
        position: "Lowest Latency System",
        amount: "₹40,000",
        perks: ["Mechanical Keyboard & Swag"]
      }
    ],
    createdAt: "2025-08-30T10:00:00Z"
  },
  {
    id: "hack-8",
    slug: "nextgen-web-sprint",
    title: "NextGen Full-Stack & UI/UX Sprint",
    tagline: "Build fluid, hyper-responsive web applications with delightful animations.",
    description:
      "Push the boundaries of modern front-end craft. Build progressive web apps featuring offline caches, real-time collaboration, micro-interactions, and accessible design tokens.",
    organizerName: "React India Community & GitHub Campus",
    organizerType: "Community",
    category: "Web Development",
    mode: "Online",
    location: "Online",
    startDate: "2025-10-22",
    endDate: "2025-10-24",
    registrationDeadline: "2025-10-18",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,75,000",
    prizeAmountNumber: 175000,
    eligibility: "All Design, Tech & BCA Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 2280,
    status: "Closing Soon",
    registrationUrl: "https://example.com/register/nextgen-web",
    tags: ["Full-Stack", "React 19", "Tailwind CSS", "Accessibility", "Animations"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    rules: [
      "Lighthouse performance, accessibility, and SEO scores must exceed 90.",
      "Design systems must use consistent CSS tokens rather than arbitrary ad-hoc inline styles.",
      "Responsive layout from 320px to 1920px without horizontal scroll is mandatory."
    ],
    timeline: [
      {
        title: "Sprint Kickoff & UI Briefs",
        type: "Kickoff",
        startDate: "2025-10-22",
        endDate: "2025-10-22",
        description: "3 UI challenge tracks announced: Collaborative Tools, Creator Dashboards, and Commerce."
      },
      {
        title: "CodeSprint & Peer Critiques",
        type: "Sprint",
        startDate: "2025-10-22",
        endDate: "2025-10-24",
        description: "Build interactive apps with live developer pair programming checkpoints."
      }
    ],
    rewards: [
      {
        position: "Best Web Craft",
        amount: "₹90,000",
        perks: ["GitHub Campus Swag Hamper", "Feature on React India Showcase"]
      },
      {
        position: "Best Accessibility & UX",
        amount: "₹50,000",
        perks: ["Frontend Masters 1-Year Subscription", "Certificate"]
      },
      {
        position: "Community Favorite",
        amount: "₹35,000",
        perks: ["Exclusive Developer Kit"]
      }
    ],
    createdAt: "2025-09-04T15:00:00Z"
  },
  {
    id: "hack-9",
    slug: "smartcampus-iot-hackathon",
    title: "SmartCampus: Connected IoT & Hardware Hackathon",
    tagline: "Sensor networks for campus safety, energy savings, and asset tracking.",
    description:
      "A hands-on hardware and embedded software hackathon where student makers deploy micro-controllers, environmental sensors, and telemetry dashboards to build a smart, sustainable campus.",
    organizerName: "Texas Instruments & BITS Pilani Maker Lab",
    organizerType: "College",
    category: "IoT",
    mode: "Offline",
    location: "BITS Pilani Hyderabad Campus",
    startDate: "2025-11-28",
    endDate: "2025-11-30",
    registrationDeadline: "2025-11-15",
    entryFee: "₹300",
    isFree: false,
    prize: "₹2,50,000",
    prizeAmountNumber: 250000,
    eligibility: "Engineering & Polytechnic Students",
    teamSize: "3 - 5 Members",
    minTeamSize: 3,
    maxTeamSize: 5,
    registeredCount: 420,
    status: "Open",
    registrationUrl: "https://example.com/register/smartcampus-iot",
    tags: ["IoT", "Hardware", "Sensors", "ESP32", "Smart Cities"],
    technologies: ["C++", "FreeRTOS", "MQTT", "Grafana", "Node.js"],
    rules: [
      "Hardware development kits (TI LaunchPad / ESP32) will be provided on-site at the campus lab.",
      "Teams must construct both the physical sensor node and the web monitoring dashboard.",
      "Live hardware demonstrations will be evaluated in the campus testbed."
    ],
    timeline: [
      {
        title: "Hardware Abstract Screening",
        type: "Round 1",
        startDate: "2025-11-01",
        endDate: "2025-11-15",
        description: "Submit circuit schematics and proposed sensor architecture."
      },
      {
        title: "On-Site Maker Hackathon",
        type: "On-Site Finale",
        startDate: "2025-11-28",
        endDate: "2025-11-30",
        description: "48-hour continuous soldering, coding, and live field trials at BITS Hyderabad."
      }
    ],
    rewards: [
      {
        position: "Best Hardware Innovation",
        amount: "₹1,25,000",
        perks: ["Texas Instruments Direct PPI for Hardware Roles", "Champion Trophy"]
      },
      {
        position: "Runner Up",
        amount: "₹75,000",
        perks: ["Maker Lab Seed Grant", "Certificate of Merit"]
      },
      {
        position: "Best Industrial Design",
        amount: "₹50,000",
        perks: ["Digital Oscilloscope Kit & Swag"]
      }
    ],
    createdAt: "2025-08-22T13:00:00Z"
  },
  {
    id: "hack-10",
    slug: "decentralize-india-hackathon",
    title: "Decentralize India: Web3 & Token Engineering",
    tagline: "Empowering transparent public credentials, decentralized storage, and DAOs.",
    description:
      "Build verifiable credential systems for universities, decentralized identity wallets for civic entitlements, and high-speed Layer-2 state channels with seamless user onboarding.",
    organizerName: "Polygon Guild & Ethereum India Fellows",
    organizerType: "Corporate",
    category: "Blockchain",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-22",
    endDate: "2025-11-24",
    registrationDeadline: "2025-11-18",
    entryFee: "Free",
    isFree: true,
    prize: "₹3,00,000",
    prizeAmountNumber: 300000,
    eligibility: "All University Students",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 1460,
    status: "Open",
    registrationUrl: "https://example.com/register/decentralize-india",
    tags: ["Web3", "Blockchain", "Smart Contracts", "Solidity", "Zero-Knowledge"],
    technologies: ["Solidity", "Ethers.js", "Polygon", "Next.js", "Hardhat"],
    rules: [
      "Deploy contracts on Mumbai / Polygon testnet or Sepolia testnet only. No real funds needed.",
      "Code must pass automated security linters (Slither / Mythril).",
      "Gas optimization benchmarks must be explained in the final documentation."
    ],
    timeline: [
      {
        title: "Web3 Bootcamp & Token Tooling",
        type: "Bootcamp",
        startDate: "2025-11-15",
        endDate: "2025-11-17",
        description: "Hands-on tutorials on account abstraction and gasless transactions."
      },
      {
        title: "Main 48-Hour Hackathon",
        type: "Hacking",
        startDate: "2025-11-22",
        endDate: "2025-11-24",
        description: "Build smart contracts and front-end dApp interfaces."
      }
    ],
    rewards: [
      {
        position: "Polygon Grand Winner",
        amount: "₹1,50,000",
        perks: ["Polygon Ecosystem Grant Fast-Track", "Web3 Fellow Trophy"]
      },
      {
        position: "Runner Up",
        amount: "₹90,000",
        perks: ["Direct Developer Interview", "Certificates"]
      },
      {
        position: "Best Account Abstraction UX",
        amount: "₹60,000",
        perks: ["Hardware Crypto Wallets Pack"]
      }
    ],
    createdAt: "2025-09-06T18:00:00Z"
  },
  {
    id: "hack-11",
    slug: "smart-india-civic-hackathon",
    title: "CivicTech: Smart Governance & Public Goods",
    tagline: "Solving civic transport bottlenecks, pothole reporting, and municipal grievance tracking.",
    description:
      "Collaborate with municipal bodies to build crowdsourced urban infrastructure trackers, public bus route optimization systems, and automated civic grievance escalations for local councils.",
    organizerName: "National Informatics Society & Delhi Tech University",
    organizerType: "College",
    category: "Open Innovation",
    mode: "Hybrid",
    location: "New Delhi & Online",
    startDate: "2025-12-05",
    endDate: "2025-12-07",
    registrationDeadline: "2025-11-25",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,75,000",
    prizeAmountNumber: 275000,
    eligibility: "Open to All Students & Research Scholars",
    teamSize: "2 - 5 Members",
    minTeamSize: 2,
    maxTeamSize: 5,
    registeredCount: 1590,
    status: "Open",
    registrationUrl: "https://example.com/register/civictech",
    tags: ["CivicTech", "Open Innovation", "Public Goods", "Smart Cities", "GIS"],
    technologies: ["React", "Python", "PostgreSQL", "Leaflet", "FastAPI"],
    rules: [
      "Prototypes must utilize publicly available government open data portals (data.gov.in).",
      "Solutions must include user verification safeguards against spam civic complaints.",
      "Top 10 teams will pitch directly to municipal administrative officers."
    ],
    timeline: [
      {
        title: "Problem Statement Selection",
        type: "Round 1",
        startDate: "2025-11-10",
        endDate: "2025-11-25",
        description: "Choose from 5 civic problem tracks provided by urban development commissioners."
      },
      {
        title: "Hackathon Sprint & Field Pilot Demo",
        type: "Round 2",
        startDate: "2025-12-05",
        endDate: "2025-12-07",
        description: "Build working mobile/web apps and present simulated live deployments."
      }
    ],
    rewards: [
      {
        position: "Civic Innovator Award",
        amount: "₹1,40,000",
        perks: ["Municipal Pilot Trial Contract", "National Recognition Plaque"]
      },
      {
        position: "First Runner-Up",
        amount: "₹85,000",
        perks: ["State IT Fellowship Consideration", "Certificate of Honor"]
      },
      {
        position: "Best GIS Implementation",
        amount: "₹50,000",
        perks: ["Spatial Tech Certification & Swag"]
      }
    ],
    createdAt: "2025-08-25T14:00:00Z"
  },
  {
    id: "hack-12",
    slug: "devtool-global-hackathon",
    title: "DevForge: Developer Tools & Productivity Hackathon",
    tagline: "Build CLIs, VS Code extensions, automated testing harnesses, and CI/CD utilities.",
    description:
      "A hackathon for developers who love building tools for other developers. Create game-changing command-line utilities, AI coding companions, automated PR reviewers, and database GUI helpers.",
    organizerName: "GitHub Education & Postman Student Community",
    organizerType: "Corporate",
    category: "Developer Tools",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-12",
    endDate: "2025-11-14",
    registrationDeadline: "2025-11-08",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,50,000",
    prizeAmountNumber: 250000,
    eligibility: "All Tech & Engineering Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1910,
    status: "Open",
    registrationUrl: "https://example.com/register/devforge",
    tags: ["DevTools", "CLI", "VS Code Extensions", "Productivity", "Open Source"],
    technologies: ["TypeScript", "Rust", "Go", "Electron", "GitHub Actions"],
    rules: [
      "Tools must be distributed as an npm package, binary release, or VS Code marketplace extension.",
      "Clear installation documentation and animated demo GIFs must accompany the README.",
      "Submissions are evaluated on developer ergonomics, speed, and reliability."
    ],
    timeline: [
      {
        title: "Idea Pitch & Repo Registration",
        type: "Kickoff",
        startDate: "2025-11-01",
        endDate: "2025-11-08",
        description: "Register GitHub repo and project architecture synopsis."
      },
      {
        title: "48-Hour Coding Marathon",
        type: "Sprint",
        startDate: "2025-11-12",
        endDate: "2025-11-14",
        description: "Build, package, and release your developer utility."
      }
    ],
    rewards: [
      {
        position: "Grand DevTool Winner",
        amount: "₹1,25,000",
        perks: ["Feature in GitHub Student Developer Pack Showcase", "Postman Enterprise Swag Bag"]
      },
      {
        position: "Fastest CLI Tool",
        amount: "₹75,000",
        perks: ["JetBrains All Products 1-Year Pack", "Certificate"]
      },
      {
        position: "Best Developer UX",
        amount: "₹50,000",
        perks: ["Ergonomic Mechanical Keyboard & Goodies"]
      }
    ],
    createdAt: "2025-09-01T16:00:00Z"
  }
];
