import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact & Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-6 border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
          >
            Send Message
          </button>
        </form>
        <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-4">Support Resources</h2>
          <p className="mb-2">
            <strong>FAQ</strong>: Find answers to common questions about using Shravan Vision.<br />
            <a href="/faq" className="text-blue-400 hover:underline">View FAQ</a>
          </p>
          <p className="mb-2">
            <strong>User Guide</strong>: Step-by-step instructions for all features.<br />
            <a href="/user-guide.pdf" className="text-blue-400 hover:underline" download>Download Guide</a>
          </p>
          <p className="mb-2">
            <strong>Feedback</strong>: Help us improve by sharing your experience.<br />
            <a href="/feedback" className="text-blue-400 hover:underline">Give Feedback</a>
          </p>
          <p>
            <strong>Contact Info</strong>:<br />
            Email: support@shravanvision.com<br />
            Phone: +91-123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
