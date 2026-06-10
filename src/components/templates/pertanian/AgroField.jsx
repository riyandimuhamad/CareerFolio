import React from 'react';

const AgroField = ({ data }) => {
  const { profile, fieldworks } = data;

  return (
    <div className="bg-[#FAFAF9] min-h-screen font-sans text-gray-800">
      {/* Hero */}
      <div className="bg-gradient-to-br from-agro-green to-[#059669] text-white py-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">{profile.name}</h1>
            <p className="text-2xl text-agro-cream font-medium mb-6">{profile.title}</p>
            <p className="text-lg text-white/90 leading-relaxed border-l-4 border-agro-cream pl-4">{profile.bio}</p>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-64 h-64 bg-agro-cream rounded-tl-[4rem] rounded-br-[4rem] shadow-2xl border-8 border-white/20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Fieldwork */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-agro-green pb-2 inline-block">Proyek Lapangan</h2>
          <div className="space-y-8">
            {fieldworks.map((work) => (
              <div key={work.id} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="md:w-1/3 bg-gray-200 min-h-[200px]"></div>
                <div className="p-8 flex flex-col justify-center md:w-2/3">
                  <div className="uppercase tracking-widest text-sm text-agro-brown font-bold mb-2">{work.location}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{work.project}</h3>
                  <div className="inline-block bg-agro-green/10 text-agro-green font-bold px-4 py-2 rounded-lg">
                    Hasil: {work.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AgroField;
