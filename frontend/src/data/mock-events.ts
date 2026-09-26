import { Event } from "@/types/event";

export const MOCK_EVENTS: Event[] = [
  {
    id: "event-1",
    slug: "national-ai-and-deep-tech-summit-2025",
    title: "National AI & Deep Tech Summit 2025",
    tagline: "Exploring autonomous agents, enterprise LLM architectures, and AI silicon innovation.",
    description:
      "A premier two-day technology conference bringing together AI researchers, chief technology officers, startup founders, and graduate engineering students. Features keynote addresses on frontier foundation models, production inference scaling, and ethical AI deployment in high-stakes industries.",
    shortDescription:
      "Discover the next era of autonomous agents, AI hardware accelerators, and production LLMs with industry pioneers.",
    organizerName: "Center for Artificial Intelligence & Deep Tech Guild",
    organizerType: "Corporate",
    organizerDescription:
      "A national consortium of AI researchers and enterprise leaders accelerating deep tech innovation and university research commercialization.",
    category: "AI & Machine Learning",
    eventType: "Conference",
    mode: "Hybrid",
    location: "Bengaluru, Karnataka",
    venue: "Nimhans Convention Centre & Live Stream",
    status: "Open",
    startDate: "2025-11-20",
    endDate: "2025-11-21",
    registrationDeadline: "2025-11-15",
    entryFee: "Free",
    isFree: true,
    participantCount: 1450,
    registeredCount: 1450,
    maxParticipants: 2000,
    speakerCount: 12,
    duration: "2 Days",
    tags: ["AI", "Deep Tech", "LLMs", "Silicon", "Autonomous Agents", "Research"],
    technologies: ["Transformers", "PyTorch", "vLLM", "TensorRT", "CUDA", "LangChain"],
    eligibility: "Open to Students, Researchers & Industry Professionals",
    registrationUrl: "https://internatlas.example/register/ai-deeptech-summit-2025",
    websiteUrl: "https://internatlas.example/events/national-ai-and-deep-tech-summit-2025",
    createdAt: "2025-08-15T09:00:00Z",
    speakers: [
      {
        name: "Dr. Arvind Ranganathan",
        role: "Head of AI Research",
        organization: "NeuralScale Labs",
        bio: "Former Stanford AI fellow specializing in sparse mixture-of-experts models and efficient model fine-tuning."
      },
      {
        name: "Pooja Deshmukh",
        role: "VP of Engineering",
        organization: "SiliconWave Systems",
        bio: "Leads ASIC and NPU hardware acceleration teams for next-generation edge robotics."
      },
      {
        name: "Vikramaditya Sen",
        role: "Chief AI Architect",
        organization: "Vanguard Enterprise AI",
        bio: "Specialist in enterprise safety guardrails and multi-agent workflow orchestration."
      }
    ],
    agenda: [
      {
        time: "09:00 AM - 09:45 AM",
        title: "Registration & Morning Networking Breakfast",
        description: "Badge pick-up, coffee reception, and networking across university chapters."
      },
      {
        time: "09:45 AM - 11:00 AM",
        title: "Keynote: Beyond Transformers — The Frontier of Cognitive Architectures",
        speaker: "Dr. Arvind Ranganathan",
        description: "Deep dive into state-space models, non-autoregressive reasoning, and next-gen scaling laws."
      },
      {
        time: "11:15 AM - 12:45 PM",
        title: "Panel: Deploying Agentic AI in Regulated Healthcare & Fintech",
        speaker: "Vikramaditya Sen & Guest Panelists",
        description: "Compliance, auditability, hallucination suppression, and reliable fallback patterns."
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Networking Lunch & Student Research Poster Walkway",
        description: "Interact with shortlisted student researchers showcasing active thesis work."
      },
      {
        time: "02:15 PM - 04:30 PM",
        title: "Technical Track: High-Performance GPU Inference & Tensor Compilation",
        speaker: "Pooja Deshmukh",
        description: "Hands-on architectural walkthrough profiling memory bandwidth bottlenecks with vLLM and TensorRT-LLM."
      }
    ],
    rules: [
      "Physical attendees must bring government-issued photo ID along with their digital ticket QR code.",
      "Laptops required for afternoon breakout architecture sessions.",
      "Sessions will be recorded and published exclusively to registered attendees within 7 days."
    ],
    highlights: ["Live hardware demo zone", "Student research poster showcase", "1-on-1 career breakout tables"]
  },
  {
    id: "event-2",
    slug: "modern-full-stack-web-architecture-conference",
    title: "Modern Full-Stack Web Architecture Conference",
    tagline: "Building scalable distributed web applications with React 19, Next.js, and edge runtimes.",
    description:
      "A high-impact developer conference dedicated to front-line web engineering practices. Covering React 19 Server Components, streaming SSR, distributed edge caching, TypeScript typing patterns at scale, and micro-frontend architectures.",
    shortDescription:
      "Master modern web architectures, edge runtimes, React 19 concurrent pipelines, and streaming SSR.",
    organizerName: "Frontend Engineers Guild & WebDev India",
    organizerType: "Community",
    organizerDescription:
      "A community-driven collective of senior frontend architects fostering performance, accessibility, and modern JavaScript engineering.",
    category: "Software Development",
    eventType: "Conference",
    mode: "Online",
    location: "Virtual / Global Stream",
    status: "Closing Soon",
    startDate: "2025-11-12",
    endDate: "2025-11-12",
    registrationDeadline: "2025-11-10",
    entryFee: "Free",
    isFree: true,
    participantCount: 3100,
    registeredCount: 3100,
    maxParticipants: 5000,
    speakerCount: 8,
    duration: "1 Day (7 Hours)",
    tags: ["React", "Next.js", "Web Dev", "Full-Stack", "TypeScript", "Performance"],
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge", "WebAssembly"],
    eligibility: "Web Developers, Engineering Students & Tech Enthusiasts",
    registrationUrl: "https://internatlas.example/register/fullstack-web-conf-2025",
    websiteUrl: "https://internatlas.example/events/modern-full-stack-web-architecture-conference",
    createdAt: "2025-08-20T11:30:00Z",
    speakers: [
      {
        name: "Shreya Mukherjee",
        role: "Staff Frontend Engineer",
        organization: "CloudFlow Global",
        bio: "Specializes in Core Web Vitals optimization and React streaming architectures for high-traffic media platforms."
      },
      {
        name: "Karan Johar-Verma",
        role: "Lead Systems Architect",
        organization: "HyperEdge Networks",
        bio: "Edge computing evangelist and contributor to open-source HTTP routing engines."
      }
    ],
    agenda: [
      {
        time: "10:00 AM - 10:15 AM",
        title: "Welcome Note & State of the Web in 2025",
        description: "Overview of modern browser standards, server actions, and runtime evolutions."
      },
      {
        time: "10:15 AM - 11:30 AM",
        title: "Deep Dive: React 19 Internals & Zero-Bundle Dependencies",
        speaker: "Shreya Mukherjee",
        description: "How React 19 compiler and server components rethink client bundle budgets."
      },
      {
        time: "11:45 AM - 01:00 PM",
        title: "Edge Compute & Global Data Replication",
        speaker: "Karan Johar-Verma",
        description: "Strategies for routing requests to the nearest edge node with zero-cold-start compute."
      },
      {
        time: "02:00 PM - 03:30 PM",
        title: "Interactive Code Review: Diagnosing Re-render Storms & Memory Leaks",
        description: "Real-world profiling demonstrations using Chrome DevTools and React DevTools profiler."
      }
    ],
    rules: [
      "Access credentials will be dispatched 24 hours prior to the live stream.",
      "Interactive Q&A is managed via the Discord attendee lounge.",
      "Digital certificates of participation provided upon attending key sessions."
    ],
    highlights: ["Live coding refactor sessions", "Q&A with open-source maintainers", "Digital certificate"]
  },
  {
    id: "event-3",
    slug: "cloud-native-devops-and-kubernetes-workshop",
    title: "Cloud-Native DevOps & Kubernetes Hands-on Workshop",
    tagline: "Build, containerize, deploy, and monitor fault-tolerant microservices on Kubernetes.",
    description:
      "An intensive, project-driven technical workshop designed for engineering students and early-career developers. Learn how to package cloud applications using Docker, configure production Kubernetes manifests, establish automated CI/CD pipelines, and implement Prometheus metrics dashboards.",
    shortDescription:
      "A hands-on, terminal-focused workshop mastering containerization, Kubernetes pods, and CI/CD pipelines.",
    organizerName: "CloudNative Collegiate Chapter",
    organizerType: "College",
    category: "Technology",
    eventType: "Workshop",
    mode: "Hybrid",
    location: "Hyderabad, Telangana",
    venue: "Tech Innovation Hub, HITEC City & Virtual Lab",
    status: "Open",
    startDate: "2025-11-28",
    endDate: "2025-11-28",
    registrationDeadline: "2025-11-25",
    entryFee: "₹199",
    isFree: false,
    participantCount: 420,
    registeredCount: 420,
    maxParticipants: 500,
    speakerCount: 4,
    duration: "6 Hours",
    tags: ["DevOps", "Kubernetes", "Docker", "CI/CD", "Cloud", "Linux"],
    technologies: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "Prometheus", "Grafana"],
    eligibility: "Engineering Students & Junior DevOps Engineers",
    registrationUrl: "https://internatlas.example/register/devops-k8s-workshop-2025",
    websiteUrl: "https://internatlas.example/events/cloud-native-devops-and-kubernetes-workshop",
    createdAt: "2025-08-25T14:00:00Z",
    speakers: [
      {
        name: "Abhinav Rastogi",
        role: "Principal Site Reliability Engineer",
        organization: "ScaleSphere Cloud",
        bio: "10+ years architecting multi-region Kubernetes clusters handling 50k+ requests per second."
      }
    ],
    agenda: [
      {
        time: "10:00 AM - 11:30 AM",
        title: "Module 1: Multi-stage Docker Builds & Container Security",
        speaker: "Abhinav Rastogi",
        description: "Optimizing image layer caching, vulnerability scanning with Trivy, and non-root execution."
      },
      {
        time: "11:45 AM - 01:15 PM",
        title: "Module 2: Kubernetes Manifests, Ingress Controllers & StatefulSets",
        speaker: "Abhinav Rastogi",
        description: "Hands-on provisioning of pods, services, horizontal pod autoscalers, and persistent volumes."
      },
      {
        time: "02:00 PM - 03:30 PM",
        title: "Module 3: GitOps & Declarative Delivery with ArgoCD",
        description: "Connecting GitHub Actions workflows with ArgoCD for automated continuous deployment."
      },
      {
        time: "03:45 PM - 05:00 PM",
        title: "Module 4: Prometheus & Grafana Observability Dashboard",
        description: "Scraping application health metrics, p99 latency alarms, and cluster alerting."
      }
    ],
    rules: [
      "Participants must have Docker Desktop or Minikube installed prior to workshop commencement.",
      "Cloud sandbox credentials provided to all registered attendees for the duration of the lab.",
      "Verified digital certificate issued upon successful completion of the deployment milestone."
    ],
    highlights: ["Free $50 cloud lab credits", "Hands-on guided terminal labs", "ArgoCD & K8s deployment capstone"]
  },
  {
    id: "event-4",
    slug: "cyber-threat-intelligence-and-ethical-hacking-webinar",
    title: "Cyber Threat Intelligence & Ethical Hacking Webinar",
    tagline: "Analyzing advanced persistent threats, zero-day vulnerabilities, and defensive blue-teaming.",
    description:
      "A fast-paced interactive webinar featuring real-world incident forensic breakdowns. Security researchers dissect modern ransomware techniques, supply chain injection vectors, API authorization flaws, and ethical vulnerability disclosure workflows.",
    shortDescription:
      "Forensic analysis of real-world security breaches, zero-days, and API penetration testing tactics.",
    organizerName: "DefSec Student Alliance & CyberShield India",
    organizerType: "Community",
    category: "Cybersecurity",
    eventType: "Webinar",
    mode: "Online",
    location: "Virtual / Webinar",
    status: "Open",
    startDate: "2025-11-15",
    endDate: "2025-11-15",
    registrationDeadline: "2025-11-14",
    entryFee: "Free",
    isFree: true,
    participantCount: 2280,
    registeredCount: 2280,
    maxParticipants: 3000,
    speakerCount: 3,
    duration: "2.5 Hours",
    tags: ["Cybersecurity", "Ethical Hacking", "InfoSec", "Threat Intelligence", "OWASP"],
    technologies: ["Wireshark", "Burp Suite", "Metasploit", "Kali Linux", "OWASP ZAP"],
    eligibility: "Open to all Students & Tech Enthusiasts",
    registrationUrl: "https://internatlas.example/register/cyber-threat-webinar-2025",
    websiteUrl: "https://internatlas.example/events/cyber-threat-intelligence-and-ethical-hacking-webinar",
    createdAt: "2025-08-28T16:00:00Z",
    speakers: [
      {
        name: "Neha Kulkarni",
        role: "Lead Threat Intelligence Researcher",
        organization: "RedTeam Citadel",
        bio: "Specialized in reverse-engineering obfuscated binaries and analyzing state-sponsored APT tactics."
      }
    ],
    agenda: [
      {
        time: "06:00 PM - 06:45 PM",
        title: "Dissecting the 2025 Supply Chain Incidents: Lessons from the Field",
        speaker: "Neha Kulkarni",
        description: "How compromised package registries bypass standard code review and deployment pipelines."
      },
      {
        time: "06:45 PM - 07:30 PM",
        title: "Live Demo: API Broken Object Level Authorization (BOLA) Exploits & Fixes",
        speaker: "Neha Kulkarni",
        description: "Hands-on walkthrough tracing insecure direct object references and implementing cryptographically signed claims."
      },
      {
        time: "07:30 PM - 08:30 PM",
        title: "Panel Q&A: Breaking into Cybersecurity Careers as a Student",
        description: "Certifications vs bug bounty track records, finding mentor circles, and ethical disclosures."
      }
    ],
    rules: [
      "All demonstrations conducted strictly within authorized simulated test environments.",
      "Webinar link sent via email upon verification."
    ],
    highlights: ["Live exploit mitigation demo", "Interactive Q&A session", "Curated infosec career roadmap"]
  },
  {
    id: "event-5",
    slug: "startup-founders-and-investors-networking-mixer",
    title: "Startup Founders & Angel Investors Networking Mixer",
    tagline: "Connect student tech founders with angel syndicates, venture capitalists, and seed mentors.",
    description:
      "An exclusive in-person networking mixer connecting collegiate startup founders with pre-seed angels, seasoned operators, and growth mentors. Features a 60-second elevator pitch open mic, curated 1-on-1 mentor breakouts, and founder roundtables.",
    shortDescription:
      "Collegiate startup founders meet active angel syndicates, seed investors, and enterprise tech mentors.",
    organizerName: "VentureLaunch Network & Collegiate E-Cell Alliance",
    organizerType: "Platform",
    category: "Entrepreneurship",
    eventType: "Networking",
    mode: "Offline",
    location: "Bengaluru, Karnataka",
    venue: "WeWork Galaxy, Residency Road",
    status: "Open",
    startDate: "2025-12-05",
    endDate: "2025-12-05",
    registrationDeadline: "2025-11-30",
    entryFee: "Free",
    isFree: true,
    participantCount: 350,
    registeredCount: 350,
    maxParticipants: 400,
    speakerCount: 6,
    duration: "4 Hours (Evening)",
    tags: ["Startups", "Networking", "Venture Capital", "Founders", "Angel Investment", "Pitch"],
    technologies: ["SaaS", "Fintech", "AI Products", "B2B", "Go-To-Market"],
    eligibility: "Student Founders, Aspiring Entrepreneurs & Startup Builders",
    registrationUrl: "https://internatlas.example/register/startup-mixer-bengaluru-2025",
    websiteUrl: "https://internatlas.example/events/startup-founders-and-investors-networking-mixer",
    createdAt: "2025-09-01T10:00:00Z",
    speakers: [
      {
        name: "Anandita Singhania",
        role: "General Partner",
        organization: "SeedHorizon Ventures",
        bio: "Early backer of 20+ collegiate SaaS and B2B marketplace ventures."
      },
      {
        name: "Raghav Menon",
        role: "Co-Founder & CEO",
        organization: "PayFlow Technologies",
        bio: "Scaled student-built fintech gateway to $15M ARR; active angel mentor."
      }
    ],
    agenda: [
      {
        time: "05:00 PM - 05:30 PM",
        title: "Check-in & Casual Networking",
        description: "Welcome drink and badge allocation by industry vertical."
      },
      {
        time: "05:30 PM - 06:15 PM",
        title: "Fireside Chat: From Dorm Room to Series A in 18 Months",
        speaker: "Raghav Menon & Anandita Singhania",
        description: "Navigating initial customer discovery, cap table hygiene, and first institutional checks."
      },
      {
        time: "06:15 PM - 07:15 PM",
        title: "60-Second Lightning Pitches",
        description: "15 shortlisted student startups present to the audience and investor panel."
      },
      {
        time: "07:15 PM - 09:00 PM",
        title: "Open Mixer & Curated Investor Meetups",
        description: "High-energy networking over appetizers and mocktails."
      }
    ],
    rules: [
      "Founders wishing to pitch in the lightning round must submit a 1-page pitch deck during RSVP.",
      "Business formal or smart casual attire recommended.",
      "Limited seats allocated on first-come, first-evaluated basis."
    ],
    highlights: ["15 live lightning pitches", "Top 3 startups get angel advisory meetings", "High-profile angel network"]
  },
  {
    id: "event-6",
    slug: "design-craft-and-product-experience-symposium",
    title: "Design Craft & Product Experience Symposium 2025",
    tagline: "Exploring spatial interfaces, micro-interactions, accessibility design systems, and design tokens.",
    description:
      "A premier design symposium for UI/UX designers, design engineers, and product specialists. Features in-depth critique sessions, design system governance panels, spatial computing prototyping showcases, and inclusive typography masterclasses.",
    shortDescription:
      "Master UI design systems, micro-animations, Figma advanced tokens, and user research methodologies.",
    organizerName: "ProductCraft Guild & Designers Collective",
    organizerType: "Community",
    category: "Design",
    eventType: "Seminar",
    mode: "Hybrid",
    location: "Mumbai, Maharashtra",
    venue: "Design Innovation Centre, Bandra West & Live Cast",
    status: "Open",
    startDate: "2025-12-12",
    endDate: "2025-12-12",
    registrationDeadline: "2025-12-08",
    entryFee: "Free",
    isFree: true,
    participantCount: 880,
    registeredCount: 880,
    maxParticipants: 1200,
    speakerCount: 7,
    duration: "1 Day (6 Hours)",
    tags: ["UI/UX", "Product Design", "Design Systems", "Figma", "Micro-Interactions", "Accessibility"],
    technologies: ["Figma", "Design Tokens", "Framer", "Storybook", "WCAG 2.2", "CSS Motion"],
    eligibility: "Design Students, UI/UX Practitioners & Frontend Engineers",
    registrationUrl: "https://internatlas.example/register/design-symposium-2025",
    websiteUrl: "https://internatlas.example/events/design-craft-and-product-experience-symposium",
    createdAt: "2025-09-05T13:00:00Z",
    speakers: [
      {
        name: "Meera Krishnan",
        role: "Design Systems Lead",
        organization: "OmniDigital Systems",
        bio: "Architect behind unified multi-brand design tokens powering 40+ consumer digital surfaces."
      },
      {
        name: "Sameer Siddiqui",
        role: "Head of Product Design",
        organization: "Verve Mobility",
        bio: "Specializes in tactile micro-interactions and reducing cognitive friction in high-frequency applications."
      }
    ],
    agenda: [
      {
        time: "10:00 AM - 11:15 AM",
        title: "Keynote: Craft in the Age of Generative Acceleration",
        speaker: "Sameer Siddiqui",
        description: "Why high-fidelity craft, deliberate typography, and tactile delight matter more than ever."
      },
      {
        time: "11:30 AM - 01:00 PM",
        title: "Masterclass: Enterprise Design Tokens with Figma & Style Dictionary",
        speaker: "Meera Krishnan",
        description: "Bridging the gap between Figma design variables and production CSS/Tailwind themes."
      },
      {
        time: "02:00 PM - 03:30 PM",
        title: "Live Portfolio Teardown & Interactive Critique",
        description: "Expert feedback on 5 selected student portfolios with actionable UX improvement tips."
      },
      {
        time: "03:45 PM - 04:30 PM",
        title: "Closing Panel: What Top Product Teams Look for in Junior Designers",
        description: "Storytelling, process clarity, and cross-functional engineering empathy."
      }
    ],
    rules: [
      "Attendees can submit their design portfolio links during registration for the live teardown consideration.",
      "Digital access includes access to all downloadable Figma component kits provided by speakers."
    ],
    highlights: ["Live portfolio teardowns", "Free enterprise Figma design token template", "Portfolio showcase gallery"]
  },
  {
    id: "event-7",
    slug: "data-science-and-analytics-career-masterclass",
    title: "Data Science & Analytics Career Masterclass",
    tagline: "Bridging collegiate statistics with enterprise machine learning pipelines and quantitative hiring.",
    description:
      "A focused career-oriented seminar covering the essential competencies expected by top-tier data science and analytics recruitment teams. Covers case-study problem framing, SQL optimization interviews, machine learning system design questions, and building authentic end-to-end projects.",
    shortDescription:
      "Practical blueprint for cracking data science, quantitative analysis, and analytics engineering roles.",
    organizerName: "Indian Analytics Institute & CareerFoundry",
    organizerType: "Corporate",
    category: "Career",
    eventType: "Career Fair",
    mode: "Online",
    location: "Virtual / Nationwide",
    status: "Closing Soon",
    startDate: "2025-11-08",
    endDate: "2025-11-08",
    registrationDeadline: "2025-11-06",
    entryFee: "Free",
    isFree: true,
    participantCount: 2650,
    registeredCount: 2650,
    maxParticipants: 4000,
    speakerCount: 5,
    duration: "4 Hours",
    tags: ["Data Science", "Career", "Analytics", "SQL", "Machine Learning", "Interviews"],
    technologies: ["Python", "SQL", "Tableau", "Pandas", "Scikit-Learn", "A/B Testing"],
    eligibility: "Engineering, Mathematics & Statistics Undergraduates",
    registrationUrl: "https://internatlas.example/register/data-science-masterclass-2025",
    websiteUrl: "https://internatlas.example/events/data-science-and-analytics-career-masterclass",
    createdAt: "2025-09-08T09:30:00Z",
    speakers: [
      {
        name: "Tanmay Bansal",
        role: "Director of Data Science",
        organization: "FinData Global",
        bio: "Hired and mentored over 80 data science analysts across fintech, logistics, and retail analytics."
      }
    ],
    agenda: [
      {
        time: "02:00 PM - 03:00 PM",
        title: "Session 1: Deconstructing Data Science Technical Interviews",
        speaker: "Tanmay Bansal",
        description: "Real-world walkthrough of live coding assessments, statistical probability traps, and case problems."
      },
      {
        time: "03:15 PM - 04:15 PM",
        title: "Session 2: The Modern Data Stack — Beyond Jupyter Notebooks",
        description: "How production teams use dbt, Snowflake, feature stores, and automated model monitoring."
      },
      {
        time: "04:30 PM - 05:30 PM",
        title: "Resume Clinic: Structuring Impactful Quant Projects on GitHub",
        description: "Direct side-by-side analysis of exemplary vs weak junior data science resumes."
      }
    ],
    rules: [
      "Join 10 minutes prior to session start using your unique attendee link.",
      "Interactive Q&A available throughout the session via the chat panel."
    ],
    highlights: ["Resume review checklist", "Curated 100-question SQL practice bundle", "Mock technical interview recording"]
  },
  {
    id: "event-8",
    slug: "women-in-technology-leadership-conclave-2025",
    title: "Women in Technology Leadership Conclave 2025",
    tagline: "Celebrating trailblazers in software engineering, tech leadership, research, and venture capital.",
    description:
      "A flagship national conference celebrating and empowering women in technology across undergraduate campuses and research institutions. Features keynote discussions, leadership skill-building tracks, speed mentorship circles, and panels on breaking barriers in STEM careers.",
    shortDescription:
      "Empowering the next generation of female software engineers, engineering managers, and tech innovators.",
    organizerName: "Women in Tech India & IEEE Women in Engineering",
    organizerType: "Community",
    category: "Community",
    eventType: "Conference",
    mode: "Hybrid",
    location: "Pune, Maharashtra",
    venue: "Symbiosis Auditorium, Viman Nagar & Virtual Stream",
    status: "Open",
    startDate: "2025-12-18",
    endDate: "2025-12-18",
    registrationDeadline: "2025-12-14",
    entryFee: "Free",
    isFree: true,
    participantCount: 1650,
    registeredCount: 1650,
    maxParticipants: 2200,
    speakerCount: 10,
    duration: "Full Day (8 Hours)",
    tags: ["Women in Tech", "Leadership", "Diversity", "Mentorship", "Engineering", "Career"],
    technologies: ["AI Research", "Cloud Systems", "Software Architecture", "Cybersecurity", "Product"],
    eligibility: "Open to All College Students, Researchers & Professionals",
    registrationUrl: "https://internatlas.example/register/women-tech-conclave-2025",
    websiteUrl: "https://internatlas.example/events/women-in-technology-leadership-conclave-2025",
    createdAt: "2025-09-10T12:00:00Z",
    speakers: [
      {
        name: "Radhika Kulkarni",
        role: "Senior Director of Cloud Platforms",
        organization: "Nexus Global Cloud",
        bio: "20+ year engineering leader advocating for gender diversity in cloud systems architecture."
      },
      {
        name: "Deepika Sharma",
        role: "Founder & CEO",
        organization: "BioSens AI",
        bio: "Forbes 30 Under 30 honoree building non-invasive AI diagnostics hardware."
      }
    ],
    agenda: [
      {
        time: "09:30 AM - 10:30 AM",
        title: "Inaugural Keynote: Defining the Next Decade of Female Tech Leadership",
        speaker: "Radhika Kulkarni",
        description: "From individual contributor to architectural vision and enterprise executive leadership."
      },
      {
        time: "10:45 AM - 12:15 PM",
        title: "Panel: Emerging Tech Breakthroughs — Quantum, AI, and BioTech",
        speaker: "Deepika Sharma & Panelists",
        description: "Interdisciplinary innovation driving global solutions for sustainability and healthcare."
      },
      {
        time: "01:30 PM - 03:00 PM",
        title: "Speed Mentorship Circles",
        description: "Small group roundtables with senior engineers, VP of Engineering leaders, and tech founders."
      },
      {
        time: "03:15 PM - 04:30 PM",
        title: "Workshop: Confident Technical Communication & Public Speaking",
        description: "Actionable frameworks for delivering standout conference talks and tech design proposals."
      }
    ],
    rules: [
      "All students and professionals passionate about inclusion in tech are warmly encouraged to join.",
      "Both online and in-person registration options provide access to mentorship circles."
    ],
    highlights: ["1-on-1 speed mentorship roundtables", "Recruiting partner meetups", "Networking luncheon"]
  },
  {
    id: "event-9",
    slug: "product-engineering-and-system-design-industry-session",
    title: "Product Engineering & System Design Industry Session",
    tagline: "Deconstructing high-concurrency architectures handling millions of daily active users.",
    description:
      "A technical deep-dive seminar hosted by senior engineering managers and principal architects. Walk through distributed database sharding, caching tiers with Redis and Memcached, message brokers with Apache Kafka, and rate-limiting algorithms at hyper-scale.",
    shortDescription:
      "Master distributed caching, event-driven streaming with Kafka, and high-concurrency system design.",
    organizerName: "TechScale Architects Forum",
    organizerType: "Corporate",
    category: "Software Development",
    eventType: "Industry Session",
    mode: "Online",
    location: "Virtual / Live Broadcast",
    status: "Open",
    startDate: "2025-11-25",
    endDate: "2025-11-25",
    registrationDeadline: "2025-11-23",
    entryFee: "Free",
    isFree: true,
    participantCount: 2150,
    registeredCount: 2150,
    maxParticipants: 3500,
    speakerCount: 4,
    duration: "3 Hours",
    tags: ["System Design", "Distributed Systems", "Kafka", "Microservices", "Scalability", "Backend"],
    technologies: ["Apache Kafka", "Redis", "PostgreSQL", "Go", "gRPC", "Docker"],
    eligibility: "Computer Science Students, Backend Developers & Tech Enthusiasts",
    registrationUrl: "https://internatlas.example/register/system-design-session-2025",
    websiteUrl: "https://internatlas.example/events/product-engineering-and-system-design-industry-session",
    createdAt: "2025-09-12T15:00:00Z",
    speakers: [
      {
        name: "Siddharth Nambiar",
        role: "Principal Systems Engineer",
        organization: "HyperStream Media",
        bio: "Specialist in video streaming ingestion pipelines and high-throughput real-time telemetry."
      }
    ],
    agenda: [
      {
        time: "06:00 PM - 07:00 PM",
        title: "Part 1: Designing an Event-Driven Notification System at 10M QPS",
        speaker: "Siddharth Nambiar",
        description: "Idempotency keys, dead letter queues, partitioned Kafka topics, and priority workers."
      },
      {
        time: "07:15 PM - 08:15 PM",
        title: "Part 2: Database Replication Lag, Split-Brain Resolution & Read Replicas",
        description: "Consistency models (Linearizable vs Eventual), quorum reads, and Raft consensus mechanics."
      },
      {
        time: "08:15 PM - 09:00 PM",
        title: "Live Interactive System Design Whiteboarding Session",
        description: "Audience-voted system problem solved collaboratively in real time."
      }
    ],
    rules: [
      "Basic familiarity with client-server architecture and databases recommended.",
      "Live architectural diagrams and recorded session shared after completion."
    ],
    highlights: ["Live whiteboarding problem solving", "Real-world production outage case studies", "Downloadable architecture cheat-sheet"]
  },
  {
    id: "event-10",
    slug: "open-source-developers-and-git-community-meetup",
    title: "Open-Source Developers & Git Community Meetup",
    tagline: "Collaborative lightning talks, upstream kernel patches, and first pull request mentoring.",
    description:
      "A friendly, hands-on community meetup bringing together seasoned open-source contributors and students looking to submit their very first upstream pull request. Includes Git mastery workshops, live PR reviews, and lightning talks on open-source project sustainability.",
    shortDescription:
      "Learn how to contribute to major open-source projects, navigate GitHub workflows, and connect with maintainers.",
    organizerName: "OpenSource India Collective & Campus FOSS",
    organizerType: "Community",
    category: "Community",
    eventType: "Meetup",
    mode: "Offline",
    location: "Bengaluru, Karnataka",
    venue: "Indiranagar Open Tech Space, 100ft Road",
    status: "Open",
    startDate: "2025-11-29",
    endDate: "2025-11-29",
    registrationDeadline: "2025-11-26",
    entryFee: "Free",
    isFree: true,
    participantCount: 220,
    registeredCount: 220,
    maxParticipants: 250,
    speakerCount: 5,
    duration: "4 Hours (Afternoon)",
    tags: ["Open Source", "Git", "FOSS", "GitHub", "Community", "Collaboration"],
    technologies: ["Git", "GitHub Actions", "Linux", "Rust", "Go", "Python"],
    eligibility: "All Tech Enthusiasts & Open-Source Learners",
    registrationUrl: "https://internatlas.example/register/oss-meetup-bengaluru-2025",
    websiteUrl: "https://internatlas.example/events/open-source-developers-and-git-community-meetup",
    createdAt: "2025-09-15T08:00:00Z",
    speakers: [
      {
        name: "Aditya Hegde",
        role: "Core Maintainer",
        organization: "Envoy Project",
        bio: "Long-time cloud-native contributor and Google Summer of Code mentor."
      }
    ],
    agenda: [
      {
        time: "02:00 PM - 02:30 PM",
        title: "Welcome & Icebreaker: Find Your Contribution Partner",
        description: "Matching newcomers with experienced repo maintainers by programming language."
      },
      {
        time: "02:30 PM - 03:30 PM",
        title: "Workshop: Demystifying Git Rebase, Cherry-Pick & Conflict Resolution",
        speaker: "Aditya Hegde",
        description: "Interactive terminal demonstrations keeping commit histories clean and atomic."
      },
      {
        time: "03:45 PM - 05:00 PM",
        title: "Live Hack & Pull Request Sprint",
        description: "Tackle good-first-issues across curated open-source repositories with on-site mentor guidance."
      },
      {
        time: "05:00 PM - 06:00 PM",
        title: "Show-and-Tell & Coffee Networking",
        description: "Celebrate merged pull requests and share community announcements."
      }
    ],
    rules: [
      "Bring your personal laptop with Git configured and SSH keys connected to your GitHub account.",
      "Code of Conduct strictly enforced across all workshops and hallway tracks."
    ],
    highlights: ["First pull request mentor sprint", "Official Open Source India stickers & swag", "Coffee & snacks provided"]
  },
  {
    id: "event-11",
    slug: "generative-ai-and-rag-pipeline-hands-on-workshop",
    title: "Generative AI & RAG Pipeline Hands-on Workshop",
    tagline: "Build production-grade retrieval augmented generation with vector databases and semantic rerankers.",
    description:
      "A rigorous, coding-intensive workshop teaching engineers how to construct industrial-grade RAG systems. Explore hybrid search (sparse BM25 + dense embedding vectors), chunking optimization strategies, cross-encoder rerankers, and automated evaluation using Ragas frameworks.",
    shortDescription:
      "Build real-world RAG pipelines with vector databases, hybrid search, and hallucination evaluation.",
    organizerName: "AI Builders Guild & VectorOps Labs",
    organizerType: "Corporate",
    category: "AI & Machine Learning",
    eventType: "Workshop",
    mode: "Online",
    location: "Virtual Hands-on Lab",
    status: "Open",
    startDate: "2025-12-06",
    endDate: "2025-12-06",
    registrationDeadline: "2025-12-03",
    entryFee: "₹149",
    isFree: false,
    participantCount: 680,
    registeredCount: 680,
    maxParticipants: 1000,
    speakerCount: 2,
    duration: "5 Hours",
    tags: ["GenAI", "RAG", "Vector DB", "Embeddings", "LangChain", "Python"],
    technologies: ["Qdrant", "ChromaDB", "FastAPI", "HuggingFace", "OpenAI", "Ragas"],
    eligibility: "Developers with intermediate Python & API experience",
    registrationUrl: "https://internatlas.example/register/rag-workshop-2025",
    websiteUrl: "https://internatlas.example/events/generative-ai-and-rag-pipeline-hands-on-workshop",
    createdAt: "2025-09-17T11:00:00Z",
    speakers: [
      {
        name: "Devendra Verma",
        role: "Lead Machine Learning Engineer",
        organization: "SearchMind AI",
        bio: "Specialist in neural search algorithms and retrieval systems handling millions of enterprise documents."
      }
    ],
    agenda: [
      {
        time: "10:00 AM - 11:30 AM",
        title: "Part 1: Document Chunking Strategies & Embedding Model Benchmarks",
        speaker: "Devendra Verma",
        description: "Recursive splitting vs semantic boundary chunking, comparing token costs and embedding fidelity."
      },
      {
        time: "11:45 AM - 01:15 PM",
        title: "Part 2: Vector Storage & Hybrid Search Indexing with Qdrant",
        speaker: "Devendra Verma",
        description: "Setting up reciprocal rank fusion (RRF) combining dense cosine similarity with BM25 keywords."
      },
      {
        time: "02:00 PM - 03:30 PM",
        title: "Part 3: Cross-Encoder Reranking & Context Compression",
        description: "Filtering noise from retrieved documents before passing context windows to the generative model."
      },
      {
        time: "03:45 PM - 04:30 PM",
        title: "Part 4: Measuring Hallucinations & Faithfulness with Ragas",
        description: "Setting up automated continuous CI testing verifying generation faithfulness scores."
      }
    ],
    rules: [
      "API keys and cloud vector database access will be provisioned in the interactive lab notebook.",
      "Recordings and full source code repositories provided after completion."
    ],
    highlights: ["Production-ready GitHub template repo", "Dedicated GPU notebook environment", "Certificate of completion"]
  },
  {
    id: "event-12",
    slug: "pan-india-tech-career-and-campus-placement-expo",
    title: "Pan-India Tech Career & Campus Placement Expo 2025",
    tagline: "Connect with 50+ hiring tech companies, attend mock interview drives, and fast-track internship offers.",
    description:
      "A massive national technology career expo uniting high-growth startups, global technology consulting firms, and product enterprises with pre-final and final-year engineering students. Features live booth interactions, on-the-spot resume screening, and keynote industry outlook presentations.",
    shortDescription:
      "Meet recruiters from 50+ tech companies, participate in live resume screenings, and land internships.",
    organizerName: "National Collegiate Placement Council & InternAtlas",
    organizerType: "Platform",
    category: "Career",
    eventType: "Career Fair",
    mode: "Hybrid",
    location: "Delhi NCR, India",
    venue: "Pragati Maidan Hall 5 & Virtual Hiring Booths",
    status: "Open",
    startDate: "2025-12-22",
    endDate: "2025-12-23",
    registrationDeadline: "2025-12-16",
    entryFee: "Free",
    isFree: true,
    participantCount: 5400,
    registeredCount: 5400,
    maxParticipants: 8000,
    speakerCount: 15,
    duration: "2 Days",
    tags: ["Career Fair", "Internships", "Placements", "Hiring", "Jobs", "Resume Review"],
    technologies: ["Software Engineering", "Data Analytics", "Cloud", "Product Management", "Cybersecurity"],
    eligibility: "All Undergraduate & Graduate Students (2025 - 2027 Batches)",
    registrationUrl: "https://internatlas.example/register/tech-career-expo-2025",
    websiteUrl: "https://internatlas.example/events/pan-india-tech-career-and-campus-placement-expo",
    createdAt: "2025-09-18T10:00:00Z",
    speakers: [
      {
        name: "Shyam Sundar",
        role: "Chief Talent Officer",
        organization: "Vanguard Tech Alliance",
        bio: "Leads national university hiring partnerships across top engineering colleges."
      },
      {
        name: "Ananya Roy",
        role: "Director of University Relations",
        organization: "NextGen Software Systems",
        bio: "Specializes in early-career engineering apprenticeships and tech talent development."
      }
    ],
    agenda: [
      {
        time: "Day 1: 09:00 AM - 11:00 AM",
        title: "Opening Keynote: Tech Hiring Trends & In-Demand Skills for 2026",
        speaker: "Shyam Sundar & Ananya Roy",
        description: "Analysis of campus hiring patterns, rising demand for AI/data engineering, and remote options."
      },
      {
        time: "Day 1: 11:00 AM - 05:00 PM",
        title: "Live Company Booth Exhibitions & 1-on-1 Recruiter Chats",
        description: "Explore 50+ company booths, submit digital resumes, and chat with technical recruiters."
      },
      {
        time: "Day 2: 10:00 AM - 01:00 PM",
        title: "Rapid Technical Mock Interview Clinics",
        description: "15-minute simulated coding & behavioral interviews with instant constructive feedback."
      },
      {
        time: "Day 2: 02:00 PM - 04:30 PM",
        title: "Fast-Track Shortlisting & Offer Letter Distribution",
        description: "Participating companies announce shortlisted candidates for direct technical rounds."
      }
    ],
    rules: [
      "Carry multiple printed copies of your resume for in-person booths.",
      "Formal or smart business casual dress code required.",
      "Upload an updated PDF resume during online registration for pre-screening by participating employers."
    ],
    highlights: ["50+ hiring companies on-site", "On-the-spot technical resume screening", "Direct interview fast-tracks"]
  }
];
