import { Sparkles, ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl px-6 md:px-20 py-4">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary h-8 w-8" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">DeepMatter</h2>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                Capabilities <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-64 pt-4 group-hover:block">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-2xl">
                  <a href="#" className="block rounded-lg px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors">Composition Analysis</a>
                  <a href="#" className="block rounded-lg px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors">Materials Processing</a>
                  <a href="#" className="block rounded-lg px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors">Structural Characterization</a>
                  <a href="#" className="block rounded-lg px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors">Physical Property Measurement</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                Facilities <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-[500px] pt-4 group-hover:block">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xl grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400 mb-3 tracking-wider">Microscopy</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">TEM (Transmission Electron)</a></li>
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">SEM (Scanning Electron)</a></li>
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">AFM (Atomic Force)</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400 mb-3 tracking-wider">Spectroscopy</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">XPS (X-ray Photoelectron)</a></li>
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">XRD (X-ray Diffraction)</a></li>
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">Raman Spectroscopy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400 mb-3 tracking-wider">Physical Properties</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">PPMS (Physical Property)</a></li>
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">MPMS (Magnetic Property)</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400 mb-3 tracking-wider">Fabrication</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">E-Beam Lithography</a></li>
                      <li><a href="#" className="block text-sm text-slate-600 hover:text-primary transition-colors">Thin Film Deposition</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Insights</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex h-10 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 cursor-pointer">
            Connect
          </button>
          <button className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>
    </header>
  );
}
