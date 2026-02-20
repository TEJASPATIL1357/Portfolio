import { motion } from "framer-motion";
import stars from "../assets/stars.png";

const About = () => {
  return (
    <section className="relative bg-[#0d1117] py-32 px-6 lg:px-16 overflow-hidden">

      {/* ===== Star Background ===== */}
      <div
  className="absolute inset-0 opacity-30"
  style={{
    backgroundImage: `url(${stars})`,
    backgroundSize: "600px",
    backgroundRepeat: "repeat",
  }}
></div>

      {/* ===== Top Glow Beam ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            About Me
          </h1>

          <h2 className="font-lora text-4xl md:text-5xl font-semibold text-white">
            Crafting Modern & Secure Applications
          </h2>
        </motion.div>

        {/* ===== Main Glow Card ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group mb-20"
        >

          {/* Outer Glow */}
          <div className="
            absolute
            -inset-2
            rounded-3xl
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-blue-500
            opacity-20
            blur-3xl
            group-hover:opacity-35
            transition
          "></div>

          {/* Glass Card */}
          <div className="
            relative
            bg-[#161b22]/70
            backdrop-blur-xl
            border border-[#30363d]
            rounded-3xl
            p-12
            transition
            hover:border-blue-500/50
          ">

            <p className="text-gray-300 leading-relaxed mb-6">
              I am a third-year Computer Engineering student at R. C. Patel Institute of Technology, Shirpur. With a strong academic foundation and practical industry training, I focus on building scalable, secure, and performance-driven web applications.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              My expertise includes Java (Core & Advanced), Spring, Hibernate, SQL, HTML, CSS, Tailwind CSS, and Python. I have developed backend systems using JSP and Spring-Hibernate, along with Python frameworks like Flask and Dash.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Recently, I completed Java Backend Training at R3SYS Pvt. Ltd., Nashik. I actively contribute as a member of the Cyber Security Cell and E-Builders Club at RCPIT, participating in Smart India Hackathon, COEP Tech Fest, and conducting cybersecurity workshops.
            </p>

          </div>
        </motion.div>

        {/* ===== Stats Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            { title: "6+", desc: "Backend Projects Built" },
            { title: "2+", desc: "Technical Clubs" },
            { title: "SIH", desc: "Hackathon Participation" },
            { title: "COEP", desc: "Tech Fest Participation" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >

              {/* Glow for each card */}
              <div className="
                absolute
                -inset-1
                rounded-2xl
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-blue-500
                opacity-0
                blur-2xl
                group-hover:opacity-30
                transition
              "></div>

              {/* Transparent Card */}
              <div className="
                relative
                bg-[#161b22]/70
                backdrop-blur-md
                border border-[#30363d]
                rounded-2xl
                p-8
                text-center
                transition
                hover:border-blue-500/60
              ">
                <h3 className="text-white text-3xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;