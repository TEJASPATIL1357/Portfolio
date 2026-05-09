import { useEffect, useState, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import CVSection from './Components/CVSection';
import Footer from './Components/Footer';
import CustomCursor from './Components/CustomCursor';
import ScrollProgress from './Components/ScrollProgress';
import Dock from './Components/reactbits/Dock';
import BubbleMenu from './Components/reactbits/BubbleMenu';

const Global3DBackground = lazy(() => import('./Components/reactbits/Global3DBackground'));
import LoadingScreen from './Components/LoadingScreen';

// iOS Style 'Dynamic Island' Status Indicator
const DynamicIsland = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[2000] pointer-events-none">
      <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl px-6 py-2 rounded-full border border-white/5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="w-2 h-2 rounded-full bg-heist-red animate-pulse" />
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">System: Operational</span>
        <div className="h-4 w-[1px] bg-white/5" />
        <span className="text-[10px] font-mono text-heist-red uppercase tracking-[0.2em]">Heist_Active</span>
      </div>
    </div>
  );
};

const dockItems = [
  { icon: <span className="text-lg filter drop-shadow-[0_0_5px_#ffc107]">💰</span>, label: 'Intro', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <span className="text-lg filter drop-shadow-[0_0_5px_#e50914]">🎭</span>, label: 'Dossier', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <span className="text-lg filter drop-shadow-[0_0_5px_#ffc107]">📁</span>, label: 'Missions', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <span className="text-lg filter drop-shadow-[0_0_5px_#e50914]">🔫</span>, label: 'Arsenal', onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <span className="text-lg filter drop-shadow-[0_0_5px_#ffc107]">📄</span>, label: 'CV', onClick: () => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <span className="text-lg filter drop-shadow-[0_0_5px_#e50914]">📅</span>, label: 'Record', onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <span className="text-lg filter drop-shadow-[0_0_5_#e50914]">📞</span>, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
];

const bubbleItems = [
  { icon: <span className="text-sm text-[#0a0a0a] bg-white p-1 rounded shadow-[0_0_10px_white]">GH</span>, label: 'GitHub', onClick: () => window.open('https://github.com/TEJASPATIL1357', '_blank') },
  { icon: <span className="text-sm text-white bg-heist-red p-1 rounded shadow-[0_0_10px_#e50914]">LI</span>, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/tejas-patil-024ab0246', '_blank') },
  { icon: <span className="text-sm text-[#0a0a0a] bg-heist-gold p-1 rounded shadow-[0_0_10px_#ffc107]">CV</span>, label: 'Resume', onClick: () => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' }) },
];

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    // Skip Lenis on mobile — native scroll is faster on touch
    if (window.innerWidth < 768) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1,
      infinite: false,
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [loaded]);

  return (
    <div className="bg-transparent text-white overflow-x-hidden noise-overlay relative">
      {/* Creative loading screen — shown until portfolio is ready */}
      <LoadingScreen onDone={() => setLoaded(true)} />

      <Suspense fallback={null}>
        <Global3DBackground />
      </Suspense>
      {/* DynamicIsland — desktop only */}
      <div className="hidden md:block">
        <DynamicIsland />
      </div>
      {/* CustomCursor — desktop only (touch devices don't use cursors) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CVSection />
      <Experience />
      <Contact />
      <Footer />
      

      {/* Dock Navigation - macOS style bottom bar */}
      <div className="block">
        <Dock
          items={dockItems}
          magnification={window.innerWidth < 768 ? 40 : 65}
          distance={window.innerWidth < 768 ? 80 : 150}
          panelHeight={window.innerWidth < 768 ? 40 : 56}
          baseItemSize={window.innerWidth < 768 ? 24 : 40}
        />
      </div>

      {/* Bubble Menu for Socials */}
      <BubbleMenu items={bubbleItems} />
    </div>
  );
}

export default App;