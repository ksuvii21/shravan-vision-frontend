import React, { useEffect } from 'react';

const ARPractice = ({ sign }) => {
  useEffect(() => {
    // Load A-Frame and AR.js scripts
    const script1 = document.createElement('script');
    script1.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className="ar-container">
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-marker preset="hiro">
          <a-entity
            geometry="primitive: box"
            material="color: red"
            position="0 0.5 0"
          ></a-entity>
          <a-text
            value={sign.word}
            position="0 1 0"
            color="black"
            align="center"
          ></a-text>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
      <p className="text-center mt-4">Point your camera at a Hiro marker to see the AR sign.</p>
    </div>
  );
};

export default ARPractice;
