import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>Contact & Support | Shravan Vision</title>
        <meta name="description" content="Get in touch with our support team for help and assistance." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Contact & Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help! Reach out to our support team for assistance, feedback, or any questions you may have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' }}
            className="bg-white dark:bg-teal-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-300 dark:border-teal-700"
          >
            <div className="w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">💬</span>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-3 text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-3 text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-3 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Support Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              className="bg-white dark:bg-blue-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-300 dark:border-blue-700"
            >
              <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Help & Resources</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl mr-4">❓</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">FAQ</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find answers to common questions</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl mr-4">📖</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">User Guide</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Step-by-step instructions</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl mr-4">💡</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Feedback</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Help us improve</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
              className="bg-white dark:bg-green-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300 dark:border-green-700"
            >
              <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email Support</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">support@shravanvision.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📱</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone Support</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+91-123-456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🕒</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Support Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">24/7 for emergencies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-xl text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-xl mb-6 opacity-90">
            For urgent assistance or technical support, our team is available around the clock.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => window.location.href = '/sos'}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Emergency SOS
            </motion.button>
            <motion.button
              onClick={() => window.location.href = '/livecalls'}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
