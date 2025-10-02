import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([
    { name: 'Alice', points: 1250, level: 5 },
    { name: 'Bob', points: 1100, level: 4 },
    { name: 'Charlie', points: 950, level: 4 },
    { name: 'You', points: 0, level: 1 }, // Will be updated from props
  ]);

  // In real app, fetch from Firebase
  useEffect(() => {
    // Mock data - replace with Firebase fetch
  }, []);

  return (
    <div className="leaderboard bg-card p-6 rounded-lg border">
      <h3 className="text-xl font-semibold mb-4 text-center">🏆 Leaderboard</h3>
      <div className="space-y-3">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg ${
              leader.name === 'You' ? 'bg-primary/10 border border-primary' : 'bg-muted'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
              <div>
                <p className="font-medium">{leader.name}</p>
                <p className="text-sm text-muted-foreground">Level {leader.level}</p>
              </div>
            </div>
            <span className="font-bold text-primary">{leader.points} pts</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
