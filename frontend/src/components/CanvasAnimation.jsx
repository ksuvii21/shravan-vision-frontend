import React, { useRef, useEffect } from 'react';

const CanvasAnimation = ({ sign, onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Simple cartoon animation for ISL signs
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a simple cartoon hand based on sign
      ctx.fillStyle = '#FFD700'; // Gold color for cartoon
      ctx.beginPath();
      ctx.arc(200, 150, 50, 0, Math.PI * 2);
      ctx.fill();

      // Add text
      ctx.fillStyle = '#000';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(sign.word, 200, 160);

      // Simple animation loop
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [sign]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      className="border rounded-lg bg-white"
    />
  );
};

export default CanvasAnimation;
