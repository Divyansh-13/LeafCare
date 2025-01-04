import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5001/send-mail', {  // Direct backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('Failed to send email. Please try again.');
    }
  };
  

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-r from-green-100 to-white flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="text-4xl font-extrabold text-green-700 mb-4 shadow-lg tracking-wide">
        Contact Us
      </h2>
      <p className="text-lg mb-8 text-gray-800 max-w-lg mx-4 leading-relaxed">
        Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <form
        className="flex flex-col items-center space-y-6 bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg mx-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center w-full">
          <FaUser className="text-green-500 mr-3 text-xl" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            required
          />
        </div>

        <div className="flex items-center w-full">
          <FaEnvelope className="text-green-500 mr-3 text-xl" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            required
          />
        </div>

        <div className="flex items-center w-full">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded w-full h-40 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex items-center bg-green-500 text-white px-8 py-4 rounded hover:bg-green-600 transition-colors duration-300 text-lg"
        >
          <FaPaperPlane className="mr-2 text-lg" /> Send Message
        </button>
      </form>

      {status && (
        <p className={`mt-4 text-lg ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
