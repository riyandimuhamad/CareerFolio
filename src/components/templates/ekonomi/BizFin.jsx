import React from 'react';

const BizFin = ({ data }) => {
  const { profile, metrics, certifications } = data;

  return (
    <div className="bg-[#0A192F] min-h-screen font-sans text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Header Dashboard */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="text-biz-gold tracking-widest text-sm font-bold uppercase mb-2">Financial Analyst Portfolio</div>
            <h1 className="text-5xl font-bold text-white mb-2">{profile.name}</h1>
            <p className="text-xl text-gray-400">{profile.title}</p>
          </div>
          <div className="mt-6 md:mt-0 bg-white/5 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10">
            <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Status</span>
            <span className="flex items-center text-green-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Open to Opportunities
            </span>
          </div>
        </header>

        {/* Exec Summary */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-biz-gold mr-3">#</span> Executive Summary
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl border-l-2 border-biz-gold pl-6">
            {profile.bio}
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-biz-gold mr-3">#</span> Key Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="bg-[#112240] p-8 rounded-xl border border-white/5 hover:border-biz-gold/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-biz-gold/5 rounded-bl-[100px] -z-10 group-hover:bg-biz-gold/10 transition-colors"></div>
                <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">{m.label}</div>
                <div className="text-4xl font-bold text-white">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-biz-gold mr-3">#</span> Certifications
          </h2>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-biz-blue/20 text-biz-blue px-6 py-3 rounded border border-biz-blue/30 font-bold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BizFin;
