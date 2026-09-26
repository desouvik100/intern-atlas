import { Contest } from "@/types/contest";

export const MOCK_CONTESTS: Contest[] = [
  {
    id: "contest-1",
    slug: "national-algorithmic-coding-arena",
    title: "National Algorithmic Coding Arena 2025",
    tagline: "Speed, accuracy, and optimal complexity in a 3-hour competitive programming showdown.",
    description:
      "A high-stakes algorithmic challenge testing advanced data structures, graph theory, dynamic programming, and computational geometry under strict memory and runtime constraints.",
    organizerName: "CodeCraft India & Algorithms Guild",
    organizerType: "Community",
    category: "Competitive Programming",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-10-19",
    endDate: "2025-10-19",
    registrationDeadline: "2025-10-17",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,50,000",
    prizeAmountNumber: 150000,
    eligibility: "Open to all College Students & Coders",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 3420,
    status: "Open",
    registrationUrl: "https://example.com/register/algorithmic-arena",
    websiteUrl: "https://example.com/algorithmic-arena-2025",
    tags: ["Algorithms", "Data Structures", "Dynamic Programming", "C++", "Java", "Python"],
    technologies: ["C++20", "Java", "Python 3", "Kotlin"],
    rules: [
      "Individual participation only. Team collaboration is strictly forbidden and monitored via telemetry.",
      "Plagiarism detection will run against all submitted solutions post-contest.",
      "Ranking is determined by the total problems solved with standard penalty time scoring.",
      "Supported compilers: GCC 13, Clang 16, OpenJDK 21, Python 3.12 with PyPy support."
    ],
    timeline: [
      {
        title: "Practice Sandbox & System Check",
        type: "Warmup Round",
        startDate: "2025-10-15",
        endDate: "2025-10-17",
        description: "Verify automated judge environment and sample I/O submission formats."
      },
      {
        title: "Live 3-Hour Contest Marathon",
        type: "Live Ranked Contest",
        startDate: "2025-10-19",
        endDate: "2025-10-19",
        description: "Solve 7 graded algorithmic problems ranging from Div2-A to Div1-D difficulty."
      }
    ],
    rewards: [
      {
        position: "1st Place (Grand Master)",
        amount: "₹75,000",
        perks: ["Algorithmic Champion Trophy", "Direct Technical Interview Referral", "Official Contest Hoodie"]
      },
      {
        position: "2nd Place",
        amount: "₹45,000",
        perks: ["Contest Plaque", "Developer Swag Pack", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹30,000",
        perks: ["Contest Plaque", "Certificate of Merit"]
      }
    ],
    highlights: [
      "Live dynamic scoreboard with real-time verdicts",
      "Editorial and detailed video solutions post-contest",
      "Direct screening interviews for top 25 performers"
    ],
    createdAt: "2025-09-10T08:00:00Z"
  },
  {
    id: "contest-2",
    slug: "frontend-ui-craft-battle",
    title: "PixelForge: Frontend UI Craft Battle",
    tagline: "Recreate complex interactive Figma layouts under strict 90-minute time pressure.",
    description:
      "A live design-to-code sprint. Contestants receive an unreleased, animated Figma design prototype and must recreate it pixel-perfect using modern HTML/CSS/JavaScript with responsive behavior.",
    organizerName: "DevDesign Circle & React India",
    organizerType: "Community",
    category: "Design & UI/UX",
    mode: "Online",
    location: "Virtual (Online)",
    startDate: "2025-10-26",
    endDate: "2025-10-26",
    registrationDeadline: "2025-10-23",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,20,000",
    prizeAmountNumber: 120000,
    eligibility: "Students & Self-taught Developers",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 1980,
    status: "Open",
    registrationUrl: "https://example.com/register/pixelforge",
    websiteUrl: "https://example.com/pixelforge-battle",
    tags: ["Frontend", "CSS", "Tailwind", "Responsive Design", "Micro-animations"],
    technologies: ["React", "HTML5", "CSS3", "Tailwind CSS"],
    rules: [
      "Figma design specifications will be unlocked exactly at the contest start time.",
      "Submissions are evaluated on visual fidelity, responsive fluidity (320px to 1440px), and code cleanliness.",
      "Third-party component libraries (e.g. pre-made bootstrap themes) are not permitted."
    ],
    timeline: [
      {
        title: "Environment Setup & Sandbox Brief",
        type: "Onboarding",
        startDate: "2025-10-24",
        endDate: "2025-10-25",
        description: "Configure your live codesandbox or local git repository."
      },
      {
        title: "90-Minute Speed Battle",
        type: "Live Contest",
        startDate: "2025-10-26",
        endDate: "2025-10-26",
        description: "Figma specs unlocked. Code, style, and submit live preview URL."
      }
    ],
    rewards: [
      {
        position: "Master Crafter",
        amount: "₹60,000",
        perks: ["Figma Professional 1-Year License", "PixelForge Gold Trophy", "Feature on UI Guild Showcase"]
      },
      {
        position: "Runner Up",
        amount: "₹35,000",
        perks: ["Frontend Masters 1-Year Pass", "Certificate of Excellence"]
      },
      {
        position: "Best Animation Craft",
        amount: "₹25,000",
        perks: ["Mechanical Keyboard & Swag"]
      }
    ],
    createdAt: "2025-09-08T10:30:00Z"
  },
  {
    id: "contest-3",
    slug: "bug-hunt-reverse-engineering",
    title: "BugHunt: Code Debugging Championship",
    tagline: "Find subtle concurrency race conditions, memory leaks, and off-by-one security vulnerabilities.",
    description:
      "A fast-paced diagnostic debugging contest. Developers receive repositories containing deliberate logic errors, deadlocks, and edge-case failures across multiple languages, racing to diagnose and patch them.",
    organizerName: "Systems Engineering Guild & IIT Roorkee ACM",
    organizerType: "College",
    category: "Debugging",
    mode: "Online",
    location: "Online",
    startDate: "2025-10-21",
    endDate: "2025-10-21",
    registrationDeadline: "2025-10-18",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,00,000",
    prizeAmountNumber: 100000,
    eligibility: "Engineering, BCA & MCA Students",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 2210,
    status: "Closing Soon",
    registrationUrl: "https://example.com/register/bughunt",
    tags: ["Debugging", "Code Review", "Unit Testing", "Concurrency", "Profiling"],
    technologies: ["Python", "C++", "Java", "GDB", "Valgrind"],
    rules: [
      "Points awarded for passing failing automated test suites while maintaining existing functionality.",
      "Overwriting test assertions or disabling checks results in instantaneous disqualification.",
      "Patch diff size will be used as a tie-breaker (minimal targeted fixes score higher)."
    ],
    timeline: [
      {
        title: "Test Harness Orientation",
        type: "Warmup",
        startDate: "2025-10-18",
        endDate: "2025-10-20",
        description: "Familiarize with the automated test execution platform."
      },
      {
        title: "2-Hour Live Debugging Sprint",
        type: "Contest",
        startDate: "2025-10-21",
        endDate: "2025-10-21",
        description: "10 broken codebases unlocked with failing tests. Fix, verify, and commit."
      }
    ],
    rewards: [
      {
        position: "Grand Bug Hunter",
        amount: "₹50,000",
        perks: ["JetBrains All Products License", "Bug Hunter Shield", "Certificate"]
      },
      {
        position: "Second Place",
        amount: "₹30,000",
        perks: ["Developer Tools Voucher", "Certificate"]
      },
      {
        position: "Third Place",
        amount: "₹20,000",
        perks: ["Swag Bag & Certificate"]
      }
    ],
    createdAt: "2025-09-05T14:00:00Z"
  },
  {
    id: "contest-4",
    slug: "sql-mastery-database-showdown",
    title: "SQL Mastery: The Relational Query Battle",
    tagline: "Solve recursive CTE queries, window partition challenges, and explain-plan tuning.",
    description:
      "Demonstrate mastery of relational database design, complex analytical aggregations, hierarchical data traversal, and query optimization on massive real-world schemas.",
    organizerName: "DataCore Alliance & PostgreSQL User Group",
    organizerType: "Corporate",
    category: "Data & SQL",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-02",
    endDate: "2025-11-02",
    registrationDeadline: "2025-10-29",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,25,000",
    prizeAmountNumber: 125000,
    eligibility: "All Undergraduate & Graduate Students",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 1740,
    status: "Open",
    registrationUrl: "https://example.com/register/sql-mastery",
    tags: ["SQL", "PostgreSQL", "Database Design", "Window Functions", "Query Tuning"],
    technologies: ["PostgreSQL 16", "MySQL 8", "SQLite"],
    rules: [
      "Queries are graded against automated hidden validation datasets.",
      "Execution time limits strictly enforced (<500ms per query run).",
      "Using procedural stored functions is restricted unless specified by problem prompt."
    ],
    timeline: [
      {
        title: "Schema Explorer Phase",
        type: "Familiarization",
        startDate: "2025-10-30",
        endDate: "2025-11-01",
        description: "Study database schemas for e-commerce, banking, and logistics tracks."
      },
      {
        title: "90-Minute SQL Battle",
        type: "Contest",
        startDate: "2025-11-02",
        endDate: "2025-11-02",
        description: "Write queries to answer complex analytical and administrative questions."
      }
    ],
    rewards: [
      {
        position: "Database Architect Prize",
        amount: "₹65,000",
        perks: ["Data Architecture Mentorship", "Trophy & Certificate"]
      },
      {
        position: "Query Master (2nd)",
        amount: "₹35,000",
        perks: ["Technical Books & Vouchers"]
      },
      {
        position: "Third Place",
        amount: "₹25,000",
        perks: ["Certificate of Merit"]
      }
    ],
    createdAt: "2025-08-30T11:00:00Z"
  },
  {
    id: "contest-5",
    slug: "national-aptitude-olympiad",
    title: "National Tech Aptitude & Logic Olympiad",
    tagline: "Test logical reasoning, quantitative analysis, pattern recognition, and discrete math.",
    description:
      "A nationwide timed aptitude and cognitive reasoning assessment modeled on top product company engineering screening exams. Benchmarks analytical speed and problem formulation.",
    organizerName: "Higher Education Assessment Council & TestCraft",
    organizerType: "Platform",
    category: "Aptitude",
    mode: "Online",
    location: "Pan India (Virtual)",
    startDate: "2025-11-09",
    endDate: "2025-11-09",
    registrationDeadline: "2025-11-05",
    entryFee: "Free",
    isFree: true,
    prize: "₹2,00,000",
    prizeAmountNumber: 200000,
    eligibility: "1st to 4th Year College Students",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 4890,
    status: "Open",
    registrationUrl: "https://example.com/register/aptitude-olympiad",
    tags: ["Aptitude", "Logical Reasoning", "Quantitative Ability", "Discrete Math", "Puzzles"],
    rules: [
      "Strict 75-minute online proctored exam with automated webcam anomaly flagging.",
      "Negative marking of 0.25 marks applied for incorrect answers.",
      "Questions adapt dynamically in difficulty based on response accuracy."
    ],
    timeline: [
      {
        title: "Mock Diagnostic Assessment",
        type: "Practice",
        startDate: "2025-11-01",
        endDate: "2025-11-06",
        description: "Attempt a 20-minute diagnostic warmup test."
      },
      {
        title: "National Olympiad Exam",
        type: "Live Exam",
        startDate: "2025-11-09",
        endDate: "2025-11-09",
        description: "Two slots: 10:00 AM & 3:00 PM IST across the country."
      }
    ],
    rewards: [
      {
        position: "National Rank 1 (Gold)",
        amount: "₹1,00,000",
        perks: ["National Logic Scholar Trophy", "Interview Training Package worth ₹25,000"]
      },
      {
        position: "National Rank 2 (Silver)",
        amount: "₹60,000",
        perks: ["Silver Medal & Certificate"]
      },
      {
        position: "National Rank 3 (Bronze)",
        amount: "₹40,000",
        perks: ["Bronze Medal & Certificate"]
      }
    ],
    createdAt: "2025-09-02T13:00:00Z"
  },
  {
    id: "contest-6",
    slug: "speed-code-blitz-challenge",
    title: "CodeBlitz: 60-Minute Fast Coding Contest",
    tagline: "Short, sharp programming sprint solving rapid-fire logic problems under 5 minutes each.",
    description:
      "A high-octane 60-minute coding blitz where participants solve 10 crisp algorithmic puzzles with a running penalty ticker. Quick thinking, zero compile errors, and lightning typing prevail.",
    organizerName: "DevForge Community & Campus Coders",
    organizerType: "Community",
    category: "Coding",
    mode: "Online",
    location: "Online",
    startDate: "2025-10-23",
    endDate: "2025-10-23",
    registrationDeadline: "2025-10-22",
    entryFee: "Free",
    isFree: true,
    prize: "₹80,000",
    prizeAmountNumber: 80000,
    eligibility: "Open to All Coders",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 2750,
    status: "Closing Soon",
    registrationUrl: "https://example.com/register/codeblitz",
    tags: ["Speed Coding", "Data Structures", "Python", "JavaScript", "C++"],
    technologies: ["Python", "JavaScript", "C++", "Java"],
    rules: [
      "Problems unlock progressively as previous solutions pass all test assertions.",
      "Each wrong submission adds a 2-minute penalty to your completion stopwatch.",
      "Submissions evaluated instantaneously with automated unit tests."
    ],
    timeline: [
      {
        title: "60-Minute Non-Stop Blitz",
        type: "Live Sprint",
        startDate: "2025-10-23",
        endDate: "2025-10-23",
        description: "Prompt release at 8:00 PM IST sharp. 60-minute countdown timer."
      }
    ],
    rewards: [
      {
        position: "Blitz Master",
        amount: "₹40,000",
        perks: ["Custom Engraved Keycap Trophy", "Certificate of High Speed"]
      },
      {
        position: "Runner Up",
        amount: "₹25,000",
        perks: ["Coder Merch Pack", "Certificate"]
      },
      {
        position: "Third Place",
        amount: "₹15,000",
        perks: ["Certificate of Merit"]
      }
    ],
    createdAt: "2025-09-12T15:00:00Z"
  },
  {
    id: "contest-7",
    slug: "data-analytics-sprint-contest",
    title: "DataVoyage: Exploratory Data Sprint",
    tagline: "Uncover hidden signals, engineer predictive features, and visualize market insights.",
    description:
      "A 4-hour data contest where participants analyze complex real-world multi-table datasets, identify market anomalies, and generate reproducible statistical dashboards with automated scoring.",
    organizerName: "Analytics India Guild & MuSigma Fellows",
    organizerType: "Corporate",
    category: "Data",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-16",
    endDate: "2025-11-16",
    registrationDeadline: "2025-11-12",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,50,000",
    prizeAmountNumber: 150000,
    eligibility: "Engineering, Mathematics, Economics & Statistics Students",
    teamSize: "1 - 2 Members",
    minTeamSize: 1,
    maxTeamSize: 2,
    registeredCount: 1620,
    status: "Open",
    registrationUrl: "https://example.com/register/datavoyage",
    tags: ["Data Science", "Exploratory Analysis", "Pandas", "Tableau", "Python"],
    technologies: ["Python", "Pandas", "Seaborn", "Jupyter", "SQL"],
    rules: [
      "Jupyter Notebook submissions must run from top to bottom with zero manual intervention.",
      "Visual storytelling and actionable executive insights count for 40% of the rubric score.",
      "Teams can have 1 or 2 members."
    ],
    timeline: [
      {
        title: "Dataset Release & Briefing",
        type: "Briefing",
        startDate: "2025-11-16",
        endDate: "2025-11-16",
        description: "Download 500MB sanitized telemetry dataset at 2:00 PM IST."
      },
      {
        title: "4-Hour Analytical Sprint",
        type: "Analysis",
        startDate: "2025-11-16",
        endDate: "2025-11-16",
        description: "Submit analysis notebook and executive PDF summary by 6:00 PM IST."
      }
    ],
    rewards: [
      {
        position: "Best Data Storyteller",
        amount: "₹80,000",
        perks: ["Direct Fast-Track Interview for Data Analyst roles", "Winner Trophy"]
      },
      {
        position: "Second Place",
        amount: "₹45,000",
        perks: ["Cloud Credits worth $1,000", "Certificate"]
      },
      {
        position: "Most Creative Visualization",
        amount: "₹25,000",
        perks: ["Data Visualization Book Pack"]
      }
    ],
    createdAt: "2025-08-25T12:00:00Z"
  },
  {
    id: "contest-8",
    slug: "cyber-ctf-security-battle",
    title: "CyberStrike: Collegiate CTF Battle",
    tagline: "Break binary protections, analyze pcap network captures, and capture forensic flags.",
    description:
      "A fast 6-hour capture-the-flag battle featuring cryptanalysis, web security injection flaws, Linux privilege escalation, and memory forensics designed for university cyber defense enthusiasts.",
    organizerName: "Null Chapter & CyberDef Security Cell",
    organizerType: "Community",
    category: "Technical",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-08",
    endDate: "2025-11-08",
    registrationDeadline: "2025-11-06",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,40,000",
    prizeAmountNumber: 140000,
    eligibility: "All University Students",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1890,
    status: "Open",
    registrationUrl: "https://example.com/register/cyberstrike",
    tags: ["Cybersecurity", "CTF", "Reverse Engineering", "Cryptography", "Network Security"],
    technologies: ["Wireshark", "Ghidra", "Burp Suite", "Python", "Bash"],
    rules: [
      "Attacking competition scoreboards or hosting infrastructure is an automatic disqualification.",
      "Sharing flags or hints across different registered teams will be detected by telemetry.",
      "Write-ups for top 3 hardest challenges must be submitted within 2 hours of contest completion."
    ],
    timeline: [
      {
        title: "6-Hour Live CTF Window",
        type: "Contest",
        startDate: "2025-11-08",
        endDate: "2025-11-08",
        description: "Live jeopardy scoreboard opens from 12:00 PM to 6:00 PM IST."
      }
    ],
    rewards: [
      {
        position: "1st Place (Strike Commander)",
        amount: "₹70,000",
        perks: ["Security Certification Voucher", "CyberStrike Champion Trophy"]
      },
      {
        position: "2nd Place",
        amount: "₹45,000",
        perks: ["Burp Suite Pro 1-Year License", "Certificate"]
      },
      {
        position: "3rd Place",
        amount: "₹25,000",
        perks: ["HackTheBox VIP+ Subscription"]
      }
    ],
    createdAt: "2025-09-01T17:00:00Z"
  },
  {
    id: "contest-9",
    slug: "product-case-crack-challenge",
    title: "CaseCrack: 2-Hour Product Strategy Contest",
    tagline: "Formulate growth loops, estimate market size, and design MVP feature rollouts.",
    description:
      "A pressure-packed product management case contest. Teams are given a live consumer app business dilemma and have 120 minutes to submit a concise 4-slide executive solution.",
    organizerName: "PM Fellows & IIM Lucknow Product Cell",
    organizerType: "College",
    category: "Business",
    mode: "Online",
    location: "Online",
    startDate: "2025-11-23",
    endDate: "2025-11-23",
    registrationDeadline: "2025-11-20",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,10,000",
    prizeAmountNumber: 110000,
    eligibility: "Engineering & Management Undergrads",
    teamSize: "1 - 3 Members",
    minTeamSize: 1,
    maxTeamSize: 3,
    registeredCount: 1450,
    status: "Open",
    registrationUrl: "https://example.com/register/casecrack",
    tags: ["Product Strategy", "Market Sizing", "Metrics", "GTM Strategy", "Case Contest"],
    rules: [
      "Submissions are strictly limited to a 4-slide PDF deck.",
      "Clear financial and unit economics logic must justify all proposed growth strategies.",
      "Evaluation based on customer empathy, problem framing, and implementation feasibility."
    ],
    timeline: [
      {
        title: "Live Case Release",
        type: "Prompt",
        startDate: "2025-11-23",
        endDate: "2025-11-23",
        description: "Problem prompt unlocked at 11:00 AM IST."
      },
      {
        title: "Deck Submission Deadline",
        type: "Submission",
        startDate: "2025-11-23",
        endDate: "2025-11-23",
        description: "Submit 4-slide pitch deck by 1:00 PM IST sharp."
      }
    ],
    rewards: [
      {
        position: "Best Product Strategist",
        amount: "₹55,000",
        perks: ["1-on-1 Mentorship with VP of Product", "Winner Trophy"]
      },
      {
        position: "Second Place",
        amount: "₹35,000",
        perks: ["Product Management Book Bundle", "Certificate"]
      },
      {
        position: "Third Place",
        amount: "₹20,000",
        perks: ["Certificate of Excellence"]
      }
    ],
    createdAt: "2025-08-20T16:00:00Z"
  },
  {
    id: "contest-10",
    slug: "design-sprint-ui-prototyping",
    title: "DesignSprint: Micro-Interaction & Component Clash",
    tagline: "Build accessible, beautiful UI component systems with buttery smooth transitions.",
    description:
      "A fast prototyping clash focusing on component architecture, fluid micro-interactions, responsive tokens, and keyboard accessibility for modern web design systems.",
    organizerName: "Interface Guild & National Design Forum",
    organizerType: "Community",
    category: "UI/UX",
    mode: "Hybrid",
    location: "Mumbai & Online",
    startDate: "2025-11-30",
    endDate: "2025-11-30",
    registrationDeadline: "2025-11-26",
    entryFee: "₹150",
    isFree: false,
    prize: "₹1,30,000",
    prizeAmountNumber: 130000,
    eligibility: "Design & Engineering Students",
    teamSize: "1 - 2 Members",
    minTeamSize: 1,
    maxTeamSize: 2,
    registeredCount: 890,
    status: "Open",
    registrationUrl: "https://example.com/register/designsprint",
    tags: ["UI Design", "Figma", "Micro-Interactions", "Design Systems", "Prototyping"],
    technologies: ["Figma", "Framer", "CSS Animations"],
    rules: [
      "Prototypes must demonstrate responsive adaptability across mobile and desktop breakpoints.",
      "Design tokens must be structured and documented in the submission.",
      "Submissions can be interactive Figma files or live Framer/Web preview links."
    ],
    timeline: [
      {
        title: "Component Clash Kickoff",
        type: "Prompt",
        startDate: "2025-11-30",
        endDate: "2025-11-30",
        description: "Interactive challenge prompt revealed at 10:00 AM IST."
      },
      {
        title: "Sprint & Live Jury Demo",
        type: "Evaluation",
        startDate: "2025-11-30",
        endDate: "2025-11-30",
        description: "Submit by 2:00 PM IST; live top 5 finalist showcase at 4:00 PM IST."
      }
    ],
    rewards: [
      {
        position: "Design Champion",
        amount: "₹65,000",
        perks: ["Figma Annual Subscription", "Design Guild Trophy", "Portfolio Review"]
      },
      {
        position: "Second Place",
        amount: "₹40,000",
        perks: ["Design Resources Bundle", "Certificate"]
      },
      {
        position: "Third Place",
        amount: "₹25,000",
        perks: ["Certificate of Merit"]
      }
    ],
    createdAt: "2025-09-04T11:00:00Z"
  },
  {
    id: "contest-11",
    slug: "algorithm-sprint-clash",
    title: "AlgoClash: Dynamic Programming & Math Showdown",
    tagline: "Master game theory, combinatorics, bitmasking, and optimal state reduction.",
    description:
      "A concentrated 2-hour algorithmic competition dedicated specifically to dynamic programming, bit manipulation, number theory, and advanced mathematical problem solving.",
    organizerName: "Math & Code Guild & BITS Goa Coding Club",
    organizerType: "College",
    category: "Algorithm",
    mode: "Online",
    location: "Online",
    startDate: "2025-12-07",
    endDate: "2025-12-07",
    registrationDeadline: "2025-12-04",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,00,000",
    prizeAmountNumber: 100000,
    eligibility: "All University Students",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 2120,
    status: "Open",
    registrationUrl: "https://example.com/register/algoclash",
    tags: ["Algorithms", "Dynamic Programming", "Combinatorics", "Math", "C++"],
    technologies: ["C++", "Java", "Python"],
    rules: [
      "Problems feature subtask scoring (partial points awarded for smaller constraints).",
      "Memory limit 256MB and time limit 1.0s strictly enforced per test vector.",
      "Individual submission with real-time leaderboard update."
    ],
    timeline: [
      {
        title: "2-Hour Live Contest",
        type: "Contest",
        startDate: "2025-12-07",
        endDate: "2025-12-07",
        description: "5 problems unlocked at 7:00 PM IST. 2-hour timer."
      }
    ],
    rewards: [
      {
        position: "AlgoClash Master",
        amount: "₹50,000",
        perks: ["Gold Algo Plaque", "Certificate of Honor"]
      },
      {
        position: "Second Place",
        amount: "₹30,000",
        perks: ["Silver Plaque & Certificate"]
      },
      {
        position: "Third Place",
        amount: "₹20,000",
        perks: ["Certificate of Merit"]
      }
    ],
    createdAt: "2025-08-28T14:00:00Z"
  },
  {
    id: "contest-12",
    slug: "cloud-devops-troubleshoot-race",
    title: "InfraSprint: Cloud & DevOps Troubleshooting Race",
    tagline: "Diagnose broken Kubernetes clusters, fix broken ingress rules, and restore services.",
    description:
      "A timed live DevOps race. Contestants get SSH access to a broken microservices cluster with crashed pods, corrupted certificates, and misconfigured load balancers, competing to restore 100% uptime.",
    organizerName: "CloudNative Guild & DevOps India Forum",
    organizerType: "Corporate",
    category: "Technical",
    mode: "Online",
    location: "Online",
    startDate: "2025-12-14",
    endDate: "2025-12-14",
    registrationDeadline: "2025-12-10",
    entryFee: "Free",
    isFree: true,
    prize: "₹1,35,000",
    prizeAmountNumber: 135000,
    eligibility: "Engineering, BCA & MCA Students",
    teamSize: "Individual",
    minTeamSize: 1,
    maxTeamSize: 1,
    registeredCount: 1530,
    status: "Open",
    registrationUrl: "https://example.com/register/infrasprint",
    tags: ["DevOps", "Kubernetes", "Linux", "Docker", "Troubleshooting"],
    technologies: ["Kubernetes", "Linux", "Nginx", "Docker", "Prometheus"],
    rules: [
      "Target cluster health is validated by an automated continuous synthetic prober.",
      "Destructive actions (e.g. wiping persistent volumes or rebuilding root nodes) incur penalty time.",
      "Fastest verified recovery time wins."
    ],
    timeline: [
      {
        title: "Sandbox Credentials Dispatch",
        type: "Onboarding",
        startDate: "2025-12-12",
        endDate: "2025-12-13",
        description: "Receive SSH keys and access confirmation to isolated cluster."
      },
      {
        title: "Live 90-Minute Rescue Race",
        type: "Live Race",
        startDate: "2025-12-14",
        endDate: "2025-12-14",
        description: "Live cluster failure triggered. Diagnose, fix, and achieve green health status."
      }
    ],
    rewards: [
      {
        position: "DevOps Champion",
        amount: "₹65,000",
        perks: ["Cloud Certification Exam Voucher", "InfraSprint Trophy"]
      },
      {
        position: "Second Place",
        amount: "₹40,000",
        perks: ["DevOps Training Voucher", "Certificate"]
      },
      {
        position: "Third Place",
        amount: "₹30,000",
        perks: ["Certificate of Excellence"]
      }
    ],
    createdAt: "2025-09-03T10:00:00Z"
  }
];
