import { useState } from 'react';
import Popup from './Popup';
import MyImage from '../assets/My-Image.jpg'; // ✅ Correct import path

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4"
    >
      <img
        src={MyImage}
        alt="Myself"
        className="w-65 h-60 rounded-full object-cover border-4 border-white shadow-lg mb-4 hover:scale-105 transition"
      />
      <h1 className="text-4xl font-bold mb-2">Hey, I’m Tejas patil</h1>
      <p className="text-lg text-gray-300 mb-6">I'm a passionate Frontend Developer</p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition"
      >
        Hire Me
      </button>

      {/* 👁️ Visitor Count Badge */}
      <div className="mt-6 bg-gray-800 px-4 py-2 rounded-full shadow-md">
        <span className="text-cyan-400 font-semibold">1,257</span> people viewed this portfolio
      </div>

      {/* ✨ Decorative Divider */}
      <div className="w-1/2 border-t-2 border-cyan-400 mt-12 mb-[-80px] rounded-full"></div>

      {/* Popup Modal */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">Let's work together!</h2>
        <p>You can reach me at <a href="mailto:tp257188@gmail.com" className="text-blue-400">tp257188@gmail.com</a></p>
      </Popup>
    </section>
  );
};

export default Hero;
