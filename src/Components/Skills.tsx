import { motion } from "framer-motion";
import stars from "../assets/stars.png";

const skillsData = [
  {
    title: "Backend Development",
    description:
      "Building scalable server-side applications using Java and modern backend frameworks.",
    tech: ["Java", "Advanced Java", "Spring", "Hibernate", "JSP"],
  },
  {
    title: "Frontend Development",
    description:
      "Creating modern responsive interfaces with clean UI/UX principles.",
    tech: ["HTML", "CSS", "Tailwind CSS", "React"],
  },
  {
    title: "Python Development",
    description:
      "Developing backend and data-driven applications using Python frameworks.",
    tech: ["Python", "Flask", "Dash"],
  },
  {
    title: "Database Management",
    description:
      "Designing relational database schemas and handling data efficiently.",
    tech: ["SQL", "MySQL"],
  },
  {
    title: "Tech & Leadership",
    description:
      "Active participation in hackathons, workshops, and technical communities.",
    tech: ["Cyber Security Cell", "E-Builders Club", "SIH", "COEP"],
  },
];

const Skills = () => {
  return (
    <section className="relative bg-[#0d1117] py-32 px-6 lg:px-16 overflow-hidden">

      {/* ⭐ STAR BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* 🌌 GALAXY RADIAL GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            Skills
          </p>

          <h2 className="font-lora text-4xl md:text-5xl font-semibold text-white">
            Technical Expertise & Stack
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >

              {/* Constant Soft Aura */}
              <div className="
                absolute
                -inset-2
                rounded-3xl
                bg-gradient-to-r
                from-pink-500/20
                via-purple-500/20
                to-blue-500/20
                blur-3xl
              "></div>

              {/* Hover Intensified Glow */}
              <div className="
                absolute
                -inset-2
                rounded-3xl
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-blue-500
                opacity-0
                blur-3xl
                group-hover:opacity-30
                transition
              "></div>

              {/* Card */}
              <div className="
                relative
                bg-[#161b22]/60
                backdrop-blur-xl
                border border-[#30363d]
                rounded-3xl
                p-8
                transition
                hover:border-purple-400/60
              ">
                <h3 className="text-white text-xl font-semibold mb-4">
                  {skill.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#0d1117]/80 border border-[#30363d] rounded-full text-gray-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;