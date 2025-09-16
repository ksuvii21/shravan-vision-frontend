import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function ARLearning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>Gamified AR Learning | Shravan Vision</title>
        <meta name="description" content="Interactive augmented reality learning modules for immersive ISL practice." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Gamified AR Learning
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Engage in interactive augmented reality sessions to practice ISL signs in real-time with gamified progress tracking and personalized learning paths.
          </p>
        </motion.div>

        {/* AR Practice Session */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(100, 116, 139, 0.15)' }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">🎮</span>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">AR Practice Session</h2>
          <p className="text-lg mb-8 text-slate-700 dark:text-slate-300 text-center leading-relaxed">
            Engage in interactive augmented reality sessions to practice ISL signs in real-time with instant feedback and guided learning.
          </p>
          <div className="text-center">
            <motion.button
              className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start AR Practice Session
            </motion.button>
          </div>
        </motion.div>

        {/* Progress & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)' }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">📊</span>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">Progress & Achievements</h2>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-medium text-slate-700 dark:text-slate-300">Overall Progress</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">65%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full"
                style={{ width: '65%' }}
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 text-center">Keep practicing to unlock new modules!</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center justify-center">
              <span className="mr-3">🏆</span>Achievements Earned
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 p-4 rounded-lg text-center border border-yellow-200 dark:border-yellow-700"
              >
                <div className="text-3xl mb-3">⭐</div>
                <p className="font-semibold text-yellow-800 dark:text-yellow-200">Beginner</p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">First steps</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-700"
              >
                <div className="text-3xl mb-3">🚀</div>
                <p className="font-semibold text-blue-800 dark:text-blue-200">Quick Learner</p>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Fast progress</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-4 rounded-lg text-center border border-purple-200 dark:border-purple-700"
              >
                <div className="text-3xl mb-3">🎯</div>
                <p className="font-semibold text-purple-800 dark:text-purple-200">Consistent</p>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">Daily practice</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 p-4 rounded-lg text-center border border-pink-200 dark:border-pink-700"
              >
                <div className="text-3xl mb-3">💪</div>
                <p className="font-semibold text-pink-800 dark:text-pink-200">Dedicated</p>
                <p className="text-xs text-pink-700 dark:text-pink-300 mt-1">Week streak</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Learning Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)' }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-slate-900 dark:text-white">Basic Signs</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-center leading-relaxed">
                Learn fundamental ISL signs with interactive AR guidance and step-by-step tutorials.
              </p>
              <div className="text-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Module
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)' }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-slate-900 dark:text-white">Conversational ISL</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-center leading-relaxed">
                Practice everyday conversations with AR-enhanced feedback and real-world scenarios.
              </p>
              <div className="text-center">
                <motion.button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Module
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.15)' }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-slate-900 dark:text-white">Advanced Gestures</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-center leading-relaxed">
                Master complex sign combinations with expert AR coaching and advanced techniques.
              </p>
              <div className="text-center">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Module
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(20, 184, 166, 0.15)' }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="w-16 h-16 bg-teal-100 dark:bg-teal-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">📈</span>
          </div>
          <h2 className="text-2xl font-semibold mb-8 text-center text-slate-900 dark:text-white">Learning Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">127</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Signs Learned</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">23</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Practice Sessions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">94%</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">12</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Days Streak</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-slate-700 to-slate-900 p-10 rounded-xl text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AR Learning Journey?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of learners who have mastered ISL through our immersive AR experience and gamified learning approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => window.location.href = '/translation'}
              className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Translation First
            </motion.button>
            <motion.button
              onClick={() => window.location.href = '/accessibility'}
              className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ARLearning;
