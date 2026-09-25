import { Competition } from "@/types/competition";

export const MOCK_COMPETITIONS: Competition[] = [
  {
    id: "comp-1",
    slug: "ai-innovation-challenge",
    title: "AI Innovation Challenge 2025",
    description:
      "Build next-generation generative AI and machine learning solutions solving real-world challenges in healthcare, education, and climate tech. Compete with top student innovators nationwide and win mentorship from AI researchers.",
    organizerName: "National AI Foundation & Microsoft Student Chapter",
    organizerType: "Corporate",
    category: "AI / Machine Learning",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-10-15",
    endDate: "2025-11-20",
    registrationDeadline: "2025-10-10",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,50,000",
    prizeAmountNumber: 250000,
    eligibility: "All Undergraduate & Postgraduate Students",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 1420,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/ai-innovation",
    websiteUrl: "https://example.com/ai-innovation-challenge",
    tags: ["Generative AI", "LLMs", "Healthcare Tech", "Climate AI"],
    rules: [
      "Open to all enrolled university students with valid college ID.",
      "Teams must consist of 2 to 4 members. Inter-college teams are permitted.",
      "All code and project repositories must be developed during the challenge timeline.",
      "Plagiarism or use of pre-existing commercial IP will lead to immediate disqualification.",
      "Final submissions must include a working prototype, GitHub repo, and a 3-minute pitch video."
    ],
    timeline: [
      {
        title: "Registration & Idea Submission",
        type: "Online Round",
        startDate: "2025-09-15",
        endDate: "2025-10-10",
        description: "Submit a 2-page problem statement and proposed architectural solution."
      },
      {
        title: "Prototype Building Sprint",
        type: "Development Round",
        startDate: "2025-10-15",
        endDate: "2025-11-05",
        description: "Shortlisted top 50 teams build their working MVP with mentor checkpoints."
      },
      {
        title: "Grand Finale & Live Pitch",
        type: "Virtual Finale",
        startDate: "2025-11-18",
        endDate: "2025-11-20",
        description: "Top 10 finalist teams pitch live to a panel of venture capitalists and industry leaders."
      }
    ],
    rewards: [
      {
        position: "1st Place (Winner)",
        amount: "₹1,25,000",
        perks: ["Direct Fast-Track Interview with Microsoft Research", "Cloud Credits worth $5,000", "Winner Trophy & Certificate"]
      },
      {
        position: "1st Runner Up",
        amount: "₹75,000",
        perks: ["Cloud Credits worth $2,500", "Mentorship Sessions", "Runner-up Trophy & Certificate"]
      },
      {
        position: "2nd Runner Up",
        amount: "₹50,000",
        perks: ["Cloud Credits worth $1,000", "Merchandise Hamper", "Certificate of Excellence"]
      }
    ],
    highlights: [
      "Mentorship from leading AI engineers",
      "Over ₹2.5 Lakhs in cash prizes",
      "Azure cloud compute credits for all participants"
    ],
    createdAt: "2025-09-01T10:00:00Z"
  },
  {
    id: "comp-2",
    slug: "tata-imagination-challenge",
    title: "Tata Imagination Challenge 2025",
    description:
      "A flagship national case competition testing business acumen, strategic vision, and operational problem solving across emerging digital economies. Step into the shoes of corporate CXOs.",
    organizerName: "Tata Sons & Management League",
    organizerType: "Corporate",
    category: "Case Study & Strategy",
    mode: "Hybrid",
    location: "Mumbai & Online",
    startDate: "2025-10-25",
    endDate: "2025-12-05",
    registrationDeadline: "2025-10-18",
    entryFee: "Free",
    isFree: true,
    prize: "₹4,00,000",
    prizeAmountNumber: 400000,
    eligibility: "Engineering & MBA Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 3890,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/tata-imagination",
    websiteUrl: "https://example.com/tata-imagination",
    tags: ["Strategy", "Business Analytics", "Supply Chain", "Fintech"],
    rules: [
      "Eligible for 3rd/4th year undergraduate engineering and full-time MBA students.",
      "Solo participants or teams of up to 3 are welcome.",
      "Submissions will be analyzed using double-blind review methodology.",
      "Final presentations must be delivered in person at Tata Bombay House or via verified hybrid link."
    ],
    timeline: [
      {
        title: "Online Aptitude & Business Case Quiz",
        type: "Screening Round",
        startDate: "2025-10-20",
        endDate: "2025-10-22",
        description: "30-minute analytical and case-thinking assessment."
      },
      {
        title: "Detailed Case Pitch Submission",
        type: "Case Round",
        startDate: "2025-11-01",
        endDate: "2025-11-15",
        description: "Submit a 10-slide executive pitch deck addressing the business challenge."
      },
      {
        title: "National Finals at Bombay House",
        type: "In-Person Finale",
        startDate: "2025-12-05",
        endDate: "2025-12-05",
        description: "Top 8 finalists present directly to Tata senior leadership in Mumbai."
      }
    ],
    rewards: [
      {
        position: "National Champion",
        amount: "₹2,00,000",
        perks: ["Pre-Placement Interview (PPI) for Tata Administrative Services", "Executive Lunch with Tata Leadership", "Winner Trophy"]
      },
      {
        position: "First Runner-Up",
        amount: "₹1,20,000",
        perks: ["Direct PPI Opportunities", "Certificate of Merit"]
      },
      {
        position: "Second Runner-Up",
        amount: "₹80,000",
        perks: ["Direct PPI Opportunities", "Certificate of Merit"]
      }
    ],
    highlights: [
      "Pre-Placement Interview opportunities",
      "Executive networking at Tata Headquarters",
      "National press coverage"
    ],
    createdAt: "2025-08-28T09:30:00Z"
  },
  {
    id: "comp-3",
    slug: "fintech-disrupt-challenge",
    title: "FinTech Disrupt: Digital Banking Arena",
    description:
      "Design breakthrough algorithms, fraud detection pipelines, or decentralized finance tools that empower millions of underbanked citizens and redefine UPI micro-transactions.",
    organizerName: "Razorpay & NPCI Innovation Cell",
    organizerType: "Corporate",
    category: "Fintech & Coding",
    mode: "Online",
    location: "Bengaluru (Virtual)",
    startDate: "2025-10-05",
    endDate: "2025-10-28",
    registrationDeadline: "2025-10-02",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,80,000",
    prizeAmountNumber: 180000,
    eligibility: "Open to all College Students",
    teamSize: "2 - 3 Members",
    minTeamSize: 2,
    maxTeamSize: 3,
    registeredCount: 890,
    status: "Closing Soon",
    poster: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/fintech-disrupt",
    tags: ["Fintech", "Payment Gateways", "APIs", "Cybersecurity"],
    rules: [
      "Must utilize simulated sandbox banking APIs provided upon registration.",
      "Compliance with data privacy and security benchmarks is strictly evaluated.",
      "Open source contributions and documentation earn bonus evaluation points."
    ],
    timeline: [
      {
        title: "API Sandbox Onboarding",
        type: "Kickoff",
        startDate: "2025-10-05",
        endDate: "2025-10-07",
        description: "Get access to simulated banking endpoints and challenge prompts."
      },
      {
        title: "Prototype Development",
        type: "Coding Sprint",
        startDate: "2025-10-08",
        endDate: "2025-10-24",
        description: "Build robust transaction routing or fraud prevention microservices."
      },
      {
        title: "Final Code & Demo Evaluation",
        type: "Jury Demo",
        startDate: "2025-10-27",
        endDate: "2025-10-28",
        description: "Live functional verification and architectural stress tests."
      }
    ],
    rewards: [
      {
        position: "Grand Winner",
        amount: "₹1,00,000",
        perks: ["Paid Summer Internship Offer", "Developer Swag Kit"]
      },
      {
        position: "Runners Up",
        amount: "₹50,000",
        perks: ["Fast-Track Technical Interviews", "Razorpay Goodies"]
      },
      {
        position: "Best UX Award",
        amount: "₹30,000",
        perks: ["Certificate of Special Recognition"]
      }
    ],
    createdAt: "2025-09-05T14:15:00Z"
  },
  {
    id: "comp-4",
    slug: "national-cleantech-innovators",
    title: "National CleanTech & Green Energy Quest",
    description:
      "A national engineering challenge focused on developing hardware, IoT, and software solutions for solar optimization, EV battery health monitoring, and smart grid conservation.",
    organizerName: "Ministry of New & Renewable Energy & IIT Delhi",
    organizerType: "College",
    category: "CleanTech & Hardware",
    mode: "Offline",
    location: "IIT Delhi Campus, New Delhi",
    startDate: "2025-11-10",
    endDate: "2025-11-12",
    registrationDeadline: "2025-10-22",
    entryFee: "₹250",
    isFree: false,
    prize: "₹3,00,000",
    prizeAmountNumber: 300000,
    eligibility: "Engineering, Diploma & Science Students",
    teamSize: "3 - 5 Members",
    minTeamSize: 3,
    maxTeamSize: 5,
    registeredCount: 640,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/cleantech-quest",
    tags: ["Clean Energy", "IoT", "EV Tech", "Hardware Prototyping"],
    rules: [
      "Hardware working models or simulation bench setups must be brought to IIT Delhi for final evaluation.",
      "Travel allowance (sleeper class rail) provided for shortlisted outstation finalists.",
      "Safety protocols must be observed for any high-voltage or chemical battery testing."
    ],
    timeline: [
      {
        title: "Technical Abstract Submission",
        type: "Review Round",
        startDate: "2025-10-01",
        endDate: "2025-10-22",
        description: "Submit CAD models, circuit schematics, or simulation reports."
      },
      {
        title: "On-Campus Hardware Exhibition",
        type: "In-Person Demo",
        startDate: "2025-11-10",
        endDate: "2025-11-12",
        description: "Live demonstration and stall showcase at IIT Delhi Research Park."
      }
    ],
    rewards: [
      {
        position: "First Prize",
        amount: "₹1,50,000",
        perks: ["IIT Delhi Incubation Seed Grant Opportunity", "Trophy & Medals"]
      },
      {
        position: "Second Prize",
        amount: "₹1,00,000",
        perks: ["Maker Lab Free Pass for 6 Months", "Certificates"]
      },
      {
        position: "Third Prize",
        amount: "₹50,000",
        perks: ["Technical Books & Component Vouchers"]
      }
    ],
    createdAt: "2025-08-20T11:00:00Z"
  },
  {
    id: "comp-5",
    slug: "global-design-sprint",
    title: "Global UX/UI Design Sprint 2025",
    description:
      "Rethink student productivity, accessible education apps, or mental wellness interfaces. Craft stunning, research-backed Figma prototypes evaluated by top global product designers.",
    organizerName: "Adobe Design Circle & NID Ahmedabad",
    organizerType: "Corporate",
    category: "Design & UX",
    mode: "Online",
    location: "Global (Online)",
    startDate: "2025-10-12",
    endDate: "2025-11-02",
    registrationDeadline: "2025-10-08",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,50,000 + Creative Cloud Subscriptions",
    prizeAmountNumber: 150000,
    eligibility: "All Design, Arts & Tech Students",
    teamSize: "1 - 2 Members",
    minTeamSize: 1,
    maxTeamSize: 2,
    registeredCount: 2150,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/design-sprint",
    tags: ["UI/UX", "Figma", "Design Systems", "Product Design"],
    rules: [
      "Submissions must be made via public Figma files with auto-layout and interactive prototypes.",
      "Include a design case study outlining user research, personas, wireframes, and design rationale.",
      "Original assets must be used or properly licensed."
    ],
    timeline: [
      {
        title: "Design Brief Release & Wireframing",
        type: "Sprint 1",
        startDate: "2025-10-12",
        endDate: "2025-10-19",
        description: "Release of 3 problem statements. Teams formulate user journeys and low-fi drafts."
      },
      {
        title: "High-Fidelity Prototyping",
        type: "Sprint 2",
        startDate: "2025-10-20",
        endDate: "2025-11-02",
        description: "Refining visual hierarchy, micro-interactions, and design token documentation."
      }
    ],
    rewards: [
      {
        position: "Best Overall Product Experience",
        amount: "₹80,000",
        perks: ["1-Year Adobe All Apps Subscription", "Portfolio Review by Head of Design at Swiggy"]
      },
      {
        position: "Best Visual Craft & System",
        amount: "₹45,000",
        perks: ["1-Year Adobe All Apps Subscription", "Design Swag Pack"]
      },
      {
        position: "People's Choice Design",
        amount: "₹25,000",
        perks: ["Figma Community Spotlight Feature", "Certificate"]
      }
    ],
    createdAt: "2025-09-02T16:00:00Z"
  },
  {
    id: "comp-6",
    slug: "cloud-architects-cup",
    title: "National Cloud Architects Cup",
    description:
      "Design fault-tolerant, scalable, multi-region serverless architectures capable of handling 100,000 RPS during flash sales while optimizing cost and network latency.",
    organizerName: "Amazon Web Services Student Community",
    organizerType: "Corporate",
    category: "Cloud & DevOps",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-10-30",
    endDate: "2025-11-25",
    registrationDeadline: "2025-10-26",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,00,000 + AWS Credits",
    prizeAmountNumber: 200000,
    eligibility: "Engineering & IT Students",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 1120,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/cloud-cup",
    tags: ["AWS", "DevOps", "Kubernetes", "Serverless", "Terraform"],
    rules: [
      "Architecture blueprints must use Infrastructure as Code (Terraform or AWS CDK).",
      "Simulated chaos engineering stress tests will run against submissions.",
      "Cost breakdown analysis per million requests must be submitted."
    ],
    timeline: [
      {
        title: "Architecture Blueprint Submission",
        type: "Stage 1",
        startDate: "2025-10-30",
        endDate: "2025-11-10",
        description: "Submit IaC scripts and architectural diagrams."
      },
      {
        title: "Live Chaos Monkey Stress Test",
        type: "Stage 2",
        startDate: "2025-11-15",
        endDate: "2025-11-25",
        description: "Automated traffic injection simulating flash sale loads."
      }
    ],
    rewards: [
      {
        position: "Grand Architect Winner",
        amount: "₹1,00,000",
        perks: ["$10,000 AWS Promotional Credits", "AWS Certification Voucher"]
      },
      {
        position: "Runner Up",
        amount: "₹60,000",
        perks: ["$5,000 AWS Credits", "AWS Certification Voucher"]
      },
      {
        position: "Most Cost-Efficient Design",
        amount: "₹40,000",
        perks: ["$2,500 AWS Credits", "Official AWS Gear"]
      }
    ],
    createdAt: "2025-08-30T12:00:00Z"
  },
  {
    id: "comp-7",
    slug: "biotech-case-championship",
    title: "BioTech Health Hack & Case Championship",
    description:
      "Bridge bio-informatics, genomics, and telemedicine. Propose actionable distribution strategies and analytical diagnostic workflows for rural healthcare clinics.",
    organizerName: "Biocon Academy & AIIMS New Delhi",
    organizerType: "College",
    category: "BioTech & Healthcare",
    mode: "Hybrid",
    location: "Bengaluru & Online",
    startDate: "2025-11-01",
    endDate: "2025-11-28",
    registrationDeadline: "2025-10-25",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,20,000",
    prizeAmountNumber: 220000,
    eligibility: "Biotech, MBBS, Pharmacy & B.Tech Students",
    teamSize: "2 - 4 Members",
    minTeamSize: 2,
    maxTeamSize: 4,
    registeredCount: 740,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/biotech-championship",
    tags: ["Biotech", "Diagnostics", "Public Health", "Genomics"],
    rules: [
      "Interdisciplinary teams combining technical and life sciences students are strongly encouraged.",
      "Ethical clinical guidelines must be strictly adhered to in all proposals.",
      "Clinical validation hypotheses must cite peer-reviewed medical journals."
    ],
    timeline: [
      {
        title: "Executive Concept Note",
        type: "Round 1",
        startDate: "2025-11-01",
        endDate: "2025-11-10",
        description: "Submit 5-page clinical and technological viability paper."
      },
      {
        title: "Jury Defense & Prototype",
        type: "Round 2",
        startDate: "2025-11-20",
        endDate: "2025-11-28",
        description: "Virtual and in-person hybrid defense before Biocon scientific advisors."
      }
    ],
    rewards: [
      {
        position: "Gold Trophy",
        amount: "₹1,20,000",
        perks: ["Biocon R&D Lab Fellowship Offer", "Certificate of Excellence"]
      },
      {
        position: "Silver Trophy",
        amount: "₹65,000",
        perks: ["Direct Research Interview", "Certificate"]
      },
      {
        position: "Bronze Trophy",
        amount: "₹35,000",
        perks: ["Certificate of Merit"]
      }
    ],
    createdAt: "2025-09-08T08:00:00Z"
  },
  {
    id: "comp-8",
    slug: "cyber-shield-collegiate-ctf",
    title: "CyberShield Collegiate CTF Challenge",
    description:
      "A fast-paced 48-hour capture-the-flag competition featuring reverse engineering, binary exploitation, web vulnerabilities, cryptography, and digital forensics.",
    organizerName: "CERT-In Student Wing & Null Community",
    organizerType: "Community",
    category: "Cybersecurity & CTF",
    mode: "Online",
    location: "Online",
    startDate: "2025-10-18",
    endDate: "2025-10-20",
    registrationDeadline: "2025-10-16",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,75,000 + Bug Bounty Vouchers",
    prizeAmountNumber: 175000,
    eligibility: "All University Students",
    teamSize: "1 - 4 Members",
    minTeamSize: 1,
    maxTeamSize: 4,
    registeredCount: 2480,
    status: "Closing Soon",
    poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/cybershield",
    tags: ["CTF", "Ethical Hacking", "Cryptography", "Reverse Engineering"],
    rules: [
      "Attacking competition infrastructure or scoreboard servers will result in an immediate ban.",
      "Flag sharing or collusion between teams is strictly prohibited and monitored by telemetry.",
      "Write-ups must be submitted within 4 hours of competition conclusion to claim prizes."
    ],
    timeline: [
      {
        title: "Platform Warmup Challenges",
        type: "Warmup",
        startDate: "2025-10-16",
        endDate: "2025-10-17",
        description: "Solve baseline puzzles to verify environment connectivity."
      },
      {
        title: "48-Hour Live CTF Marathon",
        type: "Main Contest",
        startDate: "2025-10-18",
        endDate: "2025-10-20",
        description: "Jeopardy-style challenge board opens with dynamic scoring."
      }
    ],
    rewards: [
      {
        position: "Champion Squad",
        amount: "₹90,000",
        perks: ["Offensive Security Exam Vouchers", "Exclusive CyberShield Hacker Badges"]
      },
      {
        position: "Second Place",
        amount: "₹55,000",
        perks: ["Burp Suite Pro 1-Year Licenses", "Certificates"]
      },
      {
        position: "Third Place",
        amount: "₹30,000",
        perks: ["HackTheBox VIP Subscriptions", "Certificates"]
      }
    ],
    createdAt: "2025-08-25T17:30:00Z"
  },
  {
    id: "comp-9",
    slug: "product-management-ace",
    title: "Product Management Ace 2025",
    description:
      "Craft comprehensive Product Requirement Documents (PRDs), user acquisition growth flywheels, and monetization roadmaps for high-growth consumer internet apps.",
    organizerName: "The Product Folks & IIM Bangalore PM Club",
    organizerType: "College",
    category: "Product Management",
    mode: "Online",
    location: "Bengaluru (Virtual)",
    startDate: "2025-11-05",
    endDate: "2025-11-30",
    registrationDeadline: "2025-10-31",
    entryFee: "₹100",
    isFree: false,
    prize: "₹1,60,000",
    prizeAmountNumber: 160000,
    eligibility: "Engineering, Arts & Management Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1670,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/pm-ace",
    tags: ["Product Management", "PRD", "Growth", "User Retention"],
    rules: [
      "PRD submissions must follow the provided industry template and not exceed 8 pages.",
      "Data-driven metrics (North Star, CAC, LTV) must accompany every proposed feature.",
      "Live presentation round for top 10 finalists."
    ],
    timeline: [
      {
        title: "PRD Teaser & Problem Statement",
        type: "Submission Round",
        startDate: "2025-11-05",
        endDate: "2025-11-18",
        description: "Submit product strategy and wireframed user journeys."
      },
      {
        title: "Finalist Pitch & Defense",
        type: "Online Defense",
        startDate: "2025-11-28",
        endDate: "2025-11-30",
        description: "Pitch to VP of Products from Flipkart, Razorpay, and CRED."
      }
    ],
    rewards: [
      {
        position: "Top PM Fellow",
        amount: "₹85,000",
        perks: ["Associate Product Manager (APM) Referral Network Access", "1-on-1 Mentorship for 6 Months"]
      },
      {
        position: "Runner Up PM",
        amount: "₹45,000",
        perks: ["PM Book Bundle & Course Access", "Certificate of Merit"]
      },
      {
        position: "Best Product Tear-Down",
        amount: "₹30,000",
        perks: ["Feature in The Product Folks Newsletter", "Certificate"]
      }
    ],
    createdAt: "2025-09-10T13:45:00Z"
  },
  {
    id: "comp-10",
    slug: "robotics-rover-championship",
    title: "All-India Autonomous Rover Championship",
    description:
      "Design, build, and navigate an autonomous ground vehicle capable of traversing simulated martian terrain, navigating obstacles via LiDAR/ROS, and collecting soil samples.",
    organizerName: "ISRO Space Applications Centre & IIT Bombay Techfest",
    organizerType: "College",
    category: "Robotics & Hardware",
    mode: "Offline",
    location: "IIT Bombay Campus, Mumbai",
    startDate: "2025-12-15",
    endDate: "2025-12-18",
    registrationDeadline: "2025-11-10",
    entryFee: "₹500",
    isFree: false,
    prize: "₹5,00,000",
    prizeAmountNumber: 500000,
    eligibility: "Engineering & Polytechnic Students",
    teamSize: "4 - 8 Members",
    minTeamSize: 4,
    maxTeamSize: 8,
    registeredCount: 320,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/rover-championship",
    tags: ["Robotics", "ROS", "Autonomous Systems", "LiDAR", "Mechatronics"],
    rules: [
      "Maximum rover footprint dimensions: 120cm x 90cm x 100cm; weight limit: 45kg.",
      "Safety kill switch hardware must be installed on the exterior of the chassis.",
      "Both manual tele-operation and full autonomous waypoint navigation will be tested on the obstacle course."
    ],
    timeline: [
      {
        title: "Preliminary Design Review (PDR)",
        type: "Virtual Review",
        startDate: "2025-10-15",
        endDate: "2025-11-10",
        description: "Submit CAD structural analysis, motor torque calculations, and sensor pipeline."
      },
      {
        title: "Critical Design Review (CDR)",
        type: "Demonstration",
        startDate: "2025-11-20",
        endDate: "2025-11-30",
        description: "Video evidence of autonomous mobility and tele-operation."
      },
      {
        title: "On-Site Arena Finals at IIT Bombay",
        type: "On-Site Finals",
        startDate: "2025-12-15",
        endDate: "2025-12-18",
        description: "4-day obstacle navigation, sample retrieval, and extreme terrain trials."
      }
    ],
    rewards: [
      {
        position: "National Champion Rover",
        amount: "₹2,50,000",
        perks: ["ISRO SAC Research Visit & Felicitation", "Championship Trophy"]
      },
      {
        position: "Second Overall",
        amount: "₹1,50,000",
        perks: ["Robotics Component Sponsorship Voucher", "Silver Trophy"]
      },
      {
        position: "Best Autonomous Navigation",
        amount: "₹1,00,000",
        perks: ["Special Innovation Award", "Certificate"]
      }
    ],
    createdAt: "2025-08-15T10:00:00Z"
  },
  {
    id: "comp-11",
    slug: "edtech-social-impact-challenge",
    title: "EdTech for Bharat: Social Impact Challenge",
    description:
      "Create localized, low-bandwidth educational tools, vernacular learning aids, or gamified literacy platforms for primary school children across rural India.",
    organizerName: "Central Square Foundation & NITI Aayog Aspirational Districts",
    organizerType: "Community",
    category: "Social Impact & EdTech",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-10-28",
    endDate: "2025-11-25",
    registrationDeadline: "2025-10-24",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,00,000 + Pilot Grant",
    prizeAmountNumber: 200000,
    eligibility: "Open to all Students & Research Scholars",
    teamSize: "1 - 4 Members",
    minTeamSize: 1,
    maxTeamSize: 4,
    registeredCount: 1340,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/edtech-bharat",
    tags: ["EdTech", "Vernacular", "Social Impact", "Public Policy"],
    rules: [
      "Solutions must support at least 2 Indian vernacular languages.",
      "Must be lightweight enough to operate on 2G/3G mobile networks or offline-first.",
      "Prototypes must be demonstrated with actual student user testing feedback."
    ],
    timeline: [
      {
        title: "Proposal & Target Audience Mapping",
        type: "Round 1",
        startDate: "2025-10-28",
        endDate: "2025-11-08",
        description: "Submit problem space analysis and vernacular pedagogical approach."
      },
      {
        title: "Prototype Testing & Mentorship",
        type: "Round 2",
        startDate: "2025-11-12",
        endDate: "2025-11-25",
        description: "Integrate feedback from rural school teachers and pilot test interfaces."
      }
    ],
    rewards: [
      {
        position: "Impact Innovator Award",
        amount: "₹1,20,000",
        perks: ["₹5,00,000 Implementation Pilot Grant", "Government Recognition Certificate"]
      },
      {
        position: "Runners Up",
        amount: "₹80,000",
        perks: ["EdTech Incubator Fast-Track", "Certificate of Merit"]
      }
    ],
    createdAt: "2025-09-04T12:00:00Z"
  },
  {
    id: "comp-12",
    slug: "data-science-open-arena",
    title: "Data Science Open Arena 2025",
    description:
      "Predict customer churn, forecast retail supply chain bottlenecks, and optimize multimodal logistic routes using advanced econometric models and XGBoost / LightGBM ensembles.",
    organizerName: "Kaggle India Community & Flipkart Analytics",
    organizerType: "Corporate",
    category: "Data Science & Analytics",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-01",
    endDate: "2025-11-22",
    registrationDeadline: "2025-10-29",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,50,000",
    prizeAmountNumber: 150000,
    eligibility: "All College Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1980,
    status: "Open",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://example.com/register/data-science-arena",
    tags: ["Data Science", "Machine Learning", "Python", "Predictive Modeling"],
    rules: [
      "All submissions will be evaluated on unseen test data with balanced log-loss and F1-score.",
      "Final model notebook code must be fully reproducible with fixed random seeds.",
      "Ensemble stacking is allowed, but latency constraints (<100ms per inference) must be met."
    ],
    timeline: [
      {
        title: "Dataset Release & Baseline Benchmark",
        type: "Sprint 1",
        startDate: "2025-11-01",
        endDate: "2025-11-10",
        description: "Exploratory data analysis and public leaderboard launches."
      },
      {
        title: "Model Tuning & Private Test Set Evaluation",
        type: "Sprint 2",
        startDate: "2025-11-11",
        endDate: "2025-11-22",
        description: "Submit final pipeline for scoring on the private validation set."
      }
    ],
    rewards: [
      {
        position: "Leaderboard Champion",
        amount: "₹80,000",
        perks: ["Data Scientist Interview Fast-Track at Flipkart", "Trophy & GPU Cloud Credits"]
      },
      {
        position: "Second Place",
        amount: "₹45,000",
        perks: ["Cloud GPU Credits", "Certificate of Achievement"]
      },
      {
        position: "Third Place",
        amount: "₹25,000",
        perks: ["Kaggle Swag Hamper", "Certificate"]
      }
    ],
    createdAt: "2025-09-01T15:00:00Z"
  }
];
