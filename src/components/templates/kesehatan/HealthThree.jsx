import React from 'react';
import FadeIn from '../../common/FadeIn';

const HealthThree = ({ data }) => {
  const { profile, certifications, rotations } = data;

  return (
    <div className="bg-healthpro-surface text-healthpro-on-surface font-sans selection:bg-healthpro-primary-fixed selection:text-healthpro-on-primary-fixed">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-healthpro-outline-variant/20 shadow-sm flex justify-between items-center h-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl text-healthpro-primary tracking-tight font-bold">MedPulse</span>
          <span className="hidden md:inline text-xs text-healthpro-outline px-2 py-1 bg-healthpro-surface-container-high rounded-full uppercase tracking-widest font-semibold">Executive</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#expertise">Expertise</a>
          <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#research">Research</a>
          <a className="text-sm font-medium text-healthpro-on-surface-variant hover:text-healthpro-primary transition-colors" href="#journey">Journey</a>
          <a className="text-sm font-medium px-6 py-2 bg-healthpro-primary text-healthpro-on-primary rounded-full hover:bg-healthpro-primary-container transition-all active:scale-95" href="#contact">Contact Me</a>
        </div>
        <button className="md:hidden text-healthpro-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10 overflow-hidden bg-healthpro-background">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-healthpro-secondary-container/50 rounded-full text-healthpro-on-secondary-container">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-sm font-medium">{profile.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-healthpro-on-background leading-tight">
              Pioneering the Future of <br/>
              <span className="text-healthpro-primary italic">Clinical Excellence</span>
            </h1>
            <p className="text-lg text-healthpro-on-surface-variant max-w-xl">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a className="px-8 py-4 bg-healthpro-primary text-healthpro-on-primary rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-healthpro-primary/20 transition-all active:scale-95" href="#contact">
                Inquire for Collaboration
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="px-8 py-4 border border-healthpro-outline-variant text-healthpro-on-surface rounded-full text-sm font-semibold hover:bg-healthpro-surface-container-high transition-all" href="#research">
                View Research Papers
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-healthpro-primary/10 to-healthpro-secondary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img alt={profile.name} className="w-full h-full object-cover" src={profile.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"}/>
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-xl shadow-xl border border-healthpro-outline-variant/30 hidden md:block max-w-[200px]">
              <p className="text-xs font-semibold text-healthpro-primary mb-1 uppercase tracking-widest">Current Focus</p>
              <p className="text-base font-bold">Molecular Oncology Research</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Clinical Excellence Grid */}
      <section className="py-20 bg-healthpro-surface-bright relative" id="expertise">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Expertise</h2>
            <p className="text-healthpro-on-surface-variant max-w-2xl mx-auto text-lg">Specialized domains focusing on high-impact clinical intervention and medical technology.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise Card 1 */}
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl border border-healthpro-primary/10 hover:border-healthpro-primary/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_0_20px_rgba(128,213,203,0.2)] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-healthpro-secondary-container flex items-center justify-center text-healthpro-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">surgical</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Surgical Foundations</h3>
              <p className="text-healthpro-on-surface-variant leading-relaxed">
                Expertise in pre-operative diagnostics and minimally invasive techniques, maintaining the highest standards of sterile field protocols.
              </p>
            </FadeIn>
            {/* Expertise Card 2 */}
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-healthpro-primary/10 hover:border-healthpro-primary/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_0_20px_rgba(128,213,203,0.2)] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-healthpro-secondary-container flex items-center justify-center text-healthpro-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Clinical Research</h3>
              <p className="text-healthpro-on-surface-variant leading-relaxed">
                Advanced biostatistical analysis and literature review, contributing to evidence-based medical practices in oncology.
              </p>
            </FadeIn>
            {/* Expertise Card 3 */}
            <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl border border-healthpro-primary/10 hover:border-healthpro-primary/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_0_20px_rgba(128,213,203,0.2)] transition-all group">
              <div className="w-14 h-14 rounded-xl bg-healthpro-secondary-container flex items-center justify-center text-healthpro-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">monitoring</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Diagnostic Imaging</h3>
              <p className="text-healthpro-on-surface-variant leading-relaxed">
                High-fidelity interpretation of MRI, CT, and PET scans to facilitate precise patient management and therapeutic planning.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research & Journey Timeline */}
      <section className="py-20 bg-healthpro-surface-container-lowest overflow-hidden" id="research">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <FadeIn className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Academic Journey</h2>
              <p className="text-healthpro-on-surface-variant text-lg mb-8">
                A curated timeline of professional development at world-class institutions and published research breakthroughs.
              </p>
              <div className="bg-healthpro-primary-container text-healthpro-on-primary-container p-6 rounded-2xl shadow-inner">
                <p className="text-sm font-medium mb-2 opacity-80 uppercase tracking-widest">Key Achievement</p>
                <p className="text-2xl font-bold">Published in Lancet Oncology {new Date().getFullYear() - 1}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:w-2/3 space-y-12 relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-px before:bg-healthpro-outline-variant/30">
              {/* Timeline Item 1 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-healthpro-primary flex items-center justify-center z-10 shadow-sm">
                  <span className="material-symbols-outlined text-healthpro-primary text-[20px]">school</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-healthpro-primary mb-2 inline-block tracking-widest uppercase">2021 — PRESENT</span>
                  <h4 className="text-2xl font-bold mb-2">Doctor of Medicine (M.D.) Candidate</h4>
                  <p className="text-healthpro-on-surface-variant mb-4">University Medical Center – Top 1% Excellence Tier</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-healthpro-on-surface-variant text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-healthpro-primary"></span>
                      Honors in Clinical Rotation
                    </li>
                    <li className="flex items-center gap-2 text-healthpro-on-surface-variant text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-healthpro-primary"></span>
                      Surgical Peer Tutor Lead
                    </li>
                  </ul>
                </div>
              </div>
              {/* Timeline Item 2 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-healthpro-primary flex items-center justify-center z-10 shadow-sm">
                  <span className="material-symbols-outlined text-healthpro-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-healthpro-primary mb-2 inline-block tracking-widest uppercase">2022 — 2023</span>
                  <h4 className="text-2xl font-bold mb-2">Lead Research Assistant</h4>
                  <p className="text-healthpro-on-surface-variant mb-4">Oncology Molecular Lab</p>
                  <p className="text-healthpro-on-surface-variant italic">"Investigating protein markers in early-stage Stage II pancreatic adenocarcinoma."</p>
                </div>
              </div>
              {/* Timeline Item 3 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-healthpro-primary flex items-center justify-center z-10 shadow-sm">
                  <span className="material-symbols-outlined text-healthpro-primary text-[20px]">workspace_premium</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-healthpro-primary mb-2 inline-block tracking-widest uppercase">2020</span>
                  <h4 className="text-2xl font-bold mb-2">Bachelor of Biomedical Science</h4>
                  <p className="text-healthpro-on-surface-variant">Graduated with Highest Distinction (GPA 3.98/4.00)</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-healthpro-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-healthpro-primary text-6xl opacity-20 mb-6">format_quote</span>
            <blockquote className="text-2xl md:text-3xl font-bold text-healthpro-on-surface italic mb-8 leading-relaxed">
              "{profile.name.split(' ')[0]} demonstrates a level of clinical maturity far beyond his years. His ability to synthesize complex patient data with emerging research findings makes him an exceptional asset to any medical team."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-healthpro-primary">
                <img alt="Consultant portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYzSpc_CmYucuG26kFi6BQ2gaLjDB9djbJgtzkd32koY6zX2mt93JZ3lu2OwMBQ5PG76QbKMwd9igG33iZ0pDoKUTL8i1_51Y7VVwjfxsD69nkySWm9y3ca6lavzYk74_uG3MTSrBAmywr11i-YpZYoR3ijqWusV8lzDT4gPtD48J5E8R2Y8WQXVWhbLny1kVA_BNO3u-0GAEaVfW1U4jWqu09ESoO-db_ySVSgs-4wQH0EETTTaBO36OhGUGAHd7MSzXEu6vgaUh8"/>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Dr. Sarah Kensington, MD, PhD</p>
                <p className="text-xs text-healthpro-on-surface-variant uppercase tracking-widest">Senior Surgical Consultant</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-healthpro-background">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-12 text-center">Professional Credentials</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-healthpro-outline-variant shadow-sm hover:border-healthpro-primary transition-colors cursor-default">
                  <div className="w-10 h-10 rounded-full bg-healthpro-secondary-container flex items-center justify-center text-healthpro-primary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{cert}</p>
                    <p className="text-xs text-healthpro-on-surface-variant tracking-widest">Certified Verified</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-healthpro-on-surface py-24 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss <br/>the <span className="text-healthpro-primary-fixed-dim">Future.</span></h2>
            <p className="text-lg opacity-80 mb-8">Currently open to research collaborations, clinical internships, and professional networking within the medical community.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-healthpro-primary-fixed-dim">mail</span>
                </div>
                <span className="text-base font-medium">contact@{profile.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.pro</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-healthpro-primary-fixed-dim">location_on</span>
                </div>
                <span className="text-base font-medium">Academic Health System</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-healthpro-outline tracking-widest uppercase">Full Name</label>
                  <input className="w-full bg-healthpro-surface-container-low border-transparent rounded-xl p-4 focus:ring-2 focus:ring-healthpro-primary focus:bg-white transition-all outline-none" placeholder="Dr. John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-healthpro-outline tracking-widest uppercase">Organization</label>
                  <input className="w-full bg-healthpro-surface-container-low border-transparent rounded-xl p-4 focus:ring-2 focus:ring-healthpro-primary focus:bg-white transition-all outline-none" placeholder="Medical Institution" type="text"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-healthpro-outline tracking-widest uppercase">Inquiry Type</label>
                <select className="w-full bg-healthpro-surface-container-low border-transparent rounded-xl p-4 focus:ring-2 focus:ring-healthpro-primary focus:bg-white transition-all outline-none">
                  <option>Research Collaboration</option>
                  <option>Clinical Residency Discussion</option>
                  <option>Professional Networking</option>
                  <option>Speaking Engagement</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-healthpro-outline tracking-widest uppercase">Your Message</label>
                <textarea className="w-full bg-healthpro-surface-container-low border-transparent rounded-xl p-4 focus:ring-2 focus:ring-healthpro-primary focus:bg-white transition-all outline-none" placeholder="How can we advance healthcare together?" rows="4"></textarea>
              </div>
              <button className="w-full py-4 bg-healthpro-primary text-healthpro-on-primary rounded-xl text-sm font-bold shadow-lg hover:shadow-healthpro-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all" type="button">
                Send Message Securely
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HealthThree;
