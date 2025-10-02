import React from 'react';
import { motion } from 'framer-motion';

function LoadingSpinner({ size = 'md', color = 'pink' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    pink: 'border-pink-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gray: 'border-gray-500'
  };

  return (
    <motion.div
      className={`inline-block ${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    />
  );
}

export default LoadingSpinner;
