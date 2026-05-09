import { useState } from 'react';
import ScrollFloat from './reactbits/ScrollFloat';
import LogoLoop from './reactbits/LogoLoop';
import PillNav from './reactbits/PillNav';

const categories = ['All', 'Backend', 'Frontend', 'Python', 'Database', 'Leadership'];

const skillsData = [
  {
    title: 'Backend Infiltration',
    category: 'Backend',
    description: 'Expertise in architecting secure, scalable server-side environments and data vaults.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'JSP'],
    icon: '⚔️',
    gradient: 'from-[#e50914] to-[#b20710]',
  },
  {
    title: 'Frontend Interface',
    category: 'Frontend',
    description: 'Crafting immersive tactical dashboards and high-fidelity user environments.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    icon: '💻',
    gradient: 'from-[#e50914] to-[#8c060d]',
  },
  {
    title: 'Python Scripts',
    category: 'Python',
    description: 'Developing specialized automation tools and data processing modules.',
    tech: ['Python', 'Flask', 'Dash'],
    icon: '🐍',
    gradient: 'from-[#8c060d] to-[#000000]',
  },
  {
    title: 'Data Intelligence',
    category: 'Database',
    description: 'Managing complex relational intelligence schemas with high-speed query execution.',
    tech: ['SQL', 'MySQL'],
    icon: '🗄️',
    gradient: 'from-[#ffc107] to-[#e50914]',
  },
  {
    title: 'Field Operations',
    category: 'Leadership',
    description: 'Leading technical squads in high-stakes infiltration scenarios and workshops.',
    tech: ['Cyber Security Cell', 'E-Builders Lead', 'SIH Strategy'],
    icon: '🎖️',
    gradient: 'from-[#e50914] to-black',
  },
];

const techLogos = [
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="relative py-20 lg:py-32 px-6 lg:px-16 overflow-hidden bg-transparent">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-heist-red/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollFloat scrollStart={60} stiffness={100} damping={18} className="text-center mb-16">
          <span className="text-xs font-mono text-heist-red uppercase tracking-[0.5em] font-bold">Tactical Assets</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Expertise{' '}
            <span className="text-heist-red italic underline decoration-white/5 underline-offset-8">Arsenal</span>
          </h2>
        </ScrollFloat>

        {/* Logo Loop Marquee with Grayscale and Red Glow */}
        <div className="mb-16 opacity-60 hover:opacity-100 transition-opacity">
          <LogoLoop items={techLogos} duration={40} pauseOnHover={true} />
        </div>

        {/* Tactical Navigation */}
        <div className="flex justify-center mb-16">
          <PillNav 
            items={categories.map(c => ({
              label: c,
              active: activeTab === c,
              onClick: () => setActiveTab(c)
            }))}
            className="heist-glow"
          />
        </div>

        {/* iOS Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {filteredSkills.map((skill, i) => (
            <ScrollFloat
              key={skill.title}
              scrollStart={40}
              stiffness={90}
              damping={18}
              className={`${
                i === 0 ? 'md:col-span-3 lg:col-span-6' :
                i === 1 ? 'md:col-span-3 lg:col-span-6' :
                'md:col-span-2 lg:col-span-4'
              }`}
            >
              <div className="group relative h-full min-h-[220px] bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl cursor-default">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                  <h3 className="font-display text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-heist-red transition-colors leading-none">
                    {skill.title}
                  </h3>
                  <p className="text-[11px] text-white/40 font-mono leading-relaxed mb-6 flex-grow">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((techItem, ti) => (
                      <span key={ti} className="text-[9px] font-mono px-3 py-1 bg-white/5 border border-white/10 text-white/50 rounded-full group-hover:border-heist-red/40 group-hover:text-white transition-all uppercase font-bold tracking-widest">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFloat>
          ))}
        </div>
      </div>

      <div className="section-divider mt-32 max-w-4xl mx-auto opacity-20" />
    </section>
  );
};

export default Skills;