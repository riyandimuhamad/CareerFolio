import React from 'react';

const HealthBasic = ({ data }) => {
  const { profile, rotations, certifications } = data;

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Hero */}
      <div className="bg-health-teal text-white py-20 px-8 text-center rounded-b-[3rem] shadow-md">
        <div className="w-32 h-32 mx-auto bg-white rounded-full border-4 border-health-cyan flex items-center justify-center text-4xl mb-6 shadow-xl text-health-teal font-bold">
          {profile.name.charAt(0)}
        </div>
        <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
        <p className="text-xl text-health-cyan font-semibold mb-4">{profile.title}</p>
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30">
          STR: {profile.str}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Bio */}
        <section className="mb-12 text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{profile.bio}</p>
        </section>

        {/* Rotasi Klinis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-health-teal mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-health-cyan rounded-full"></span>
            Rotasi Klinis / Stase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rotations.map((rot) => (
              <div key={rot.id} className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-gray-50/50">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{rot.department}</h3>
                <p className="text-gray-600 font-medium">{rot.hospital}</p>
                <p className="text-sm text-gray-500 mt-2 bg-white inline-block px-3 py-1 rounded-full border border-gray-200">{rot.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sertifikasi */}
        <section>
          <h2 className="text-2xl font-bold text-health-teal mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-health-cyan rounded-full"></span>
            Sertifikasi Medis
          </h2>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <span key={i} className="px-5 py-3 bg-health-cyan/10 text-health-teal font-bold rounded-xl border border-health-cyan/20">
                {cert}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthBasic;
