import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeChallenge = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [currentSign, setCurrentSign] = useState('A');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onComplete(score);
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft, score, onComplete]);

  const startChallenge = () => {
    setIsActive(true);
    setTimeLeft(30);
    setScore(0);
    setCurrentSign('A');
  };

  const handleCorrect = () => {
    setScore(score + 10);
    setCurrentSign(String.fromCharCode(currentSign.charCodeAt(0) + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card p-6 rounded-xl shadow-lg border"
    >
      <h3 className="text-xl font-semibold mb-4 text-center">Time Challenge</h3>
      {!isActive ? (
        <div className="text-center">
          <p className="mb-4">Sign as many letters as possible in 30 seconds!</p>
          <motion.button
            onClick={startChallenge}
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Challenge
          </motion.button>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-4xl font-bold mb-4">{timeLeft}</div>
          <div className="text-2xl mb-4">Sign: {currentSign}</div>
          <div className="text-lg mb-4">Score: {score}</div>
          <motion.button
            onClick={handleCorrect}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Correct!
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default TimeChallenge;
