import ScrollFloat from './reactbits/ScrollFloat';
import GridScan from './reactbits/GridScan';
import SpotlightCard from './reactbits/SpotlightCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import touristImg from '../assets/tourist.png';
import busImg from '../assets/bus.png';
import stockImg from '../assets/stock.png';
import expenseImg from '../assets/expense.png';
import gradingImg from '../assets/grading.png';
import parkingImg from '../assets/parking.png';

const projects = [
  {
    title: 'Tourist Crowd Management',
    mission: 'OPERATION_CROWD_CONTROL',
    description: 'System to monitor and manage tourist data efficiently across locations. Developed using Java, JSP, and MySQL for real-time data processing.',
    tech: ['Java', 'JSP', 'MySQL'],
    github: 'https://github.com/TEJASPATIL1357/crowd-management',
    live: '#',
    status: 'COMPLETED',
    image: touristImg
  },
  {
    title: 'Safe School Bus Tracker',
    mission: 'OPERATION_STUDENT_SAFETY',
    description: 'Application to track school buses and enhance student safety. Built with Spring framework to ensure reliable tracking and communication.',
    tech: ['Java', 'Spring', 'MySQL'],
    github: 'https://github.com/TEJASPATIL1357/school-bus-tracker',
    live: '#',
    status: 'ACTIVE',
    image: busImg
  },
  {
    title: 'Stock Visualization Dash',
    mission: 'OPERATION_MARKET_VISUALS',
    description: 'Dashboard to visualize stock trends and basic forecasting using Dash. Provides clear insights into market movements and data patterns.',
    tech: ['Python', 'Dash', 'Plotly'],
    github: 'https://github.com/TEJASPATIL1357/stock-dashboard',
    live: '#',
    status: 'OPERATIONAL',
    image: stockImg
  },
  {
    title: 'Expense Tracker Web App',
    mission: 'OPERATION_FISCAL_TRACK',
    description: 'React-based app to manage daily expenses with a simple, intuitive UI. Focuses on user experience and efficient data management.',
    tech: ['React', 'Tailwind', 'Firebase'],
    github: 'https://github.com/TEJASPATIL1357/expense-tracker',
    live: '#',
    status: 'ACTIVE',
    image: expenseImg
  },
  {
    title: 'Student Grading System',
    mission: 'OPERATION_ACADEMIC_INTEL',
    description: 'System for grading, performance analysis, and report generation. Engineered for mass data processing with high-fidelity outputs.',
    tech: ['React', 'Node.js', 'MySQL'],
    github: 'https://github.com/TEJASPATIL1357/student-grading-system',
    live: '#',
    status: 'COMPLETED',
    image: gradingImg
  },
  {
    title: 'Vehicle Parking System',
    mission: 'OPERATION_PARK_SECURE',
    description: 'Comprehensive parking management solution with automated billing and secure entry/exit tracking. Built with Spring MVC and MySQL.',
    tech: ['Java', 'Spring MVC', 'MySQL'],
    github: 'https://github.com/TEJASPATIL1357/parking-system',
    live: '#',
    status: 'ACTIVE',
    image: parkingImg
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-16 overflow-hidden bg-transparent">
      {/* Background with GridScan */}
      <GridScan className="opacity-15" />
      
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-heist-red/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <ScrollFloat scrollStart={60} stiffness={100} damping={18} className="text-center mb-16">
          <span className="text-xs font-mono text-heist-red uppercase tracking-[0.5em] font-bold">Heist Archives</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Confidential{' '}
            <span className="text-heist-red italic">
              Mission Files
            </span>
          </h2>
        </ScrollFloat>

        {/* Projects Grid with iOS-style Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ScrollFloat key={index} scrollStart={50 + index * 30} stiffness={90} damping={18}>
              <SpotlightCard 
                className="h-full border border-white/5 bg-white/5 backdrop-blur-3xl rounded-[3rem] shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500"
                spotlightColor="rgba(229, 9, 20, 0.05)"
              >
                {/* Vibrant Background Gradient (iOS Style) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${
                  project.status === 'ACTIVE' ? 'bg-gradient-to-br from-green-500/20 to-transparent' : 
                  project.status === 'COMPLETED' ? 'bg-gradient-to-br from-heist-gold/20 to-transparent' : 
                  'bg-gradient-to-br from-cyan-500/20 to-transparent'
                }`} />

                {/* Project Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                  
                  {/* Floating Tech Badges on Image */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    {project.tech.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[8px] font-mono px-2 py-1 bg-heist-red/20 border border-heist-red/40 text-heist-red rounded-sm uppercase font-black">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className={`w-2 h-2 rounded-full animate-pulse ${
                          project.status === 'ACTIVE' ? 'bg-green-400 shadow-[0_0_8px_#4ade80]' : 
                          project.status === 'COMPLETED' ? 'bg-heist-gold shadow-[0_0_8px_#ffc107]' : 
                          'bg-cyan-400 shadow-[0_0_8px_#22d3ee]'
                        }`} />
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                          {project.status}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 font-bold uppercase tracking-[0.2em]">Module_{index + 1}</span>
                    </div>
                    
                    <h3 className="font-display text-[clamp(1.5rem,5vw,2.5rem)] font-black text-white mb-3 uppercase tracking-tighter transition-all group-hover:text-heist-red leading-none">
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-mono text-heist-red/70 uppercase tracking-[0.3em] mb-6 font-black">
                      {project.mission}
                    </p>
                    
                    <p className="text-[13px] text-white/40 leading-relaxed font-mono mb-8 line-clamp-4 group-hover:text-white/70 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-[9px] font-mono px-3 py-1.5 bg-white/5 border border-white/10 text-white/50 rounded-full group-hover:border-heist-red/40 group-hover:text-white transition-all uppercase font-bold tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] py-4.5 rounded-[1.5rem] bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/5 active:scale-95">
                      <FaGithub className="text-lg" />
                      Intel
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] py-4.5 rounded-[1.5rem] bg-heist-red text-white hover:brightness-110 transition-all shadow-[0_15px_30px_#e5091444] active:scale-95">
                      <FaExternalLinkAlt className="text-xs" />
                      Execute
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFloat>
          ))}
        </div>

      </div>

      <div className="section-divider mt-32 max-w-4xl mx-auto opacity-30" />
    </section>
  );
};

export default Projects;