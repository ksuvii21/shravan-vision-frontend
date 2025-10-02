import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import CanvasAnimation from '../components/CanvasAnimation';
import ARPractice from '../components/ARPractice';
import Gamification from '../components/Gamification';
import FlashCard from '../components/FlashCard';
import { islSigns } from '../data/islSigns';

function ARLearning() {
  const [currentSign, setCurrentSign] = useState(islSigns[0]);
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([{ name: 'Beginner', icon: '⭐' }]);
  const [level, setLevel] = useState(1);
  const [mode, setMode] = useState('flashcard'); // flashcard, ar, canvas
  const [progress, setProgress] = useState(0);

  const handleCorrect = () => {
    setPoints(points + currentSign.points);
    setProgress(progress + 1);
    // Unlock next sign
    const nextSign = islSigns.find(s => !s.unlocked);
    if (nextSign) nextSign.unlocked = true;
    // Level up
    if (points % 100 === 0) setLevel(level + 1);
  };

  const handleIncorrect = () => {
    // Show feedback
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {/* Mode Selection */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setMode('flashcard')}
                className={`px-4 py-2 rounded-l-lg ${mode === 'flashcard' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              >
                Flash Cards
              </button>
              <button
                onClick={() => setMode('canvas')}
                className={`px-4 py-2 ${mode === 'canvas' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              >
                Canvas Animation
              </button>
              <button
                onClick={() => setMode('ar')}
                className={`px-4 py-2 rounded-r-lg ${mode === 'ar' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              >
                AR Practice
              </button>
            </div>

            {/* Learning Content */}
            {mode === 'flashcard' && (
              <FlashCard sign={currentSign} onCorrect={handleCorrect} onIncorrect={handleIncorrect} />
            )}
            {mode === 'canvas' && (
              <CanvasAnimation sign={currentSign} />
            )}
            {mode === 'ar' && (
              <ARPractice sign={currentSign} />
            )}
          </div>

          <div>
            <Gamification points={points} badges={badges} level={level} />
          </div>
        </div>

        {/* Progress & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card p-8 rounded-xl shadow-lg border mb-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Progress & Achievements</h2>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-medium">Overall Progress</span>
              <span className="text-lg font-bold text-green-600">{Math.round((progress / islSigns.length) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full"
                style={{ width: `${(progress / islSigns.length) * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(progress / islSigns.length) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">Keep practicing to unlock new modules!</p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
              <span className="mr-3">🏆</span>Achievements Earned
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 p-4 rounded-lg text-center border"
                >
                  <div className="text-3xl mb-3">{badge.icon}</div>
                  <p className="font-semibold">{badge.name}</p>
                </motion.div>
              ))}
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
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {islSigns.slice(0, 3).map((sign, index) => (
              <motion.div
                key={sign.id}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-8 rounded-xl shadow-lg border"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{sign.category}</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  Learn {sign.category.toLowerCase()} signs with interactive guidance.
                </p>
                <div className="text-center">
                  <motion.button
                    onClick={() => setCurrentSign(sign)}
                    className="bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Module
                  </motion.button>
                </div>
              </motion.div>
            ))}
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
