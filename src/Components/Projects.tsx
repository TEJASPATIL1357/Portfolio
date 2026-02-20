import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Vehicle Parking Management System",
    description:
      "Industry-level parking system using Spring MVC with role-based access, booking system and billing module.",
    tech: ["Java", "Spring MVC", "MySQL"],
    github: "https://github.com/TEJASPATIL1357/parking-system",
    live: "#",
  },
  {
    title: "Student Grading System",
    description:
      "Full-stack grading system with progress tracking, PDF reports and teacher dashboard.",
    tech: ["React", "Flask", "MySQL"],
    github: "https://github.com/TEJASPATIL1357/student-grading-system",
    live: "#",
  },
  {
    title: "Stock Visualization Dashboard",
    description:
      "Interactive dashboard for stock analysis and forecasting with charts and real-time updates.",
    tech: ["React", "Chart.js", "API"],
    github: "https://github.com/TEJASPATIL1357/stock-dashboard",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.03}
              transitionSpeed={400}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-2xl"
            >
              <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 transition duration-300">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#0d1117] border border-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-gray-700 rounded-lg hover:border-blue-500 transition"
                  >
                    View Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </Tilt>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;