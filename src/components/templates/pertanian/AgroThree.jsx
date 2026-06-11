import React, { useEffect } from 'react';

const AgroThree = ({ data }) => {
  const { profile, fieldworks } = data;

  useEffect(() => {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-5');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .dashboard-grid {
            background-image: radial-gradient(circle, #6e7a73 1px, transparent 1px);
            background-size: 40px 40px;
            background-color: #f8f9ff;
        }
        .tech-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 93, 66, 0.1);
            position: relative;
            overflow: hidden;
        }
        .tech-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #005d42;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .tech-card:hover::before {
            opacity: 1;
        }
        .coord-marker {
            font-family: monospace;
            font-size: 10px;
            color: #6e7a73;
            opacity: 0.5;
            pointer-events: none;
        }
        .scan-line {
            height: 1px;
            width: 100%;
            background: linear-gradient(90deg, transparent, #005d42, transparent);
            position: absolute;
            animation: scan 4s linear infinite;
        }
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            50% { opacity: 0.5; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
      
      <div className="dashboard-grid font-sans text-agro-on-surface selection:bg-agro-primary-container selection:text-agro-on-primary-container overflow-x-hidden">
        <header className="bg-white/80 backdrop-blur-xl border-b border-agro-outline-variant sticky top-0 w-full z-50 h-24">
          <nav className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto h-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-agro-primary flex items-center justify-center font-bold text-agro-primary uppercase">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-2xl font-bold tracking-tight text-agro-on-background uppercase">{profile.name}<span className="text-agro-primary">.</span></div>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <a className="text-agro-on-surface-variant hover:text-agro-primary font-medium text-sm uppercase tracking-widest transition-colors" href="#education">Education</a>
              <a className="text-agro-on-surface-variant hover:text-agro-primary font-medium text-sm uppercase tracking-widest transition-colors" href="#experience">Experience</a>
              <a className="text-agro-on-surface-variant hover:text-agro-primary font-medium text-sm uppercase tracking-widest transition-colors" href="#projects">Research</a>
              <a className="bg-agro-primary text-agro-on-primary px-8 py-3 text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-all shadow-md" href="#contact">Interface_Contact</a>
            </div>
            <button className="md:hidden text-agro-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </nav>
        </header>

        <main>
          {/* Hero Dashboard */}
          <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden">
            <span className="absolute top-32 left-8 coord-marker">LAT: 42.4440° N<br/>LON: 76.4966° W</span>
            <span className="absolute bottom-12 right-8 coord-marker">SYS_STATUS: ACTIVE<br/>VER: 3.0.0_TERRA</span>
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 animate-on-scroll">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-agro-primary/20 bg-agro-primary/5 text-agro-primary mb-8">
                  <div className="w-2 h-2 bg-agro-primary animate-pulse"></div>
                  <span className="text-xs font-bold tracking-widest uppercase">{profile.title} v3.0</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-[84px] font-black mb-6 text-agro-on-background leading-[0.9] tracking-tighter uppercase">
                  Precision <br/><span className="text-agro-primary italic">Sustainability.</span>
                </h1>
                <p className="text-lg text-agro-on-surface-variant max-w-2xl mb-12 border-l-2 border-agro-primary/20 pl-8 leading-relaxed">
                  {profile.bio}
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <a className="bg-agro-primary text-agro-on-primary px-10 py-5 text-sm font-bold uppercase tracking-widest flex items-center gap-4 hover:opacity-90 transition-all shadow-xl shadow-agro-primary/10" href="#projects">
                    Initiate Research Overview
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative flex justify-center animate-on-scroll delay-200">
                <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
                  <div className="absolute -inset-8 border border-agro-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute -inset-4 border-2 border-dashed border-agro-secondary/20 rounded-full"></div>
                  <div className="relative w-full h-full p-4">
                    <div className="scan-line z-20"></div>
                    <img alt={profile.name} className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 border-2 border-agro-on-surface" src={profile.image || "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop"}/>
                  </div>
                  <div className="absolute -bottom-8 -right-8 tech-card p-6 border-2 border-agro-primary shadow-2xl z-30">
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-3xl font-black text-agro-on-background leading-none">3.95</p>
                        <p className="text-xs font-bold text-agro-primary tracking-widest uppercase mt-1">CUMULATIVE_GPA</p>
                      </div>
                      <div className="w-12 h-12 bg-agro-primary text-agro-on-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Dashboard */}
          <section className="py-24 bg-agro-on-background text-white overflow-hidden" id="education">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 animate-on-scroll">
                <div>
                  <span className="text-agro-primary text-sm font-bold uppercase tracking-[0.3em] block mb-4">Academic_Track</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">Educational Credentials</h2>
                </div>
                <div className="mt-6 md:mt-0 opacity-40 font-mono text-xs text-white">
                  // ACCESS_GRANTED_DB_ACAD
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 animate-on-scroll">
                <div className="bg-white/5 border border-white/10 p-10 group hover:bg-white/10 transition-all shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-agro-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-agro-primary text-white text-[10px] font-bold uppercase tracking-widest">Active_Thesis</span>
                        <span className="text-agro-primary-container font-mono text-xs">REF_ID: GAU_SYS_2024</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 uppercase">M.S. in Sustainable Agriculture</h3>
                      <p className="text-agro-primary-container font-medium text-lg">Global Agri-Tech University</p>
                      <p className="text-white/60 mt-4 max-w-2xl italic border-l border-white/20 pl-4 font-mono text-xs uppercase">
                        Thesis: Precision nitrogen analysis
                      </p>
                    </div>
                    <div className="lg:col-span-4 lg:text-right">
                      <div className="inline-block p-4 border border-white/10 bg-white/5">
                        <p className="text-white text-lg font-bold">GPA: 3.95/4.0</p>
                        <p className="text-agro-primary-container text-xs uppercase tracking-widest mt-1">Dean's List</p>
                        <p className="text-white/40 text-[10px] mt-4 uppercase tracking-[0.2em]">Expected 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Case Studies */}
          <section className="py-24 bg-agro-surface relative" id="experience">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="mb-20 animate-on-scroll">
                <span className="text-agro-primary text-sm font-bold uppercase tracking-[0.3em] block mb-4">Core_Competencies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-agro-on-background tracking-tighter uppercase">Professional Deployment</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="tech-card p-10 group animate-on-scroll shadow-lg">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-agro-primary flex items-center justify-center text-agro-on-primary">
                      <span className="material-symbols-outlined text-[32px]">science</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-agro-on-surface-variant block uppercase tracking-widest">Present</span>
                      <span className="text-[10px] text-agro-primary uppercase font-mono">Status: ACTIVE_OP</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-agro-on-background mb-2 uppercase">Graduate Research Assistant</h3>
                  <p className="text-agro-primary font-bold uppercase tracking-widest text-xs mb-8">Soil & Crop Sciences Dept</p>
                  <ul className="space-y-6 text-agro-on-surface-variant">
                    <li className="flex gap-4">
                      <span className="text-agro-primary font-mono">[01]</span>
                      <p className="text-sm leading-relaxed">Led high-fidelity data collection for 12,000+ acres using multispectral drone telemetry systems.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Research Case Studies Gallery */}
          <section className="py-24 bg-agro-on-background text-white" id="projects">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-on-scroll">
                <div>
                  <span className="text-agro-primary text-sm font-bold uppercase tracking-[0.3em] block mb-4">Research_Portfolio</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">Case Studies & Investigations</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                {fieldworks.map((work, i) => (
                  <div key={work.id} className="group border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-all duration-700 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="aspect-square overflow-hidden relative">
                      <img alt={work.project} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" src={`https://source.unsplash.com/random/800x600/?science,nature,${i}`}/>
                      <div className="absolute inset-0 bg-gradient-to-t from-agro-on-background via-transparent to-transparent opacity-80"></div>
                      <div className="absolute top-8 left-8">
                        <span className="px-4 py-1.5 border border-agro-primary text-agro-primary text-[10px] font-black tracking-[0.2em] uppercase">Log_Entry_0{i+1}</span>
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{work.project}</h3>
                      <p className="text-white/60 text-sm mb-10 leading-relaxed min-h-[80px]">{work.desc}</p>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center py-4 border-y border-white/10">
                          <span className="text-xs font-bold text-agro-primary uppercase tracking-widest">Impact</span>
                          <span className="text-xs text-white/80 font-mono">{work.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Interface */}
          <section className="py-24 bg-agro-on-background relative overflow-hidden" id="contact">
            <div className="absolute inset-0 opacity-10 dashboard-grid"></div>
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10 animate-on-scroll">
              <span className="text-agro-primary text-sm font-bold uppercase tracking-[0.4em] block mb-6">Contact_Establishment</span>
              <h2 className="text-5xl md:text-[64px] font-black mb-8 text-white tracking-tighter leading-none uppercase">Let's Connect<span className="text-agro-primary">.</span></h2>
              <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
                Currently evaluating candidacies and collaborative research projects. Interface now to discuss potential synergy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 mb-16">
                <a className="p-10 hover:bg-agro-primary/10 transition-colors border-b md:border-b-0 md:border-r border-white/10 group" href={`mailto:sysadmin@${profile.name.toLowerCase().replace(/[^a-z]/g, '')}.edu`}>
                  <span className="material-symbols-outlined text-agro-primary mb-6 block text-[32px] group-hover:scale-110 transition-transform">mail</span>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-2">Mail_Server</p>
                  <p className="text-xs text-white/40 font-mono">Secure COM</p>
                </a>
                <a className="p-10 hover:bg-agro-primary/10 transition-colors border-b md:border-b-0 md:border-r border-white/10 group" href="#">
                  <span className="material-symbols-outlined text-agro-primary mb-6 block text-[32px] group-hover:scale-110 transition-transform">database</span>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-2">LinkedIn_ID</p>
                  <p className="text-xs text-white/40 font-mono">Network Grid</p>
                </a>
                <a className="p-10 hover:bg-agro-primary/10 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-agro-primary mb-6 block text-[32px] group-hover:scale-110 transition-transform">terminal</span>
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-2">GitHub_Repo</p>
                  <p className="text-xs text-white/40 font-mono">Source Access</p>
                </a>
              </div>
              <button className="bg-agro-primary text-agro-on-primary px-16 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-2xl shadow-agro-primary/20 flex items-center gap-4 mx-auto group border border-agro-primary">
                Download Profile Data (PDF)
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AgroThree;
