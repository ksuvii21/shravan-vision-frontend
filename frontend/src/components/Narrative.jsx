import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Narrative = ({ level }) => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      title: 'Welcome to ISL World!',
      content: 'You are about to embark on an exciting journey to learn Indian Sign Language. Start with basic greetings and work your way up to complex conversations.',
      image: '🌟',
    },
    {
      title: 'Greetings Master',
      content: 'Congratulations on learning your first greetings! Now you can say hello and thank you in sign language. Keep going to unlock more categories.',
      image: '👋',
    },
    {
      title: 'Object Explorer',
      content: 'You\'ve mastered objects! From water to food, you can now communicate basic needs. Your journey continues with emotions and family.',
      image: '🏠',
    },
  ];

  const current = stories[Math.min(currentStory, stories.length - 1)];

  return (
    <motion.div
      className="narrative bg-card p-6 rounded-lg border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{current.image}</div>
        <h3 className="text-xl font-semibold mb-2">{current.title}</h3>
        <p className="text-muted-foreground mb-4">{current.content}</p>
        <div className="flex justify-center space-x-2">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index <= currentStory ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Narrative;
