import React, { useState, useRef } from 'react';

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
    <div className="p-4 max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Live Calls</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-200">
        WebRTC-based live calls functionality (basic implementation).
      </p>

      {/* Video Section - Compact Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">Local Video</h2>
            <video ref={localVideoRef} autoPlay muted className="w-full h-48 object-cover rounded border border-gray-300 dark:border-gray-600" />
            <div className="mt-2 flex justify-center">
              <button
                onClick={async () => {
                  if (localVideoRef.current && localVideoRef.current.srcObject) {
                    const stream = localVideoRef.current.srcObject;
                    const videoTrack = stream.getVideoTracks()[0];
                    if (videoTrack) {
                      videoTrack.enabled = !videoTrack.enabled;
                    }
                  }
                }}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
              >
                Toggle Camera
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">Remote Video</h2>
            <video ref={remoteVideoRef} autoPlay className="w-full h-48 object-cover rounded border border-gray-300 dark:border-gray-600" />
          </div>
      </div>

      {/* Status and Controls */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6 shadow-inner border border-gray-300 dark:border-gray-600">
        <p className="mb-4 text-gray-900 dark:text-white"><strong>Status:</strong> {callStatus}</p>
        <div className="flex flex-wrap gap-3">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            onClick={startCall}
          >
            Start Call
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            onClick={() => {
              if (localVideoRef.current && localVideoRef.current.srcObject) {
                const stream = localVideoRef.current.srcObject;
                stream.getTracks().forEach(track => track.stop());
                localVideoRef.current.srcObject = null;
                setCallStatus('Call ended');
              }
            }}
          >
            End Call
          </button>
        </div>
      </div>

      {/* Live Calls & SOS Section - Horizontal Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg shadow-md border border-green-300 dark:border-green-700">
          <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">Live Sign-to-Sign Calls</h3>
          <p className="mb-4 text-green-700 dark:text-green-300">Connect with certified interpreters for real-time communication.</p>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={startLiveCall}
          >
            Start Live Call
          </button>
        </div>

        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg shadow-md border border-red-300 dark:border-red-700">
          <h3 className="text-xl font-semibold mb-2 text-red-800 dark:text-red-200">Emergency SOS</h3>
          <p className="mb-4 text-red-700 dark:text-red-300">Quick gesture-based emergency alert for immediate assistance.</p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={triggerSOS}
          >
            Trigger SOS
          </button>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow-md border border-blue-300 dark:border-blue-700">
          <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Call History</h3>
          <div className="max-h-32 overflow-y-auto">
            <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
              <li>Call with Interpreter #123 - 10:30 AM</li>
              <li>Call with Interpreter #456 - 2:15 PM</li>
              <li>Emergency SOS - 5:45 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveCalls;
