import { useState, useEffect } from 'react';
import { 
  Activity, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Layers, 
  Flame, 
  Menu, 
  X,
  Compass,
  CheckCircle2,
  Mail,
  MapPin,
  Cpu,
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

/**
 * Main application dashboard for Zahidul Hasan Mahin's portfolio.
 * Engineered for tactical visual pacing, accessible navigation, and strict type safety.
 */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [timeUTC, setTimeUTC] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUTC(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-300 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Background Visual Grid & Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1F2E14_1px,transparent_1px),linear-gradient(to_bottom,#1A1F2E14_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)]"></div>
        <div className="scanlines absolute inset-0 opacity-10"></div>
      </div>

      {/* 1. STICKY TACTICAL HUD NAVIGATION */}
      <nav 
        className="sticky top-0 z-50 bg-[#08090D]/95 backdrop-blur-md border-b border-[#1A1F2E]"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Operator Callsign Identifier */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-cyan-400">
            <div className="w-8 h-8 bg-cyan-950/60 border border-cyan-500/40 rounded flex items-center justify-center font-mono text-cyan-400 font-bold group-hover:border-cyan-400 group-hover:scale-105 transition-all">
              <Cpu size={16} />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                {portfolioData.operator.callsign}
              </div>
              <div className="text-[10px] font-mono text-cyan-500 tracking-wider">
                TACTICAL CONTROL ROOM
              </div>
            </div>
          </a>

          {/* Desktop Anchor Links */}
          <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Who Am I?</a>
            <a href="#why-me" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Solutions</a>
            <a href="#pubgm" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">PUBGM Ops</a>
            <a href="#organic-lab" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Organic Lab</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Case Files</a>
            <a href="#multi-game" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Cross-Title</a>
          </div>

          {/* Clock & Comms Button */}
          <div className="hidden md:flex items-center gap-4">
            <div 
              className="font-mono text-[11px] text-slate-400 bg-[#0D1017] border border-[#1A1F2E] px-3 py-1.5 flex items-center gap-2"
              aria-label="Current System Time"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{timeUTC}</span>
            </div>
            <a 
              href="#contact" 
              className="bg-cyan-500 text-[#08090D] font-mono text-xs font-bold px-4 py-2 hover:bg-cyan-400 transition-all uppercase tracking-wider rounded-sm flex items-center gap-1.5 focus-visible:outline-cyan-400"
            >
              <Terminal size={14} /> Open Channel
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-slate-300 hover:text-cyan-400 p-2 focus-visible:outline-cyan-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D1017] border-b border-[#1A1F2E] px-6 py-6 font-mono text-xs uppercase tracking-wider flex flex-col gap-4">
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="text-slate-300 hover:text-cyan-400 py-1">Who Am I?</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#why-me" className="text-slate-300 hover:text-cyan-400 py-1">Solutions</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#pubgm" className="text-slate-300 hover:text-cyan-400 py-1">PUBGM Ops</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#organic-lab" className="text-slate-300 hover:text-cyan-400 py-1">Organic Lab</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#case-studies" className="text-slate-300 hover:text-cyan-400 py-1">Case Files</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#multi-game" className="text-slate-300 hover:text-cyan-400 py-1">Cross-Title</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-cyan-400 font-bold py-2 border-t border-[#1A1F2E] flex items-center gap-2">
              <Terminal size={14} /> Open Channel
            </a>
          </div>
        )}
      </nav>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col gap-28 md:gap-36">
        
        {/* 2. CALIBRATED SPLIT HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-2">
          
          {/* Left Column: Operator Bio & Headline */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs">
              <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                {portfolioData.operator.clearance}
              </span>
              <span className="text-slate-500">//</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin size={12} className="text-cyan-400" />
                {portfolioData.operator.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.92] mb-4">
              {portfolioData.operator.name}
            </h1>
            
            <div className="text-lg sm:text-xl font-bold text-slate-300 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span> {portfolioData.operator.role}
            </div>
            
            <p className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-8">
              {portfolioData.operator.secondaryRole}
            </p>

            <div className="bg-[#0D1017] border border-[#1A1F2E] p-6 mb-8 relative max-w-2xl">
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400"></div>
              <p className="text-slate-300 leading-relaxed text-base">
                {portfolioData.operator.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 font-mono text-xs">
              <a 
                href="#contact" 
                className="bg-cyan-500 text-[#08090D] border border-cyan-400 px-6 py-3.5 font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 uppercase tracking-wider shadow-lg shadow-cyan-500/10 focus-visible:outline-cyan-400"
              >
                <Terminal size={16} /> Deploy Strategy Call
              </a>
              <a 
                href="#case-studies" 
                className="bg-[#0D1017] border border-[#1A1F2E] text-slate-300 px-6 py-3.5 hover:border-cyan-500/50 hover:text-white transition-all flex items-center gap-2 uppercase tracking-wider focus-visible:outline-cyan-400"
              >
                <Layers size={16} className="text-cyan-400" /> Review Case Files
              </a>
            </div>
          </div>

          {/* Right Column: Tactical Portrait HUD (1048x2000 Aspect Calibrated) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] relative border border-[#1A1F2E] bg-[#0D1017] p-2.5 shadow-2xl">
              {/* Corner Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400"></div>

              {/* HUD Header */}
              <div className="bg-[#08090D] border-b border-[#1A1F2E] px-4 py-2 flex items-center justify-between font-mono text-[11px] text-slate-400 mb-2">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  OPERATOR_HUD
                </span>
                <span>STATUS: VERIFIED</span>
              </div>

              {/* Calibrated 1048:2000 Container */}
              <div className="relative w-full aspect-portrait-hud overflow-hidden bg-[#08090D] border border-[#1A1F2E]/80">
                <img 
                  src="/avatar.jpg" 
                  alt={portfolioData.operator.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* HUD Telemetry Bar */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between font-mono text-[9px] text-cyan-300 bg-[#08090D]/85 backdrop-blur-md px-2 py-1 border border-cyan-500/30">
                  <span>{portfolioData.operator.coordinates}</span>
                  <span className="text-slate-500">|</span>
                  <span>ESPORTS MGMT</span>
                </div>
              </div>

              {/* HUD Footer */}
              <div className="bg-[#08090D] border-t border-[#1A1F2E] px-4 py-2 mt-2 flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span>SECURITY: AUDITED</span>
                <span className="text-emerald-400">SYS_NOMINAL 60FPS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DUAL SEAMLESS INFINITE MARQUEES */}
        <section 
          className="border-y border-[#1A1F2E] py-6 bg-[#0A0C11] overflow-hidden space-y-4 marquee-container"
          aria-label="Franchises and Strategic Alliances"
        >
          {/* Row 1: Game Franchises */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest shrink-0 w-36 pl-4 border-r border-[#1A1F2E]">
              [ FRANCHISES ]
            </div>
            <div className="relative w-full overflow-hidden whitespace-nowrap">
              <div className="flex gap-8 animate-marquee-left">
                {[...portfolioData.marquee.franchises, ...portfolioData.marquee.franchises, ...portfolioData.marquee.franchises].map((item, idx) => (
                  <div key={idx} className="inline-flex items-center gap-3 bg-[#0D1017] border border-[#1A1F2E] px-4 py-1.5 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="font-bold text-sm text-slate-200 tracking-wider uppercase">{item.name}</span>
                    <span className="font-mono text-[9px] text-slate-500 bg-black/40 px-1.5 py-0.5 border border-[#1A1F2E]">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Publishers & Brand Partners */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest shrink-0 w-36 pl-4 border-r border-[#1A1F2E]">
              [ ALLIANCES ]
            </div>
            <div className="relative w-full overflow-hidden whitespace-nowrap">
              <div className="flex gap-8 animate-marquee-right">
                {[...portfolioData.marquee.alliances, ...portfolioData.marquee.alliances, ...portfolioData.marquee.alliances].map((item, idx) => (
                  <div key={idx} className="inline-flex items-center gap-3 bg-[#0D1017] border border-[#1A1F2E] px-4 py-1.5 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span className="font-bold text-sm text-slate-300 tracking-wider uppercase">{item.name}</span>
                    <span className="font-mono text-[9px] text-slate-500 bg-black/40 px-1.5 py-0.5 border border-[#1A1F2E]">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHO AM I? (OPERATOR DOSSIER) */}
        <section id="about" className="scroll-mt-24" aria-labelledby="heading-about">
          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Compass size={16} /> 01 // OPERATOR IDENTITY
          </div>
          <h2 id="heading-about" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
            Leadership Behind The Production Desk
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#0D1017] border border-[#1A1F2E] p-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="text-cyan-400">///</span> Leading Creative Units, Not Just Pushing Pixels
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {portfolioData.operator.dossier.philosophy}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Managing social media for competitive gaming requires more than routine posting schedules. It demands real-time tournament war-room responsiveness, high-tempo match telemetry, direct liaison with regional casters, and grassroots player moderation that respects local gaming culture.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#0A0C11] border border-[#1A1F2E] p-8">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <CheckCircle2 size={16} /> Core Strategic Capabilities
              </div>
              <ul className="space-y-4">
                {portfolioData.operator.dossier.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-cyan-500 bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-slate-300 text-sm font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. WHY ME? (SOLUTIONS MATRIX) */}
        <section id="why-me" className="scroll-mt-24" aria-labelledby="heading-solutions">
          <div className="flex items-center gap-3 font-mono text-xs text-amber-500 uppercase tracking-widest mb-4">
            <Zap size={16} /> 02 // SOLUTIONS ARCHITECTURE
          </div>
          <h2 id="heading-solutions" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            What You Can Expect From Me
          </h2>
          <p className="text-slate-400 max-w-3xl mb-12">
            Publishers and esports leagues partner with me to fix low organic viewership, chaotic creative handoffs, and disconnected on-ground tournament turnouts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.solutions.map((sol) => (
              <div key={sol.id} className="bg-[#0D1017] border border-[#1A1F2E] p-8 relative group hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-2.5 py-1">
                    {sol.id}
                  </span>
                  <Activity size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                  {sol.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {sol.description}
                </p>
                <div className="border-t border-[#1A1F2E] pt-4">
                  <div className="font-mono text-[11px] text-slate-500 uppercase mb-3">Key Deliverables:</div>
                  <ul className="space-y-2">
                    {sol.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <span className="w-1 h-1 bg-cyan-400"></span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHAT I DID ON PUBG MOBILE BD */}
        <section id="pubgm" className="scroll-mt-24" aria-labelledby="heading-pubgm">
          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Trophy size={16} /> 03 // PRIMARY ECOSYSTEM
          </div>
          <h2 id="heading-pubgm" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {portfolioData.pubgmBD.headline}
          </h2>
          <p className="text-slate-400 max-w-3xl mb-12">
            Managing marketing campaigns, localization, creative direction, and community operations for the premier mobile battle royale title in Bangladesh.
          </p>

          {/* Metric Telemetry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioData.pubgmBD.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#0D1017] border border-[#1A1F2E] p-6 relative">
                <div className="font-mono text-[10px] text-cyan-400 border border-cyan-800/40 bg-cyan-950/30 px-2 py-0.5 inline-block mb-4">
                  {m.tag}
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-2">
                  {m.metric}
                </div>
                <div className="font-bold text-slate-200 text-sm uppercase tracking-wide mb-2">
                  {m.label}
                </div>
                <div className="font-mono text-xs text-slate-500 leading-relaxed">
                  {m.context}
                </div>
              </div>
            ))}
          </div>

          {/* Operational Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.pubgmBD.pillars.map((p, idx) => (
              <div key={idx} className="bg-[#0A0C11] border border-[#1A1F2E] p-6">
                <div className="font-mono text-xs text-amber-500 mb-2">{p.code}</div>
                <h3 className="text-lg font-bold text-white uppercase mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. ORGANIC CONTENT LAB & IDEATION STUDIES */}
        <section id="organic-lab" className="scroll-mt-24" aria-labelledby="heading-organic">
          <div className="flex items-center gap-3 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-4">
            <Flame size={16} /> 04 // ORGANIC DISTRIBUTION
          </div>
          <h2 id="heading-organic" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {portfolioData.organicLab.title}
          </h2>
          <p className="text-slate-400 max-w-3xl mb-12">
            {portfolioData.organicLab.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioData.organicLab.studies.map((study, idx) => (
              <div key={idx} className="bg-[#0D1017] border border-[#1A1F2E] p-8 flex flex-col justify-between relative group hover:border-emerald-500/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-500">{study.id}</span>
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5">
                      {study.multiplier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">
                    {study.format}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="font-mono text-[11px] text-amber-400 uppercase mb-1">Hook Strategy:</div>
                    <p className="text-slate-300 text-sm">{study.hookStrategy}</p>
                  </div>

                  <div className="mb-6">
                    <div className="font-mono text-[11px] text-cyan-400 uppercase mb-1">Ideation & Pacing:</div>
                    <p className="text-slate-400 text-xs leading-relaxed">{study.ideationLogic}</p>
                  </div>
                </div>

                <div className="border-t border-[#1A1F2E] pt-4 font-mono text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>{study.result}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. MULTI-TITLE EXPANSION */}
        <section id="multi-game" className="scroll-mt-24" aria-labelledby="heading-multigame">
          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Layers size={16} /> 05 // CROSS-TITLE ECOSYSTEM
          </div>
          <h2 id="heading-multigame" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Multi-Game Operations
          </h2>
          <p className="text-slate-400 max-w-3xl mb-12">
            Expanding operational excellence across multiple competitive mobile titles in South Asia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.multiGameOps.map((game, idx) => (
              <div key={idx} className="bg-[#0A0C11] border border-[#1A1F2E] p-8 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase mb-2">{game.role}</div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{game.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{game.summary}</p>
                </div>
                <div className="border-t border-[#1A1F2E] pt-4">
                  <div className="font-mono text-[11px] text-slate-500 uppercase mb-3">Audited Contributions:</div>
                  <ul className="space-y-2">
                    {game.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">›</span> {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. BATTLE-TESTED CASE STUDIES */}
        <section id="case-studies" className="scroll-mt-24" aria-labelledby="heading-casestudies">
          <div className="flex items-center gap-3 font-mono text-xs text-amber-500 uppercase tracking-widest mb-4">
            <ShieldCheck size={16} /> 06 // CASE STUDIES
          </div>
          <h2 id="heading-casestudies" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Battle-Tested Project Case Files
          </h2>
          <p className="text-slate-400 max-w-3xl mb-12">
            Real campaign blueprints executed under real pressure. Zero hypothetical portfolio samples[cite: 16, 17].
          </p>

          <div className="space-y-12">
            {portfolioData.caseStudies.map((cs) => (
              <article key={cs.id} className="border border-[#1A1F2E] bg-[#0D1017]">
                <div className="border-b border-[#1A1F2E] px-6 py-3 font-mono text-xs text-cyan-400 flex flex-wrap justify-between items-center bg-[#08090D] gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-bold">{cs.id}</span>
                    <span className="text-slate-600">//</span>
                    <span className="text-slate-300">{cs.badge}</span>
                  </div>
                  <span className="text-slate-500">{cs.period}</span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                    {cs.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8 max-w-4xl text-sm sm:text-base">
                    {cs.overview}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                    <div className="lg:col-span-5 bg-[#08090D] p-6 border border-[#1A1F2E]">
                      <h4 className="font-mono text-xs text-amber-400 uppercase mb-2">The Operational Challenge:</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="lg:col-span-7 bg-[#08090D] p-6 border border-[#1A1F2E]">
                      <h4 className="font-mono text-xs text-cyan-400 uppercase mb-3">Tactical Execution Blueprint:</h4>
                      <ul className="space-y-2.5">
                        {cs.execution.map((step, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 font-bold shrink-0">■</span> {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Audited Result Counters */}
                  <div className="border-t border-[#1A1F2E] pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#0A0C11] border border-[#1A1F2E] p-4 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">{m.value}</div>
                        <div className="font-mono text-[11px] text-slate-400 uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 10. DIRECT COMMS & CONTACT TERMINAL */}
        <section id="contact" className="scroll-mt-24 mb-16" aria-labelledby="heading-contact">
          <div className="border border-cyan-500/40 bg-[#0D1017] p-8 sm:p-12 relative">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>

            <div className="max-w-3xl">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Terminal size={14} /> 07 // DIRECT COMMS CHANNEL
              </div>
              <h2 id="heading-contact" className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
                Initiate Operations Dialogue
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-base">
                Available for executive gaming marketing leadership, regional esports tournament command desks, and tier-1 publisher consultations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={`mailto:${portfolioData.operator.email}`} 
                  className="bg-cyan-500 text-[#08090D] font-mono text-sm font-bold px-8 py-4 hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 uppercase tracking-wider focus-visible:outline-cyan-400"
                >
                  <Mail size={18} /> {portfolioData.operator.email}
                </a>
                <div className="flex items-center justify-center px-6 py-4 border border-[#1A1F2E] text-slate-400 font-mono text-xs bg-[#08090D]">
                  <Activity className="w-4 h-4 mr-2.5 text-emerald-400 animate-pulse" />
                  RESPONSE LATENCY: &lt; 24 HOURS
                </div>
              </div>

              <div className="border-t border-[#1A1F2E] pt-6 flex flex-wrap gap-8 font-mono text-xs text-slate-400">
                <div>LOCATION: <span className="text-white">{portfolioData.operator.location}</span></div>
                <div>FRAMEWORK: <span className="text-white">Vite / React / Tailwind</span></div>
                <div>HOSTING: <span className="text-white">Cloudflare Pages Edge</span></div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Strip */}
      <footer className="border-t border-[#1A1F2E] py-8 bg-[#08090D] font-mono text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© 2026 {portfolioData.operator.name}. ALL SYSTEM TELEMETRY VERIFIED.</div>
          <div className="text-slate-600">STATIC ZERO-DB CLOUD DEPLOYMENT // PROD</div>
        </div>
      </footer>

    </div>
  );
}
