import { ChevronRight, Microscope, Waves, Grid3x3, Activity } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { icon: Microscope, title: "TEM", subtitle: "Transmission Electron Microscope" },
    { icon: Waves, title: "XPS", subtitle: "X-ray Photoelectron Spectroscopy" },
    { icon: Grid3x3, title: "XRD", subtitle: "X-ray Diffraction System" },
    { icon: Activity, title: "PPMS", subtitle: "Physical Property Measurement" },
  ];

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-32 lg:px-20">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">World-Class Facilities</h2>
          <p className="mt-4 text-xl text-slate-600 font-light">Access state-of-the-art instrumentation and expert technical support.</p>
        </div>
        <button className="text-sm font-bold text-primary group flex items-center gap-2 cursor-pointer hover:underline">
          View All Instrumentation <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <div className="flex flex-wrap gap-6 overflow-x-auto pb-8 no-scrollbar">
        {facilities.map((item, index) => (
          <div key={index} className="flex-none w-[300px] bg-white rounded-2xl border border-slate-200 p-6 transition-all hover:border-primary/50 cursor-pointer hover:shadow-lg">
            <div className="h-44 bg-slate-50 rounded-xl mb-6 flex items-center justify-center">
              <item.icon className="h-16 w-16 text-primary/30" strokeWidth={1} />
            </div>
            <h5 className="text-lg font-bold">{item.title}</h5>
            <p className="text-sm text-slate-500 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
