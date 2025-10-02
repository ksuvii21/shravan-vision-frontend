import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function SOS() {
  const triggerEmergency = () => {
    alert('🚨 EMERGENCY SOS ACTIVATED! 🚨\n\nEmergency services have been notified.\nStay calm and follow instructions.\n\nThis is a demo - in a real application, this would:\n• Send your location to emergency services\n• Alert nearby responders\n• Notify your emergency contacts\n• Provide real-time assistance');
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
        <title>Emergency SOS | Shravan Vision</title>
        <meta name="description" content="Emergency SOS system for immediate assistance and support." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Emergency SOS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Quick access to emergency services and support. Your safety is our top priority.
          </p>
        </motion.div>

        {/* Emergency Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={triggerEmergency}
            className="w-48 h-48 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 border-4 border-white dark:border-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-2">🚨</div>
              <div className="text-white font-bold text-xl">SOS</div>
              <div className="text-white text-sm opacity-90">Tap for Emergency</div>
            </div>
          </motion.button>
        </motion.div>

        {/* Emergency Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)' }}
            className="bg-white dark:bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-300 dark:border-red-700"
          >
            <div className="w-16 h-16 bg-red-200 dark:bg-red-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Emergency Services</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              Direct access to local emergency services and first responders.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Police: 100
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Ambulance: 108
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Fire: 101
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
            className="bg-white dark:bg-green-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300 dark:border-green-700"
          >
            <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Medical Support</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              Quick access to medical facilities and healthcare providers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Nearest Hospital
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Pharmacy Locator
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Medical History
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
            className="bg-white dark:bg-blue-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-300 dark:border-blue-700"
          >
            <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Support Network</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              Connect with emergency contacts and support communities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Emergency Contacts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Support Groups
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Crisis Hotline
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Safety Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
          className="bg-white dark:bg-yellow-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-300 dark:border-yellow-700 mb-8"
        >
          <div className="w-16 h-16 bg-yellow-200 dark:bg-yellow-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">🛡️</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Safety Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">During Emergency</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Stay calm and assess the situation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Move to a safe location if possible
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Provide clear information to responders
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Follow instructions from emergency personnel
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Prevention Tips</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Keep emergency contacts updated
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Share your location when safe
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Learn basic first aid and sign language
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Test emergency features regularly
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-gradient-to-r from-red-600 to-pink-600 p-8 rounded-xl text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Your Safety Matters</h2>
          <p className="text-xl mb-6 opacity-90">
            Remember: This SOS system is designed to provide immediate assistance. Use it responsibly and only in genuine emergencies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/livecalls"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Live Support
            </Link>
            <Link
              to="/accessibility"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              All Features
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
