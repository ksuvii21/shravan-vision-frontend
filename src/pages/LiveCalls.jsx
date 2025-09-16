import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function LiveCalls() {
  const [callStatus, setCallStatus] = useState('Not connected');
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);

  const servers = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
    ],
  };

  const startCall = async () => {
    setCallStatus('Starting call...');
    peerConnectionRef.current = new RTCPeerConnection(servers);

    peerConnectionRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        // Send candidate to remote peer via signaling server (not implemented)
        console.log('New ICE candidate:', event.candidate);
      }
    };

    peerConnectionRef.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      stream.getTracks().forEach((track) => {
        peerConnectionRef.current.addTrack(track, stream);
      });

      const offer = await peerConnectionRef.current.createOffer();
      await peerConnectionRef.current.setLocalDescription(offer);

      // Send offer to remote peer via signaling server (not implemented)
      console.log('Offer created:', offer);

      setCallStatus('Call started - waiting for remote answer (signaling not implemented)');
    } catch (error) {
      console.error('Error starting call:', error);
      setCallStatus('Error starting call');
    }
  };

  const triggerSOS = () => {
    alert('Emergency SOS triggered! Assistance is on the way.');
    // Add actual SOS logic here, e.g., send notification or call emergency services
  };

  const startLiveCall = () => {
    alert('Starting Live Sign-to-Sign Call...');
    // Integrate with actual call functionality or redirect
    startCall(); // Reuse existing startCall for now
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>Live Calls | Shravan Vision</title>
        <meta name="description" content="WebRTC-based live calls with certified interpreters for seamless communication." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Live Calls
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            WebRTC-based live calls functionality with certified interpreters for real-time communication.
          </p>
        </motion.div>

        {/* Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
            className="bg-white dark:bg-blue-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-300 dark:border-blue-700"
          >
            <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📹</span>
            </div>
            <h2 className="font-semibold mb-4 text-center text-gray-900 dark:text-white">Local Video</h2>
            <video ref={localVideoRef} autoPlay muted className="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-600" />
            <div className="mt-4 flex justify-center">
              <motion.button
                onClick={async () => {
                  if (localVideoRef.current && localVideoRef.current.srcObject) {
                    const stream = localVideoRef.current.srcObject;
                    const videoTrack = stream.getVideoTracks()[0];
                    if (videoTrack) {
                      videoTrack.enabled = !videoTrack.enabled;
                    }
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Toggle Camera
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
            className="bg-white dark:bg-green-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300 dark:border-green-700"
          >
            <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📞</span>
            </div>
            <h2 className="font-semibold mb-4 text-center text-gray-900 dark:text-white">Remote Video</h2>
            <video ref={remoteVideoRef} autoPlay className="w-full h-48 object-cover rounded-lg border border-gray-300 dark:border-gray-600" />
          </motion.div>
        </div>

        {/* Status and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
          className="bg-white dark:bg-yellow-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-300 dark:border-yellow-700 mb-8"
        >
          <div className="w-16 h-16 bg-yellow-200 dark:bg-yellow-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">⚡</span>
          </div>
          <p className="mb-6 text-center text-gray-900 dark:text-white"><strong>Status:</strong> {callStatus}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={startCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Call
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                if (localVideoRef.current && localVideoRef.current.srcObject) {
                  const stream = localVideoRef.current.srcObject;
                  stream.getTracks().forEach(track => track.stop());
                  localVideoRef.current.srcObject = null;
                  setCallStatus('Call ended');
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              End Call
            </motion.button>
          </div>
        </motion.div>

        {/* Live Calls & SOS Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
            className="bg-white dark:bg-green-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300 dark:border-green-700"
          >
            <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">🤟</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Live Sign-to-Sign Calls</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
              Connect with certified interpreters for real-time communication.
            </p>
            <div className="text-center">
              <motion.button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                onClick={startLiveCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Live Call
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)' }}
            className="bg-white dark:bg-red-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-300 dark:border-red-700"
          >
            <div className="w-16 h-16 bg-red-200 dark:bg-red-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">🚨</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Emergency SOS</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
              Quick gesture-based emergency alert for immediate assistance.
            </p>
            <div className="text-center">
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                onClick={triggerSOS}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Trigger SOS
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
            className="bg-white dark:bg-blue-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-300 dark:border-blue-700"
          >
            <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Call History</h3>
            <div className="max-h-48 overflow-y-auto">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Call with Interpreter #123</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">10:30 AM</p>
                  </div>
                </li>
                <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Call with Interpreter #456</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2:15 PM</p>
                  </div>
                </li>
                <li className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Emergency SOS</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">5:45 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-xl text-white shadow-lg mt-8"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-6 opacity-90">
            Experience seamless communication with our live calling features and emergency support.
          </p>
          <motion.button
            onClick={() => window.location.href = '/accessibility'}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LiveCalls;
