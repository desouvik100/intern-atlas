import { CulturalEvent } from "@/types/cultural";

export const MOCK_CULTURAL_EVENTS: CulturalEvent[] = [
  {
    id: "cult-1",
    slug: "rhapsody-battle-of-the-bands",
    title: "Rhapsody: National Collegiate Battle of the Bands",
    tagline: "Unleash Pure Electric Energy & Rock Supremacy",
    organizerName: "IIT Delhi Music Society & Rolling Stone Youth",
    organizerType: "Cultural Society",
    location: "New Delhi, Delhi",
    venue: "Open Air Amphitheatre, IIT Delhi Campus",
    mode: "Offline",
    category: "Music & Bands",
    description: `Rhapsody is India's most prestigious collegiate battle of the bands competition. From heart-pounding heavy metal and progressive rock to soulful Indian fusion and acoustic brilliance, Rhapsody gives student musical acts the ultimate stadium-grade stage.

Finalist bands perform on state-of-the-art Martin Audio concert acoustics before acclaimed rock legends and record label A&R scouts. Winners receive cash prizes, studio recording contracts, and flagship opening slots at premier metropolitan music festivals.`,
    shortDescription: "India's premier collegiate rock, metal, and fusion band clash with studio recording contracts for winners.",
    startDate: "2025-11-14",
    endDate: "2025-11-15",
    registrationDeadline: "2025-11-05",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "College bands (3-8 members), Enrolled students",
    teamSize: "3 - 8 Members",
    prizePool: "₹2,00,000 + Studio Contract",
    registeredCount: 840,
    poster: "/posters/cultural-battle-of-bands.svg",
    tags: ["Rock Band", "Live Music", "Electric Guitar", "Drums", "Fusion"],
    highlights: [
      "Judging by celebrity artists and premier studio producers",
      "Full stadium-grade backline with Marshall stacks and DW drum kits",
      "EP recording contract for the winning band at SoundSphere Studios",
      "Live multi-track audio and 4K concert video package for finalists"
    ],
    rules: [
      "Each band gets 15 minutes of stage time plus 5 minutes line check.",
      "Original compositions carry extra weight in judging criteria.",
      "All members must carry valid collegiate student identification.",
      "Profanity or hate speech on stage will lead to immediate sound cut and disqualification."
    ],
    schedule: [
      {
        day: "Day 1",
        date: "2025-11-14",
        title: "Acoustic & Regional Prelims",
        events: ["Sound Checks (09:00 AM)", "Preliminary Rounds (11:00 AM)", "Judges Jam Session (06:00 PM)"]
      },
      {
        day: "Day 2",
        date: "2025-11-15",
        title: "Grand Finals & Headliner Gig",
        events: ["Top 8 Band Showdowns (04:00 PM)", "Award Ceremony (08:30 PM)", "Celebrity Guest Band Pro-Nite (09:00 PM)"]
      }
    ],
    contact: {
      email: "music.rhapsody@internatlas.example",
      phone: "+91 98110 23411",
      website: "https://example.com/rhapsody-battle"
    },
    registrationUrl: "https://example.com/register/rhapsody",
    websiteUrl: "https://example.com/rhapsody-battle",
    createdAt: "2025-09-01"
  },
  {
    id: "cult-2",
    slug: "nrityanjali-classical-dance",
    title: "Nrityanjali: Classical & Semi-Classical Dance",
    tagline: "Celebrating Timeless Indian Classical Heritage & Grace",
    organizerName: "National Youth Heritage & Kalakshetra Alumni",
    organizerType: "University Guild",
    location: "Chennai, Tamil Nadu",
    venue: "Music Academy Hall, TTK Road",
    mode: "Offline",
    category: "Dance & Choreo",
    description: `Nrityanjali is a nationwide celebration of classical Indian dance forms including Bharatanatyam, Kathak, Odissi, Kuchipudi, and Mohiniyattam. It honors technical precision, rhythmic mastery (Tala), expressive storytelling (Abhinaya), and artistic devotion.

Judged by Sangeet Natak Akademi awardees, performers compete in solo, duet, and thematic ensemble formats.`,
    shortDescription: "Nationwide classical dance competition spotlighting Bharatanatyam, Kathak, Odissi, and Kuchipudi.",
    startDate: "2025-11-21",
    endDate: "2025-11-22",
    registrationDeadline: "2025-11-12",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "University and College Dancers across India",
    teamSize: "1 - 10 Members",
    prizePool: "₹1,50,000 + Natya Ratna Trophy",
    registeredCount: 520,
    poster: "/posters/cultural-classical-music.svg",
    tags: ["Classical Dance", "Bharatanatyam", "Kathak", "Odissi", "Indian Heritage"],
    highlights: [
      "Judged by Sangeet Natak Akademi honored maestros",
      "Live orchestra accompaniment permitted and welcomed",
      "National media broadcast on regional cultural channels"
    ],
    rules: [
      "Performance time limit: Solo 8 mins, Group 12 mins.",
      "Traditional costumes and authentic classical music tracks are required.",
      "Pre-recorded tracks must be submitted 48 hours prior in high-bitrate WAV/MP3 format."
    ],
    contact: {
      email: "nrityanjali@internatlas.example",
      phone: "+91 94440 12890"
    },
    registrationUrl: "https://example.com/register/nrityanjali",
    createdAt: "2025-09-02"
  },
  {
    id: "cult-3",
    slug: "nukkad-natak-street-theatre",
    title: "Awaaz: National Street Theatre & Nukkad Natak Clash",
    tagline: "Dhol, Gulal & Voices That Shake the Streets",
    organizerName: "Delhi University Dramatics Circuit & Asmita Theatre",
    organizerType: "Cultural Society",
    location: "New Delhi, Delhi",
    venue: "Central Arts Faculty Lawns, North Campus",
    mode: "Offline",
    category: "Dramatics & Theatre",
    description: `Awaaz is India's most fiercely contested street theatre carnival. Student troupes from universities across the country use raw vocals, rhythmic dhols, harmonized clapping, and poignant satire to ignite awareness around pressing socio-political and economic realities.

The open circular arena tests every actor's vocal projection, dynamic synchronization, emotional gravity, and crowd engagement.`,
    shortDescription: "Fierce national street theatre clash tackling pressing social realities with raw dhol and vocals.",
    startDate: "2025-11-28",
    endDate: "2025-11-29",
    registrationDeadline: "2025-11-18",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "Collegiate Dramatics Societies & Student Troupes",
    teamSize: "12 - 25 Members",
    prizePool: "₹1,75,000 + Best Script Award",
    registeredCount: 680,
    poster: "/posters/cultural-choreo-dance.svg",
    tags: ["Nukkad Natak", "Street Theatre", "Dramatics", "Social Cause", "Delhi University"],
    highlights: [
      "Performed in traditional 360-degree open circle spectator arenas",
      "Special awards for Best Script, Best Direction, and Best Dholak Player",
      "Mentorship sessions with veteran National School of Drama (NSD) artists"
    ],
    rules: [
      "Strict time limit of 20 minutes from first dhol strike to final bow.",
      "No electronic microphones or external amplification permitted.",
      "Gulal and natural props permitted; fire and hazardous items strictly barred."
    ],
    contact: {
      email: "awaaz.theatre@internatlas.example",
      phone: "+91 98710 44521"
    },
    registrationUrl: "https://example.com/register/awaaz",
    createdAt: "2025-09-03"
  },
  {
    id: "cult-4",
    slug: "sargam-acapella-vocal-clash",
    title: "Sargam: Pan-India Acapella & Choral Harmonix",
    tagline: "Zero Instruments, 100% Vocal Magic & Sonic Brilliance",
    organizerName: "Bangalore Choral Guild & Western Music Society",
    organizerType: "Student Body",
    location: "Bengaluru, Karnataka",
    venue: "St. John's Auditorium, Koramangala",
    mode: "Offline",
    category: "Music & Bands",
    description: `Sargam brings together the finest university acapella groups, beatboxers, and choral harmonies from across the nation. Stripping away instruments, groups craft intricate polyphonic tapestries, vocal basslines, and explosive percussion using solely human voices.

Competitions span western pop medleys, Indian classical Carnatic beatboxing, and contemporary folk fusion.`,
    shortDescription: "Zero-instrument collegiate acapella and choral clash showcasing polyphonic vocal brilliance.",
    startDate: "2025-12-05",
    endDate: "2025-12-06",
    registrationDeadline: "2025-11-25",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "College choirs & Acapella groups",
    teamSize: "6 - 16 Members",
    prizePool: "₹1,25,000",
    registeredCount: 410,
    poster: "/posters/cultural-street-play.svg",
    tags: ["Acapella", "Choir", "Beatboxing", "Vocal Harmony", "Pop Medley"],
    highlights: [
      "Custom acoustic acoustic shell setup for studio-grade vocal reproduction",
      "Separate trophies for Best Vocal Percussionist / Beatboxer and Best Soloist"
    ],
    rules: [
      "No backing tracks or pitch-correction devices permitted.",
      "Maximum performance duration: 10 minutes including medley transitions."
    ],
    contact: {
      email: "sargam.vocal@internatlas.example",
      phone: "+91 80255 12099"
    },
    registrationUrl: "https://example.com/register/sargam",
    createdAt: "2025-09-04"
  },
  {
    id: "cult-5",
    slug: "groove-nation-hiphop-crew",
    title: "Groove Nation: Mega Hip-Hop & Urban Dance Battle",
    tagline: "Locking, Popping, Breaking & Synchronized Crew Supremacy",
    organizerName: "Urban Street Dance Guild & Red Bull Dance",
    organizerType: "Cultural Society",
    location: "Mumbai, Maharashtra",
    venue: "Bandra Fort Amphitheatre, Mumbai",
    mode: "Offline",
    category: "Dance & Choreo",
    description: `Groove Nation is India's flagship inter-collegiate urban dance competition. Featuring high-voltage Mega Crew choreographies, 1v1 B-Boying ciphers, and 2v2 All-Styles duels, Groove Nation attracts the country's most athletic and creative dance crews.

Crews are evaluated on musicality, formation complexity, cleanliness of execution, synchronization, and creative stunts.`,
    shortDescription: "High-voltage mega crew choreo battles, 1v1 b-boying ciphers, and all-styles street dance duels.",
    startDate: "2025-12-12",
    endDate: "2025-12-13",
    registrationDeadline: "2025-12-01",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "College dance crews and street dancers",
    teamSize: "8 - 25 Members",
    prizePool: "₹2,50,000 + International Dance Camp Pass",
    registeredCount: 1120,
    poster: "/posters/cultural-standup-comedy.svg",
    tags: ["Hip-Hop", "Street Dance", "B-Boying", "Mega Crew", "Urban Dance"],
    highlights: [
      "Judged by international crew champions and Bollywood choreographers",
      "Full cypher circle with live DJ scratching and MC commentary",
      "Winners sponsored to compete at Red Bull BC One national qualifiers"
    ],
    rules: [
      "Crew showcase limit: 6 to 8 minutes.",
      "Props must be cleared from the stage within 60 seconds."
    ],
    contact: {
      email: "groovenation@internatlas.example",
      phone: "+91 98200 87112"
    },
    registrationUrl: "https://example.com/register/groovenation",
    createdAt: "2025-09-05"
  },
  {
    id: "cult-6",
    slug: "sukhan-ghazal-and-mehfil-e-kavya",
    title: "Sukhan: Collegiate Ghazal, Shayari & Spoken Word",
    tagline: "Echoes of Soulful Urdu Poetry, Hindi Kavi Sammelan & Modern Slam",
    organizerName: "Rekhta Youth Chapter & Jamia Literary Society",
    organizerType: "University Guild",
    location: "Lucknow, Uttar Pradesh",
    venue: "Sangeet Natak Akademi Hall, Gomti Nagar",
    mode: "Hybrid",
    category: "Literary & Poetry",
    description: `Sukhan provides a sanctuary for young poets, shayars, and spoken word artists. Spanning traditional Tarannum ghazal recitations, satirical nazms, Hindi hasya kavi sammelans, and hard-hitting modern English slam poetry, Sukhan honors the enduring beauty of lyrical expression.`,
    shortDescription: "Ghazal recitations, Urdu shayari, and modern slam poetry celebrating youthful lyrical expression.",
    startDate: "2025-12-19",
    endDate: "2025-12-20",
    registrationDeadline: "2025-12-10",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "All undergraduate & postgraduate student poets",
    teamSize: "Individual",
    prizePool: "₹80,000 + Book Publishing Mentorship",
    registeredCount: 390,
    poster: "/posters/cultural-folk-arts.svg",
    tags: ["Shayari", "Ghazal", "Spoken Word", "Poetry Slam", "Urdu Literature"],
    highlights: [
      "Audience mehfil seating with traditional Baithak setup",
      "Top 10 poems published in the annual Sukhan Collegiate Anthology"
    ],
    rules: [
      "Strictly original poetry only. Plagiarism leads to disqualification.",
      "Time limit per participant is 5 minutes."
    ],
    contact: {
      email: "sukhan.mehfil@internatlas.example",
      phone: "+91 94150 99823"
    },
    registrationUrl: "https://example.com/register/sukhan",
    createdAt: "2025-09-06"
  },
  {
    id: "cult-7",
    slug: "vogue-vista-campus-fashion",
    title: "Vogue Vista: National Collegiate Fashion Runway",
    tagline: "Haute Couture, Sustainable Chic & Avant-Garde Elegance",
    organizerName: "NIFT Fashion Forum & FDCI Youth Cell",
    organizerType: "Cultural Society",
    location: "New Delhi, Delhi",
    venue: "Main Auditorium Runway, NIFT Campus",
    mode: "Offline",
    category: "Fashion & Lifestyle",
    description: `Vogue Vista is India's pre-eminent inter-collegiate fashion choreography extravaganza. University fashion societies conceptualize, design, stitch, and showcase cohesive runway collections ranging from Indian Khadi revivals and zero-waste upcycled garments to futuristic cyberpunk couture.`,
    shortDescription: "Collegiate fashion showcase bringing avant-garde styling, choreography, and sustainable designs.",
    startDate: "2026-01-09",
    endDate: "2026-01-10",
    registrationDeadline: "2025-12-25",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "University fashion teams (Models, Designers, Stylists)",
    teamSize: "10 - 20 Members",
    prizePool: "₹2,25,000 + Fashion Week Internship",
    registeredCount: 710,
    poster: "/posters/cultural-fashion-walk.svg",
    tags: ["Fashion Show", "Runway", "Avant-Garde", "Styling", "NIFT"],
    highlights: [
      "Professional 60-foot LED ramp with automated concert lighting",
      "Special category awards for Best Male Model, Best Female Model, and Best Designer"
    ],
    rules: [
      "Slot duration: 12 minutes total including video intro and ramp walk.",
      "Garments must reflect an articulated narrative theme."
    ],
    contact: {
      email: "voguevista@internatlas.example",
      phone: "+91 99990 12781"
    },
    registrationUrl: "https://example.com/register/voguevista",
    createdAt: "2025-09-07"
  },
  {
    id: "cult-8",
    slug: "kala-darpan-fine-arts-expo",
    title: "Kala Darpan: National Youth Fine Arts & Live Painting",
    tagline: "Live Canvas, Charcoal, Digital Illustration & Sculpture",
    organizerName: "Sir J.J. School of Art Student Council",
    organizerType: "Cultural Society",
    location: "Mumbai, Maharashtra",
    venue: "Nehru Centre Art Gallery, Worli",
    mode: "Hybrid",
    category: "Fine Arts & Photo",
    description: `Kala Darpan is a vibrant festival of visual expression. The competition encompasses on-the-spot live oil painting, charcoal sketching, mural graffiti, digital illustration, and clay sculpture. Entries are displayed in a public 3-day art gallery visited by thousands of art enthusiasts and gallery curators.`,
    shortDescription: "Live oil painting, charcoal sketching, graffiti, and digital art exhibition with gallery showcases.",
    startDate: "2026-01-16",
    endDate: "2026-01-18",
    registrationDeadline: "2026-01-05",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "Student painters, illustrators, and sculptors",
    teamSize: "Individual or Pairs",
    prizePool: "₹1,00,000 + Gallery Representation",
    registeredCount: 460,
    poster: "/posters/cultural-poetry-slam.svg",
    tags: ["Fine Arts", "Live Painting", "Charcoal", "Digital Art", "Sculpture"],
    highlights: [
      "Complimentary professional easel, canvases, and base materials provided",
      "Public gallery exhibition open to Mumbai collectors and curators"
    ],
    rules: [
      "Theme revealed at the spot 15 minutes before the timer starts.",
      "Work duration: 3 hours uninterrupted painting."
    ],
    contact: {
      email: "kaladarpan@internatlas.example",
      phone: "+91 98210 65432"
    },
    registrationUrl: "https://example.com/register/kaladarpan",
    createdAt: "2025-09-08"
  },
  {
    id: "cult-9",
    slug: "rangmanch-one-act-play",
    title: "Rangmanch: Inter-College One-Act Play Championship",
    tagline: "Intense Stage Craft, Dialogue & Theatrical Triumph",
    organizerName: "National Academy of Dramatic Arts & Prithvi Youth",
    organizerType: "Cultural Society",
    location: "Pune, Maharashtra",
    venue: "Bal Gandharva Ranga Mandir, JM Road",
    mode: "Offline",
    category: "Dramatics & Theatre",
    description: `Rangmanch celebrates the depth of proscenium stage drama. Collegiate dramatics troupes mount full one-act productions complete with theatrical lighting, soundscapes, elaborate sets, and compelling character arcs.`,
    shortDescription: "Proscenium stage one-act play championship testing lighting, dialogue, and acting depth.",
    startDate: "2026-01-23",
    endDate: "2026-01-24",
    registrationDeadline: "2026-01-10",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "College dramatics teams",
    teamSize: "6 - 18 Members",
    prizePool: "₹1,80,000",
    registeredCount: 380,
    poster: "/posters/cultural-photography-gallery.svg",
    tags: ["Stage Play", "One Act Play", "Acting", "Theatre", "Script Writing"],
    highlights: [
      "Historic proscenium theatre venue with digital light console and follow-spots",
      "Separate jury awards for Best Actor, Best Actress, and Best Sound Design"
    ],
    rules: [
      "Maximum play length: 35 minutes. Set up time: 5 minutes.",
      "Scripts can be in Hindi, English, Marathi, or bilingual."
    ],
    contact: {
      email: "rangmanch@internatlas.example",
      phone: "+91 98220 33411"
    },
    registrationUrl: "https://example.com/register/rangmanch",
    createdAt: "2025-09-09"
  },
  {
    id: "cult-10",
    slug: "mic-check-standup-comedy",
    title: "Mic Check: National Inter-College Stand-Up Comedy",
    tagline: "Sharp Punchlines, Observational Humor & Crowd Control",
    organizerName: "Campus Comedy Circuit & Canvas Laugh Club",
    organizerType: "Student Body",
    location: "Bengaluru, Karnataka",
    venue: "The Comedy Store, Indiranagar",
    mode: "Offline",
    category: "Literary & Poetry",
    description: `Mic Check brings out the funniest student voices across India. Performing in front of live audiences and established stand-up comedians, comics deliver tight sets covering college life, millennial dilemmas, pop culture, and eccentric family dynamics.`,
    shortDescription: "Fast-paced collegiate stand-up comedy battle featuring 5-minute observational sets.",
    startDate: "2026-01-30",
    endDate: "2026-01-31",
    registrationDeadline: "2026-01-20",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "All enrolled college students",
    teamSize: "Individual",
    prizePool: "₹75,000 + Comedy Club Opening Slot",
    registeredCount: 620,
    poster: "/posters/cultural-dramatics.svg",
    tags: ["Standup Comedy", "Humor", "Open Mic", "Punchlines", "Satire"],
    highlights: [
      "Featured sets uploaded on premier YouTube comedy channels",
      "Mentorship from leading stand-up comedy touring headliners"
    ],
    rules: [
      "Time limit: 5 minutes strict. Flashing red light at 4 minutes 30 seconds.",
      "Plagiarized jokes from Twitter/Reels will lead to automatic zero points."
    ],
    contact: {
      email: "miccheck.comedy@internatlas.example",
      phone: "+91 97410 88219"
    },
    registrationUrl: "https://example.com/register/miccheck",
    createdAt: "2025-09-10"
  },
  {
    id: "cult-11",
    slug: "parampara-folk-dance-fiesta",
    title: "Parampara: All India Folk & Traditional Dance Fiesta",
    tagline: "The Vibrant Rhythm, Colors & Soul of Rural India",
    organizerName: "Ministry of Culture & National Folk Council",
    organizerType: "University Guild",
    location: "Ahmedabad, Gujarat",
    venue: "Gujarat University Convention Centre, Ahmedabad",
    mode: "Offline",
    category: "Dance & Choreo",
    description: `Parampara is a tribute to India's folk traditions. Collegiate troupes present energetic Bhangra, graceful Garba, spirited Lavani, Ghoomar, Kalbelia, Bihu, and Dollu Kunitha.`,
    shortDescription: "Grand collegiate showcase of traditional Indian folk dances from Bhangra and Garba to Bihu and Lavani.",
    startDate: "2026-02-06",
    endDate: "2026-02-07",
    registrationDeadline: "2026-01-25",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "College folk dance delegations",
    teamSize: "10 - 20 Members",
    prizePool: "₹2,00,000",
    registeredCount: 890,
    poster: "/posters/cultural-acapella.svg",
    tags: ["Folk Dance", "Bhangra", "Garba", "Lavani", "Bihu", "Cultural Heritage"],
    highlights: [
      "Authentic folk instrument acoustics and stage configuration",
      "Special citation for best traditional costume authenticity"
    ],
    rules: [
      "Maximum performance time: 10 minutes.",
      "Folk dance form must represent an established regional folk art tradition."
    ],
    contact: {
      email: "parampara.folk@internatlas.example",
      phone: "+91 97230 44100"
    },
    registrationUrl: "https://example.com/register/parampara",
    createdAt: "2025-09-11"
  },
  {
    id: "cult-12",
    slug: "drishti-photography-gallery",
    title: "Drishti: Collegiate Street & Conceptual Photography",
    tagline: "Frames of Life: Light, Geometry, Humans & Emotion",
    organizerName: "National Photojournalism Guild & National Geographic Youth",
    organizerType: "Cultural Society",
    location: "Kolkata, West Bengal",
    venue: "Academy of Fine Arts, Cathedral Road",
    mode: "Hybrid",
    category: "Fine Arts & Photo",
    description: `Drishti celebrates the visual storytellers of tomorrow. Student photographers submit series across Street Photography, Environmental Portraits, Architecture, and Conceptual Monochrome. Selected photographs are enlarged into museum-quality prints and exhibited in the historic Academy of Fine Arts in Kolkata.`,
    shortDescription: "National collegiate photojournalism and conceptual photography competition with gallery prints.",
    startDate: "2026-02-13",
    endDate: "2026-02-15",
    registrationDeadline: "2026-02-01",
    entryFee: "Free",
    isFree: true,
    status: "Open",
    registrationStatus: "Open",
    eligibility: "Student photographers and photojournalists",
    teamSize: "Individual",
    prizePool: "₹1,20,000 + Flagship Mirrorless Camera",
    registeredCount: 950,
    poster: "/posters/cultural-quiz-bowl.svg",
    tags: ["Photography", "Street Photography", "Monochrome", "Photojournalism", "Visual Story"],
    highlights: [
      "Judged by World Press Photo and Magnum Photos contributors",
      "Top 40 selected prints exhibited in the grand gallery hall"
    ],
    rules: [
      "EXIF data must remain intact in submitted JPEG/RAW files.",
      "Heavy manipulation or AI-generated generative fills are strictly barred."
    ],
    contact: {
      email: "drishti.photo@internatlas.example",
      phone: "+91 98300 77123"
    },
    registrationUrl: "https://example.com/register/drishti",
    createdAt: "2025-09-12"
  }
];
