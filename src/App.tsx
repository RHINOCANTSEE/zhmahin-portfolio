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
  BarChart3,
  Database,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [timeUTC, setTimeUTC] = useState<string>('');
  
  // Archive Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalView, setModalView] = useState<'projects' | 'contents'>('projects');

  useEffect(() => {
    const updateTime = () => {
      setTimeUTC(new Date().toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  const openArchive = (view: 'projects' | 'contents') => {
    setModalView(view);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-300 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* AMBIENT LIFE: Glowing background blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-900/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* Background Visual Grid & Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1F2E14_1px,transparent_1px),linear-gradient(to_bottom,#1A1F2E14_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)]"></div>
        <div className="scanlines absolute inset-0 opacity-10"></div>
      </div>

      {/* 1. STICKY TACTICAL HUD NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-[#08090D]/80 backdrop-blur-xl border-b border-[#1A1F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-cyan-400">
            <div className="w-8 h-8 bg-cyan-950/60 border border-cyan-500/40 rounded flex items-center justify-center font-mono text-cyan-400 font-bold group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
              <Cpu size={16} />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                {portfolioData.operator.callsign}
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-cyan-500 tracking-wider hidden sm:block">
                TACTICAL CONTROL ROOM
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Who Am I?</a>
            <a href="#pubgm" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Data Viz</a>
            <a href="#archive" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Ledger</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition-colors focus-visible:outline-cyan-400">Case Files</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="font-mono text-[11px] text-slate-400 bg-[#0D1017]/80 backdrop-blur-md border border-[#1A1F2E] px-3 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <span>{timeUTC}</span>
            </div>
            <a href="#contact" className="bg-cyan-500 text-[#08090D] font-mono text-xs font-bold px-4 py-2 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all uppercase rounded-sm flex items-center gap-1.5 focus-visible:outline-cyan-400">
              <Terminal size={14} /> Open Channel
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300 hover:text-cyan-400 p-2 focus-visible:outline-cyan-400">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Floating Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#08090D]/95 backdrop-blur-xl border-b border-[#1A1F2E] px-4 py-6 font-mono text-xs uppercase tracking-wider flex flex-col gap-4 shadow-2xl z-50">
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="text-slate-300 hover:text-cyan-400 py-2 border-b border-[#1A1F2E]/50">Who Am I?</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#why-me" className="text-slate-300 hover:text-cyan-400 py-2 border-b border-[#1A1F2E]/50">Solutions</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#pubgm" className="text-slate-300 hover:text-cyan-400 py-2 border-b border-[#1A1F2E]/50">Data Viz</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#archive" className="text-slate-300 hover:text-cyan-400 py-2 border-b border-[#1A1F2E]/50">Tactical Ledger</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#case-studies" className="text-slate-300 hover:text-cyan-400 py-2 border-b border-[#1A1F2E]/50">Case Files</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#multi-game" className="text-slate-300 hover:text-cyan-400 py-2 border-b border-[#1A1F2E]/50">Cross-Title</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-cyan-400 font-bold py-3 mt-2 bg-cyan-950/30 border border-cyan-800/50 flex items-center justify-center gap-2">
              <Terminal size={14} /> Open Channel
            </a>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 flex flex-col gap-20 md:gap-36 overflow-hidden">
        
        {/* 2. CALIBRATED SPLIT HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center pt-2">
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1 relative">
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[10px] sm:text-xs">
              <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                {portfolioData.operator.clearance}
              </span>
              <span className="text-slate-500 hidden sm:inline">//</span>
              <span className="text-slate-400 flex items-center gap-1 w-full sm:w-auto mt-2 sm:mt-0">
                <MapPin size={12} className="text-cyan-400" />
                {portfolioData.operator.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight sm:leading-[0.92] mb-4 text-shadow-sm">
              {portfolioData.operator.name}
            </h1>
            
            <div className="text-base sm:text-xl font-bold text-slate-300 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="text-cyan-400 hidden sm:inline">&gt;</span> {portfolioData.operator.role}
            </div>
            
            <p className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider mb-6 sm:mb-8">
              {portfolioData.operator.secondaryRole}
            </p>

            <div className="bg-[#0D1017]/80 backdrop-blur-md border border-[#1A1F2E] p-5 sm:p-6 mb-8 relative max-w-2xl group hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 group-hover:shadow-[2px_-2px_8px_rgba(0,240,255,0.4)] transition-all"></div>
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 group-hover:shadow-[-2px_2px_8px_rgba(0,240,255,0.4)] transition-all"></div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {portfolioData.operator.bio}
              </p>
            </div>

            {/* MOBILE FIXED BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
              <a href="#contact" className="bg-cyan-500 text-[#08090D] border border-cyan-400 px-6 py-3.5 font-bold hover:bg-cyan-400 transition-all flex justify-center items-center gap-2 uppercase tracking-wider shadow-lg shadow-cyan-500/10 focus-visible:outline-cyan-400 w-full sm:w-auto">
                <Terminal size={16} /> Deploy Strategy Call
              </a>
              <a href="#case-studies" className="bg-[#0D1017] border border-[#1A1F2E] text-slate-300 px-6 py-3.5 hover:border-cyan-500/50 hover:text-white transition-all flex justify-center items-center gap-2 uppercase tracking-wider focus-visible:outline-cyan-400 w-full sm:w-auto">
                <Layers size={16} className="text-cyan-400" /> Review Case Files
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="w-full max-w-[280px] sm:max-w-[340px] relative border border-[#1A1F2E] bg-[#0D1017]/90 backdrop-blur-sm p-2 sm:p-2.5 shadow-[0_0_40px_rgba(0,0,0,0.5)] mx-auto group hover:border-cyan-500/40 transition-all duration-500">
              <div className="bg-[#08090D] border-b border-[#1A1F2E] px-3 sm:px-4 py-2 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-400 mb-2">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  OPERATOR_HUD
                </span>
                <span>STATUS: VERIFIED</span>
              </div>

              <div className="relative w-full aspect-portrait-hud overflow-hidden bg-[#08090D] border border-[#1A1F2E]/80">
                <img 
                  src="/avatar.jpg" 
                  alt={portfolioData.operator.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-cyan-300 bg-[#08090D]/85 backdrop-blur-md px-2 py-1 border border-cyan-500/30">
                  <span>{portfolioData.operator.coordinates}</span>
                  <span className="text-slate-500">|</span>
                  <span>ESPORTS MGMT</span>
                </div>
              </div>

              <div className="bg-[#08090D] border-t border-[#1A1F2E] px-3 sm:px-4 py-2 mt-2 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-slate-500">
                <span>SEC: AUDITED</span>
                <span className="text-emerald-400">SYS_NOMINAL 60FPS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DUAL SEAMLESS INFINITE MARQUEES */}
        <section className="border-y border-[#1A1F2E] py-4 sm:py-6 bg-[#0A0C11] overflow-hidden space-y-6 sm:space-y-4 marquee-container">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest shrink-0 w-full sm:w-36 pl-4 border-l-2 sm:border-l-0 border-cyan-500/50 sm:border-r sm:border-[#1A1F2E]">
              [ FRANCHISES ]
            </div>
            <div className="relative w-full overflow-hidden whitespace-nowrap">
              <div className="flex gap-4 sm:gap-8 animate-marquee-left">
                {[...portfolioData.marquee.franchises, ...portfolioData.marquee.franchises, ...portfolioData.marquee.franchises].map((item, idx) => (
                  <div key={idx} className="inline-flex items-center gap-2 sm:gap-3 bg-[#0D1017] border border-[#1A1F2E] px-3 sm:px-4 py-1.5 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="font-bold text-xs sm:text-sm text-slate-200 tracking-wider uppercase">{item.name}</span>
                    <span className="font-mono text-[8px] sm:text-[9px] text-slate-500 bg-black/40 px-1.5 py-0.5 border border-[#1A1F2E]">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest shrink-0 w-full sm:w-36 pl-4 border-l-2 sm:border-l-0 border-amber-500/50 sm:border-r sm:border-[#1A1F2E]">
              [ ALLIANCES ]
            </div>
            <div className="relative w-full overflow-hidden whitespace-nowrap">
              <div className="flex gap-4 sm:gap-8 animate-marquee-right">
                {[...portfolioData.marquee.alliances, ...portfolioData.marquee.alliances, ...portfolioData.marquee.alliances].map((item, idx) => (
                  <div key={idx} className="inline-flex items-center gap-2 sm:gap-3 bg-[#0D1017] border border-[#1A1F2E] px-3 sm:px-4 py-1.5 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span className="font-bold text-xs sm:text-sm text-slate-300 tracking-wider uppercase">{item.name}</span>
                    <span className="font-mono text-[8px] sm:text-[9px] text-slate-500 bg-black/40 px-1.5 py-0.5 border border-[#1A1F2E]">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHO AM I? (OPERATOR DOSSIER) */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Compass size={16} /> 01 // OPERATOR IDENTITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
            Leadership Behind The Production Desk
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7 bg-[#0D1017]/80 backdrop-blur-sm border border-[#1A1F2E] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="text-cyan-400">///</span> Leading Creative Units
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                {portfolioData.operator.dossier.philosophy}
              </p>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Managing social media for competitive gaming requires more than routine posting schedules. It demands real-time tournament war-room responsiveness, high-tempo match telemetry, direct liaison with regional casters, and grassroots player moderation that respects local gaming culture.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#0A0C11] border border-[#1A1F2E] p-6 sm:p-8">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <CheckCircle2 size={16} /> Core Strategic Capabilities
              </div>
              <ul className="space-y-4">
                {portfolioData.operator.dossier.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-cyan-500 bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-slate-300 text-xs sm:text-sm font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. WHY ME? (SOLUTIONS MATRIX) */}
        <section id="why-me" className="scroll-mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest mb-4">
            <Zap size={16} /> 02 // SOLUTIONS ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            What You Can Expect From Me
          </h2>
          <p className="text-slate-400 max-w-3xl mb-8 sm:mb-12 text-sm sm:text-base">
            Publishers and esports leagues partner with me to fix low organic viewership, chaotic creative handoffs, and disconnected on-ground tournament turnouts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portfolioData.solutions.map((sol) => (
              <div key={sol.id} className="bg-[#0D1017]/80 backdrop-blur-sm border border-[#1A1F2E] p-6 sm:p-8 relative group hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-2.5 py-1">
                    {sol.id}
                  </span>
                  <Activity size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide mb-3">
                  {sol.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {sol.description}
                </p>
                <div className="border-t border-[#1A1F2E] pt-4">
                  <div className="font-mono text-[10px] sm:text-[11px] text-slate-500 uppercase mb-3">Key Deliverables:</div>
                  <ul className="space-y-2">
                    {sol.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-mono">
                        <span className="w-1 h-1 bg-cyan-400 shrink-0"></span> <span className="truncate whitespace-normal">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. DATA VIZ: GRAPHS & METRICS */}
        <section id="pubgm" className="scroll-mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <BarChart3 size={16} /> 03 // TELEMETRY GRAPHS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
            {portfolioData.pubgmBD.headline}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {portfolioData.pubgmBD.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#0D1017]/80 backdrop-blur-sm border border-[#1A1F2E] p-6 relative group hover:bg-[#111520] transition-all hover:border-[#2A3143] shadow-lg overflow-hidden">
                {/* Animated CSS Bar Chart Background */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#1A1F2E] w-full">
                  <div className={`h-full ${m.chartColor} animate-grow shadow-[0_0_10px_currentColor]`} style={{ width: m.chartWidth }}></div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div className={`font-mono text-[9px] sm:text-[10px] border border-current bg-opacity-10 px-2 py-0.5 ${m.tag === 'ORGANIC' ? 'text-purple-400' : m.tag === 'VERIFIED' ? 'text-emerald-400' : m.tag === 'BENCHMARK' ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {m.tag}
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">{m.chartWidth} MAX</span>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-2 group-hover:scale-[1.02] origin-left transition-transform">
                  {m.metric}
                </div>
                <div className="font-bold text-slate-200 text-xs sm:text-sm uppercase tracking-wide mb-2">{m.label}</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-500">{m.context}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. TABLES & ARCHIVES WITH IMAGE PREVIEWS */}
        <section id="archive" className="scroll-mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest mb-4">
            <Database size={16} /> 04 // ARCHIVE TABLES & PREVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
            Tactical Operations Ledger
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* PROJECTS TABLE (Shows 6) */}
            <div className="bg-[#0D1017]/60 backdrop-blur-sm border border-[#1A1F2E] rounded-sm flex flex-col">
              <div className="border-b border-[#1A1F2E] p-4 bg-[#08090D]/50 flex justify-between items-center">
                <h3 className="font-bold text-white uppercase flex items-center gap-2"><Trophy size={16} className="text-amber-400" /> Project Deployments</h3>
                <span className="font-mono text-[10px] text-slate-500">SHOWING 6 OF {portfolioData.archive.projects.length}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#1A1F2E] font-mono text-[10px] text-slate-500 bg-[#0A0C11]">
                      <th className="p-3 font-normal">PREVIEW</th>
                      <th className="p-3 font-normal">TITLE & CATEGORY</th>
                      <th className="p-3 font-normal text-right">IMPACT</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {portfolioData.archive.projects.slice(0, 6).map((item) => (
                      <tr key={item.id} className="border-b border-[#1A1F2E] hover:bg-[#1A1F2E]/40 transition-colors group cursor-pointer" onClick={() => openArchive('projects')}>
                        <td className="p-3 w-16">
                          <div className="w-12 h-8 bg-[#1A1F2E] rounded overflow-hidden relative">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors truncate max-w-[180px] sm:max-w-[250px]">{item.title}</div>
                          <div className="font-mono text-[10px] text-slate-500">{item.category}</div>
                        </td>
                        <td className="p-3 text-right">
                          <div className="font-mono text-[10px] sm:text-xs text-amber-400 truncate max-w-[80px] sm:max-w-none">{item.metric}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={() => openArchive('projects')} className="p-4 w-full text-center font-mono text-xs text-cyan-400 hover:bg-cyan-950/20 hover:text-cyan-300 transition-all border-t border-[#1A1F2E] flex items-center justify-center gap-2">
                See More Projects <ArrowUpRight size={14} />
              </button>
            </div>

            {/* CONTENTS TABLE (Shows 6) */}
            <div className="bg-[#0D1017]/60 backdrop-blur-sm border border-[#1A1F2E] rounded-sm flex flex-col">
              <div className="border-b border-[#1A1F2E] p-4 bg-[#08090D]/50 flex justify-between items-center">
                <h3 className="font-bold text-white uppercase flex items-center gap-2"><Flame size={16} className="text-emerald-400" /> Content Ideation</h3>
                <span className="font-mono text-[10px] text-slate-500">SHOWING 6 OF {portfolioData.archive.contents.length}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#1A1F2E] font-mono text-[10px] text-slate-500 bg-[#0A0C11]">
                      <th className="p-3 font-normal">PREVIEW</th>
                      <th className="p-3 font-normal">CONTENT FORMAT</th>
                      <th className="p-3 font-normal text-right">METRIC</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {portfolioData.archive.contents.slice(0, 6).map((item) => (
                      <tr key={item.id} className="border-b border-[#1A1F2E] hover:bg-[#1A1F2E]/40 transition-colors group cursor-pointer" onClick={() => openArchive('contents')}>
                        <td className="p-3 w-16">
                          <div className="w-12 h-12 bg-[#1A1F2E] rounded overflow-hidden relative aspect-square">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors truncate max-w-[180px] sm:max-w-[250px]">{item.title}</div>
                          <div className="font-mono text-[10px] text-slate-500">{item.platform} • {item.category}</div>
                        </td>
                        <td className="p-3 text-right">
                          <div className="font-mono text-[9px] sm:text-xs text-emerald-400 font-bold bg-emerald-950/30 px-1.5 sm:px-2 py-1 inline-block border border-emerald-800/30 truncate max-w-[80px] sm:max-w-none">{item.metric}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={() => openArchive('contents')} className="p-4 w-full text-center font-mono text-xs text-emerald-400 hover:bg-emerald-950/20 hover:text-emerald-300 transition-all border-t border-[#1A1F2E] flex items-center justify-center gap-2">
                See More Content <ArrowUpRight size={14} />
              </button>
            </div>

          </div>
        </section>

        {/* 8. MULTI-TITLE EXPANSION */}
        <section id="multi-game" className="scroll-mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Layers size={16} /> 05 // CROSS-TITLE ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Multi-Game Operations
          </h2>
          <p className="text-slate-400 max-w-3xl mb-8 sm:mb-12 text-sm sm:text-base">
            Expanding operational excellence across multiple competitive mobile titles in South Asia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.multiGameOps.map((game, idx) => (
              <div key={idx} className="bg-[#0D1017]/80 backdrop-blur-sm border border-[#1A1F2E] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase mb-2">{game.role}</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">{game.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{game.summary}</p>
                </div>
                <div className="border-t border-[#1A1F2E] pt-4">
                  <div className="font-mono text-[10px] sm:text-[11px] text-slate-500 uppercase mb-3">Audited Contributions:</div>
                  <ul className="space-y-2">
                    {game.achievements.map((ach, i) => (
                      <li key={i} className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">›</span> <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. BATTLE-TESTED CASE STUDIES */}
        <section id="case-studies" className="scroll-mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest mb-4">
            <ShieldCheck size={16} /> 06 // CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
            Battle-Tested Project Case Files
          </h2>
          <p className="text-slate-400 max-w-3xl mb-8 sm:mb-12 text-sm sm:text-base">
            Real campaign blueprints executed under real pressure. Zero hypothetical portfolio samples.
          </p>

          <div className="space-y-8 sm:space-y-12">
            {portfolioData.caseStudies.map((cs) => (
              <article key={cs.id} className="border border-[#1A1F2E] bg-[#0D1017]/80 backdrop-blur-sm shadow-lg">
                <div className="border-b border-[#1A1F2E] px-4 sm:px-6 py-3 font-mono text-[10px] sm:text-xs text-cyan-400 flex flex-col sm:flex-row sm:flex-wrap justify-between sm:items-center bg-[#08090D] gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-bold">{cs.id}</span>
                    <span className="text-slate-600">//</span>
                    <span className="text-slate-300 truncate max-w-[200px] sm:max-w-none">{cs.badge}</span>
                  </div>
                  <span className="text-slate-500">{cs.period}</span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                    {cs.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8 max-w-4xl text-sm sm:text-base">
                    {cs.overview}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8">
                    <div className="lg:col-span-5 bg-[#08090D]/50 p-5 sm:p-6 border border-[#1A1F2E]">
                      <h4 className="font-mono text-[10px] sm:text-xs text-amber-400 uppercase mb-2">The Operational Challenge:</h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="lg:col-span-7 bg-[#08090D]/50 p-5 sm:p-6 border border-[#1A1F2E]">
                      <h4 className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase mb-3">Tactical Execution Blueprint:</h4>
                      <ul className="space-y-3">
                        {cs.execution.map((step, idx) => (
                          <li key={idx} className="text-slate-300 text-xs sm:text-sm flex items-start gap-2">
                            <span className="text-cyan-400 font-bold shrink-0">■</span> <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-[#1A1F2E] pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#0A0C11] border border-[#1A1F2E] p-4 text-center">
                        <div className="text-xl sm:text-3xl font-black text-white tracking-tight mb-1">{m.value}</div>
                        <div className="font-mono text-[9px] sm:text-[11px] text-slate-400 uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 10. DIRECT COMMS & CONTACT TERMINAL */}
        <section id="contact" className="scroll-mt-24 mb-8 sm:mb-16">
          <div className="border border-cyan-500/40 bg-[#0D1017]/90 backdrop-blur-md p-6 sm:p-12 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>

            <div className="max-w-3xl relative z-10">
              <div className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Terminal size={14} /> 07 // DIRECT COMMS CHANNEL
              </div>
              <h2 className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
                Initiate Operations Dialogue
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Available for executive gaming marketing leadership, regional esports tournament command desks, and tier-1 publisher consultations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <a href={`mailto:${portfolioData.operator.email}`} className="bg-cyan-500 text-[#08090D] font-mono text-xs sm:text-sm font-bold px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 uppercase tracking-wider focus-visible:outline-cyan-400 w-full sm:w-auto">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" /> Connect via Email
                </a>
                <div className="flex items-center justify-center px-4 sm:px-6 py-3.5 sm:py-4 border border-[#1A1F2E] text-slate-400 font-mono text-[10px] sm:text-xs bg-[#08090D] w-full sm:w-auto">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-400 animate-pulse" />
                  RESPONSE: &lt; 24 HOURS
                </div>
              </div>

              <div className="border-t border-[#1A1F2E] pt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 font-mono text-[10px] sm:text-xs text-slate-400">
                <div className="flex justify-between sm:block"><span>LOCATION:</span> <span className="text-white ml-2">{portfolioData.operator.location}</span></div>
                <div className="flex justify-between sm:block"><span>FRAMEWORK:</span> <span className="text-white ml-2">Vite / React / Tailwind</span></div>
                <div className="flex justify-between sm:block"><span>HOSTING:</span> <span className="text-white ml-2">Cloudflare Edge</span></div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#1A1F2E] py-6 sm:py-8 bg-[#08090D] font-mono text-[9px] sm:text-xs text-slate-500 text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div>© 2026 {portfolioData.operator.name}. ALL SYSTEM TELEMETRY VERIFIED.</div>
          <div className="text-slate-600">STATIC CLOUD DEPLOYMENT // PROD</div>
        </div>
      </footer>

      {/* GRID OVERLAY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0D1017] border border-[#1A1F2E] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-[#1A1F2E] bg-[#08090D]">
              <div className="flex items-center gap-4">
                <button onClick={() => setModalView('projects')} className={`font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 sm:px-4 py-2 ${modalView === 'projects' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}>Projects ({portfolioData.archive.projects.length})</button>
                <button onClick={() => setModalView('contents')} className={`font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 sm:px-4 py-2 ${modalView === 'contents' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'text-slate-500 hover:text-slate-300'}`}>Contents ({portfolioData.archive.contents.length})</button>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 bg-[#1A1F2E] p-2 rounded hover:bg-red-500/20 hover:text-red-400 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Modal Grid Body */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(modalView === 'projects' ? portfolioData.archive.projects : portfolioData.archive.contents).map((item) => (
                  <div key={item.id} className="group bg-[#0A0C11] border border-[#1A1F2E] hover:border-cyan-500/40 transition-all flex flex-col h-full overflow-hidden relative cursor-pointer">
                    <div className="w-full aspect-video bg-[#1A1F2E] overflow-hidden relative">
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 font-mono text-[9px] text-white z-10 border border-[#1A1F2E]">
                        {item.date}
                      </div>
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C11] via-transparent to-transparent opacity-80"></div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="font-mono text-[9px] text-slate-500 mb-1">{item.id} • {item.category}</div>
                      <h4 className="font-bold text-slate-200 text-sm mb-3 group-hover:text-cyan-400 transition-colors leading-snug">{item.title}</h4>
                      <div className="mt-auto flex justify-between items-end">
                        <div className={`font-mono text-[10px] font-bold inline-block px-2 py-1 border ${modalView === 'projects' ? 'text-amber-400 border-amber-900/30 bg-amber-950/20' : 'text-emerald-400 border-emerald-900/30 bg-emerald-950/20'}`}>
                          {item.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}