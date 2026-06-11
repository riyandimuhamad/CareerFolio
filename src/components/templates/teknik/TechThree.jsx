import React, { useEffect, useRef } from 'react';

const TechThree = ({ data }) => {
  const { profile, fieldworks } = data;
  const canvasRef = useRef(null);

  useEffect(() => {
    // WebGL Background Animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

float grid(vec2 uv, float spacing) {
    vec2 grid = abs(fract(uv * spacing - 0.5) - 0.5) / fwidth(uv * spacing);
    return 1.0 - min(grid.x, grid.y);
}

void main() {
    vec2 uv = v_texCoord;
    
    // Background color: Deep Slate
    vec3 color = vec3(0.058, 0.09, 0.164); // #0f172a
    
    // Subtle grid lines
    float g1 = grid(uv, 10.0) * 0.05;
    float g2 = grid(uv, 2.0) * 0.1;
    color += (g1 + g2);
    
    // Moving technical "scanned" lines
    float scanline = sin(uv.y * 100.0 + u_time * 2.0) * 0.02;
    color += scanline;
    
    // Faint diagonal blueprint lines
    float diag = sin((uv.x + uv.y) * 50.0 + u_time * 0.5) * 0.01;
    color += diag;

    gl_FragColor = vec4(color, 1.0);
}`;
    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMoveGL = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMoveGL);

    let animationFrameId;
    function render(t) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMoveGL);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Mouse Tracking Glow
    let glowInterval;
    const handleMouseMoveGlow = (e) => {
      const cards = document.querySelectorAll('.mouse-glow');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          card.style.borderColor = `rgba(167, 58, 0, ${0.4 + (Math.sin(Date.now() / 1000) * 0.2)})`;
        } else {
          card.style.borderColor = '';
        }
      });
    };
    document.addEventListener('mousemove', handleMouseMoveGlow);
    return () => document.removeEventListener('mousemove', handleMouseMoveGlow);
  }, []);

  useEffect(() => {
    // Initial loading state animation
    const dataBlocks = document.querySelectorAll('.data-block-animate');
    dataBlocks.forEach(block => {
      const originalText = block.innerText;
      block.innerText = 'FETCHING...';
      setTimeout(() => {
        block.innerText = originalText;
        block.classList.add('animate-pulse');
        setTimeout(() => block.classList.remove('animate-pulse'), 1000);
      }, Math.random() * 2000 + 500);
    });
  }, []);

  return (
    <>
      <style>{`
        .bg-grid-dot-pattern {
            background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .blueprint-glass {
            background: rgba(246, 250, 254, 0.85);
            backdrop-filter: blur(12px);
            border: 1px solid #76777d;
        }
        .drafting-tape {
            position: relative;
        }
        .drafting-tape::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            width: 20px;
            height: 20px;
            background: #fde68a;
            opacity: 0.6;
            transform: rotate(-15deg);
            z-index: 10;
        }
        .mouse-glow {
            transition: box-shadow 0.3s ease;
        }
        .mouse-glow:hover {
            box-shadow: 0 0 15px 2px rgba(167, 58, 0, 0.4);
        }
        @keyframes scroll-log {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-scroll-log {
            animation: scroll-log 20s linear infinite;
        }
        .reveal-staggered > * {
            opacity: 0;
            transform: translateY(20px);
            animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes reveal {
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <div className="bg-tech-surface font-sans text-tech-on-surface selection:bg-tech-secondary-container selection:text-tech-on-secondary-container overflow-x-hidden min-h-screen flex flex-col relative">
        
        {/* Global WebGL Background */}
        <div className="fixed inset-0 z-[0]">
          <div className="absolute inset-0 w-full h-full opacity-40">
            <canvas ref={canvasRef} className="w-full h-full block"></canvas>
          </div>
        </div>

        {/* SIDE NAVIGATION (Desktop Only) */}
        <aside className="hidden md:flex flex-col h-full border-r border-tech-outline-variant fixed left-0 top-0 w-64 bg-tech-surface-container/90 backdrop-blur-md z-50">
          <div className="p-4 border-b border-tech-outline-variant">
            <h1 className="font-mono text-sm uppercase text-tech-primary font-bold">REF_NO: 0042</h1>
            <p className="font-mono text-xs text-tech-on-surface-variant opacity-70">STATUS: ONLINE</p>
          </div>
          <nav className="flex-1 py-4">
            <div className="space-y-1">
              <a className="bg-tech-secondary text-tech-on-secondary font-bold flex items-center gap-2 p-3 border-r-4 border-tech-primary scale-95 transition-all" href="#">
                <span className="material-symbols-outlined">architecture</span>
                <span className="font-mono text-xs">Blueprints</span>
              </a>
              <a className="text-tech-on-surface-variant flex items-center gap-2 p-3 font-mono text-xs hover:bg-tech-surface-container-highest transition-all" href="#">
                <span className="material-symbols-outlined">assignment</span>
                <span>Spec Sheet</span>
              </a>
              <a className="text-tech-on-surface-variant flex items-center gap-2 p-3 font-mono text-xs hover:bg-tech-surface-container-highest transition-all" href="#">
                <span className="material-symbols-outlined">verified_user</span>
                <span>Credentials</span>
              </a>
              <a className="text-tech-on-surface-variant flex items-center gap-2 p-3 font-mono text-xs hover:bg-tech-surface-container-highest transition-all" href="#">
                <span className="material-symbols-outlined">analytics</span>
                <span>System Status</span>
              </a>
            </div>
          </nav>
          <div className="p-4 border-t border-tech-outline-variant">
            <button className="w-full bg-tech-secondary text-tech-on-secondary py-3 font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
              GENERATE_REPORT
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT CANVAS */}
        <main className="md:ml-64 flex-1 flex flex-col relative z-10">
          
          {/* TOP APP BAR */}
          <header className="flex justify-between items-center w-full px-4 md:px-10 py-4 border-b border-tech-outline-variant sticky top-0 bg-tech-surface/80 backdrop-blur-sm z-40">
            <div className="flex items-center gap-4">
              <div className="font-mono text-sm font-bold tracking-tighter text-tech-primary">PROJECT_CORE_v1.0</div>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative hidden sm:block">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-tech-outline">search</span>
                <input className="pl-10 pr-4 py-1.5 bg-tech-surface-container border border-tech-outline-variant font-mono text-xs focus:border-tech-secondary outline-none w-48" placeholder="CMD_SEARCH..." type="text"/>
              </div>
              <span className="material-symbols-outlined text-tech-primary cursor-pointer hover:opacity-70">sensors</span>
              <img alt="USER_REF" className="w-8 h-8 rounded-full border border-tech-outline shadow-sm object-cover" src={profile.image || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=200&auto=format&fit=crop"}/>
            </div>
          </header>

          {/* HERO: IDENTITY TERMINAL */}
          <section className="p-4 md:p-10 reveal-staggered">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Terminal Card */}
              <div className="lg:col-span-8 blueprint-glass border-2 border-tech-primary drafting-tape p-8 flex flex-col md:flex-row gap-8 min-h-[400px]">
                <div className="w-full md:w-1/3 aspect-square bg-tech-primary-container relative overflow-hidden flex items-center justify-center border border-tech-outline group">
                  <img alt="3D Profile Wireframe" className="w-full h-full object-cover opacity-50 mix-blend-screen group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"/>
                  <div className="absolute inset-0 border-[10px] border-tech-surface/5"></div>
                  <div className="absolute bottom-2 left-2 font-mono text-[10px] text-tech-on-primary-container">SCAN_REv.42.0</div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className="bg-tech-secondary-container text-tech-on-secondary-container px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">Master Engineer</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-2 uppercase">{profile.name}</h2>
                    <p className="font-mono text-xs text-tech-secondary font-bold uppercase">{profile.title} // REG: 88-X</p>
                  </div>
                  <div className="flex-1 border-t border-tech-outline-variant pt-4 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] font-mono text-tech-outline uppercase">Uptime</div>
                        <div className="font-mono font-bold text-sm data-block-animate">99.98% / OPTIMAL</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-tech-outline uppercase">Location</div>
                        <div className="font-mono font-bold text-sm data-block-animate">40.7128° N, 74.0060° W</div>
                      </div>
                    </div>
                    <div className="bg-tech-primary-container/10 p-3 rounded-sm border border-dashed border-tech-outline">
                      <div className="text-[10px] font-mono text-tech-outline mb-1 uppercase">Active Workflow</div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-tech-secondary animate-pulse"></div>
                        <div className="font-mono text-xs italic">Simulating load on module...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Log Sidebar */}
              <div className="lg:col-span-4 blueprint-glass border border-tech-outline p-4 overflow-hidden relative h-[400px]">
                <div className="absolute top-0 left-0 w-full bg-tech-surface-container p-2 border-b border-tech-outline z-10 flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold">SYSTEM_LOG_OUTPUT</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="pt-10 h-full overflow-hidden relative">
                  <div className="animate-scroll-log space-y-2 text-tech-on-surface-variant font-mono text-[11px] leading-tight absolute w-full">
                    <p>[14:02:11] INITIALIZING PROJECT_CORE_v1.0...</p>
                    <p>[14:02:12] AUTHENTICATION GRANTED: ENGINEER_PROFILE</p>
                    <p>[14:02:15] LOADING BLUEPRINT: STRUCTURAL_01.dwg</p>
                    <p className="text-tech-secondary">[14:03:00] WARNING: SHEAR STRESS AT 88% CAPACITY</p>
                    <p>[14:03:10] OPTIMIZING TRUSS GEOMETRY...</p>
                    <p>[14:04:45] RENDER SEQUENCE COMPLETE.</p>
                    <p>[14:05:01] UPLOADING DATA TO CENTRAL SERVER...</p>
                    <p>[14:05:30] CONNECTION STABLE. LATENCY: 12ms</p>
                    <p>[14:06:12] SESSION ID: 0x44F9210BC</p>
                    <p>[14:07:05] PARSING METADATA: CREDENTIALS_LIST</p>
                    <p>[14:08:22] CACHE CLEARED.</p>
                    <p>[14:09:00] STATUS: IDLE</p>
                    {/* Duplicate for looping */}
                    <p>[14:02:11] INITIALIZING PROJECT_CORE_v1.0...</p>
                    <p>[14:02:12] AUTHENTICATION GRANTED: ENGINEER_PROFILE</p>
                    <p>[14:02:15] LOADING BLUEPRINT: STRUCTURAL_01.dwg</p>
                    <p className="text-tech-secondary">[14:03:00] WARNING: SHEAR STRESS AT 88% CAPACITY</p>
                    <p>[14:03:10] OPTIMIZING TRUSS GEOMETRY...</p>
                    <p>[14:04:45] RENDER SEQUENCE COMPLETE.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS: INTERACTIVE SCHEMATIC CARDS */}
          <section className="px-4 md:px-10 py-12 bg-grid-dot-pattern reveal-staggered" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-end justify-between mb-8 border-b-2 border-tech-primary pb-4">
              <div>
                <span className="font-mono text-xs text-tech-outline">CATALOG_v2024</span>
                <h3 className="text-3xl font-bold uppercase">Selected Works</h3>
              </div>
              <div className="font-mono text-xs text-tech-on-surface-variant">TOTAL_COUNT: [{fieldworks?.length || 0}]</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fieldworks && fieldworks.map((work, i) => (
                <div key={work.id || i} className="group relative blueprint-glass border border-tech-outline mouse-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-crosshair">
                  <div className="aspect-[4/3] bg-tech-surface-container relative overflow-hidden">
                    <img alt={work.project} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={`https://source.unsplash.com/random/600x400/?construction,blueprint,${i}`}/>
                    <div className="absolute inset-0 bg-tech-secondary/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute top-2 right-2 font-mono text-[10px] bg-tech-surface p-1 border border-tech-outline">REF_NO: 004{i+2}</div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 uppercase truncate">{work.project}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="border border-dashed border-tech-outline px-2 py-0.5 font-mono text-[10px] uppercase">{work.location || 'SITE'}</span>
                      <span className="border border-dashed border-tech-outline px-2 py-0.5 font-mono text-[10px] uppercase">RND</span>
                    </div>
                    {/* Hover Expansion Content */}
                    <div className="max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500 ease-in-out border-tech-outline-variant pt-0 group-hover:pt-4 group-hover:border-t">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-[10px] font-mono text-tech-outline">STATUS</div>
                          <div className="font-mono font-bold text-sm text-tech-secondary uppercase data-block-animate">{work.result}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-tech-outline">PHASE</div>
                          <div className="font-mono font-bold text-sm data-block-animate">ANALYSIS</div>
                        </div>
                      </div>
                      <p className="mt-4 font-mono text-[11px] leading-relaxed opacity-70 line-clamp-2">{work.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="p-4 md:p-10 reveal-staggered" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="blueprint-glass border-2 border-tech-primary p-8 drafting-tape">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest border-l-4 border-tech-secondary pl-4">Core Software Mastery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle className="text-tech-outline-variant" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="2"></circle>
                        <circle className="text-tech-secondary transition-all duration-1000" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="25.12" strokeWidth="6"></circle>
                      </svg>
                      <span className="absolute font-mono font-bold text-sm">90%</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase">AutoCAD 3D</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle className="text-tech-outline-variant" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="2"></circle>
                        <circle className="text-tech-secondary transition-all duration-1000" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="12.56" strokeWidth="6"></circle>
                      </svg>
                      <span className="absolute font-mono font-bold text-sm">95%</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase">Revit BIM</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle className="text-tech-outline-variant" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="2"></circle>
                        <circle className="text-tech-secondary transition-all duration-1000" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="50.24" strokeWidth="6"></circle>
                      </svg>
                      <span className="absolute font-mono font-bold text-sm">80%</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase">SAP2000</span>
                  </div>
                </div>
              </div>

              <div className="blueprint-glass border border-tech-outline p-8 bg-grid-dot-pattern">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest border-l-4 border-tech-primary pl-4">Standard Compliance</h3>
                <div className="relative h-64 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-48 h-48 border border-tech-outline rounded-full"></div>
                    <div className="absolute w-32 h-32 border border-tech-outline rounded-full"></div>
                    <div className="absolute w-16 h-16 border border-tech-outline rounded-full"></div>
                    <div className="absolute w-full h-px bg-tech-outline"></div>
                    <div className="absolute w-px h-full bg-tech-outline"></div>
                  </div>
                  <svg className="relative z-10 w-48 h-48 overflow-visible">
                    <polygon fill="rgba(167, 58, 0, 0.3)" points="96,20 160,60 140,140 50,150 30,80" stroke="#a73a00" strokeWidth="2"></polygon>
                    <text className="font-mono text-[9px] fill-tech-primary uppercase" textAnchor="middle" x="96" y="10">Sustainability</text>
                    <text className="font-mono text-[9px] fill-tech-primary uppercase" textAnchor="start" x="170" y="65">Safety</text>
                    <text className="font-mono text-[9px] fill-tech-primary uppercase" textAnchor="start" x="150" y="155">Speed</text>
                    <text className="font-mono text-[9px] fill-tech-primary uppercase" textAnchor="end" x="40" y="165">Cost</text>
                    <text className="font-mono text-[9px] fill-tech-primary uppercase" textAnchor="end" x="20" y="85">Innovation</text>
                  </svg>
                </div>
              </div>

            </div>
          </section>

          {/* FOOTER */}
          <footer className="w-full px-4 md:px-10 py-12 flex flex-col items-center justify-center border-t border-tech-outline-variant bg-tech-surface mt-auto z-10">
            <div className="mb-6 flex gap-8">
              <a className="text-tech-on-surface-variant font-mono text-xs hover:text-tech-secondary transition-colors" href="#">Major: Structural Engineering</a>
              <a className="text-tech-on-surface-variant font-mono text-xs hover:text-tech-secondary transition-colors" href="#">University Stamp</a>
            </div>
            <div className="text-center">
              <div className="font-mono text-sm font-black mb-2">PROJECT_CORE_v1.0</div>
              <p className="font-mono text-xs text-tech-outline">© 2024 FIELD_NOTES_DEPT // COORDINATES: 40.7128° N, 74.0060° W</p>
            </div>
          </footer>

        </main>

        <button className="fixed bottom-8 right-8 w-16 h-16 bg-tech-secondary text-tech-on-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-50 border-2 border-tech-primary group">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-180 transition-transform duration-500">add</span>
        </button>

      </div>
    </>
  );
};

export default TechThree;
