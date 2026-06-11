import React from 'react';
import FadeIn from '../../common/FadeIn';
import Card, { CardBody } from '../../common/Card';
import Badge from '../../common/Badge';
import { motion } from 'framer-motion';

const HealthBasic = ({ data }) => {
  const { profile, rotations, certifications } = data;

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 selection:bg-health-teal selection:text-white">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-health-teal to-health-cyan text-white pt-28 pb-32 px-8 text-center overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        
        <FadeIn delay={0.1} className="relative z-10 max-w-4xl mx-auto">
          {profile.image ? (
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={profile.image} 
              alt={profile.name}
              className="w-40 h-40 object-cover mx-auto rounded-full border-4 border-white/30 shadow-2xl mb-8"
            />
          ) : (
            <div className="w-40 h-40 mx-auto bg-white/10 backdrop-blur-md rounded-full border-4 border-white/30 flex items-center justify-center text-5xl mb-8 shadow-2xl text-white font-bold">
              {profile.name.charAt(0)}
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-health-teal-50 bg-white/20 backdrop-blur-md inline-block px-6 py-2 rounded-full font-medium mb-6 border border-white/20 shadow-glass">
            {profile.title}
          </p>
          
          <div className="mt-4">
            <span className="inline-block bg-black/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase border border-white/10 shadow-inner">
              No. STR: {profile.str}
            </span>
          </div>
        </FadeIn>
        
        {/* Decorative Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50 drop-shadow-md">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 -mt-20 relative z-20">
        {/* Bio Section */}
        <FadeIn delay={0.2} direction="up">
          <Card glass hover className="mb-16 border-0 shadow-xl bg-white/80">
            <CardBody className="p-10 text-center">
              <p className="text-xl text-gray-600 leading-relaxed font-light">{profile.bio}</p>
            </CardBody>
          </Card>
        </FadeIn>

        {/* Rotasi Klinis */}
        <section className="mb-20">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-px bg-gradient-to-r from-transparent to-health-cyan flex-1 max-w-[100px]"></div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Rotasi Klinis / Stase</h2>
              <div className="h-px bg-gradient-to-l from-transparent to-health-cyan flex-1 max-w-[100px]"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rotations.map((rot, index) => (
              <FadeIn key={rot.id} delay={0.1 * (index + 1)} direction="up">
                <Card hover className="h-full border-health-teal/10 hover:border-health-teal/30 group">
                  <CardBody className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-gray-900 text-xl group-hover:text-health-teal transition-colors">{rot.department}</h3>
                      <Badge variant="health" glow className="shrink-0">{rot.duration}</Badge>
                    </div>
                    <p className="text-health-cyan font-medium mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      {rot.hospital}
                    </p>
                    {rot.desc && <p className="text-gray-500 text-sm leading-relaxed">{rot.desc}</p>}
                  </CardBody>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Sertifikasi */}
        <section className="mb-10 text-center">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-10">Sertifikasi Medis</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, i) => (
                <FadeIn key={i} delay={0.1 * i} direction="up">
                  <div className="px-6 py-4 bg-white shadow-sm hover:shadow-md transition-all rounded-2xl border border-gray-100 font-semibold text-gray-700 flex items-center gap-3 group hover:-translate-y-1">
                    <div className="w-8 h-8 rounded-full bg-health-teal/10 flex items-center justify-center text-health-teal group-hover:bg-health-teal group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    {cert}
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
};

export default HealthBasic;
