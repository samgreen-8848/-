import Header from './components/Header';
import Hero from './components/Hero';
import ResearchPlatform from './components/ResearchPlatform';
import ResearchFields from './components/ResearchFields';
import Facilities from './components/Facilities';
import Insights from './components/Insights';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display">
      <Header />
      <main className="flex-1">
        <Hero />
        <ResearchPlatform />
        <ResearchFields />
        <Facilities />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
