import { motion } from "framer-motion";

const skills = [
  "C",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "MySQL",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#161b22] border border-gray-800 rounded-xl p-6 text-center shadow-md hover:border-blue-500 hover:shadow-blue-500/20 transition"
            >
              <p className="text-gray-300 font-medium">{skill}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;