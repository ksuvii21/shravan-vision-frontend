import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CanvasAnimation from './CanvasAnimation';

const FlashCard = ({ sign, onCorrect, onIncorrect }) => {
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = () => {
    if (userInput.toLowerCase() === sign.word.toLowerCase()) {
      onCorrect();
    } else {
      onIncorrect();
    }
  };

  return (
    <motion.div
      className="flashcard bg-card p-6 rounded-lg border cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped ? (
        <div className="front text-center">
          <CanvasAnimation sign={sign} />
          <p className="mt-4">What sign is this?</p>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="mt-2 p-2 border rounded w-full"
            placeholder="Type the word..."
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit();
            }}
            className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="back text-center">
          <h3 className="text-xl font-bold">{sign.word}</h3>
          <p className="text-muted-foreground">{sign.description}</p>
          <p className="text-sm mt-2">Category: {sign.category}</p>
        </div>
      )}
    </motion.div>
  );
};

export default FlashCard;
