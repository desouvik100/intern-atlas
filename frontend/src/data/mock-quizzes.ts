import { Quiz } from "@/types/quiz";

export const MOCK_QUIZZES: Quiz[] = [
  {
    id: "quiz-1",
    slug: "national-technology-and-ai-awareness-quiz",
    title: "National Technology & AI Awareness Quiz 2025",
    tagline: "Test your grasp on generative models, neural architectures, and computing history.",
    description:
      "A fast-paced nationwide quiz designed for undergraduate and graduate students exploring modern advances in Artificial Intelligence, computing pioneers, large language models, and foundational machine learning concepts. Benchmark your theoretical knowledge with top tech minds.",
    shortDescription:
      "Test your understanding of modern AI breakthroughs, deep learning principles, and modern computing trends.",
    organizerName: "National Computing Guild & AI Society",
    organizerType: "Community",
    category: "AI & Machine Learning",
    mode: "Online",
    location: "Virtual / Nationwide",
    status: "Open",
    startDate: "2025-11-10",
    endDate: "2025-11-10",
    registrationDeadline: "2025-11-05",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹75,000",
    prizeAmountNumber: 75000,
    participantCount: 3820,
    registeredCount: 3820,
    duration: "45 Mins",
    questionCount: 40,
    difficulty: "Intermediate",
    eligibility: "All College Students",
    languages: ["English"],
    tags: ["AI", "Machine Learning", "Tech Trivia", "Deep Learning", "Generative AI"],
    technologies: ["Transformers", "PyTorch", "Computer Vision", "LLMs", "NLP"],
    registrationUrl: "https://internatlas.example/register/quiz-ai-tech-2025",
    websiteUrl: "https://internatlas.example/quizzes/national-technology-and-ai-awareness-quiz",
    createdAt: "2025-08-20T10:00:00Z",
    rules: [
      "The quiz consists of 40 multiple-choice questions with a 45-minute countdown.",
      "Each correct answer awards +2 points. Incorrect answers in Round 2 incur -0.5 points.",
      "Automated web-proctoring is enabled. Full-screen tab lock is strictly enforced.",
      "Any switching of browser windows or tabs will result in an immediate warning and auto-submission upon 3 infractions.",
      "In case of a tie, the participant with the faster total completion time ranks higher."
    ],
    instructions: [
      "Ensure an uninterrupted high-speed internet connection and an updated Chromium-based browser.",
      "The assessment link will activate precisely at 06:00 PM IST on the quiz date.",
      "Participants may review and alter answers within the allotted time before final submission.",
      "Keep a scientific or standard calculator handy if required for numerical conversions."
    ],
    rounds: [
      {
        title: "Round 1: Rapid Fire Technical Trivia",
        type: "Objective Quiz",
        startDate: "2025-11-10",
        endDate: "2025-11-10",
        duration: "25 Mins",
        questionCount: 25,
        description: "Speed round testing fundamental computer science lore, AI benchmarks, and hardware evolution."
      },
      {
        title: "Round 2: Advanced Applied Concepts",
        type: "Proctored Final Quiz",
        startDate: "2025-11-10",
        endDate: "2025-11-10",
        duration: "20 Mins",
        questionCount: 15,
        description: "Problem-solving questions on transformer architectures, attention mechanisms, and model training math."
      }
    ],
    rewards: [
      {
        position: "1st Place (National Champion)",
        amount: "₹35,000",
        perks: ["Gold Trophy of Knowledge", "Certificate of Academic Excellence", "Fast-track interview for AI fellowship"]
      },
      {
        position: "2nd Place",
        amount: "₹25,000",
        perks: ["Silver Plaque", "Certificate of Merit", "Exclusive Generative AI course access"]
      },
      {
        position: "3rd Place",
        amount: "₹15,000",
        perks: ["Bronze Plaque", "Certificate of Merit", "Cloud credits bundle"]
      }
    ],
    highlights: ["Ranked leaderboard published live", "National Certificate of Participation for all completing entrants", "Zero entry fee"]
  },
  {
    id: "quiz-2",
    slug: "cybersecurity-defense-and-ethical-hacking-quiz",
    title: "Cybersecurity Defense & Ethical Hacking Quiz",
    tagline: "Unravel cryptographic puzzles, network exploits, and web security vulnerabilities.",
    description:
      "A high-intensity domain quiz assessing your mastery over modern infosec, OWASP Top 10 vulnerabilities, asymmetric cryptography, zero-trust network protocols, and incident forensics. Designed in collaboration with leading digital security practitioners.",
    shortDescription:
      "Demonstrate your knowledge of network defense, web vulnerabilities, ciphers, and threat mitigation.",
    organizerName: "CyberSafe Collegiate Alliance & DefSec Labs",
    organizerType: "Corporate",
    category: "Cybersecurity",
    mode: "Online",
    location: "Online / Pan India",
    status: "Closing Soon",
    startDate: "2025-10-30",
    endDate: "2025-10-30",
    registrationDeadline: "2025-10-28",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹60,000",
    prizeAmountNumber: 60000,
    participantCount: 2450,
    registeredCount: 2450,
    duration: "40 Mins",
    questionCount: 35,
    difficulty: "Advanced",
    eligibility: "Engineering & IT Students",
    languages: ["English"],
    tags: ["Cybersecurity", "Ethical Hacking", "Cryptography", "Network Security", "OWASP"],
    technologies: ["Wireshark", "Burp Suite", "RSA", "TLS 1.3", "Linux", "SQLi"],
    registrationUrl: "https://internatlas.example/register/quiz-cybersec-2025",
    websiteUrl: "https://internatlas.example/quizzes/cybersecurity-defense-and-ethical-hacking-quiz",
    createdAt: "2025-08-25T14:30:00Z",
    rules: [
      "35 scenario-based questions with single and multi-select choices.",
      "+3 points for correct answers, -1 point for incorrect choices.",
      "Proctored environment with webcam monitoring enabled.",
      "No secondary screens or collaboration tools permitted."
    ],
    instructions: [
      "Authorize camera and microphone access 10 minutes prior to exam launch.",
      "Inspect scenario snippets carefully before selecting answers.",
      "Submissions are auto-locked once the 40-minute limit expires."
    ],
    rounds: [
      {
        title: "Online Assessment Round",
        type: "Proctored MCQ",
        startDate: "2025-10-30",
        endDate: "2025-10-30",
        duration: "40 Mins",
        questionCount: 35,
        description: "Comprehensive testing covering network packets, cipher algorithms, and exploit remediation."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹30,000",
        perks: ["Certified Security Analyst exam voucher", "Cyber Shield Trophy", "Summer security internship interview"]
      },
      {
        position: "2nd Place",
        amount: "₹20,000",
        perks: ["Hardware Security Key bundle", "Certificate of Distinction"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["Digital Forensics eBook set", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-3",
    slug: "campus-quantitative-and-logical-aptitude-sprint",
    title: "Campus Quantitative & Logical Aptitude Sprint",
    tagline: "Master mental math, permutation logic, data interpretation, and syllogisms.",
    description:
      "A fast-paced placement-style aptitude contest crafted to replicate Tier-1 engineering campus recruitment assessments. Test your speed and precision under strict time pressure across arithmetic, analytical reasoning, and graphical data interpretation.",
    shortDescription:
      "Test quantitative arithmetic, analytical reasoning, and data interpretation under authentic campus hiring conditions.",
    organizerName: "Apex Campus Career Forum",
    organizerType: "College",
    category: "Aptitude",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-11-15",
    endDate: "2025-11-15",
    registrationDeadline: "2025-11-12",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹50,000",
    prizeAmountNumber: 50000,
    participantCount: 4610,
    registeredCount: 4610,
    duration: "50 Mins",
    questionCount: 50,
    difficulty: "Beginner",
    eligibility: "Open to All Students",
    languages: ["English"],
    tags: ["Aptitude", "Mental Math", "Logic", "Data Interpretation", "Campus Placements"],
    technologies: ["Quant", "Reasoning", "Probability", "Puzzles", "Critical Thinking"],
    registrationUrl: "https://internatlas.example/register/quiz-quant-aptitude-2025",
    websiteUrl: "https://internatlas.example/quizzes/campus-quantitative-and-logical-aptitude-sprint",
    createdAt: "2025-08-28T09:15:00Z",
    rules: [
      "50 questions to be solved in 50 minutes (1 minute per question on average).",
      "Sections: 20 Quant, 20 Logical Reasoning, 10 Data Interpretation.",
      "+1 mark per correct answer. No negative marking in Section 1 and 2, -0.25 in Section 3.",
      "Scratch paper permitted for rough calculations."
    ],
    instructions: [
      "Have pencil and scratch sheet ready before entering the assessment room.",
      "Questions can be navigated freely using the on-screen question grid.",
      "Results and detailed solution explanations will be released within 24 hours of completion."
    ],
    rounds: [
      {
        title: "All-India Aptitude Marathon",
        type: "Online MCQ Challenge",
        startDate: "2025-11-15",
        endDate: "2025-11-15",
        duration: "50 Mins",
        questionCount: 50,
        description: "Full-spectrum placement evaluation testing speed, accuracy, and endurance."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹25,000",
        perks: ["Premium Placement Prep Subscription (1 Year)", "Winner's Medal", "CV Review by Senior Recruiters"]
      },
      {
        position: "2nd Place",
        amount: "₹15,000",
        perks: ["Aptitude Masterclass Access", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["Mock Technical Interview Session", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-4",
    slug: "full-stack-web-architecture-and-react-quiz",
    title: "Full-Stack Web Architecture & React Quiz",
    tagline: "Deep-dive into component lifecycles, virtual DOM internals, SSR, and microfrontends.",
    description:
      "A technical challenge designed for budding frontend engineers, full-stack builders, and web developers. Test your insight into modern JavaScript runtimes, React 19 concurrent features, HTTP/3 networking, browser rendering optimizations, and distributed state management.",
    shortDescription:
      "Challenge your knowledge of React 19, modern JavaScript engines, HTTP/3, and resilient full-stack systems.",
    organizerName: "DevCraft Guild & Frontend Guild India",
    organizerType: "Community",
    category: "Programming",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-11-20",
    endDate: "2025-11-20",
    registrationDeadline: "2025-11-18",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹80,000",
    prizeAmountNumber: 80000,
    participantCount: 3120,
    registeredCount: 3120,
    duration: "45 Mins",
    questionCount: 40,
    difficulty: "Intermediate",
    eligibility: "Engineering Students & Web Developers",
    languages: ["English"],
    tags: ["React", "JavaScript", "TypeScript", "Next.js", "Web Performance", "Full-Stack"],
    technologies: ["React 19", "Next.js", "Node.js", "V8 Engine", "CSS Architecture", "GraphQL"],
    registrationUrl: "https://internatlas.example/register/quiz-fullstack-2025",
    websiteUrl: "https://internatlas.example/quizzes/full-stack-web-architecture-and-react-quiz",
    createdAt: "2025-09-01T11:00:00Z",
    rules: [
      "40 technical questions covering ESNext, React hooks, rendering pipeline, and server actions.",
      "+2 for correct answers, -0.5 for incorrect choices.",
      "Tab switching or window minimization will trigger a strike; 3 strikes terminate the exam."
    ],
    instructions: [
      "Use latest desktop Chrome, Firefox, or Brave browser.",
      "Disable third-party browser extensions like ad-blockers to prevent rendering glitches.",
      "Review your answer palette periodically to ensure all marked responses are saved."
    ],
    rounds: [
      {
        title: "Round 1: JavaScript Engine & Core DOM",
        type: "Objective Quiz",
        startDate: "2025-11-20",
        endDate: "2025-11-20",
        duration: "20 Mins",
        questionCount: 20,
        description: "Event loop, garbage collection, promises, closures, and browser rendering pipeline."
      },
      {
        title: "Round 2: Modern React & Full-Stack Systems",
        type: "Advanced Objective",
        startDate: "2025-11-20",
        endDate: "2025-11-20",
        duration: "25 Mins",
        questionCount: 20,
        description: "Server components, hydration mismatches, suspense boundaries, and caching layers."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹40,000",
        perks: ["Keychron Mechanical Keyboard", "Champion Trophy", "Direct technical interview with partner startup"]
      },
      {
        position: "2nd Place",
        amount: "₹25,000",
        perks: ["Software Dev eBook Bundle", "Certificate of Distinction"]
      },
      {
        position: "3rd Place",
        amount: "₹15,000",
        perks: ["Tech Swag Pack", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-5",
    slug: "cloud-devops-and-kubernetes-engineering-quiz",
    title: "Cloud, DevOps & Kubernetes Engineering Quiz",
    tagline: "Assess your readiness on container orchestration, CI/CD pipelines, and cloud resilience.",
    description:
      "A specialized technical quiz covering cloud architecture across AWS and GCP, Docker containerization, Kubernetes pods and ingress controllers, Infrastructure as Code with Terraform, and zero-downtime blue-green deployment strategies.",
    shortDescription:
      "Examine your skills in Kubernetes clusters, Docker container workflows, CI/CD automation, and cloud topologies.",
    organizerName: "CloudNative Student Chapter & DevOps Collective",
    organizerType: "Community",
    category: "Cloud & DevOps",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-11-25",
    endDate: "2025-11-25",
    registrationDeadline: "2025-11-22",
    entryFee: "₹49",
    isFree: false,
    prizePool: "₹65,000",
    prizeAmountNumber: 65000,
    participantCount: 1890,
    registeredCount: 1890,
    duration: "40 Mins",
    questionCount: 35,
    difficulty: "Advanced",
    eligibility: "Computer Science & IT Enthusiasts",
    languages: ["English"],
    tags: ["DevOps", "Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
    technologies: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus", "Linux"],
    registrationUrl: "https://internatlas.example/register/quiz-cloud-devops-2025",
    websiteUrl: "https://internatlas.example/quizzes/cloud-devops-and-kubernetes-engineering-quiz",
    createdAt: "2025-09-04T12:00:00Z",
    rules: [
      "35 questions focusing on practical DevOps troubleshooting, YAML manifests, and cluster topologies.",
      "+3 marks for correct responses, -1 mark for wrong choices.",
      "Strict single-device proctoring."
    ],
    instructions: [
      "Complete registration and payment before deadline to receive authorization credentials.",
      "Check your webcam configuration ahead of the exam start time.",
      "Avoid refreshing the test page during active timer."
    ],
    rounds: [
      {
        title: "Cloud & Infrastructure Assessment",
        type: "Proctored MCQ",
        startDate: "2025-11-25",
        endDate: "2025-11-25",
        duration: "40 Mins",
        questionCount: 35,
        description: "Scenarios on pod lifecycle, persistent volumes, ingress rules, and pipeline optimization."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹35,000",
        perks: ["Cloud Certification Exam Voucher (CKA/AWS)", "Trophy of Cloud Excellence", "DevOps Starter Kit"]
      },
      {
        position: "2nd Place",
        amount: "₹20,000",
        perks: ["Cloud credits voucher", "Certificate of Distinction"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["DevOps handbook set", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-6",
    slug: "data-science-statistics-and-machine-learning-bowl",
    title: "Data Science, Statistics & ML Knowledge Bowl",
    tagline: "Test probability distributions, hypothesis testing, feature engineering, and statistical models.",
    description:
      "A rigorous theoretical and applied mathematics assessment targeting aspiring data scientists and quantitative analysts. Dive into Bayesian inference, linear regression assumptions, gradient descent mathematics, and dimensionality reduction techniques.",
    shortDescription:
      "Explore statistical distributions, feature selection mechanics, hypothesis testing, and loss functions.",
    organizerName: "Indian Analytics Institute & Quantitative Society",
    organizerType: "Corporate",
    category: "Data Science",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-12-02",
    endDate: "2025-12-02",
    registrationDeadline: "2025-11-28",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹70,000",
    prizeAmountNumber: 70000,
    participantCount: 2980,
    registeredCount: 2980,
    duration: "45 Mins",
    questionCount: 40,
    difficulty: "Intermediate",
    eligibility: "Undergraduates & Postgraduates",
    languages: ["English"],
    tags: ["Data Science", "Statistics", "Machine Learning", "Linear Algebra", "Python"],
    technologies: ["Pandas", "Scikit-Learn", "NumPy", "Bayesian Stats", "PCA", "Hypothesis Testing"],
    registrationUrl: "https://internatlas.example/register/quiz-datascience-2025",
    websiteUrl: "https://internatlas.example/quizzes/data-science-statistics-and-machine-learning-bowl",
    createdAt: "2025-09-08T15:20:00Z",
    rules: [
      "40 multiple choice and numerical answer questions.",
      "+2 for correct, -0.5 for wrong answers.",
      "Calculators are allowed on-screen via the built-in test interface."
    ],
    instructions: [
      "Use the on-screen formula reference sheet accessible in the top toolbar.",
      "Do not switch tabs or open separate calculation tools.",
      "Submit before the 45-minute countdown concludes."
    ],
    rounds: [
      {
        title: "Mathematical Foundations & Statistics",
        type: "Objective Quiz",
        startDate: "2025-12-02",
        endDate: "2025-12-02",
        duration: "20 Mins",
        questionCount: 20,
        description: "Probability distributions, central limit theorem, and p-values."
      },
      {
        title: "Machine Learning Algorithms & Optimization",
        type: "Objective Quiz",
        startDate: "2025-12-02",
        endDate: "2025-12-02",
        duration: "25 Mins",
        questionCount: 20,
        description: "Gradient boosting, clustering metrics, regularization (L1/L2), and confusion matrices."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹35,000",
        perks: ["Data Science Fellowship Direct Interview", "Gold Trophy", "Advanced Statistics Library"]
      },
      {
        position: "2nd Place",
        amount: "₹22,000",
        perks: ["Silver Medal", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹13,000",
        perks: ["Bronze Medal", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-7",
    slug: "algorithms-and-dsa-speed-challenge-quiz",
    title: "Algorithms & DSA Speed Challenge Quiz",
    tagline: "Predict algorithmic complexity, trace recursive trees, and identify optimal graph traversals.",
    description:
      "A fast-paced problem-solving quiz requiring sharp mental analysis of data structure invariants, asymptotic time/space complexities, dynamic programming recurrence relations, and graph edge relaxations without writing code.",
    shortDescription:
      "Rapidly trace sorting mechanisms, tree balancing rotations, and asymptotic complexity equations.",
    organizerName: "AlgoRiders Collegiate Society",
    organizerType: "College",
    category: "Programming",
    mode: "Online",
    location: "Virtual",
    status: "Closing Soon",
    startDate: "2025-10-29",
    endDate: "2025-10-29",
    registrationDeadline: "2025-10-27",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹55,000",
    prizeAmountNumber: 55000,
    participantCount: 5120,
    registeredCount: 5120,
    duration: "30 Mins",
    questionCount: 30,
    difficulty: "Advanced",
    eligibility: "Open to all Engineering Students",
    languages: ["English"],
    tags: ["DSA", "Algorithms", "Data Structures", "Dynamic Programming", "Graphs"],
    technologies: ["Trees", "Heaps", "Graphs", "Dijkstra", "Big-O", "Bit Manipulation"],
    registrationUrl: "https://internatlas.example/register/quiz-dsa-speed-2025",
    websiteUrl: "https://internatlas.example/quizzes/algorithms-and-dsa-speed-challenge-quiz",
    createdAt: "2025-09-10T10:00:00Z",
    rules: [
      "30 questions in 30 minutes (strict 1 question per minute cadence).",
      "+2 points for correct answers, -0.5 points for incorrect answers.",
      "Skipping questions is permitted; you can return to flagged questions before time runs out."
    ],
    instructions: [
      "Scratch paper and pen are permitted for tracing pointers and graphs.",
      "No external IDEs or code execution terminals are allowed.",
      "The test will automatically lock and submit when the timer reaches 00:00."
    ],
    rounds: [
      {
        title: "Speed Algorithm Blitz",
        type: "Speed MCQ Quiz",
        startDate: "2025-10-29",
        endDate: "2025-10-29",
        duration: "30 Mins",
        questionCount: 30,
        description: "High-tempo questions on binary search nuances, recursion depths, and graph shortest paths."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹28,000",
        perks: ["Algo Master Trophy", "Lifetime Competitive Programming Platform Pass", "Certificate of Distinction"]
      },
      {
        position: "2nd Place",
        amount: "₹17,000",
        perks: ["Silver Plaque", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["Bronze Plaque", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-8",
    slug: "young-innovators-business-and-entrepreneurship-quiz",
    title: "Young Innovators Business & Entrepreneurship Quiz",
    tagline: "Test your understanding of startup valuations, venture capital terms, marketing metrics, and business models.",
    description:
      "A strategic business knowledge challenge geared toward startup enthusiasts, MBA aspirants, and product leaders. Test your knowledge of unit economics, CAC/LTV dynamics, cap tables, global market disruptions, and pivotal tech corporate mergers.",
    shortDescription:
      "Assess your understanding of venture capital terms, startup metrics, marketing funnels, and enterprise strategy.",
    organizerName: "VentureSpark National E-Cell Alliance",
    organizerType: "College",
    category: "Business",
    mode: "Hybrid",
    location: "Online + Finals at IIT Bombay",
    status: "Open",
    startDate: "2025-12-10",
    endDate: "2025-12-11",
    registrationDeadline: "2025-12-05",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹90,000",
    prizeAmountNumber: 90000,
    participantCount: 2240,
    registeredCount: 2240,
    duration: "45 Mins",
    questionCount: 40,
    difficulty: "Intermediate",
    eligibility: "Undergraduate & MBA Students",
    languages: ["English"],
    tags: ["Business", "Startups", "Finance", "Venture Capital", "Marketing", "Entrepreneurship"],
    technologies: ["Unit Economics", "EBITDA", "Cap Tables", "SaaS Metrics", "Go-To-Market"],
    registrationUrl: "https://internatlas.example/register/quiz-business-2025",
    websiteUrl: "https://internatlas.example/quizzes/young-innovators-business-and-entrepreneurship-quiz",
    createdAt: "2025-09-12T16:00:00Z",
    rules: [
      "Prelims conducted online: 40 scenario-based business case questions.",
      "+2 for correct answer, 0 for unattempted, -0.5 for wrong answers.",
      "Top 15 finalists qualify for the on-campus live buzzer quiz at IIT Bombay."
    ],
    instructions: [
      "Ensure access to a stable computer for Prelims.",
      "Read short case vignettes attentively before choosing strategic responses.",
      "Finalists will be notified via email within 48 hours of Prelims completion."
    ],
    rounds: [
      {
        title: "Prelims: Online Business Case Quiz",
        type: "Online MCQ",
        startDate: "2025-12-10",
        endDate: "2025-12-10",
        duration: "45 Mins",
        questionCount: 40,
        description: "Case-based scenario questions on financial burn rates, product-market fit, and brand strategy."
      },
      {
        title: "Finals: Live On-Campus Buzzer Round",
        type: "On-Stage Buzzer Quiz",
        startDate: "2025-12-11",
        endDate: "2025-12-11",
        duration: "60 Mins",
        description: "High-stakes buzzer face-off among top 15 finalists at the campus auditorium."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹45,000",
        perks: ["E-Cell Venture Trophy", "Direct Mentorship with Angel Investors", "Incubation support grant consultation"]
      },
      {
        position: "2nd Place",
        amount: "₹30,000",
        perks: ["Runner-Up Plaque", "Certificate of Excellence"]
      },
      {
        position: "3rd Place",
        amount: "₹15,000",
        perks: ["Certificate of Merit", "Startup Toolkit Bookpack"]
      }
    ]
  },
  {
    id: "quiz-9",
    slug: "open-source-git-and-linux-mastery-challenge",
    title: "Open-Source, Git & Linux Mastery Challenge",
    tagline: "Test your mastery over POSIX shells, Git rebasing, kernel internals, and OSS governance.",
    description:
      "A quiz tailored for terminal power users, Linux kernel aficionados, and open-source contributors. Tackle queries on Git reflog, merge conflict resolution internals, bash scripting quirks, process signals, and open-source license compliance (GPL vs MIT vs Apache).",
    shortDescription:
      "Evaluate your knowledge of Git internals, bash scripting, Linux processes, and open-source licensing.",
    organizerName: "Free & Open Source Software Initiative (FOSSI)",
    organizerType: "Community",
    category: "Open Source",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    registrationDeadline: "2025-11-15",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹50,000",
    prizeAmountNumber: 50000,
    participantCount: 2780,
    registeredCount: 2780,
    duration: "35 Mins",
    questionCount: 35,
    difficulty: "Intermediate",
    eligibility: "Developers, Students & Tech Hobbyists",
    languages: ["English"],
    tags: ["Linux", "Git", "Open Source", "Bash", "Shell Scripting", "SysAdmin"],
    technologies: ["Git", "Linux", "Bash", "Systemd", "Vim", "Open Source"],
    registrationUrl: "https://internatlas.example/register/quiz-git-linux-2025",
    websiteUrl: "https://internatlas.example/quizzes/open-source-git-and-linux-mastery-challenge",
    createdAt: "2025-09-14T08:00:00Z",
    rules: [
      "35 questions spanning shell commands, Git workflow edge cases, and POSIX permissions.",
      "+2 for correct, -0.5 for incorrect answers.",
      "Proctored browser testing. Code inspection tools disabled."
    ],
    instructions: [
      "Expect terminal command output prediction questions.",
      "Pay attention to flag syntax (-r vs -R, merge vs rebase flags).",
      "Auto-submission occurs when the 35 minutes elapse."
    ],
    rounds: [
      {
        title: "Terminal & Version Control Arena",
        type: "Objective Quiz",
        startDate: "2025-11-18",
        endDate: "2025-11-18",
        duration: "35 Mins",
        questionCount: 35,
        description: "Commands, commit graphs, signals, pipe redirection, and licensing trivia."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹25,000",
        perks: ["Custom Tux Linux Trophy", "Raspberry Pi 5 Developer Kit", "Certificate of Honor"]
      },
      {
        position: "2nd Place",
        amount: "₹15,000",
        perks: ["Open Source Contributor Swag Box", "Certificate of Distinction"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["Terminal Hacker Hoodie", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-10",
    slug: "digital-india-and-public-tech-infrastructure-quiz",
    title: "Digital India & Public Tech Infrastructure Quiz",
    tagline: "Explore the architecture behind UPI, Aadhaar e-KYC, ONDC, and India Stack protocols.",
    description:
      "A flagship national quiz focused on world-leading Digital Public Infrastructure (DPI) built in India. Test your understanding of Unified Payments Interface (UPI) protocols, DigiLocker encryption, Open Network for Digital Commerce (ONDC), and scalable governance systems.",
    shortDescription:
      "Examine how UPI, ONDC, Account Aggregators, and DigiLocker scale to serve hundreds of millions daily.",
    organizerName: "Civic Tech Foundation & Digital Governance Council",
    organizerType: "Corporate",
    category: "General Knowledge",
    mode: "Online",
    location: "Nationwide",
    status: "Open",
    startDate: "2025-12-05",
    endDate: "2025-12-05",
    registrationDeadline: "2025-12-01",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹1,00,000",
    prizeAmountNumber: 100000,
    participantCount: 6200,
    registeredCount: 6200,
    duration: "40 Mins",
    questionCount: 40,
    difficulty: "Beginner",
    eligibility: "Open to All Indian Citizens & Students",
    languages: ["English"],
    tags: ["Digital India", "UPI", "Fintech", "GovTech", "India Stack", "ONDC"],
    technologies: ["UPI", "NPCI", "Aadhaar", "ONDC", "DigiLocker", "FASTag"],
    registrationUrl: "https://internatlas.example/register/quiz-digital-india-2025",
    websiteUrl: "https://internatlas.example/quizzes/digital-india-and-public-tech-infrastructure-quiz",
    createdAt: "2025-09-15T11:30:00Z",
    rules: [
      "40 questions celebrating breakthroughs in civic technology and financial inclusion.",
      "+2 marks for correct answer, no negative marking.",
      "Ties decided by minimum time taken to submit."
    ],
    instructions: [
      "Open to high school, undergraduate, postgraduate, and professional participants.",
      "Accessible on both desktop and mobile web browsers.",
      "Digital certificates will be issued to all participants scoring 50% or above."
    ],
    rounds: [
      {
        title: "National DPI Knowledge Sprint",
        type: "Objective Quiz",
        startDate: "2025-12-05",
        endDate: "2025-12-05",
        duration: "40 Mins",
        questionCount: 40,
        description: "Comprehensive testing on India Stack architecture, scalability records, and digital inclusion."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹50,000",
        perks: ["Digital India Laureate Trophy", "Certificate of National Distinction", "Feature in Civic Tech Gazette"]
      },
      {
        position: "2nd Place",
        amount: "₹30,000",
        perks: ["Silver Plaque", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹20,000",
        perks: ["Bronze Plaque", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-11",
    slug: "sql-relational-databases-and-systems-architecture-quiz",
    title: "SQL, Relational Databases & Systems Architecture Quiz",
    tagline: "Test query query optimization, indexing B-Trees, ACID guarantees, and distributed storage.",
    description:
      "A database systems quiz assessing your deep grasp of relational algebra, PostgreSQL indexing strategies, deadlock detection, isolation levels (Read Committed vs Serializable), query plan analysis, and sharding principles.",
    shortDescription:
      "Challenge your understanding of query plans, B-Tree indexes, isolation anomalies, and write-ahead logs.",
    organizerName: "DataCore Systems Council",
    organizerType: "Corporate",
    category: "Database Systems",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-11-22",
    endDate: "2025-11-22",
    registrationDeadline: "2025-11-19",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹60,000",
    prizeAmountNumber: 60000,
    participantCount: 2310,
    registeredCount: 2310,
    duration: "45 Mins",
    questionCount: 35,
    difficulty: "Advanced",
    eligibility: "Computer Science Students & Database Engineers",
    languages: ["English"],
    tags: ["SQL", "Databases", "PostgreSQL", "Query Optimization", "Systems"],
    technologies: ["PostgreSQL", "MySQL", "WAL", "B-Tree", "ACID", "Sharding"],
    registrationUrl: "https://internatlas.example/register/quiz-sql-systems-2025",
    websiteUrl: "https://internatlas.example/quizzes/sql-relational-databases-and-systems-architecture-quiz",
    createdAt: "2025-09-17T13:00:00Z",
    rules: [
      "35 challenging questions featuring SQL query analysis and transaction anomaly identification.",
      "+3 marks for correct answers, -1 mark for incorrect answers.",
      "Camera proctoring active throughout."
    ],
    instructions: [
      "Inspect execution plan diagrams and query schema tables closely.",
      "Check isolation level constraints specified in transaction scenarios.",
      "Results published within 48 hours."
    ],
    rounds: [
      {
        title: "Database Engineering Examination",
        type: "Proctored Technical MCQ",
        startDate: "2025-11-22",
        endDate: "2025-11-22",
        duration: "45 Mins",
        questionCount: 35,
        description: "ACID properties, join algorithms (Hash vs Nested Loop), MVCC, and replication lag."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹30,000",
        perks: ["Data Systems Champion Plaque", "Database Administration Certification sponsorship", "Certificate"]
      },
      {
        position: "2nd Place",
        amount: "₹20,000",
        perks: ["Silver Medal", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["Bronze Medal", "Certificate of Merit"]
      }
    ]
  },
  {
    id: "quiz-12",
    slug: "cross-platform-mobile-app-engineering-quiz",
    title: "Cross-Platform Mobile App Engineering Quiz",
    tagline: "Test knowledge on Flutter widgets, React Native bridges, state machines, and native bindings.",
    description:
      "A technical quiz evaluating frontend and mobile engineers on reactive UI trees, mobile performance profiling, memory leak detection, offline-first SQLite synchronization, and background thread execution in iOS and Android ecosystems.",
    shortDescription:
      "Assess mobile app architecture, bridge mechanics, reactive rendering pipelines, and native performance.",
    organizerName: "Mobile Builders League & AppDev Hub",
    organizerType: "Community",
    category: "Engineering",
    mode: "Online",
    location: "Virtual",
    status: "Open",
    startDate: "2025-12-08",
    endDate: "2025-12-08",
    registrationDeadline: "2025-12-04",
    entryFee: "Free",
    isFree: true,
    prizePool: "₹55,000",
    prizeAmountNumber: 55000,
    participantCount: 2040,
    registeredCount: 2040,
    duration: "40 Mins",
    questionCount: 35,
    difficulty: "Intermediate",
    eligibility: "Engineering Students & App Developers",
    languages: ["English"],
    tags: ["Mobile", "Flutter", "React Native", "Android", "iOS", "Kotlin"],
    technologies: ["Flutter", "Dart", "React Native", "Swift", "Kotlin", "SQLite"],
    registrationUrl: "https://internatlas.example/register/quiz-mobile-2025",
    websiteUrl: "https://internatlas.example/quizzes/cross-platform-mobile-app-engineering-quiz",
    createdAt: "2025-09-18T14:45:00Z",
    rules: [
      "35 questions on mobile design patterns (BLoC, Redux, MVVM) and platform rendering cycles.",
      "+2 marks for correct answers, -0.5 for wrong answers.",
      "Proctored browser testing."
    ],
    instructions: [
      "Use a modern desktop browser with a stable broadband connection.",
      "Verify camera permissions before starting the assessment.",
      "Answers can be toggled until the final submit button is pressed."
    ],
    rounds: [
      {
        title: "Mobile Architecture & Performance Assessment",
        type: "Objective Quiz",
        startDate: "2025-12-08",
        endDate: "2025-12-08",
        duration: "40 Mins",
        questionCount: 35,
        description: "Widget trees, bridge serialization, memory leaks, and native build toolchains."
      }
    ],
    rewards: [
      {
        position: "1st Place",
        amount: "₹28,000",
        perks: ["Mobile Excellence Trophy", "Developer Device Voucher", "Certificate of Distinction"]
      },
      {
        position: "2nd Place",
        amount: "₹17,000",
        perks: ["Silver Plaque", "Certificate of Merit"]
      },
      {
        position: "3rd Place",
        amount: "₹10,000",
        perks: ["Bronze Plaque", "Certificate of Merit"]
      }
    ]
  }
];
