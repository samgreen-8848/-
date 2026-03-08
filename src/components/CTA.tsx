export default function CTA() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-32 lg:px-20">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-primary to-accent px-10 py-20 text-center text-white lg:py-24 shadow-2xl shadow-primary/20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold md:text-6xl">Start Your Research Journey</h2>
          <p className="mt-8 text-xl text-white/80 font-light">
            Partner with our world-class experts to accelerate your material innovation. We provide the tools; you provide the vision.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="h-14 w-full rounded-full bg-white px-10 text-base font-bold text-primary sm:w-auto shadow-xl hover:scale-105 transition-transform cursor-pointer">
              Submit Research Proposal
            </button>
            <button className="h-14 w-full rounded-full bg-transparent border-2 border-white/30 px-10 text-base font-bold text-white sm:w-auto hover:bg-white/10 transition-colors cursor-pointer">
              Contact Our Lab
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
