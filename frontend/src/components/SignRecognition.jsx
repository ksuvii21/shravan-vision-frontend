import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SignRecognition = ({ sign, onRecognized }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [feedback, setFeedback] = useState('Position your hand in front of the camera');

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const startRecognition = () => {
    setIsRecognizing(true);
    setFeedback('Analyzing your sign...');

    // Simulate recognition after 3 seconds
    setTimeout(() => {
      const recognized = Math.random() > 0.5; // Random for demo
      if (recognized) {
        setFeedback('Great! Sign recognized correctly!');
        onRecognized();
      } else {
        setFeedback('Try again. Adjust your hand position.');
      }
      setIsRecognizing(false);
    }, 3000);
  };

  return (
    <div className="sign-recognition bg-card p-6 rounded-lg border">
      <h3 className="text-xl font-semibold mb-4 text-center">Sign Recognition Practice</h3>
      <p className="text-center mb-4">Practice the sign: <strong>{sign.word}</strong></p>

      <div className="relative mb-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-64 bg-black rounded-lg"
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-64 pointer-events-none"
        />
      </div>

      <div className="text-center mb-4">
        <p className="text-muted-foreground">{feedback}</p>
      </div>

      <div className="text-center">
        <motion.button
          onClick={startRecognition}
          disabled={isRecognizing}
          className={`px-6 py-3 rounded-lg font-semibold ${
            isRecognizing
              ? 'bg-muted text-muted-foreground'
              : 'bg-primary text-primary-foreground'
          }`}
          whileHover={!isRecognizing ? { scale: 1.05 } : {}}
          whileTap={!isRecognizing ? { scale: 0.95 } : {}}
        >
          {isRecognizing ? 'Recognizing...' : 'Start Recognition'}
        </motion.button>
      </div>
    </div>
  );
};

export default SignRecognition;
