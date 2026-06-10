import React from 'react';

const LawPrac = ({ data }) => {
  const { profile, cases, publications } = data;

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-serif text-gray-900">
      {/* Hero */}
      <div className="bg-law-navy text-white text-center py-24 px-4 border-b-8 border-law-gold">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">{profile.name}</h1>
        <p className="text-xl md:text-2xl text-law-gold italic mb-8">{profile.title}</p>
        <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-law-gold to-transparent mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 font-sans leading-relaxed">{profile.bio}</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Cases */}
        <div className="md:col-span-8">
          <h2 className="text-3xl font-bold text-law-navy mb-8 flex items-center">
            <span className="text-law-gold mr-3">§</span>
            Pengalaman & Kasus
          </h2>
          <div className="space-y-8">
            {cases.map((c) => (
              <div key={c.id} className="bg-white p-8 shadow-sm border border-gray-200 rounded-sm relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-law-burgundy"></div>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-4 font-sans text-sm mb-4">
                  <span className="text-gray-500 font-semibold">Peran: <span className="text-gray-900">{c.role}</span></span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500 font-semibold">Hasil: <span className="text-law-gold">{c.outcome}</span></span>
                </div>
                <p className="text-gray-600 font-sans leading-relaxed">Representasi komprehensif dalam sengketa hukum dan negosiasi strategis, mencapai hasil maksimal bagi klien.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4">
          <div className="bg-white p-8 shadow-sm border border-gray-200 border-t-4 border-t-law-gold">
            <h3 className="text-xl font-bold text-law-navy mb-6 text-center border-b pb-4">Publikasi</h3>
            <ul className="space-y-4 font-sans">
              {publications.map((pub, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-law-burgundy mr-2">▪</span>
                  <a href="#" className="text-gray-700 hover:text-law-navy transition-colors">{pub}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawPrac;
