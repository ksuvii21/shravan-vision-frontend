import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Challenges = ({ onChallengeComplete }) => {
  const [challenges] = useState([
    {
      id: 1,
      title: 'Speed Signer',
      description: 'Complete 5 signs in under 30 seconds',
      reward: 50,
      completed: false,
      timeLimit: 30,
    },
    {
      id: 2,
      title: 'Category Master',
      description: 'Learn all greetings signs',
      reward: 100,
      completed: false,
    },
    {
      id: 3,
      title: 'Streak Champion',
      description: 'Get 10 correct answers in a row',
      reward: 75,
      completed: false,
    },
  ]);

  return (
    <div className="challenges bg-card p-6 rounded-lg border">
      <h3 className="text-xl font-semibold mb-4 text-center">🎯 Daily Challenges</h3>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            className={`p-4 rounded-lg border ${
              challenge.completed ? 'bg-green-50 border-green-200' : 'bg-muted'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{challenge.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">+{challenge.reward} pts</p>
                {challenge.completed && <span className="text-green-600 text-sm">✓ Completed</span>}
              </div>
            </div>
            {!challenge.completed && (
              <motion.button
                className="mt-3 bg-primary text-primary-foreground px-4 py-2 rounded text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onChallengeComplete(challenge.id)}
              >
                Start Challenge
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
