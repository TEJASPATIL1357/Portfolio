import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import TechOrb3D from './TechOrb3D';

/* ─── Animated glitch letters for the name ─── */
const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOP';

function GlitchLetter({ char, delay }: { char: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    let iteration = 0;
    const maxIter = 10;
    const origChar = char;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (ref.current) {
          if (iteration < maxIter) {
            ref.current.textContent = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            iteration++;
          } else {
            ref.current.textContent = origChar;
            clearInterval(interval);
          }
        }
        frame++;
      }, 40);
    }, delay);

    return () => clearTimeout(timeout);
  }, [char, delay]);

  return (
    <span ref={ref} className="inline-block" style={{ minWidth: char === ' ' ? '0.4em' : undefined }}>
      {char}
    </span>
  );
}

function GlitchName({ text }: { text: string }) {
  return (
    <h1 className="font-display font-black text-[clamp(2.8rem,9vw,7rem)] text-white tracking-[-0.04em] leading-[0.88] uppercase">
      {text.split('').map((char, i) => (
        <GlitchLetter key={i} char={char} delay={800 + i * 60} />
      ))}
    </h1>
  );
}

/* ─── Animated typing terminal line ─── */
function TerminalLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-2 font-mono text-[11px]"
    >
      <span className="text-heist-red/60">›</span>
      <span className="text-white/30">{text}</span>
    </motion.div>
  );
}

/* ─── Hero ─── */
const Hero = () => {
  const { scrollY } = useScroll();
  const yText   = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const yOrb    = useTransform(scrollY, [0, 600], [0, -60]);
  const smoothY = useSpring(yOrb, { stiffness: 60, damping: 20 });

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-transparent">

      {/* ── Background layers ── */}
      {/* Left-side dark gradient so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />

      {/* Subtle radial grid */}
      <div className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(229,9,20,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Red vignette bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-[1]" />

      {/* Animated top scan line */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-heist-red/60 to-transparent z-[3]"
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12 lg:pt-28 lg:pb-24
                      flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-0 items-center min-h-[100dvh]">

        {/* ════ LEFT: Text Column ════ */}
        <motion.div style={{ y: yText, opacity }} className="w-full z-20 flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 mb-7 sm:mb-10
                       rounded-full border border-heist-red/30 bg-heist-red/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heist-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-heist-red" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-heist-red/80 uppercase tracking-[0.3em]">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-heist-red/50 text-xs sm:text-sm uppercase tracking-[0.5em] mb-2"
          >
            Hi, I'm
          </motion.p>

          {/* Glitch name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="leading-none mt-1 sm:mt-0"
          >
            <GlitchName text="Tejas" />
            <GlitchName text="Patil" />
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-heist-red/50" />
            <p className="text-base md:text-xl font-display text-white/50 uppercase tracking-widest">
              <Typewriter
                words={['Full-Stack Developer', 'Java + React Engineer', 'CE Student @ RCPIT', 'Problem Solver']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={55}
                deleteSpeed={35}
                delaySpeed={1800}
              />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-5 text-[11px] sm:text-sm text-white/40 max-w-md leading-[1.9] font-mono"
          >
            3rd-year Computer Engineering student at RCPIT — building full-stack
            web apps with <span className="text-heist-red/70">React</span>,{' '}
            <span className="text-heist-red/70">Java</span> &amp;{' '}
            <span className="text-heist-red/70">Spring Boot</span>. SIH finalist,
            E-Builders Club lead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto"
          >
            <a href="#projects"
              className="group relative flex justify-center items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full
                         bg-heist-red text-white font-black text-[11px] tracking-[0.2em] uppercase
                         shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:shadow-[0_0_50px_rgba(229,9,20,0.7)]
                         hover:scale-[1.04] transition-all active:scale-95 w-full sm:w-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              View Projects
            </a>
            <a href="#contact"
              className="flex justify-center items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full
                         bg-white/5 border border-white/10 text-white/60 font-black
                         text-[11px] tracking-[0.2em] uppercase
                         hover:bg-white/10 hover:border-white/20 hover:text-white
                         transition-all backdrop-blur-xl active:scale-95 w-full sm:w-auto">
              Hire Me
            </a>
            <a href="/assets/Tejas_Patil_CV.pdf" download
              className="flex justify-center items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full
                         bg-white/5 border border-heist-red/20 text-heist-red/60 font-black
                         text-[11px] tracking-[0.2em] uppercase
                         hover:bg-heist-red/10 hover:text-heist-red
                         transition-all active:scale-95 w-full sm:w-auto">
              Resume ↓
            </a>
          </motion.div>

          {/* Terminal readout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="mt-12 hidden md:flex flex-col gap-1"
          >
            <TerminalLine text="$ env: FULL_STACK_DEVELOPER" delay={2.6} />
            <TerminalLine text="$ stack: React · Java · Spring · MySQL" delay={2.8} />
            <TerminalLine text="$ status: open_to_work ✓" delay={3.0} />
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.7 }}
            className="mt-8 hidden md:flex gap-8"
          >
            {[
              { val: '6+', lbl: 'Projects' },
              { val: '4+', lbl: 'Tech Stacks' },
              { val: '8.2', lbl: 'CGPA' },
            ].map(s => (
              <div key={s.lbl}>
                <p className="font-display text-2xl font-black text-white tracking-tighter">{s.val}</p>
                <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.3em]">{s.lbl}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          style={{ y: smoothY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
          className="relative z-20 flex items-center justify-center w-full min-h-[350px] lg:min-h-[560px]"
        >
          {/* Layered glow halos */}
          <div className="absolute inset-0 rounded-full bg-heist-red/8 blur-[160px] animate-pulse pointer-events-none" />
          <div className="absolute inset-12 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

          {/* 3D Orb */}
          <div className="w-full h-full min-h-[350px] lg:min-h-[560px]">
            <TechOrb3D />
          </div>

          {/* Rotating dashed ring around the orb (CSS) */}
          <div
            className="absolute inset-8 rounded-full border border-dashed border-heist-red/10 pointer-events-none"
            style={{ animation: 'spin 30s linear infinite' }}
          />
          <div
            className="absolute inset-16 rounded-full border border-dashed border-white/5 pointer-events-none"
            style={{ animation: 'spin 20s linear infinite reverse' }}
          />

          {/* Corner HUD */}
          <div className="absolute top-6 right-4 font-mono text-[8px] text-heist-red/40 uppercase tracking-[0.4em] hidden lg:block space-y-1">
            <p className="animate-pulse">● SCAN_ACTIVE</p>
            <p>CORE: INJECTED</p>
            <p>ENV: FULL_STACK</p>
          </div>
          <div className="absolute bottom-6 left-4 font-mono text-[8px] text-white/20 uppercase tracking-[0.4em] hidden lg:block space-y-1">
            <p>FPS: 60</p>
            <p className="animate-pulse">● RENDER: GPU</p>
          </div>

          {/* Horizontal scan line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-heist-red/15 to-transparent pointer-events-none" />

          {/* Floating tech pill badges around the orb */}
          {[
            { label: 'React.js', pos: 'top-[12%] left-[4%]',  color: '#61DAFB' },
            { label: 'Spring',   pos: 'top-[20%] right-[2%]', color: '#6DB33F' },
            { label: 'Java',     pos: 'bottom-[18%] left-[2%]', color: '#f89820' },
            { label: 'MySQL',    pos: 'bottom-[12%] right-[4%]', color: '#00618A' },
          ].map(({ label, pos, color }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute ${pos} px-3 py-1 rounded-full border text-[9px] font-mono font-bold uppercase tracking-widest backdrop-blur-md pointer-events-none`}
              style={{ borderColor: `${color}40`, color, backgroundColor: `${color}10` }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-heist-red" />
        </motion.div>
        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">Scroll</span>
      </motion.div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default Hero;