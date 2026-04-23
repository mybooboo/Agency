import {
  Layout,
  Code2,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Landmark,
  Cloud,
  Shield,
  Infinity,
  PlaneTakeoff,
  FlaskConical,
  Database,
  Menu
} from 'lucide-react';
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_0_20px_rgba(0,102,255,0.1)]">
        <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-white font-display">
            NEXUS.DIGITAL
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="font-label uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 px-3 py-2 rounded-md">Services</a>
            <a href="#portfolio" className="font-label uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 px-3 py-2 rounded-md">Portfolio</a>
            <a href="#process" className="font-label uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 px-3 py-2 rounded-md">Process</a>
            <a href="#about" className="font-label uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors duration-300 hover:bg-white/5 px-3 py-2 rounded-md">About</a>
          </div>
          <button className="hidden md:block font-label uppercase tracking-widest font-bold text-on-primary-container bg-primary-container px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300 scale-105 active:scale-95 glow-effect">
            Let's Build
          </button>
          <button className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui7_hv9ZSX7UsUlFyvxsfE860mlBmpfFrpRLdZU7oa7uSCj42KmJwufZwftuxEMzEWa7vroaJ7xQ4Azj9jz9pqvmgrw1T30qW1pK9GfTCCMOm_iQOvSr8H_7mfJTDYtR529fnWzXhRsFf1UlkWSjI2JIQmAv6_ANPyHiL2vRUURQ29tka1ziloDvUSplBaebgVdjuMStbyFX4O4vNkIeXJCGczjujJTIeDOjrkBpOpUsiTTPpuXYlX_BFYyP54DL2XusAGUfAfPruQ" 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              ARCHITECTING <br className="hidden md:block" />
              THE DIGITAL FUTURE
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
              We engineer high-end digital experiences for visionary enterprises. Bridging technical precision with unapologetic modern aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary-container text-on-primary-container font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full glow-effect hover:scale-105 transition-transform duration-300 font-bold">
                View Our Work
              </button>
              <button className="border border-white/20 text-white font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 font-bold">
                Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Core Capabilities</h2>
              <p className="font-body text-lg text-on-surface-variant">Strategic engineering for the modern web.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Layout, title: "UI/UX Design", desc: "Creating intuitive, high-converting interfaces with a focus on premium user experiences." },
                { icon: Code2, title: "Full-Stack Development", desc: "Robust, scalable architecture built with modern frameworks and future-proof technologies." },
                { icon: Lightbulb, title: "Digital Strategy", desc: "Data-driven roadmaps to position your brand at the forefront of the digital landscape." }
              ].map((service, i) => (
                <div key={i} className="bg-surface-container-high rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container/20 transition-colors">
                    <service.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
                <p className="font-body text-lg text-on-surface-variant">A showcase of technical excellence.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest font-bold hover:text-white transition-colors">
                View All Projects <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "FinTech Analytics Platform", subtitle: "UI/UX & Frontend Development", tags: ["REACT", "D3.JS"], img: "https://lh3.googleusercontent.com/aida/ADBb0ui08-UYr1EXKOqHZXwuDkWsMKKg_Ew2SIdqJAIi9BW6D7WalEwkj5BzKJe8YCNW0lzahsp0W5tYG1OhPbZF-E0BB1w_yoX8V3vY70DBQImtQhmaHZoxRpdtzfU1j_HQtBqSeGnDiX1Tq8ESY6j8c1xlyvQPG_syQBzhWY60215-gJB05ucCMKlFDTZw10NfKOS4iF4KiA-yY0qrCGWN-YkDkiRkuIPZAEBuDXEC_tthSV01tueK_E94xh7Mp-7f1aMzkUcP5cygCgg" },
                { title: "Aura Wealth App", subtitle: "Full-Stack Mobile App", tags: ["FLUTTER", "NODE.JS"], img: "https://lh3.googleusercontent.com/aida/ADBb0ui08-UYr1EXKOqHZXwuDkWsMKKg_Ew2SIdqJAIi9BW6D7WalEwkj5BzKJe8YCNW0lzahsp0W5tYG1OhPbZF-E0BB1w_yoX8V3vY70DBQImtQhmaHZoxRpdtzfU1j_HQtBqSeGnDiX1Tq8ESY6j8c1xlyvQPG_syQBzhWY60215-gJB05ucCMKlFDTZw10NfKOS4iF4KiA-yY0qrCGWN-YkDkiRkuIPZAEBuDXEC_tthSV01tueK_E94xh7Mp-7f1aMzkUcP5cygCgg" }
              ].map((project, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl aspect-video bg-surface-container-high cursor-pointer border border-white/5">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="font-display text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <p className="font-body text-base text-on-surface-variant mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.subtitle}</p>
                    <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-tertiary-container/20 text-tertiary font-label text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1 sm:py-1.5 rounded-full border border-tertiary/30 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="md:hidden mt-8 w-full flex justify-center items-center gap-2 text-primary border border-primary/30 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold hover:bg-primary/10 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-24 bg-surface-container overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Our Strategic Partners</h2>
            <p className="font-body text-lg text-on-surface-variant">Trusted by industry leaders worldwide.</p>
          </div>
          
          <div className="relative w-full mask-fade py-4 overflow-hidden flex">
            <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
              {[
                { icon: Sparkles, name: "Stellar AI", desc: "Global Leader in AI Infrastructure." },
                { icon: Landmark, name: "FinCore", desc: "Pioneering Sustainable Fintech Solutions." },
                { icon: Cloud, name: "Nova Cloud", desc: "Scalable Enterprise Cloud Solutions." },
                { icon: Shield, name: "CyberShield", desc: "Advanced Threat Detection & Security." },
                { icon: Infinity, name: "Quantum", desc: "Next-Generation Decentralized Networking." },
                { icon: PlaneTakeoff, name: "AeroDynamics", desc: "Aerospace Engineering & Logistics." },
                { icon: FlaskConical, name: "BioTech", desc: "Digital Healthcare Innovations." },
                { icon: Database, name: "OmniData", desc: "Predictive Analytics & Big Data." },
                // Duplicate for smooth seamless loop
                { icon: Sparkles, name: "Stellar AI", desc: "Global Leader in AI Infrastructure." },
                { icon: Landmark, name: "FinCore", desc: "Pioneering Sustainable Fintech Solutions." },
                { icon: Cloud, name: "Nova Cloud", desc: "Scalable Enterprise Cloud Solutions." },
                { icon: Shield, name: "CyberShield", desc: "Advanced Threat Detection & Security." },
                { icon: Infinity, name: "Quantum", desc: "Next-Generation Decentralized Networking." },
                { icon: PlaneTakeoff, name: "AeroDynamics", desc: "Aerospace Engineering & Logistics." },
                { icon: FlaskConical, name: "BioTech", desc: "Digital Healthcare Innovations." },
                { icon: Database, name: "OmniData", desc: "Predictive Analytics & Big Data." },
              ].map((partner, i) => (
                <div key={i} className="glass-panel rounded-2xl p-8 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(94,139,255,0.15)] flex flex-col items-center text-center justify-center min-h-[160px] w-[280px] shrink-0">
                  <div className="flex items-center gap-3 mb-4 text-white/80 group-hover:text-white transition-colors">
                    <partner.icon className="w-8 h-8" />
                    <span className="font-label font-bold text-xl tracking-wider uppercase">{partner.name}</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant group-hover:text-white/90 transition-colors">{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] w-full py-16 px-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <div className="text-xl font-black text-white font-display tracking-tight">
            NEXUS.DIGITAL
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="font-label text-sm font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">Insights</a>
            <a href="#" className="font-label text-sm font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">Legal</a>
            <a href="#" className="font-label text-sm font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">Careers</a>
            <a href="#" className="font-label text-sm font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="font-label text-xs uppercase tracking-widest text-white/30 text-center md:text-right">
            © 2024 NEXUS CREATIVE ADVISORY.<br className="md:hidden" /> ARCHITECTING THE FUTURE.
          </div>
        </div>
      </footer>
    </div>
  );
}
