import project1 from '../assets/project1.png';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpeg'
const projects = [
  {
    title: 'Expense-Tracker-Dash',
    image: project1,
    github: 'https://github.com/TEJASPATIL1357/Expense-Tracker-Dash'
  },
  {
    title: 'Stock Forecasting Dashboard',
    image: project2,
    github: 'https://github.com/TEJASPATIL1357/Stock-Visualization-and-Forecasting'
  },
  {
    title: 'Student Grading System',
    image: project3,
    github: 'https://student-grading-system.onrender.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-[#1e293b] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
