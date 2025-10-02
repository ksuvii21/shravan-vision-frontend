import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gamification = ({ points, badges, level }) => {
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    if (points > 0) {
      setShowReward(true);
      setTimeout(() => setShowReward(false), 2000);
    }
  }, [points]);

  return (
    <div className="gamification-panel bg-card p-4 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Your Progress</h3>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{points}</div>
          <p className="text-sm text-muted-foreground">Points</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">{badges.length}</div>
          <p className="text-sm text-muted-foreground">Badges</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{level}</div>
          <p className="text-sm text-muted-foreground">Level</p>
        </div>
      </div>

      <div className="badges flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="badge bg-accent p-2 rounded-full text-xs"
            whileHover={{ scale: 1.1 }}
          >
            {badge.icon} {badge.name}
          </motion.div>
        ))}
      </div>

      {showReward && (
        <motion.div
          className="reward-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          +{points} Points Earned!
        </motion.div>
      )}
    </div>
  );
};

export default Gamification;
