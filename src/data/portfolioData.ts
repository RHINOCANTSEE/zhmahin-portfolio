/**
 * @file portfolioData.ts
 * @description Centralized data layer for Zahidul Hasan Mahin's Executive Digital Portfolio.
 */

export interface MetricItem {
  metric: string;
  label: string;
  context: string;
  tag: string;
  chartWidth: string; 
  chartColor: string;
}

export interface PillarItem {
  code: string;
  title: string;
  desc: string; 
}

export interface IdeationStudy {
  id: string;
  format: string;
  hookStrategy: string;
  ideationLogic: string;
  multiplier: string;
  result: string;
}

export interface MultiGameRecord {
  game: string;
  title: string;
  role: string;
  summary: string;
  achievements: string[];
}

export interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  period: string;
  overview: string;
  challenge: string;
  execution: string[];
  metrics: { label: string; value: string }[];
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  thumbnail: string;
  date: string;
  platform?: string;
  link?: string;
}

export interface PortfolioSchema {
  operator: {
    callsign: string;
    name: string;
    role: string;
    secondaryRole: string;
    headline: string;
    location: string;
    coordinates: string;
    status: string;
    clearance: string;
    email: string;
    bio: string;
    dossier: {
      philosophy: string;
      specialties: string[];
    };
  };
  marquee: {
    franchises: { name: string; category: string }[];
    alliances: { name: string; category: string }[];
  };
  solutions: {
    id: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  pubgmBD: {
    headline: string;
    metrics: MetricItem[];
    pillars: PillarItem[];
  };
  organicLab: {
    title: string;
    subtitle: string;
    studies: IdeationStudy[];
  };
  multiGameOps: MultiGameRecord[];
  caseStudies: CaseStudy[];
  archive: {
    projects: ArchiveItem[];
    contents: ArchiveItem[];
  };
}

export const portfolioData: PortfolioSchema = {
  operator: {
    callsign: "MAHIN // OPS-01",
    name: "Zahidul Hasan Mahin",
    role: "Social Media & Creative Manager",
    secondaryRole: "Content Lead & Esports Community Operations Specialist",
    headline: "RECORD-BREAKING SOCIAL MEDIA & GAMING OPERATIONS",
    location: "Dhaka, Bangladesh",
    coordinates: "23.8103° N, 90.4125° E",
    status: "READY FOR CONTRACT // DEPLOYED",
    clearance: "TIER-1 ESPORTS OPERATIONS",
    email: "connect.zhmahin@gmail.com",
    bio: "Guiding high-output creative units and regional gaming operations across South Asia. Translating publisher objectives into viral community engagement, tournament broadcasts, and sustainable player advocacy without generic filler.",
    dossier: {
      philosophy: "I don't make generic filler content. I architect tactical publishing pipelines, lead high-velocity creative teams, and structure live tournament broadcast workflows that build enduring player communities.",
      specialties: [
        "Regional Live Broadcast Operations & Desk Management",
        "Creative Team Leadership & Multi-Tier Brief Architecture",
        "Localized Community Growth & Player Retention Loops",
        "Influencer, F&B & Commercial Cross-Brand Activations",
        "High-Conversion Link Routing & Player Registration Funnels"
      ]
    }
  },
  marquee: {
    franchises: [
      { name: "PUBG MOBILE", category: "REGIONAL_OPERATIONS" },
      { name: "HONOR OF KINGS", category: "LAUNCH_OPERATIONS" },
      { name: "FREE FIRE", category: "TOURNAMENT_CONTENT" },
      { name: "MOBILE LEGENDS: BANG BANG", category: "COMMUNITY_OPS" }
    ],
    alliances: [
      { name: "TENCENT GAMES", category: "GLOBAL_PUBLISHER" },
      { name: "KRAFTON", category: "IP_HOLDER" },
      { name: "LEVEL INFINITE", category: "PUBLISHING_BRAND" },
      { name: "MOONTON", category: "ESPORTS_ECOSYSTEM" },
      { name: "GARENA", category: "REGIONAL_PARTNER" },
      { name: "INFINIX", category: "HARDWARE_ALLIANCE" },
      { name: "ROBI AXIATA", category: "TELECOM_PARTNER" }
    ]
  },
  solutions: [
    {
      id: "SOL-01",
      title: "Tactical Broadcast Desk & Live Engagement",
      description: "Live tournament broadcasts suffer from viewership drop-offs during intermissions. I engineer dynamic chat retention loops, live custom drops, real-time match infographics, and localized on-screen storytelling.",
      deliverables: [
        "Live chat moderator coordination & anti-toxicity filters",
        "Sub-8-minute FMVP and bracket graphics pipeline",
        "Watch-and-win incentive and custom drop integration"
      ]
    },
    {
      id: "SOL-02",
      title: "Creative Team Leadership & Pipeline Control",
      description: "Directing 2D/3D visual artists, motion designers, and copywriters with clear brief architecture. Eliminating revision drag to maintain rapid daily turnaround during peak tournament seasons.",
      deliverables: [
        "Standardized asset brief and review frameworks",
        "Cross-platform responsive design scaling",
        "Strict brand voice enforcement and pre-flight visual QA"
      ]
    },
    {
      id: "SOL-03",
      title: "Grassroots & Campus Community Networks",
      description: "Translating digital followers into physical community advocates through nationwide roadshows, campus gaming lounges, and structured ambassador channels.",
      deliverables: [
        "Bondhu Adda nationwide meetup blueprints",
        "Campus esports ambassador onboarding & liaison",
        "On-ground trophy roadshows & interactive fan activations"
      ]
    },
    {
      id: "SOL-04",
      title: "Commercial & Cross-Brand Partnerships",
      description: "Structuring and executing brand partnerships with retail chains, hardware vendors, and telecoms that drive organic player pride without looking like intrusive corporate ads.",
      deliverables: [
        "Custom physical merchandise production & logistics",
        "Victory meal restaurant integration packages",
        "Zero-friction online-to-offline customer footfall loops"
      ]
    }
  ],
  pubgmBD: {
    headline: "PUBG MOBILE Bangladesh // Regional Footprint",
    metrics: [
      {
        metric: "170M+",
        label: "Peak Regional Reach",
        context: "Aggregate campaign and seasonal tournament audience footprint",
        tag: "AUDITED",
        chartWidth: "92%", 
        chartColor: "bg-cyan-400"
      },
      {
        metric: "1B+",
        label: "Lifetime Views",
        context: "Across short-form reels, match highlights, and live broadcasts",
        tag: "VERIFIED",
        chartWidth: "100%", 
        chartColor: "bg-emerald-400"
      },
      {
        metric: "3,000%",
        label: "Conversion Lift",
        context: "Optimized deep-link routing for team registrations",
        tag: "BENCHMARK",
        chartWidth: "85%", 
        chartColor: "bg-amber-400"
      },
      {
        metric: "450K+",
        label: "Community Interactions",
        context: "Grassroots comments, discussion threads, and meetup registrations",
        tag: "ORGANIC",
        chartWidth: "70%", 
        chartColor: "bg-purple-400"
      }
    ],
    pillars: [
      {
        code: "PIL-01",
        title: "Localized Cultural Relevance",
        desc: "Translating global patch notes, seasonal weapon skins, and international tournament beats into regional vernacular and memes that resonate with local gaming youth."
      },
      {
        code: "PIL-02",
        title: "Zero-Friction Traffic Architecture",
        desc: "Restructuring bio links and campaign CTAs into deep-link schemes that bypass mobile webview friction to drive direct qualifier registrations."
      },
      {
        code: "PIL-03",
        title: "Strict Brand Governance",
        desc: "Guiding all campaign messaging within NDA and publisher safety guidelines while maintaining authentic gamer sentiment and tone."
      }
    ]
  },
  organicLab: {
    title: "Organic Content Lab & Ideation Studies",
    subtitle: "Systematic frameworks for generating viral distribution without relying purely on paid ad budgets.",
    studies: [
      {
        id: "STUDY-01",
        format: "The 3-Second Tactical Hook",
        hookStrategy: "Front-loading high-tension 1v4 match clutches in frames 1-45.",
        ideationLogic: "Esports players immediately skip slow corporate bumper logos. Leading with the peak clutch moment before rewinding into match context maximizes watch completion across short-form feeds.",
        multiplier: "4.8x Retention Multiplier",
        result: "Turned routine qualifier announcements into viral social debates."
      },
      {
        id: "STUDY-02",
        format: "Authentic Player Culture & Relatable Tropes",
        hookStrategy: "Highlighting relatable squad miscommunications and clutch panic moments.",
        ideationLogic: "Replacing sterile corporate copy with authentic player vernacular builds peer trust. Players share content that reflects their actual squad voice.",
        multiplier: "310% Share Multiplier",
        result: "Achieved highest organic user resharing volume on official Bangladeshi channels."
      },
      {
        id: "STUDY-03",
        format: "Post-Match Interactive Debates",
        hookStrategy: "'Did they misplay the final zone drop?' tactical breakdown.",
        ideationLogic: "Algorithmic distribution is driven by comment velocity. Framing match outcomes around controversial rotational choices triggers high audience participation.",
        multiplier: "520% Comment Velocity",
        result: "Sustained algorithmic visibility for 72+ hours post-broadcast."
      }
    ]
  },
  multiGameOps: [
    {
      game: "MLBB",
      title: "Mobile Legends: Bang Bang",
      role: "Volunteer Community & Tournament Moderator",
      summary: "Spearheaded volunteer community moderation, tournament logistics, and player communications for MLBB Champions Battle tournaments across Bangladesh.",
      achievements: [
        "Moderated and scheduled regional tournament qualifier brackets for competitive amateur teams.",
        "Built an organized volunteer moderator squad connecting publisher operations with grassroots players.",
        "Established respectful, community-focused engagement protocols ('আপনি / আপনারা') across Discord and social channels."
      ]
    },
    {
      game: "HOK",
      title: "Honor of Kings",
      role: "Ecosystem Operations & Content Support",
      summary: "Supported regional launch campaigns, educational character breakdown assets, and player onboarding as the franchise entered the South Asian competitive space.",
      achievements: [
        "Structured beginner-friendly hero mechanic graphics for core regional mobile titles.",
        "Facilitated cross-game discussions across competitive MOBA player guilds."
      ]
    },
    {
      game: "FF",
      title: "Free Fire",
      role: "Campaign Strategy & Tournament Desk Guidance",
      summary: "Conducted demographic analysis across battle royale communities to design high-energy broadcast assets and competitive storylines.",
      achievements: [
        "Engineered short-form content formats targeting fast-paced mobile gaming demographics.",
        "Identified cross-pollinated engagement tactics between fast-paced arcade shooters and tactical battle royales."
      ]
    }
  ],
  caseStudies: [
    {
      id: "CASE-01",
      badge: "NATIONAL ESPORTS TOURNAMENT",
      title: "PMNC Bangladesh Fall 2026 // Grand Finals & Roadshow",
      period: "August – September 2026",
      overview: "Managed the social command desk, live broadcast graphics, FMVP announcements, and the on-ground branded trophy van roadshow across Dhaka.",
      challenge: "Pre-tournament fatigue was causing lower organic engagement for early bracket stages. Community players felt disconnected from remote studio broadcasts.",
      execution: [
        "Constructed a branded PMNC Mobile Roadshow van featuring the official championship trophy, spin-wheel giveaways, and on-ground selfie challenges across Dhaka neighborhoods.",
        "Established an agile social asset pipeline delivering FMVP graphics, match summaries, and bracket standings within 8 minutes of match conclusion.",
        "Distributed exclusive physical merchandise to drive viral fan advocacy."
      ],
      metrics: [
        { label: "Peak Concurrent Viewers", value: "3x Lift" },
        { label: "Chat Engagement", value: "+45% Lift" },
        { label: "Asset Turnaround Speed", value: "<8 Min" }
      ]
    },
    {
      id: "CASE-02",
      badge: "CSR & GRASSROOTS ACTIVATION",
      title: "Operation Green Winter & Bondhu Adda",
      period: "Winter 2025 – Late 2026",
      overview: "Bridged digital gaming communities and real-world impact through an environmental CSR initiative alongside the Bondhu Adda nationwide player meetup network.",
      challenge: "Esports players are often stereotyped as exclusively indoor and disengaged from community service and physical social interaction.",
      execution: [
        "Engineered offline campus activations paired with in-game CSR challenges: coordinated tree planting with NGO partners and distributed merch.",
        "Scaled Bondhu Adda from a local Dhaka pilot to a nationwide multi-city gathering for players and casters.",
        "Focused on authentic player community connections and direct player appreciation."
      ],
      metrics: [
        { label: "Physical Merch Distributed", value: "1,600+" },
        { label: "Bondhu Adda Participants", value: "10,000+" },
        { label: "Player Sentiment Rating", value: "98%" }
      ]
    },
    {
      id: "CASE-03",
      badge: "F&B BRAND COLLABORATION",
      title: "PUBG MOBILE BD x Chillox",
      period: "Fall 2026",
      overview: "Architected a strategic brand collaboration proposal with burger chain Chillox across 10 Dhaka branches, linking Chicken Dinners with real-world dining discounts.",
      challenge: "Traditional gaming sponsorships feel intrusive. The collaboration needed to feel like an authentic reward for player achievement.",
      execution: [
        "Structured 'Winner Winner Chicken Dinner' menu combos with exclusive 10% player discounts and physical collectables rather than generic coupon codes.",
        "Crafted engaging meme-parody campaigns across 10 strategic retail locations connecting dining culture with battle royale victory rituals.",
        "Monitored customer footfall routing through targeted social campaign announcements."
      ],
      metrics: [
        { label: "Retail Branches Activated", value: "10 Locations" },
        { label: "Partner Conversion Rate", value: "+28%" },
        { label: "Community Reception", value: "Trended #1" }
      ]
    }
  ],
  archive: {
    projects: [
      { id: "PRJ-01", title: "PMNC BD Fall 2026 Grand Finals", category: "Esports Broadcast", metric: "3x Viewership Lift", date: "Sep 2026", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" },
      { id: "PRJ-02", title: "Operation Green Winter & Bondhu Adda", category: "CSR & Community", metric: "10,000+ Attendees", date: "Winter 2025", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80" },
      { id: "PRJ-03", title: "PUBGM x Chillox Victory Meal", category: "F&B Partnership", metric: "+28% Redemptions", date: "Fall 2026", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
      { id: "PRJ-04", title: "HOK Regional Launch Support", category: "Ecosystem Ops", metric: "Cross-Guild Growth", date: "Mid 2026", thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80" },
      { id: "PRJ-05", title: "MLBB Champions Battle Reg", category: "Tournament Ops", metric: "200+ Squads", date: "Spring 2026", thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80" },
      { id: "PRJ-06", title: "Free Fire Campus Clash", category: "Grassroots Event", metric: "15 Campuses", date: "Early 2026", thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80" },
      { id: "PRJ-07", title: "Infinix Hardware Promo Setup", category: "Hardware Alliance", metric: "+15% CTR", date: "Late 2025", thumbnail: "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?w=800&q=80" },
      { id: "PRJ-08", title: "Robi Axiata Data Pack Campaign", category: "Telecom Promo", metric: "5M+ Reach", date: "2025", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" }
    ],
    contents: [
      { id: "CNT-01", title: "The 3-Second Tactical Hook", category: "Short-form Reel", metric: "4.8x Retention", platform: "TikTok / Reels", date: "Aug 2026", thumbnail: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80" },
      { id: "CNT-02", title: "Squad Clutch vs Pan Panic", category: "Community Meme", metric: "310% Share Multiplier", platform: "Facebook", date: "Jul 2026", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
      { id: "CNT-03", title: "Final Zone Rotational Breakdown", category: "Interactive Debate", metric: "520% Comment Vel.", platform: "YouTube", date: "Sep 2026", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" },
      { id: "CNT-04", title: "Patch Notes Vernacular Dub", category: "Localization Video", metric: "1.2M Views", platform: "Facebook", date: "Jun 2026", thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80" },
      { id: "CNT-05", title: "Caster Couch Pre-Show", category: "Live Broadcast Segment", metric: "Peak 50K CCV", platform: "YouTube", date: "Aug 2026", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80" },
      { id: "CNT-06", title: "Weapon Skin Trailer Relight", category: "3D Asset Edit", metric: "+45% Watch Time", platform: "TikTok / Reels", date: "May 2026", thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80" },
      { id: "CNT-07", title: "FMVP Montage Post-Match", category: "Highlight Edit", metric: "<8 Min TAT", platform: "All Platforms", date: "Sep 2026", thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80" },
      { id: "CNT-08", title: "Bondhu Adda Dhaka Vlog", category: "Event Coverage", metric: "800K Organic Reach", platform: "YouTube", date: "Dec 2025", thumbnail: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80" }
    ]
  }
};