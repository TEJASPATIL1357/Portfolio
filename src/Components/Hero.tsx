
import { Typewriter } from "react-simple-typewriter";
import heroDesktop from "../assets/hero-desktop.png";
import heroMobile from "../assets/hero-mobile.png";


const Hero = () => {
  return (
    <>
      {/* ================= DESKTOP HERO ================= */}
<section className="hidden md:flex relative min-h-screen items-center overflow-hidden bg-[#0d1117]">

  {/* Image manually controlled */}
  <img
    src={heroDesktop}
    alt="Hero"
    className="
      absolute
      right-0
      top-10
      w-[1590px]      
      max-w-none
      select-none
      pointer-events-none
    "
  />

  {/* Left fade overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/70 to-transparent"></div>

  {/* Text */}
  <div className="relative z-21 w-full pl-24 pr-0 pt-22">
    <div className="max-w-lg">

      <h1 className="font-lora text-6xl font-semibold tracking-[-0.5px] text-white">
        Hi, I'm{" "}
        <span className="font-lora font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  Tejas Patil
</span>
      </h1>

      <p className="mt-6 text-2xl text-gray-300">
        <Typewriter
          words={[
            "React Developer",
            "Cyber Security Enthusiast",
            "Full Stack Engineer"
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>

      <div className="mt-10 flex gap-6">
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-xl"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-8 py-4 border border-gray-500 hover:border-blue-400 rounded-xl transition"
        >
          Contact Me
        </a>
      </div>

    </div>
  </div>
</section>
      {/* ================= MOBILE HERO ================= */}
<section
  className="
    md:hidden
    relative
    min-h-screen
    flex
    items-center
    justify-center
    bg-cover
    bg-center
    overflow-hidden
  "
  style={{ backgroundImage: `url(${heroMobile})` }}
>

  {/* Strong overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/60 to-[#0d1117]/90"></div>

  <div className="relative z-20 text-center px-6 pt-28">

    <h1 className="text-4xl font-extrabold text-white leading-tight">
      Hi, I'm{" "}
      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Tejas Patil
      </span>
    </h1>

    <p className="mt-4 text-lg text-gray-300">
      <Typewriter
        words={[
          "React Developer",
          "Cyber Security Enthusiast",
          "Full Stack Engineer"
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </p>

    <div className="mt-6 flex flex-col gap-4">
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-lg"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-6 py-3 border border-gray-500 hover:border-blue-400 rounded-xl transition"
      >
        Contact Me
      </a>
    </div>

  </div>
</section>
    </>
  );
};

export default Hero;