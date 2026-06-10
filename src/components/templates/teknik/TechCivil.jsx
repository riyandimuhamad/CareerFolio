import React from 'react';

const TechCivil = ({ data }) => {
  const { profile, projects, skills } = data;

  return (
    <div className="bg-gray-50 min-h-screen font-mono text-gray-800">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Blueprint Style Header */}
        <div className="bg-tech-blue p-1 rounded-xl shadow-2xl mb-12">
          <div className="bg-tech-black text-white p-8 md:p-12 border-2 border-tech-blue border-dashed rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
              <div>
                <p className="text-tech-orange font-bold tracking-widest mb-2 uppercase">{"//"} Engineer Profile</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{profile.name}</h1>
                <p className="text-2xl text-gray-400">{profile.title}</p>
              </div>
              <div className="mt-8 md:mt-0 text-right">
                <p className="text-sm text-gray-500 mb-2">ID: ENG-{Math.floor(Math.random() * 10000)}</p>
                <p className="text-sm text-gray-500">REV: 1.0.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-tech-black mb-4 flex items-center">
                <span className="w-3 h-3 bg-tech-orange inline-block mr-3"></span>
                Summary
              </h2>
              <p className="text-gray-600 leading-relaxed font-sans">{profile.bio}</p>
            </div>

            <div className="bg-tech-gray text-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-3 h-3 bg-tech-blue inline-block mr-3"></span>
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-black/30 border border-white/10 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-tech-black mb-6 uppercase tracking-wider">Project Specifications</h2>
            <div className="space-y-6">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-white border-l-4 border-tech-blue p-6 rounded-r-xl shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 font-sans">{proj.name}</h3>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">{proj.role}</span>
                  </div>
                  <div className="bg-gray-50 p-4 border border-gray-200 text-sm text-gray-700">
                    <span className="text-tech-orange font-bold mr-2">Specs:</span> {proj.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCivil;
