
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiC } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-[#0f172a] text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaHtml5 className="text-5xl text-orange-500" />
          <span className="mt-2">HTML</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaCss3Alt className="text-5xl text-blue-500" />
          <span className="mt-2">CSS</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaJsSquare className="text-5xl text-yellow-400" />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaReact className="text-5xl text-cyan-400" />
          <span className="mt-2">React</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <SiTypescript className="text-5xl text-blue-400" />
          <span className="mt-2">TypeScript</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <SiTailwindcss className="text-5xl text-teal-400" />
          <span className="mt-2">Tailwind</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <SiC className="text-5xl text-blue-300" />
          <span className="mt-2">C</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaJava className="text-5xl text-red-400" />
          <span className="mt-2">Java</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaPython className="text-5xl text-yellow-300" />
          <span className="mt-2">Python</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
