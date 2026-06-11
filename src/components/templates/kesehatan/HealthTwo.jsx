import React from 'react';
import FadeIn from '../../common/FadeIn';

const HealthTwo = ({ data }) => {
  const { profile, rotations } = data;

  return (
    <div className="bg-healthpro-background text-healthpro-on-surface font-sans overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 w-full z-40 bg-healthpro-surface/70 backdrop-blur-xl border-b border-healthpro-outline-variant/20 shadow-sm h-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <div className="text-2xl font-bold text-healthpro-primary tracking-tight">Clinical Excellence</div>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#rotations">Rotations</a>
            <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#research">Research</a>
            <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#achievements">Achievements</a>
            <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#contact">Contact</a>
            <button className="bg-healthpro-primary text-healthpro-on-primary px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-all">Download CV</button>
          </nav>
          <button className="md:hidden text-healthpro-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>menu</span>
          </button>
        </div>
      </header>

      <main>
        {/* Split-Screen Hero Section */}
        <section className="min-h-[85vh] flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-10 items-center gap-12 py-12 md:py-20">
          <FadeIn className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-healthpro-primary font-bold tracking-widest text-sm mb-4 uppercase">MEDICAL STUDENT PORTFOLIO</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-healthpro-on-background mb-6 leading-tight">
              Shaping the Future of <span className="text-healthpro-primary-container">Patient-Centered</span> Care.
            </h1>
            <p className="text-lg text-healthpro-on-surface-variant mb-10 max-w-md">
              {profile.name} — {profile.title} committed to merging clinical precision with empathetic advocacy in modern healthcare.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-healthpro-primary text-healthpro-on-primary px-8 py-4 rounded-xl text-sm font-bold shadow-lg hover:shadow-healthpro-primary/20 transition-all">Explore Clinical Work</button>
              <button className="bg-healthpro-secondary-container text-healthpro-on-secondary-container px-8 py-4 rounded-xl text-sm font-bold hover:bg-healthpro-secondary-fixed transition-all">View Research</button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-healthpro-secondary rounded-2xl opacity-20 [clip-path:polygon(10%_0%,_100%_0%,_90%_100%,_0%_100%)]"></div>
              <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-healthpro-primary/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden [clip-path:polygon(10%_0%,_100%_0%,_90%_100%,_0%_100%)]">
                <img alt={profile.name} className="w-full h-full object-cover" src={profile.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"}/>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-healthpro-primary-fixed p-3 rounded-full flex items-center">
                  <span className="material-symbols-outlined text-healthpro-primary" style={{ fontVariationSettings: "'FILL' 1" }}>medical_information</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-healthpro-on-surface-variant">GPA Status</p>
                  <p className="text-2xl font-bold text-healthpro-primary">3.98/4.00</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Bio & Mission (Asymmetric Bento) */}
        <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <FadeIn className="md:col-span-8 bg-healthpro-surface-container-low p-10 rounded-2xl">
              <h2 className="text-2xl font-bold text-healthpro-primary mb-6">Mission & Clinical Philosophy</h2>
              <p className="text-lg text-healthpro-on-surface-variant leading-relaxed mb-6">
                {profile.bio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-healthpro-primary">verified_user</span>
                  <div>
                    <p className="font-bold">Patient Advocacy</p>
                    <p className="text-sm text-healthpro-on-surface-variant">Prioritizing patient voices in complex treatment planning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-healthpro-primary">biotech</span>
                  <div>
                    <p className="font-bold">Evidence-Based</p>
                    <p className="text-sm text-healthpro-on-surface-variant">Integrating the latest clinical research into daily practice.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div className="md:col-span-4 flex flex-col gap-6">
              <FadeIn delay={0.1} className="bg-healthpro-primary p-8 rounded-2xl text-healthpro-on-primary flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2">1,200+</h3>
                <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Clinical Hours</p>
              </FadeIn>
              <FadeIn delay={0.2} className="bg-healthpro-secondary p-8 rounded-2xl text-healthpro-on-secondary flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2">04</h3>
                <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Research Papers</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline Section (Academic Path) */}
        <section className="py-20 bg-healthpro-surface-container px-4 md:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-healthpro-primary mb-12 text-center">Education & Training Timeline</h2>
            <FadeIn className="relative pl-12 space-y-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-healthpro-primary-container before:to-healthpro-secondary-container">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-4 h-4 rounded-full bg-healthpro-primary border-4 border-white shadow-md"></div>
                <div className="bg-white/70 backdrop-blur-xl border border-healthpro-primary/10 shadow-sm p-8 rounded-2xl max-w-3xl border-l-4 border-l-healthpro-primary">
                  <span className="text-healthpro-primary font-bold text-sm block mb-2 tracking-widest">2021 — PRESENT</span>
                  <h3 className="text-2xl font-bold mb-2">Doctor of Medicine (MD) Candidate</h3>
                  <p className="font-bold text-healthpro-on-surface-variant mb-4">University of Medical Sciences</p>
                  <ul className="list-disc list-inside space-y-2 text-healthpro-on-surface-variant">
                    <li>Top 5% of class, consistently on Dean's List.</li>
                    <li>Lead Coordinator for Medical Student Outreach Programs.</li>
                    <li>Focused elective in Advanced Cardiology and Diagnostics.</li>
                  </ul>
                </div>
              </div>
              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-4 h-4 rounded-full bg-healthpro-secondary border-4 border-white shadow-md"></div>
                <div className="bg-white/70 backdrop-blur-xl border border-healthpro-primary/10 shadow-sm p-8 rounded-2xl max-w-3xl border-l-4 border-l-healthpro-secondary">
                  <span className="text-healthpro-secondary font-bold text-sm block mb-2 tracking-widest">2017 — 2021</span>
                  <h3 className="text-2xl font-bold mb-2">B.Sc. in Biomedical Engineering</h3>
                  <p className="font-bold text-healthpro-on-surface-variant mb-4">National Institute of Technology</p>
                  <p className="text-healthpro-on-surface-variant">Graduated with High Honors. Specialized in medical imaging and bio-sensor development, providing a unique technical foundation for clinical practice.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Side-by-Side Content Blocks (Rotations & Research) */}
        <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto" id="rotations">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Rotations */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-healthpro-primary/10 p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-healthpro-primary text-3xl">stethoscope</span>
                </div>
                <h2 className="text-2xl font-bold">Clinical Rotations</h2>
              </div>
              <div className="space-y-6">
                {rotations.map((rot, i) => (
                  <div key={i} className="p-6 border border-healthpro-outline-variant/30 rounded-2xl hover:border-healthpro-primary-container hover:shadow-[0_0_15px_rgba(15,118,110,0.2)] transition-all bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{rot.department}</h4>
                        <p className="text-sm text-healthpro-primary font-medium">{rot.hospital} • {rot.duration}</p>
                      </div>
                      {i === 0 && <span className="bg-healthpro-primary-fixed text-healthpro-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase">Honors</span>}
                    </div>
                    <p className="text-healthpro-on-surface-variant">{rot.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            {/* Research */}
            <FadeIn delay={0.2} id="research">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-healthpro-secondary/10 p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-healthpro-secondary text-3xl">experiment</span>
                </div>
                <h2 className="text-2xl font-bold">Research Focus</h2>
              </div>
              <div className="space-y-6">
                <div className="p-6 border border-healthpro-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-healthpro-primary-container transition-all">
                  <h4 className="font-bold text-lg mb-2">AI-Driven Early Diagnostics</h4>
                  <p className="text-sm text-healthpro-on-surface-variant mb-4 font-semibold">Primary Researcher • 2023</p>
                  <p className="text-healthpro-on-surface-variant mb-4">Investigating the application of machine learning in interpreting early-stage cardiovascular anomalies from ECG data.</p>
                  <a className="text-healthpro-primary font-bold text-sm flex items-center gap-1 hover:underline" href="#">
                    View Publication <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
                <div className="p-8 bg-healthpro-inverse-surface text-healthpro-inverse-on-surface rounded-2xl">
                  <span className="material-symbols-outlined text-healthpro-secondary-fixed text-4xl mb-4">clinical_notes</span>
                  <h4 className="font-bold text-xl mb-2 text-white">Public Health Policy</h4>
                  <p className="text-gray-300">Collaborating with regional boards to optimize digital health record accessibility for rural communities.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-healthpro-primary mb-6">Let's Connect</h2>
              <p className="text-lg text-healthpro-on-surface-variant mb-8">
                Interested in collaboration or clinical opportunities? I'm always open to discussing research, elective placements, and health innovation projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-healthpro-primary/10 p-3 rounded-full">
                    <span className="material-symbols-outlined text-healthpro-primary">mail</span>
                  </div>
                  <span className="font-medium text-healthpro-on-surface">contact@{profile.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.edu</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white/70 backdrop-blur-xl border border-healthpro-primary/10 p-8 md:p-12 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)]">
              <form className="space-y-6">
                <div>
                  <label className="block font-bold text-sm mb-2 text-healthpro-on-surface-variant">Full Name</label>
                  <input className="w-full bg-healthpro-surface-container border-none focus:ring-2 focus:ring-healthpro-primary rounded-xl p-4 transition-all outline-none" placeholder="Enter your name" type="text"/>
                </div>
                <div>
                  <label className="block font-bold text-sm mb-2 text-healthpro-on-surface-variant">Email Address</label>
                  <input className="w-full bg-healthpro-surface-container border-none focus:ring-2 focus:ring-healthpro-primary rounded-xl p-4 transition-all outline-none" placeholder="your@email.com" type="email"/>
                </div>
                <div>
                  <label className="block font-bold text-sm mb-2 text-healthpro-on-surface-variant">Message</label>
                  <textarea className="w-full bg-healthpro-surface-container border-none focus:ring-2 focus:ring-healthpro-primary rounded-xl p-4 transition-all outline-none" placeholder="How can we collaborate?" rows="4"></textarea>
                </div>
                <button className="w-full bg-healthpro-primary text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all" type="button">Send Message</button>
              </form>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HealthTwo;
