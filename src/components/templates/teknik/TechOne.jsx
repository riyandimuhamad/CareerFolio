import React, { useEffect, useState } from 'react';

const TechOne = ({ data }) => {
  const { profile, fieldworks } = data;
  const [activeSection, setActiveSection] = useState('blueprints');

  useEffect(() => {
    // Scroll behavior for navigation highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      if(current) setActiveSection(current);

      // Hide FAB on credentials screen
      const credentialsSection = document.getElementById('credentials');
      const fab = document.getElementById('fab-container');
      if (credentialsSection && fab) {
        const rect = credentialsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          fab.style.display = 'none';
        } else {
          fab.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .bg-grid-dot-pattern {
            background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .blueprint-overlay {
            position: relative;
        }
        .blueprint-overlay::after {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(190, 198, 224, 0.2);
            pointer-events: none;
            border: 1px solid rgba(255,255,255,0.4);
        }
        .double-border {
            border: 1px solid #76777d;
            position: relative;
        }
        .double-border::before {
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            border: 1px solid #c6c6cd;
            pointer-events: none;
        }
        .stamp-verified {
            border: 2px solid #a73a00;
            color: #a73a00;
            padding: 2px 8px;
            transform: rotate(-12deg);
            font-family: monospace;
            font-weight: 800;
            text-transform: uppercase;
        }
      `}</style>
      
      <div className="bg-tech-background text-tech-on-surface font-sans selection:bg-tech-secondary selection:text-tech-on-secondary overflow-x-hidden min-h-screen">
        {/* TopNavBar */}
        <header className="bg-tech-surface sticky top-0 z-50 w-full px-4 md:px-20 py-4 border-b border-tech-outline-variant flex justify-between items-center">
          <div className="font-mono text-sm font-bold tracking-tighter text-tech-primary">
            PROJECT_CORE_v1.0
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className={`${activeSection === 'blueprints' ? 'text-tech-secondary font-bold border-b-2 border-tech-secondary' : 'text-tech-on-surface-variant hover:bg-tech-surface-container-high'} font-mono text-sm transition-colors px-2 py-1 h-full`} href="#blueprints">Blueprints</a>
            <a className={`${activeSection === 'specs' ? 'text-tech-secondary font-bold border-b-2 border-tech-secondary' : 'text-tech-on-surface-variant hover:bg-tech-surface-container-high'} font-mono text-sm transition-colors px-2 py-1`} href="#specs">Spec Sheet</a>
            <a className={`${activeSection === 'credentials' ? 'text-tech-secondary font-bold border-b-2 border-tech-secondary' : 'text-tech-on-surface-variant hover:bg-tech-surface-container-high'} font-mono text-sm transition-colors px-2 py-1`} href="#credentials">Credentials</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-tech-primary">sensors</span>
            <div className="w-10 h-10 border border-tech-outline p-0.5">
              <img alt="USER_REF" className="w-full h-full object-cover grayscale" src={profile.image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2000&auto=format&fit=crop"}/>
            </div>
          </div>
        </header>

        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-24 bg-tech-surface-container-high border-r border-tech-outline-variant bg-grid-dot-pattern z-40">
          <div className="px-6 py-8 border-b border-tech-outline-variant">
            <div className="font-mono text-sm uppercase text-tech-primary mb-2">REF_NO: 0042</div>
            <div className="font-mono text-xs text-tech-on-surface-variant">STATUS: ONLINE</div>
          </div>
          <nav className="flex-grow py-4">
            <a className={`${activeSection === 'blueprints' ? 'bg-tech-secondary text-tech-on-secondary font-bold border-r-4 border-tech-primary scale-95' : 'text-tech-on-surface-variant hover:bg-tech-surface-container-highest'} flex items-center gap-2 p-4 transition-all duration-150`} href="#blueprints">
              <span className="material-symbols-outlined">architecture</span>
              <span className="font-mono text-xs">Blueprints</span>
            </a>
            <a className={`${activeSection === 'specs' ? 'bg-tech-secondary text-tech-on-secondary font-bold border-r-4 border-tech-primary scale-95' : 'text-tech-on-surface-variant hover:bg-tech-surface-container-highest'} flex items-center gap-2 p-4 transition-all duration-150`} href="#specs">
              <span className="material-symbols-outlined">assignment</span>
              <span className="font-mono text-xs">Spec Sheet</span>
            </a>
            <a className={`${activeSection === 'credentials' ? 'bg-tech-secondary text-tech-on-secondary font-bold border-r-4 border-tech-primary scale-95' : 'text-tech-on-surface-variant hover:bg-tech-surface-container-highest'} flex items-center gap-2 p-4 transition-all duration-150`} href="#credentials">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="font-mono text-xs">Credentials</span>
            </a>
            <div className="mt-8 px-4">
              <button className="w-full bg-tech-secondary text-tech-on-secondary font-mono text-xs py-3 double-border uppercase font-bold tracking-widest hover:opacity-90 transition-opacity">
                GENERATE_REPORT
              </button>
            </div>
          </nav>
        </aside>

        <main className="lg:ml-64 bg-grid-dot-pattern min-h-screen">
          {/* Hero Section */}
          <section className="px-4 md:px-20 py-16 border-b border-tech-outline flex flex-col items-start relative overflow-hidden" id="hero">
            <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined !text-[200px]">architecture</span>
            </div>
            <div className="z-10 w-full max-w-5xl">
              <div className="font-mono text-xs text-tech-secondary mb-2 tracking-[0.2em] font-bold">SYSTEM_IDENTITY_VERIFIED</div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-tech-primary mb-2 uppercase tracking-tighter">{profile.name}</h1>
              <p className="text-2xl font-semibold text-tech-on-surface-variant mb-12">{profile.title}</p>
              
              {/* Quick Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-tech-outline bg-tech-surface">
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-tech-outline">
                  <div className="font-mono text-xs text-tech-on-surface-variant uppercase mb-1">GPA_RATING</div>
                  <div className="font-mono font-bold text-tech-primary text-xl">3.92 / 4.00</div>
                </div>
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-tech-outline">
                  <div className="font-mono text-xs text-tech-on-surface-variant uppercase mb-1">CORE_FOCUS</div>
                  <div className="font-mono font-bold text-tech-primary text-xl">Structural</div>
                </div>
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-tech-outline">
                  <div className="font-mono text-xs text-tech-on-surface-variant uppercase mb-1">INSTITUTION</div>
                  <div className="font-mono font-bold text-tech-primary text-xl">MIT_ENGR</div>
                </div>
                <div className="p-6">
                  <div className="font-mono text-xs text-tech-on-surface-variant uppercase mb-1">EST_GRAD_YEAR</div>
                  <div className="font-mono font-bold text-tech-primary text-xl">2025_SUMMER</div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="px-4 md:px-20 py-16 border-b border-tech-outline" id="blueprints">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold uppercase">Project Blueprints</h2>
              <div className="flex-grow h-[1px] bg-tech-outline-variant"></div>
              <div className="font-mono text-xs text-tech-on-surface-variant">SEC_REF: 02_PROJ</div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {fieldworks && fieldworks.map((work, i) => (
                <div key={work.id || i} className="group border border-tech-outline bg-tech-surface flex flex-col relative">
                  <div className="absolute top-2 right-2 font-mono text-xs bg-tech-surface-container-highest px-2 py-1 z-10">REF_NO: 0042-{String.fromCharCode(65+i)}</div>
                  <div className="aspect-video blueprint-overlay overflow-hidden border-b border-tech-outline">
                    <img className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" alt={work.project} src={`https://source.unsplash.com/random/800x600/?engineering,blueprint,${i}`} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{work.project}</h3>
                    <p className="text-tech-on-surface-variant mb-8 line-clamp-3">{work.desc}</p>
                    <div className="border-t border-dashed border-tech-outline-variant pt-6">
                      <div className="font-mono text-xs text-tech-secondary uppercase mb-4 font-bold tracking-widest">Technical Specs</div>
                      <ul className="grid grid-cols-2 gap-y-2 font-mono text-sm font-semibold text-tech-on-surface-variant">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tech-secondary"></span> Result: {work.result}</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tech-secondary"></span> Phase: Execution</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tech-secondary"></span> Loc: {work.location || 'Site 1'}</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tech-secondary"></span> Status: ACTIVE</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto border-t border-tech-outline flex">
                    <a className="flex-1 text-center py-4 font-mono text-sm font-bold border-r border-tech-outline hover:bg-tech-surface-container-high transition-colors" href="#">VIEW_SCHEMATIC</a>
                    <a className="flex-1 text-center py-4 font-mono text-sm font-bold bg-tech-primary text-tech-on-primary hover:bg-tech-secondary transition-colors" href="#">PROJECT_RECAP</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Spec Sheet */}
          <section className="px-4 md:px-20 py-16 border-b border-tech-outline bg-tech-surface-container-low" id="specs">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold uppercase">Spec Sheet: Technical Skills</h2>
              <div className="flex-grow h-[1px] bg-tech-outline-variant"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {/* Software Section */}
                <div>
                  <div className="font-mono text-sm font-bold border-b-2 border-tech-primary inline-block mb-6 uppercase">System Software</div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-2 uppercase">
                        <span>AutoCAD / CAD</span>
                        <span>95%</span>
                      </div>
                      <div className="h-4 bg-tech-outline-variant double-border">
                        <div className="h-full bg-tech-secondary w-[95%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-2 uppercase">
                        <span>MATLAB / Simulink</span>
                        <span>88%</span>
                      </div>
                      <div className="h-4 bg-tech-outline-variant double-border">
                        <div className="h-full bg-tech-secondary w-[88%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-2 uppercase">
                        <span>Python (Data)</span>
                        <span>82%</span>
                      </div>
                      <div className="h-4 bg-tech-outline-variant double-border">
                        <div className="h-full bg-tech-secondary w-[82%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Codes/Standards Section */}
                <div>
                  <div className="font-mono text-sm font-bold border-b-2 border-tech-primary inline-block mb-6 uppercase">Engineering Standards</div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-2 uppercase">
                        <span>ASME B46.1 Surface Texture</span>
                        <span>Verified</span>
                      </div>
                      <div className="h-4 bg-tech-outline-variant double-border">
                        <div className="h-full bg-tech-primary w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-2 uppercase">
                        <span>ISO 9001 Protocols</span>
                        <span>Verified</span>
                      </div>
                      <div className="h-4 bg-tech-outline-variant double-border">
                        <div className="h-full bg-tech-primary w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-mono text-xs mb-2 uppercase">
                        <span>GD&T Fundamentals</span>
                        <span>Verified</span>
                      </div>
                      <div className="h-4 bg-tech-outline-variant double-border">
                        <div className="h-full bg-tech-primary w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Credentials / Education */}
          <section className="px-4 md:px-20 py-16 border-b border-tech-outline" id="credentials">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold uppercase">Credentials & Certifications</h2>
              <div className="flex-grow h-[1px] bg-tech-outline-variant"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-tech-outline bg-tech-surface p-8 relative overflow-hidden">
                <div className="absolute -top-4 -right-4">
                  <div className="stamp-verified">Verified</div>
                </div>
                <div className="font-mono text-xs text-tech-on-surface-variant uppercase mb-4">Education // academic_track</div>
                <h3 className="text-2xl font-bold mb-2">B.S. Engineering</h3>
                <p className="text-lg mb-4">Massachusetts Institute of Technology (MIT)</p>
                <p className="font-mono text-xs text-tech-on-surface-variant">Focus: Structural & Mechatronics. Minor in Systems.</p>
              </div>

              <div className="border border-tech-outline bg-tech-surface p-8 relative overflow-hidden">
                <div className="absolute -top-4 -right-4">
                  <div className="stamp-verified">Verified</div>
                </div>
                <div className="font-mono text-xs text-tech-on-surface-variant uppercase mb-4">Certification // pro_dev</div>
                <h3 className="text-2xl font-bold mb-2">CSWP: Certified Professional</h3>
                <p className="text-lg mb-4">Dassault Systèmes</p>
                <p className="font-mono text-xs text-tech-on-surface-variant">License: C-88RT-XYZ9 // Valid through 2026</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full px-4 md:px-20 py-12 flex flex-col items-center justify-center border-t border-tech-outline-variant bg-grid-dot-pattern">
            <div className="font-mono text-sm font-black mb-6">PROJECT_CORE_v1.0</div>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <a className="font-mono text-xs text-tech-on-surface-variant hover:text-tech-secondary transition-colors underline decoration-2 underline-offset-4" href="#">Major: Structural Engineering</a>
              <a className="font-mono text-xs text-tech-on-surface-variant hover:text-tech-secondary transition-colors" href="#">University Stamp</a>
            </div>
            <div className="font-mono text-xs text-tech-on-surface-variant text-center opacity-60">
              © 2024 FIELD_NOTES_DEPT // COORDINATES: 40.7128° N, 74.0060° W
            </div>
          </footer>
        </main>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50" id="fab-container">
          <button className="bg-tech-secondary text-tech-on-secondary p-4 shadow-xl flex items-center justify-center group relative border-2 border-tech-primary active:scale-95 duration-150">
            <span className="material-symbols-outlined !text-3xl">add</span>
            <span className="absolute right-full mr-4 bg-tech-primary text-tech-on-primary px-3 py-1 font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase">Download_Portfolio.PDF</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TechOne;
