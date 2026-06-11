import React, { useEffect, useState } from 'react';

const TechTwo = ({ data }) => {
  const { profile, fieldworks } = data;
  const [activeTab, setActiveTab] = useState('blueprints');

  useEffect(() => {
    // Micro-interaction: Scroll monitoring for CAD lines
    const mainContent = document.getElementById('tech-main-content');
    const handleScroll = () => {
      if (mainContent) {
        const opacity = Math.min(0.15, 0.03 + (mainContent.scrollTop / 2000));
        mainContent.style.backgroundImage = `linear-gradient(rgba(0,0,0,${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,${opacity}) 1px, transparent 1px)`;
      }
    };
    
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .grid-dot-pattern {
            background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .cad-overlay {
            background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 100px 100px;
        }
        .hex-frame {
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .coordinate-label {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }
      `}</style>
      
      <div className="bg-tech-surface font-sans text-tech-on-surface selection:bg-tech-secondary-fixed min-h-screen relative overflow-hidden">
        {/* BORDER COORDINATES */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 p-2 hidden lg:flex flex-col justify-between items-center">
          <div className="w-full flex justify-between font-mono text-xs text-tech-outline px-10">
            <span>A1</span><span>A2</span><span>A3</span><span>A4</span><span>A5</span><span>A6</span>
          </div>
          <div className="w-full flex justify-between font-mono text-xs text-tech-outline px-10">
            <span>B1</span><span>B2</span><span>B3</span><span>B4</span><span>B5</span><span>B6</span>
          </div>
        </div>
        <div className="fixed top-0 left-0 h-full w-full pointer-events-none z-50 hidden lg:flex justify-between items-center py-10">
          <div className="h-full flex flex-col justify-between font-mono text-xs text-tech-outline px-2 coordinate-label">
            <span>Y-01</span><span>Y-02</span><span>Y-03</span><span>Y-04</span>
          </div>
          <div className="h-full flex flex-col justify-between font-mono text-xs text-tech-outline px-2 coordinate-label">
            <span>X-01</span><span>X-02</span><span>X-03</span><span>X-04</span>
          </div>
        </div>

        {/* NAVIGATION SHELL */}
        <header className="fixed top-0 left-0 w-full z-40 bg-tech-surface border-b border-tech-outline-variant flex justify-between items-center px-4 md:px-20 py-4">
          <div className="font-mono text-sm font-bold tracking-tighter text-tech-primary">
            PROJECT_CORE_v1.0
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => setActiveTab('blueprints')} className={`${activeTab === 'blueprints' ? 'text-tech-secondary border-b-2 border-tech-secondary' : 'text-tech-on-surface-variant hover:bg-tech-surface-container'} font-bold font-mono text-sm transition-colors`}>Blueprints</button>
            <button onClick={() => setActiveTab('specs')} className={`${activeTab === 'specs' ? 'text-tech-secondary border-b-2 border-tech-secondary' : 'text-tech-on-surface-variant hover:bg-tech-surface-container'} font-mono text-sm transition-colors`}>Spec Sheet</button>
          </nav>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-tech-primary">sensors</span>
            <div className="w-8 h-8 bg-tech-surface-container-highest rounded-full flex items-center justify-center overflow-hidden border border-tech-outline">
              <img alt="USER_REF" className="w-full h-full object-cover" src={profile.image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=200&auto=format&fit=crop"}/>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row h-screen pt-[73px]">
          {/* LEFT PANE: FIXED PROFILE & STATUS */}
          <aside className="w-full md:w-[400px] md:fixed md:h-[calc(100vh-73px)] border-r border-tech-outline-variant bg-tech-surface-container flex flex-col p-8 overflow-y-auto grid-dot-pattern">
            <div className="relative mb-8 mt-4">
              <div className="hex-frame w-48 h-56 mx-auto bg-tech-primary relative overflow-hidden p-1">
                <div className="hex-frame w-full h-full bg-tech-surface-container-highest overflow-hidden">
                  <img alt={profile.name} className="w-full h-full object-cover grayscale contrast-125" src={profile.image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=400&auto=format&fit=crop"}/>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-tech-secondary text-tech-on-secondary px-4 py-1 font-mono text-xs border-2 border-tech-primary whitespace-nowrap">
                REF_NO: 0042
              </div>
            </div>
            
            <div className="space-y-6 mt-4">
              <div className="border-t-2 border-tech-primary pt-4">
                <h2 className="text-2xl font-bold uppercase mb-1">{profile.name}</h2>
                <p className="font-mono text-xs text-tech-on-surface-variant">STATUS: <span className="text-tech-secondary font-bold">ONLINE</span></p>
                <p className="font-mono text-xs text-tech-on-surface-variant mt-1">{profile.title}</p>
              </div>
              
              <div className="bg-tech-surface p-4 border border-tech-outline-variant relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 font-mono text-[10px] text-tech-outline opacity-50">SYSTEM_CHECK_v4.2</div>
                <h3 className="font-mono text-sm font-bold mb-3 border-b border-tech-outline-variant pb-2">DIAGNOSTICS</h3>
                <ul className="space-y-2 font-mono text-xs">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-tech-secondary"></span>
                    <span>Structural Integrity: 99.8%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-tech-secondary"></span>
                    <span>Data Uplink: STABLE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-tech-secondary opacity-30"></span>
                    <span className="text-tech-on-surface-variant">Auth Protocol: VERIFIED</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-tech-secondary text-tech-on-secondary py-4 font-mono text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all border-b-4 border-r-4 border-tech-primary active:translate-y-1 active:border-b-0 active:border-r-0">
                GENERATE_REPORT
              </button>
            </div>
          </aside>

          {/* RIGHT PANE: SCROLLING CONTENT */}
          <main id="tech-main-content" className="flex-1 md:ml-[400px] p-8 md:p-12 cad-overlay overflow-y-auto">
            
            {activeTab === 'blueprints' && (
              <section className="mb-16 animate-fade-in">
                <div className="flex justify-between items-end mb-8 border-b-2 border-tech-primary pb-2">
                  <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-none">Blueprints</h2>
                  <span className="font-mono text-xs text-tech-on-surface-variant">003_ARCHIVE_ENTRIES</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {fieldworks && fieldworks.map((work, i) => (
                    <div key={work.id || i} className="bg-tech-surface border border-tech-outline-variant flex flex-col group hover:border-tech-primary transition-colors">
                      <div className="h-48 bg-tech-surface-container relative overflow-hidden border-b border-tech-outline-variant">
                        <img alt={work.project} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={`https://source.unsplash.com/random/600x400/?architecture,industrial,${i}`}/>
                        <div className="absolute top-2 right-2 bg-tech-surface px-2 py-1 font-mono text-[10px] border border-tech-outline">REF_PRJ: {882-i}-A</div>
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex gap-2 mb-4">
                          <button className="px-3 py-1 font-mono text-xs bg-tech-primary text-tech-on-primary">Schematic</button>
                          <button className="px-3 py-1 font-mono text-xs bg-tech-surface-container text-tech-on-surface-variant border border-tech-outline-variant">Details</button>
                        </div>
                        <h4 className="text-xl font-bold mb-2 uppercase">{work.project}</h4>
                        <p className="text-tech-on-surface-variant text-sm line-clamp-3">{work.desc}</p>
                      </div>
                      <div className="p-4 bg-tech-surface-container border-t border-tech-outline-variant flex justify-between items-center">
                        <span className="font-mono text-xs text-tech-secondary font-bold uppercase">{work.result || 'IN_PROGRESS'}</span>
                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'specs' && (
              <section className="mb-16 animate-fade-in">
                <div className="flex justify-between items-end mb-8 border-b-2 border-tech-primary pb-2">
                  <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-none">Spec Sheet</h2>
                  <span className="font-mono text-xs text-tech-on-surface-variant">TECHNICAL_DATA</span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                  <div className="bg-tech-primary text-tech-on-primary p-8 border-r-8 border-tech-secondary">
                    <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-3">
                      <span className="material-symbols-outlined">architecture</span>
                      Tool Proficiency
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between font-mono text-xs mb-2">
                          <span>CAD_SUITE_ELITE</span>
                          <span>95%</span>
                        </div>
                        <div className="h-1 w-full bg-tech-on-primary/20">
                          <div className="h-full bg-tech-secondary" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-mono text-xs mb-2">
                          <span>SIMULINK_DYNAMICS</span>
                          <span>88%</span>
                        </div>
                        <div className="h-1 w-full bg-tech-on-primary/20">
                          <div className="h-full bg-tech-secondary" style={{width: '88%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-mono text-xs mb-2">
                          <span>STRUCTURAL_ANALYZER</span>
                          <span>92%</span>
                        </div>
                        <div className="h-1 w-full bg-tech-on-primary/20">
                          <div className="h-full bg-tech-secondary" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-tech-surface border-2 border-tech-primary p-8 relative overflow-hidden">
                    <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-3">
                      <span className="material-symbols-outlined">verified_user</span>
                      Standard Compliance
                    </h3>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                      <div className="p-4 border border-tech-outline-variant bg-tech-surface-container flex flex-col gap-2">
                        <span className="text-[10px] text-tech-outline">ISO: 9001</span>
                        <span className="font-bold">QUALITY_MGMT</span>
                        <span className="text-tech-secondary">ACTIVE</span>
                      </div>
                      <div className="p-4 border border-tech-outline-variant bg-tech-surface-container flex flex-col gap-2">
                        <span className="text-[10px] text-tech-outline">ASME: B31.3</span>
                        <span className="font-bold">PROCESS_PIPING</span>
                        <span className="text-tech-secondary">ACTIVE</span>
                      </div>
                      <div className="p-4 border border-tech-outline-variant bg-tech-surface-container flex flex-col gap-2">
                        <span className="text-[10px] text-tech-outline">OSHA: 29CFR</span>
                        <span className="font-bold">SAFETY_STDS</span>
                        <span className="text-tech-secondary">ACTIVE</span>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-tech-outline-variant">
                      <p className="font-mono text-sm italic text-tech-on-surface-variant">
                        "System adherence monitored via real-time telemetry. All designs comply with international architectural safety protocols."
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* FOOTER SHELL */}
            <footer className="w-full mt-16 pt-12 border-t border-tech-outline-variant flex flex-col items-center justify-center pb-8">
              <div className="font-mono text-sm font-black mb-4 text-tech-primary">
                FIELD_NOTES_DEPT
              </div>
              <div className="flex flex-wrap gap-6 mb-6 justify-center">
                <a className="font-mono text-xs text-tech-on-surface-variant hover:text-tech-secondary transition-colors underline" href="#">Major: Structural Engineering</a>
                <a className="font-mono text-xs text-tech-on-surface-variant hover:text-tech-secondary transition-colors underline" href="#">University Stamp</a>
              </div>
              <p className="font-mono text-xs text-tech-on-surface-variant opacity-60 text-center">
                © 2024 FIELD_NOTES_DEPT // COORDINATES: 40.7128° N, 74.0060° W
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default TechTwo;
