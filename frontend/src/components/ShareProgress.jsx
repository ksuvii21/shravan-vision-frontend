import React from 'react';
import { motion } from 'framer-motion';

const ShareProgress = ({ points, level, badges }) => {
  const shareText = `I just reached level ${level} in Shravan Vision ISL Learning with ${points} points and ${badges.length} badges! 🏆 #ISL #SignLanguage #ShravanVision`;

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert('Progress copied to clipboard!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card p-6 rounded-xl shadow-lg border"
    >
      <h3 className="text-xl font-semibold mb-4 text-center">Share Your Progress</h3>
      <div className="flex justify-center gap-4">
        <motion.button
          onClick={shareOnTwitter}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Twitter
        </motion.button>
        <motion.button
          onClick={shareOnFacebook}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Facebook
        </motion.button>
        <motion.button
          onClick={copyToClipboard}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Copy
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ShareProgress;
