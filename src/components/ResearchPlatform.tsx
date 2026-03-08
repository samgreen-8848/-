import { Pyramid, FlaskConical, Factory, Atom, Zap, Microscope, ArrowRight, ChartSpline, Thermometer } from 'lucide-react';

export default function ResearchPlatform() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-32 lg:px-20">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Integrated Materials Research Platform</h2>
        <p className="mt-6 text-xl text-slate-600 font-light">Comprehensive analytical solutions for modern science, bridged by a unified research paradigm.</p>
      </div>

      <div className="mb-24 rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white p-8 lg:p-16 border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Pyramid className="text-primary h-10 w-10" strokeWidth={1.5} />
              The Research Paradigm
            </h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">
              Our platform is built upon the fundamental <span className="font-semibold text-slate-900">Materials Science Tetrahedron</span>, addressing the critical interdependencies between four core pillars to accelerate discovery and innovation.
            </p>
            <div className="grid gap-6">
              {[
                { icon: FlaskConical, title: "Composition (成分)", desc: "Chemical makeup and elemental ratios at the atomic level." },
                { icon: Factory, title: "Processing (工艺)", desc: "Synthesis methods and fabrication parameters that shape the material." },
                { icon: Atom, title: "Structure (结构)", desc: "Microscopic arrangement and multi-scale phase distribution." },
                { icon: Zap, title: "Performance (性能)", desc: "Real-world functional properties and durability metrics." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square max-w-[500px] mx-auto w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 400 400">
                <path className="text-slate-200" d="M200 60 L60 320 L340 320 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                <path className="text-primary/40" d="M200 60 L200 210 M60 320 L200 210 M340 320 L200 210" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5"></path>
                
                <circle className="fill-white stroke-primary stroke-[3]" cx="200" cy="60" r="35"></circle>
                <circle className="fill-white stroke-primary stroke-[3]" cx="60" cy="320" r="35"></circle>
                <circle className="fill-white stroke-primary stroke-[3]" cx="340" cy="320" r="35"></circle>
                <circle className="fill-primary text-white" cx="200" cy="210" r="45"></circle>
                
                {/* Icons inside SVG */}
                <foreignObject x="180" y="40" width="40" height="40">
                  <div className="flex items-center justify-center h-full w-full">
                    <FlaskConical className="text-primary h-6 w-6" />
                  </div>
                </foreignObject>
                <foreignObject x="40" y="300" width="40" height="40">
                  <div className="flex items-center justify-center h-full w-full">
                    <Factory className="text-primary h-6 w-6" />
                  </div>
                </foreignObject>
                <foreignObject x="320" y="300" width="40" height="40">
                  <div className="flex items-center justify-center h-full w-full">
                    <Atom className="text-primary h-6 w-6" />
                  </div>
                </foreignObject>
                <foreignObject x="180" y="190" width="40" height="40">
                  <div className="flex items-center justify-center h-full w-full">
                    <Zap className="text-white h-8 w-8" fill="currentColor" />
                  </div>
                </foreignObject>
              </svg>
              
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Composition</p>
                <p className="text-[10px] text-slate-400">成分</p>
              </div>
              <div className="absolute bottom-2 left-0 text-center pointer-events-none">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Processing</p>
                <p className="text-[10px] text-slate-400">工艺</p>
              </div>
              <div className="absolute bottom-2 right-0 text-center pointer-events-none">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Structure</p>
                <p className="text-[10px] text-slate-400">结构</p>
              </div>
              <div className="absolute top-[260px] left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-[11px] uppercase tracking-widest font-black text-primary">Performance</p>
                <p className="text-[10px] text-primary/70">性能</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Microscope, title: "Composition Analysis", desc: "Elemental and chemical state determination with sub-nanometer precision via XPS and XRF techniques." },
          { icon: Factory, title: "Materials Processing", desc: "Advanced synthesis including powder metallurgy, thin-film deposition and bulk fabrication." },
          { icon: ChartSpline, title: "Structural Char.", desc: "Multi-modal imaging from atomic lattice arrangement to macroscopic defect distribution." },
          { icon: Thermometer, title: "Physical Property", desc: "Comprehensive testing of magnetic, electrical, and thermal properties across wide temperatures." },
        ].map((item, index) => (
          <div key={index} className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <item.icon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
            <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-500">{item.desc}</p>
            <div className="flex items-center text-sm font-bold text-primary">
              Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
