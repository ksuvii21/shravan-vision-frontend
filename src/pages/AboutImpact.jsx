import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function AboutImpact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>About & Research | Shravan Vision</title>
        <meta name="description" content="Learn about our mission, technology, and research behind Shravan Vision." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About & Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our mission to bridge communication gaps and the cutting-edge technology powering inclusive communication.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)' }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 dark:border-gray-700 mb-8"
        >
          <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">🎯</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto">
            Shravan Vision is dedicated to breaking down communication barriers for the deaf and hard-of-hearing community in India.
            We leverage cutting-edge AI and computer vision technologies to create seamless translation between Indian Sign Language (ISL)
            and spoken languages, empowering millions to communicate freely and access equal opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Technical Innovation</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
              Our platform combines multiple cutting-edge technologies to deliver real-time, accurate ISL translation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">🤖</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">TensorFlow Lite</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">On-device machine learning inference</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">👋</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">MediaPipe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time hand tracking & gesture recognition</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">🌐</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">WebRTC</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Peer-to-peer video communication</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">🎮</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">ARCore</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Augmented reality learning experiences</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research & Datasets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Research Foundation</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
              Our AI models are trained on comprehensive datasets and incorporate the latest research in sign language processing.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">📚</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">IEEE Publications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time gesture recognition research</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">🏆</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Kaggle Datasets</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ISL gesture recognition datasets</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">🔬</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">arXiv Preprints</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Latest sign language processing research</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl mr-4">💾</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Custom Dataset</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">50,000+ annotated ISL gestures</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 dark:border-gray-700 mb-8"
        >
          <div className="w-16 h-16 bg-yellow-200 dark:bg-yellow-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">👥</span>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Dr. AI Expert</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Machine Learning Lead</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                PhD in Computer Vision with 10+ years experience in gesture recognition and AI research.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Ms. UX Designer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">User Experience Specialist</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Expert in accessible design with focus on inclusive interfaces for diverse user needs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Mr. Dev Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Full-Stack Developer</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Specialized in real-time applications and scalable web technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 dark:border-gray-700 mb-8"
        >
          <div className="w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">📈</span>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-400">ISL Gestures Dataset</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">95%</div>
              <p className="text-gray-600 dark:text-gray-400">Translation Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">10K+</div>
              <p className="text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-400">Support Available</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-6 opacity-90">
            Help us make communication accessible to everyone. Your support drives innovation and inclusion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
            <motion.button
              onClick={() => window.location.href = '/accessibility'}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutImpact;
