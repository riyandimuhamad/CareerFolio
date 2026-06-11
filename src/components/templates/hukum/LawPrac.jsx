import React from 'react';
import FadeIn from '../../common/FadeIn';
import { motion } from 'framer-motion';

const LawPrac = ({ data }) => {
  const { profile, cases, publications } = data;

  return (
    <div className="bg-[#FBFBFA] min-h-screen font-sans text-gray-900 selection:bg-law-gold selection:text-law-navy">
      {/* Hero Section */}
      <div className="relative bg-law-navy text-white py-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        {/* Decorative Gold Accents */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-law-navy via-law-gold to-law-navy"></div>
        
        <FadeIn delay={0.1} className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {profile.image ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10 inline-block"
            >
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-48 h-48 object-cover object-top mx-auto rounded-none border-4 border-law-gold/80 shadow-2xl p-2 bg-law-navy"
              />
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 tracking-wide text-white drop-shadow-md">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-law-gold font-serif italic mb-8 tracking-wider">
              {profile.title}
            </p>
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-law-gold to-transparent mb-10"
          ></motion.div>

          <FadeIn delay={0.6}>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed font-light">
              {profile.bio}
            </p>
          </FadeIn>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Main Content - Cases */}
        <div className="md:col-span-8 space-y-12">
          <FadeIn direction="right">
            <h2 className="text-4xl font-serif text-law-navy mb-10 flex items-center gap-4">
              <span className="text-law-gold text-5xl">§</span>
              Pengalaman & Kasus
            </h2>
          </FadeIn>

          <div className="space-y-10">
            {cases.map((c, index) => (
              <FadeIn key={c.id} delay={0.1 * index} direction="up">
                <div className="group bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,31,63,0.1)] transition-all duration-500 rounded-sm relative border border-gray-100 hover:border-law-gold/30">
                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-law-gold group-hover:h-full transition-all duration-500 ease-in-out"></div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-4 text-law-navy group-hover:text-law-burgundy transition-colors">{c.title}</h3>
                  
                  <div className="flex flex-wrap gap-6 text-sm mb-6 pb-6 border-b border-gray-100">
                    <span className="text-gray-500 uppercase tracking-widest font-semibold flex flex-col gap-1">
                      <span className="text-[10px] text-gray-400">PERAN</span>
                      <span className="text-law-navy">{c.role}</span>
                    </span>
                    <span className="w-px bg-gray-200"></span>
                    <span className="text-gray-500 uppercase tracking-widest font-semibold flex flex-col gap-1">
                      <span className="text-[10px] text-gray-400">HASIL</span>
                      <span className="text-law-gold font-bold">{c.outcome}</span>
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-light text-justify">
                    Representasi komprehensif dalam sengketa hukum dan negosiasi strategis. Melakukan due diligence mendalam serta merancang kerangka hukum yang meminimalisir risiko, mencapai hasil maksimal dan efisien bagi klien.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Sidebar - Publications */}
        <div className="md:col-span-4 relative">
          <FadeIn delay={0.3} direction="left" className="sticky top-24">
            <div className="bg-law-navy text-white p-10 shadow-2xl rounded-sm border-t-4 border-t-law-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.8L18.4 19H5.6L12 5.8z"/></svg>
              </div>
              
              <h3 className="text-2xl font-serif text-law-gold mb-8 pb-4 border-b border-law-gold/30">
                Publikasi & Opini
              </h3>
              
              <ul className="space-y-6">
                {publications.map((pub, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-law-gold mt-1 group-hover:scale-125 transition-transform">❖</span>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors leading-relaxed font-light group-hover:font-normal">
                      {pub}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default LawPrac;
