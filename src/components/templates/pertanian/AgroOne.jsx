import React, { useEffect } from 'react';

const AgroOne = ({ data }) => {
  const { profile, fieldworks } = data;

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
    <div className="bg-agro-surface font-sans text-agro-on-surface selection:bg-agro-primary-container selection:text-agro-on-primary-container overflow-x-hidden">
      {/* Header Navigation */}
      <header className="bg-agro-surface/80 backdrop-blur-xl border-b border-white/20 shadow-sm sticky top-0 w-full z-40 h-20">
        <nav className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto h-full">
          <div className="text-2xl font-bold text-agro-primary tracking-tight">{profile.name}</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-agro-on-surface-variant hover:text-agro-primary font-medium transition-opacity duration-300" href="#education">Education</a>
            <a className="text-agro-on-surface-variant hover:text-agro-primary font-medium transition-opacity duration-300" href="#experience">Experience</a>
            <a className="text-agro-on-surface-variant hover:text-agro-primary font-medium transition-opacity duration-300" href="#projects">Research</a>
            <a className="bg-agro-primary text-agro-on-primary px-6 py-2 rounded-full font-medium scale-95 active:scale-90 transition-transform hover:opacity-80 shadow-sm" href="#contact">Contact Me</a>
          </div>
          <button className="md:hidden text-agro-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden bg-gradient-to-br from-agro-primary/10 via-agro-surface to-agro-secondary-container/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-white/40 shadow-sm rounded-full mb-6">
                <span className="material-symbols-outlined text-agro-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                <span className="text-sm font-semibold text-agro-primary tracking-wider uppercase">Field Expert</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-agro-on-surface leading-tight tracking-tight">{profile.name}</h1>
              <p className="text-2xl font-semibold text-agro-secondary mb-8 leading-tight">{profile.title}</p>
              <p className="text-lg text-agro-on-surface-variant max-w-xl mb-10 leading-relaxed">
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="bg-agro-primary text-agro-on-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-agro-primary/20" href="#projects">
                  Explore Fieldwork
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="relative flex justify-center animate-on-scroll delay-200">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-agro-secondary-container/20 rounded-full blur-3xl animate-pulse"></div>
                <img alt={profile.name} className="w-full h-full object-cover rounded-full shadow-[0_0_20px_rgba(0,93,66,0.3)] border-[3px] border-agro-primary relative z-10" src={profile.image || "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2000&auto=format&fit=crop"}/>
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl z-20 shadow-xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-agro-primary-container rounded-full flex items-center justify-center text-agro-on-primary-container">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-agro-on-surface">IoT Expert</p>
                      <p className="text-xs text-agro-on-surface-variant">Precision Farming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-agro-surface" id="education">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-12 animate-on-scroll">
              <span className="text-agro-primary text-sm font-bold uppercase tracking-widest block mb-2">Academic Background</span>
              <h2 className="text-4xl font-bold text-agro-on-surface">Education</h2>
            </div>
            <div className="space-y-8 animate-on-scroll">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 border-l-agro-primary border border-white/20">
                <div>
                  <h3 className="text-2xl font-bold text-agro-on-surface">M.S. in Sustainable Agriculture</h3>
                  <p className="text-agro-primary font-medium mt-1">Global Agri-Tech University</p>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <span className="text-xs bg-agro-primary/10 text-agro-primary px-3 py-1 rounded-full font-bold tracking-widest">GPA: 3.95/4.0</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm font-medium text-agro-on-surface-variant">Conferred 2024</p>
                  <p className="text-xs text-agro-on-surface-variant mt-1 italic">Thesis: IoT integration in paddy fields</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fieldwork & Projects Section */}
        <section className="py-20 bg-agro-surface-container-low" id="projects">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-12 animate-on-scroll">
              <span className="text-agro-primary text-sm font-bold uppercase tracking-widest block mb-2">Project Portfolio</span>
              <h2 className="text-4xl font-bold text-agro-on-surface">Featured Fieldwork</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fieldworks.map((work, i) => (
                <div key={work.id} className="group bg-white border border-agro-surface-variant rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="h-48 overflow-hidden relative">
                    <img alt={work.project} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={`https://source.unsplash.com/random/800x600/?agriculture,farm,${i}`}/>
                    <div className="absolute top-4 left-4">
                      <span className="bg-agro-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">{work.location}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-agro-on-surface">{work.project}</h3>
                    <p className="text-agro-on-surface-variant text-sm mb-4 line-clamp-3">{work.desc}</p>
                    <div className="space-y-4">
                      <div className="pt-4 border-t border-agro-surface-variant flex justify-between items-center">
                        <span className="text-agro-on-surface-variant text-xs italic">Impact / Result</span>
                        <span className="text-agro-primary font-bold text-sm bg-agro-primary/10 px-2 py-1 rounded">{work.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-agro-surface" id="contact">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-agro-on-surface">Let's Connect</h2>
            <p className="text-lg text-agro-on-surface-variant mb-12">
              I am actively seeking research partnerships and industry roles. Reach out if you'd like to discuss my fieldwork or potential collaborations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a className="p-6 bg-agro-surface-container-low rounded-2xl hover:bg-agro-primary/5 transition-colors border border-agro-surface-variant group flex flex-col items-center" href={`mailto:contact@${profile.name.toLowerCase().replace(/[^a-z]/g, '')}.com`}>
                <span className="material-symbols-outlined text-agro-primary mb-4 block scale-125 group-hover:scale-150 transition-transform">mail</span>
                <p className="text-sm font-bold">Email</p>
                <p className="text-xs text-agro-on-surface-variant mt-1">Direct Message</p>
              </a>
              <a className="p-6 bg-agro-surface-container-low rounded-2xl hover:bg-agro-primary/5 transition-colors border border-agro-surface-variant group flex flex-col items-center" href="#">
                <span className="material-symbols-outlined text-agro-primary mb-4 block scale-125 group-hover:scale-150 transition-transform">share</span>
                <p className="text-sm font-bold">LinkedIn</p>
                <p className="text-xs text-agro-on-surface-variant mt-1">Professional Network</p>
              </a>
              <a className="p-6 bg-agro-surface-container-low rounded-2xl hover:bg-agro-primary/5 transition-colors border border-agro-surface-variant group flex flex-col items-center" href="#">
                <span className="material-symbols-outlined text-agro-primary mb-4 block scale-125 group-hover:scale-150 transition-transform">article</span>
                <p className="text-sm font-bold">Publications</p>
                <p className="text-xs text-agro-on-surface-variant mt-1">Research Papers</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgroOne;
