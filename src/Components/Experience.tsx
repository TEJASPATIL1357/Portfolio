

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Cyber Security Cell Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full md:w-1/2 hover:shadow-blue-500/50 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Cyber Security Cell – Team Member</h3>
          <p className="text-sm text-gray-300 mb-1">R C Patel Institute of Technology, Shirpur</p>
          <p className="text-gray-400 text-sm">
            I’m an active team member in our college’s Cyber Security Cell. I’ve learned how to stay safe online and also helped in spreading awareness about cyber security among students. I work with my team on small events and training sessions.
          </p>
        </div>

        {/* E-Builders Club Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full md:w-1/2 hover:shadow-pink-500/50 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">E-Builders Club – Member</h3>
          <p className="text-sm text-gray-300 mb-1">R C Patel Institute of Technology, Shirpur</p>
          <p className="text-gray-400 text-sm">
            As a part of the E-Builders Club, I’m involved in tech activities like coding, building projects, and learning with other students. It has helped me grow my interest in frontend development and teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
