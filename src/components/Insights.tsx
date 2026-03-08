import { ExternalLink } from 'lucide-react';

export default function Insights() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-4xl font-extrabold tracking-tight">Latest Research Insights</h2>
          <a href="#" className="text-sm font-semibold text-accent hover:text-white flex items-center gap-2 transition-colors">
            Research Publication Archive <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="group flex flex-col gap-8 md:flex-row cursor-pointer">
            <div className="h-56 w-full shrink-0 overflow-hidden rounded-2xl md:w-64 border border-white/10 shadow-2xl">
              <div 
                className="h-full w-full transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMEAO-wJq1RsQWxrM1WCJK6I3BIqZJHPaO-19Vqb-SI_PB-dkVBzoz0WuqoTnvxanAHiAnsGLBJwhz1PPZ6hU7Rpnhkd3lecfLDZ3w4kMuwz2F0uUjdipveghlbjPb36Tj_X9XTFEfq2oyAjEKlWNQSPOsLMELGGhGdeof6o-0tDadvGm4cnyPLnPhsZQuhN5e23s29yzxLVFmWtxk69dPhFcXmlIa8rfksNY4OTn2EBnnJ8YCby0rOMKxibeHW4nuiyCbUKZLWMZ7")', backgroundSize: 'cover', backgroundPosition: 'center center' }}
              ></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Battery Analysis</span>
              <h4 className="mt-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors">Battery interface evolution during ultra-fast charging</h4>
              <p className="mt-4 text-slate-400 font-light leading-relaxed">Revealing dynamic structural changes of solid-electrolyte interphase using cryogenic-TEM techniques at the atomic scale.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col gap-8 md:flex-row cursor-pointer">
            <div className="h-56 w-full shrink-0 overflow-hidden rounded-2xl md:w-64 border border-white/10 shadow-2xl">
              <div 
                className="h-full w-full transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFds6g4B85tWjcCNPIqZJ2F3rnKtThxKkM1RUBgGtSpjf7QR_cTgAbonvt4JKL54IWbFtWPnVx60MFTkXSeE7fhNxvljQbN3P0upplWIxp_ZGka3gt-7KX6DjaPYoqACg_T-SECAo6Bvpf--SZuOJiv4dvwkPSbE9ntPBVIIma64YDQlNCN3U2wFOlwTbYjriHvYy7DZv7TAtQC4NDZ2hvWzOuLzBqnpoIG5X0bZ1xgHrkSJ6GbaRLbtQzpBnH7gH0CMULZXUQNJbI")', backgroundSize: 'cover', backgroundPosition: 'center center' }}
              ></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Catalysis</span>
              <h4 className="mt-3 text-2xl font-bold leading-tight group-hover:text-accent transition-colors">Catalyst surface chemistry in hydrogen production</h4>
              <p className="mt-4 text-slate-400 font-light leading-relaxed">Atomic-level insights into active sites for enhanced oxygen evolution reaction on complex perovskite oxides.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
