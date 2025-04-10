import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_wepcy7j',         // ✅ Your Service ID
          'template_whs0zkp',        // ✅ Your Template ID
          formRef.current,
          'JQYYzgv-HOu4EXdfH'        // ✅ Your Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('✅ Message sent successfully!');
            formRef.current?.reset();
          },
          (error) => {
            console.error('❌ Email send error:', error.text);
            alert('❌ Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-4 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-4 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="p-4 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
