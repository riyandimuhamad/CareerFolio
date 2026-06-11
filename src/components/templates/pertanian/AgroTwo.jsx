import React, { useEffect } from 'react';

const AgroTwo = ({ data }) => {
  const { profile, fieldworks } = data;

  useEffect(() => {
    // Premium reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fbfcff] font-sans text-agro-on-surface selection:bg-agro-primary/20 overflow-x-hidden relative"
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400C100 400 150 300 200 300C250 300 300 400 400 400V0H0V400Z' fill='none' stroke='%23005d42' stroke-opacity='0.03' stroke-width='1'/%3E%3Cpath d='M0 350C100 350 150 250 200 250C250 250 300 350 400 350' fill='none' stroke='%23005d42' stroke-opacity='0.03' stroke-width='1'/%3E%3Cpath d='M0 300C100 300 150 200 200 200C250 200 300 300 400 300' fill='none' stroke='%23005d42' stroke-opacity='0.03' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '800px 800px' }}>
      
      {/* Header */}
      <header className="sticky top-0 w-full z-40 h-20 flex items-center transition-all duration-300 bg-white/40 backdrop-blur-md border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" id="main-header">
        <nav className="max-w-7xl mx-auto w-full px-4 md:px-8 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tight text-agro-primary uppercase">{profile.name.split(' ')[0]}<span className="text-agro-on-background/30 font-light ml-1">{profile.name.split(' ').slice(1).join(' ')}</span></div>
          <div className="hidden md:flex items-center gap-12">
            <a className="text-agro-on-surface/60 hover:text-agro-primary font-medium text-sm transition-colors" href="#education">Education</a>
            <a className="text-agro-on-surface/60 hover:text-agro-primary font-medium text-sm transition-colors" href="#experience">Experience</a>
            <a className="text-agro-on-surface/60 hover:text-agro-primary font-medium text-sm transition-colors" href="#projects">Research</a>
            <a className="bg-agro-primary text-white px-7 py-3 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-agro-primary/20 transition-all active:scale-95" href="#contact">Get in Touch</a>
          </div>
          <button className="md:hidden text-agro-primary p-2">
            <span className="material-symbols-outlined text-3xl">menu_open</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-agro-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-agro-secondary/5 rounded-full blur-[100px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/40 backdrop-blur-md rounded-full mb-8 border border-agro-primary/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-agro-primary animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-agro-primary">{profile.title}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-agro-on-background leading-tight tracking-tight">
                Cultivating the Future of <span className="text-agro-primary italic">Sustainable</span> Agriculture.
              </h1>
              <p className="text-xl text-agro-on-surface-variant/80 leading-relaxed max-w-2xl mb-12">
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a className="bg-agro-primary text-white px-10 py-5 rounded-full font-bold text-sm hover:-translate-y-1 transition-all flex items-center gap-3 shadow-2xl shadow-agro-primary/30" href="#projects">
                  View Research Portfolio
                  <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-on-scroll delay-200">
              <div className="relative w-full aspect-square max-w-[480px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-agro-primary/20 to-agro-secondary/10 rounded-[4rem] rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-[4rem] shadow-2xl overflow-hidden -rotate-3 border border-agro-primary/5">
                  <img alt={profile.name} className="w-full h-full object-cover scale-105" src={profile.image || "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop"}/>
                </div>
                {/* Stats Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-3xl z-20 border border-white/50 max-w-[200px] shadow-xl">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-agro-primary/10 rounded-xl flex items-center justify-center text-agro-primary">
                      <span className="material-symbols-outlined">grade</span>
                    </div>
                    <span className="text-2xl font-bold text-agro-on-background">3.95</span>
                  </div>
                  <p className="text-[11px] font-bold text-agro-primary uppercase tracking-widest leading-none">Cumulative GPA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 relative" id="education">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-16 flex flex-col items-center text-center animate-on-scroll">
              <span className="text-agro-primary font-bold text-[12px] uppercase tracking-[0.3em] mb-4">Scholarly Background</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-agro-on-background max-w-xl">Academic Foundations & Research Focus</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll">
              <div className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-agro-primary/20 transition-all duration-500 border border-white/40 shadow-sm">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">school</span>
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-agro-primary/10 text-agro-primary text-[10px] font-bold uppercase mb-6">Master of Science</span>
                  <h3 className="text-2xl font-bold text-agro-on-background mb-2">Sustainable Agriculture & Food Systems</h3>
                  <p className="text-agro-primary/70 font-semibold mb-6">Cornell University</p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-agro-primary/40"></span>
                      <p className="text-agro-on-surface-variant italic text-sm">Thesis: GIS-based soil nutrient mapping</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-agro-primary/5">
                    <span className="text-xs font-bold text-agro-primary tracking-widest uppercase">Expected 2024</span>
                    <span className="text-xs font-medium text-agro-on-surface-variant/60">GPA 3.95/4.0</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-agro-primary/20 transition-all duration-500 border border-white/40 shadow-sm lg:translate-y-8">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">biotech</span>
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-agro-secondary/10 text-agro-secondary text-[10px] font-bold uppercase mb-6">Bachelor of Science</span>
                  <h3 className="text-2xl font-bold text-agro-on-background mb-2">Environmental Science</h3>
                  <p className="text-agro-primary/70 font-semibold mb-6">University of California, Berkeley</p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-agro-secondary/40"></span>
                      <p className="text-agro-on-surface-variant italic text-sm">Summa Cum Laude Honors</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-agro-primary/5">
                    <span className="text-xs font-bold text-agro-secondary tracking-widest uppercase">Conferred 2022</span>
                    <span className="text-xs font-medium text-agro-on-surface-variant/60">GPA 3.88/4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-agro-primary/[0.02]" id="experience">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 animate-on-scroll">
                <span className="text-agro-primary font-bold text-[12px] uppercase tracking-[0.3em] mb-4 block">Professional Path</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-agro-on-background mb-8">Applying Science to Real-World Challenges</h2>
                <p className="text-agro-on-surface-variant leading-relaxed mb-10 text-lg">
                  My professional journey is defined by bridging lab research with large-scale field applications, working alongside industry leaders to implement regenerative practices.
                </p>
                <div className="p-8 bg-white/40 backdrop-blur-md rounded-3xl border-l-4 border-l-agro-primary shadow-sm border border-white/40">
                  <h4 className="font-bold text-agro-primary mb-2">Current Focus</h4>
                  <p className="text-sm text-agro-on-surface-variant italic">Leading research for automated regenerative soil practices.</p>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8 animate-on-scroll">
                {/* Exp Item 1 */}
                <div className="group bg-white p-10 rounded-[2rem] border border-agro-primary/5 shadow-sm hover:shadow-xl hover:translate-x-2 transition-all duration-500">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-agro-primary/5 rounded-2xl flex items-center justify-center text-agro-primary group-hover:bg-agro-primary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">lab_research</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-agro-on-background">Graduate Research Assistant</h3>
                        <p className="text-agro-primary font-medium text-sm">Soil & Crop Sciences Dept</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-agro-primary/5 text-agro-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Present</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4 text-agro-on-surface-variant text-sm leading-relaxed">
                      <span className="material-symbols-outlined text-agro-primary text-lg flex-shrink-0">check_circle</span>
                      Led field data collection for 12,000+ acres using multispectral drone imagery.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Portfolio */}
        <section className="py-24 relative" id="projects">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-on-scroll">
              <div className="max-w-2xl">
                <span className="text-agro-primary font-bold text-[12px] uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-agro-on-background">Significant Research Projects</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {fieldworks.map((work, i) => (
                <div key={work.id} className={`${i === 0 ? 'lg:col-span-2 group animate-on-scroll' : 'group animate-on-scroll'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  {i === 0 ? (
                    <div className="relative rounded-[3rem] overflow-hidden bg-agro-on-background h-[500px]">
                      <img alt={work.project} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" src={`https://source.unsplash.com/random/800x600/?farm,${i}`}/>
                      <div className="absolute inset-0 bg-gradient-to-t from-agro-on-background via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <span className="inline-block px-4 py-1 rounded-full bg-agro-primary text-white text-[10px] font-bold uppercase mb-4">Featured</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{work.project}</h3>
                        <p className="text-white/70 text-lg max-w-xl mb-6">{work.desc}</p>
                        <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-6">
                          <div>
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Impact</p>
                            <p className="text-sm font-bold text-white">{work.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/40 backdrop-blur-md border border-white/40 shadow-sm rounded-[3rem] p-10 h-full flex flex-col hover:border-agro-primary/30 transition-all duration-500">
                      <div className="w-full aspect-video rounded-3xl overflow-hidden mb-8">
                        <img alt={work.project} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={`https://source.unsplash.com/random/800x600/?agriculture,${i}`}/>
                      </div>
                      <h3 className="text-2xl font-bold text-agro-on-background mb-4">{work.project}</h3>
                      <p className="text-agro-on-surface-variant text-sm leading-relaxed mb-auto">{work.desc}</p>
                      <div className="mt-10 pt-8 border-t border-agro-primary/5 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-agro-primary uppercase tracking-widest">{work.result}</span>
                        <span className="material-symbols-outlined text-agro-primary">sensors</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 relative" id="contact">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-agro-on-background">Let's <span className="italic text-agro-primary">Collaborate.</span></h2>
            <p className="text-lg text-agro-on-surface-variant/80 mb-20 max-w-2xl mx-auto">
              Currently seeking research partnerships and industry roles. Reach out to discuss the intersection of tech and ecology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <a className="group" href={`mailto:contact@${profile.name.toLowerCase().replace(/[^a-z]/g, '')}.edu`}>
                <div className="w-16 h-16 bg-agro-primary/5 rounded-2xl flex items-center justify-center text-agro-primary mx-auto mb-6 group-hover:bg-agro-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <p className="font-bold mb-1">Email</p>
                <p className="text-sm text-agro-on-surface-variant">Direct Message</p>
              </a>
              <a className="group" href="#">
                <div className="w-16 h-16 bg-agro-primary/5 rounded-2xl flex items-center justify-center text-agro-primary mx-auto mb-6 group-hover:bg-agro-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">link</span>
                </div>
                <p className="font-bold mb-1">LinkedIn</p>
                <p className="text-sm text-agro-on-surface-variant">Network</p>
              </a>
              <a className="group" href="#">
                <div className="w-16 h-16 bg-agro-primary/5 rounded-2xl flex items-center justify-center text-agro-primary mx-auto mb-6 group-hover:bg-agro-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">data_object</span>
                </div>
                <p className="font-bold mb-1">GitHub</p>
                <p className="text-sm text-agro-on-surface-variant">Code & Data</p>
              </a>
            </div>
            <button className="bg-agro-primary text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-agro-primary/20">
              Download Academic CV (PDF)
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgroTwo;
