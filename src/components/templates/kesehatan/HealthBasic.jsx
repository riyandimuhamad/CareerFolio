import React, { useEffect } from 'react';
import FadeIn from '../../common/FadeIn';

const HealthBasic = ({ data }) => {
  const { profile, rotations, certifications } = data;

  useEffect(() => {
    // Add Google Material Icons stylesheet specifically for this template
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="bg-healthpro-surface text-healthpro-on-surface font-sans">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-40 bg-white/70 backdrop-blur-md shadow-sm border-b border-healthpro-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-healthpro-primary">CareerFolio Health</div>
          <div className="hidden lg:flex items-center gap-6">
            <a className="text-sm uppercase tracking-wide text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors duration-300" href="#bio">Bio</a>
            <a className="text-sm uppercase tracking-wide text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors duration-300" href="#rotations">Experience</a>
            <a className="text-sm uppercase tracking-wide text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors duration-300" href="#certifications">Credentials</a>
          </div>
          <button 
            className="bg-healthpro-primary text-white px-6 py-2 rounded-full text-sm hover:bg-healthpro-primary-container transition-all duration-300 shadow-md" 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            Inquiry
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
          <FadeIn className="relative z-10 text-center px-4">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-healthpro-primary-container shadow-[0_0_15px_rgba(15,118,110,0.4)] mx-auto">
                <img alt={profile.name} className="w-full h-full object-cover" src={profile.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"}/>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl shadow-lg border border-healthpro-primary/20">
                <span className="text-xs font-bold text-healthpro-primary uppercase tracking-tighter">Registration</span>
                <p className="text-sm font-mono text-healthpro-on-surface-variant">STR: {profile.str}</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-healthpro-on-surface mb-2 tracking-tight">{profile.name}</h1>
            <p className="text-xl md:text-2xl text-healthpro-primary-container font-medium mb-8">{profile.title}</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a className="bg-healthpro-primary text-white px-8 py-4 rounded-full text-sm font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1" href="#rotations">View Credentials</a>
              <a className="bg-healthpro-secondary-container text-healthpro-on-secondary-container px-8 py-4 rounded-full text-sm font-semibold hover:shadow-md transition-all" href="#bio">Read Professional Bio</a>
            </div>
          </FadeIn>
        </section>

        {/* Bio Section */}
        <section className="py-20 px-4 bg-healthpro-surface-container-low" id="bio">
          <FadeIn className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-healthpro-primary mb-12 text-center">Dedicated to clinical excellence and compassionate care.</h2>
            <div className="text-healthpro-on-surface-variant leading-relaxed text-lg text-justify">
              <p className="mb-6">{profile.bio}</p>
            </div>
          </FadeIn>
        </section>

        {/* Clinical Experience Section */}
        <section className="py-20 px-4 bg-healthpro-surface-dim" id="rotations">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-16">
              <h2 className="text-4xl font-bold text-healthpro-primary text-center">Clinical Experience</h2>
              <p className="text-center text-healthpro-on-surface-variant mt-4">Hands-on clinical training across diverse medical departments</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rotations.map((rot, idx) => (
                <FadeIn key={rot.id} delay={0.1 * idx} className="bg-white/80 backdrop-blur-xl border border-healthpro-primary/30 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <div className="w-12 h-12 bg-healthpro-secondary-container rounded-lg flex items-center justify-center text-healthpro-primary-container mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>local_hospital</span>
                  </div>
                  <h3 className="text-xl font-bold text-healthpro-on-surface mb-2">{rot.department}</h3>
                  <p className="text-healthpro-primary font-medium mb-4">{rot.hospital}</p>
                  <p className="text-healthpro-on-surface-variant text-sm mb-4 leading-relaxed">{rot.desc}</p>
                  <div className="flex items-center gap-2 text-healthpro-on-surface-variant mt-auto">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="text-sm font-semibold">{rot.duration}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 px-4 bg-healthpro-surface-container-low" id="certifications">
          <FadeIn className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-healthpro-primary mb-12">Credentials & Certifications</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white border border-healthpro-primary/20 px-8 py-3 rounded-full shadow-sm hover:shadow-md hover:border-healthpro-primary transition-all cursor-default group relative overflow-hidden">
                  <span className="text-healthpro-primary-container font-bold text-lg group-hover:text-healthpro-primary relative z-10">{cert}</span>
                  <div className="absolute inset-0 bg-healthpro-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-healthpro-on-surface-variant italic">All credentials verified as of {new Date().getFullYear()}</p>
          </FadeIn>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white" id="contact">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <FadeIn>
                <h2 className="text-4xl font-bold text-healthpro-primary mb-6 text-left">Get in Touch</h2>
                <p className="text-healthpro-on-surface-variant mb-12 text-lg">Open to clinical observation opportunities, patient consultations, and professional networking within the healthcare sector.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-healthpro-primary/10 rounded-full flex items-center justify-center text-healthpro-primary">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <span className="text-healthpro-on-surface font-medium">contact@{profile.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-healthpro-primary/20">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-healthpro-on-surface-variant">Name</label>
                    <input className="w-full bg-healthpro-surface border border-healthpro-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-healthpro-primary/20 focus:border-healthpro-primary outline-none transition-all" placeholder="Jane Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-healthpro-on-surface-variant">Email Address</label>
                    <input className="w-full bg-healthpro-surface border border-healthpro-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-healthpro-primary/20 focus:border-healthpro-primary outline-none transition-all" placeholder="jane@hospital.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-healthpro-on-surface-variant">Message</label>
                    <textarea className="w-full bg-healthpro-surface border border-healthpro-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-healthpro-primary/20 focus:border-healthpro-primary outline-none transition-all" placeholder="How can we collaborate?" rows="4"></textarea>
                  </div>
                  <button className="w-full bg-healthpro-primary text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-healthpro-primary-container transition-all shadow-lg" type="button">Send Inquiry</button>
                </form>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HealthBasic;
