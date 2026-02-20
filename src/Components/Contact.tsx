import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#161b22] border border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <form className="space-y-6">

            <div>
              <label className="block text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition shadow-lg"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;