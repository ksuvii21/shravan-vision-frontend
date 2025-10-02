import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Accessibility() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>Accessibility Features | Shravan Vision</title>
        <meta name="description" content="Comprehensive accessibility features to empower deaf and hard-of-hearing individuals." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Accessibility Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform offers comprehensive accessibility features designed to make communication seamless, inclusive, and empowering for the deaf and hard-of-hearing community.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)' }}
            className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-300 dark:border-purple-700 cursor-pointer"
            onClick={() => window.location.href = '/translation'}
          >
            <div className="w-12 h-12 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI-Powered Translation</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Real-time Indian Sign Language translation with advanced AI accuracy, supporting multiple languages and dialects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(34, 197, 94, 0.7)' }}
            className="bg-white dark:bg-green-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300 dark:border-green-700 cursor-pointer"
            onClick={() => window.location.href = '/livecalls'}
          >
            <div className="w-12 h-12 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📹</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Live Video Calls</h3>
            <p className="text-gray-700 dark:text-gray-300">
              WebRTC-based live calls with certified interpreters and camera controls for seamless communication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(139, 92, 246, 0.7)' }}
            className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-300 dark:border-purple-700 cursor-pointer"
            onClick={() => window.location.href = '/arlearning'}
          >
            <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AR Learning</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Augmented reality learning modules for immersive ISL practice with gamified progress tracking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(202, 138, 4, 0.7)' }}
            className="bg-white dark:bg-yellow-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-300 dark:border-yellow-700 cursor-pointer"
            onClick={() => window.location.href = '/customizableui'}
          >
            <div className="w-12 h-12 bg-yellow-200 dark:bg-yellow-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Customizable UI</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Personalized interface with themes, font sizes, haptic feedback, and accessibility preferences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(220, 38, 38, 0.7)' }}
            className="bg-white dark:bg-red-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-300 dark:border-red-700 cursor-pointer"
            onClick={() => window.location.href = '/sos'}
          >
            <div className="w-12 h-12 bg-red-200 dark:bg-red-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Emergency SOS</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Quick gesture-based emergency alerts with instant assistance and location sharing capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(20, 184, 166, 0.7)' }}
            className="bg-white dark:bg-teal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-300 dark:border-teal-700 cursor-pointer"
            onClick={() => window.location.href = '/voiceintegration'}
          >
            <div className="w-12 h-12 bg-teal-200 dark:bg-teal-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Voice Integration</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Voice input and output options for hands-free interaction and multi-modal communication.
            </p>
          </motion.div>
        </div>

        {/* Detailed Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg mb-8 border border-gray-200 dark:border-slate-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Advanced Accessibility Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Visual Accessibility</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  High contrast mode for better visibility
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Adjustable font sizes and styles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Colorblind-friendly color schemes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Screen reader compatibility
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Interaction Features</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Haptic feedback for gesture confirmation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Voice commands and audio cues
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Keyboard navigation support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Gesture-based shortcuts
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Experience Inclusive Communication</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of users who have transformed their communication experience with Shravan Vision.
          </p>
          <button
            onClick={() => window.location.href = '/login'}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Accessibility;
