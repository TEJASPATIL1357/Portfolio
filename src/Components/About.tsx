
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-[#0f172a] text-white text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Shadow container for text */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg  hover:shadow-white transition duration-300">
        <p className="text-lg">
          I'm a computer engineering student who loves building websites and learning new things.
          I enjoy creating clean and user-friendly designs.
          I’m also interested in cybersecurity and ethical hacking.
          I like solving problems and improving my skills every day.
          In my free time, I explore new tech and build small projects.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-6">
        <a
          href="https://github.com/TEJASPATIL1357"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/Tejas_patil_1357"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.codechef.com/users/tejas_patil_85"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-pink-500 transition duration-300"
        >
          <SiCodechef />
        </a>
      </div>
    </section>
  );
};

export default About;
