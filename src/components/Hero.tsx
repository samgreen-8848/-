import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 pt-10">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,242,254,0.6)_0%,rgba(243,232,255,0.4)_50%,transparent_100%)] mix-blend-multiply opacity-70"></div>
        <div className="absolute inset-0 opacity-80 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full max-w-7xl drop-shadow-2xl" fill="none" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" id="glow-1" r="50%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5"></stop>
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0"></stop>
              </radialGradient>
              <radialGradient cx="50%" cy="50%" id="glow-2" r="50%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5"></stop>
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0"></stop>
              </radialGradient>
              <radialGradient cx="50%" cy="50%" id="glow-3" r="50%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4"></stop>
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"></stop>
              </radialGradient>
              <linearGradient id="edge-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3"></stop>
                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.4"></stop>
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3"></stop>
              </linearGradient>
            </defs>
            <path d="M400 250 L800 300 L900 550 L600 650 L250 500 Z" fill="none" stroke="url(#edge-grad)" strokeWidth="1.5"></path>
            <path d="M600 450 L400 250 M600 450 L800 300 M600 450 L900 550 M600 450 L600 650 M600 450 L250 500" fill="none" stroke="url(#edge-grad)" strokeDasharray="4 4" strokeWidth="1.5"></path>
            <path d="M400 250 L600 150 L800 300" fill="none" stroke="url(#edge-grad)" strokeWidth="1"></path>
            <path d="M600 450 L600 150" fill="none" stroke="url(#edge-grad)" strokeDasharray="2 4" strokeWidth="1"></path>
            <circle cx="600" cy="450" fill="url(#glow-1)" r="120"></circle>
            <circle cx="600" cy="450" fill="#6366f1" r="8"></circle>
            <circle cx="600" cy="450" fill="none" r="20" stroke="#6366f1" strokeOpacity="0.4" strokeWidth="1"></circle>
            <circle cx="400" cy="250" fill="url(#glow-3)" r="80"></circle>
            <circle cx="400" cy="250" fill="#818cf8" r="5"></circle>
            <circle cx="800" cy="300" fill="url(#glow-2)" r="100"></circle>
            <circle cx="800" cy="300" fill="#a855f7" r="6"></circle>
            <circle cx="900" cy="550" fill="url(#glow-1)" r="70"></circle>
            <circle cx="900" cy="550" fill="#6366f1" r="5"></circle>
            <circle cx="600" cy="650" fill="url(#glow-3)" r="90"></circle>
            <circle cx="600" cy="650" fill="#818cf8" r="6"></circle>
            <circle cx="250" cy="500" fill="url(#glow-2)" r="85"></circle>
            <circle cx="250" cy="500" fill="#a855f7" r="5"></circle>
            <circle cx="600" cy="150" fill="url(#glow-1)" r="60"></circle>
            <circle cx="600" cy="150" fill="#6366f1" r="4"></circle>
            <path d="M350 400 L370 380 L390 400 L370 420 Z" fill="#c084fc" opacity="0.2"></path>
            <circle cx="750" cy="480" fill="#60a5fa" opacity="0.3" r="15"></circle>
            <path d="M680 200 L700 220 L680 240 L660 220 Z" fill="#818cf8" opacity="0.2"></path>
          </svg>
        </div>
        <div className="absolute top-1/4 -left-1/4 size-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 size-[30rem] bg-accent/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center lg:px-20 py-24 backdrop-blur-[2px] rounded-3xl">
        
        {/* New Top Element */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-20 h-14 border-2 border-dashed border-blue-400 rounded-lg mb-3"></div>
          <p className="text-blue-500 text-sm font-medium">添加各种仪器设备，按逻辑来分类展示</p>
        </div>

        <div className="inline-flex items-center rounded-full bg-white/60 backdrop-blur-xl px-5 py-2 text-sm font-bold text-primary ring-1 ring-inset ring-primary/10 mb-8 transition-all hover:bg-white/80 cursor-default shadow-sm">
          <Sparkles className="mr-2 h-5 w-5 text-accent" />
          PIONEERING NEW MATERIALS
        </div>
        <h1 className="text-6xl font-black leading-tight tracking-tight text-slate-800 md:text-8xl lg:text-[6rem] mb-6 drop-shadow-sm">
          The Foundation
        </h1>
        
        {/* Purple Block */}
        <div className="mx-auto h-40 w-full max-w-xl bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-sm mb-10 shadow-lg"></div>

        <p className="mx-auto mt-8 max-w-3xl text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
          Delving into the core of atomic structures to drive foundational research. We empower scientists to design and synthesize the materials that will define the next century.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button className="group relative flex h-14 min-w-[220px] items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 text-base font-bold text-white transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer">
            <span className="relative z-10">Start Exploration</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:translate-x-0"></div>
          </button>
          <button className="flex h-14 min-w-[220px] items-center justify-center rounded-full border border-slate-200 bg-white/70 px-8 text-base font-bold text-slate-700 backdrop-blur-xl transition-all hover:bg-white hover:border-primary/30 hover:text-primary shadow-sm hover:shadow-md cursor-pointer">
            Scientific Platform
          </button>
        </div>
      </div>
    </section>
  );
}
