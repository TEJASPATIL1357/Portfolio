
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <div className="w-4/5 mx-auto my-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full"></div>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
