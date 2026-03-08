import { Sparkles, Mail, Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="text-primary h-8 w-8" strokeWidth={1.5} />
              <h2 className="text-2xl font-black tracking-tight text-slate-900">DeepMatter</h2>
            </div>
            <p className="max-w-md text-slate-500 leading-relaxed font-light">
              DeepMatter is a global leading infrastructure providing advanced materials research environments for academic breakthroughs and industrial progress.
            </p>
          </div>
          <div>
            <h6 className="font-bold mb-8 text-slate-900">Quick Access</h6>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Instrumentation Booking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sample Preparation Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing & Logistics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ethics Statement</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-8 text-slate-900">Connect</h6>
            <div className="flex gap-4">
              <a href="#" className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm text-slate-600">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm text-slate-600">
                <Share2 className="h-6 w-6" />
              </a>
              <a href="#" className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm text-slate-600">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <p>© 2024 DeepMatter Research Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
