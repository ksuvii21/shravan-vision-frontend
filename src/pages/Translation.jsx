import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Translation() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');
  const [cameraOn, setCameraOn] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const handleTranslate = () => {
    // Mock translation - in real app, this would call an API
    if (inputText.trim()) {
      setTranslatedText(`[Translated to ${targetLang.toUpperCase()}]: ${inputText}`);
    }
  };

  const toggleCamera = async () => {
    if (cameraOn) {
      // Turn off camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setCameraOn(false);
    } else {
      // Turn on camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 },
          audio: false
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraOn(true);
        setIsTranslating(true);
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please check permissions.');
      }
    }
  };

  const startRealTimeTranslation = () => {
    if (!cameraOn) {
      alert('Please turn on the camera first to start real-time translation.');
      return;
    }
    setIsTranslating(true);
    // In a real app, this would start the AI translation pipeline
    alert('Real-time ISL translation started! (This is a demo - actual AI processing would begin here)');
  };

  const stopRealTimeTranslation = () => {
    setIsTranslating(false);
    // In a real app, this would stop the AI translation pipeline
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>Real-time Translation | Shravan Vision</title>
        <meta name="description" content="Real-time ISL translation between Indian Sign Language and spoken languages." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Real-time ISL Translation</h1>

        {/* Camera Section */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Camera Feed</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full max-w-md h-48 bg-black rounded-lg border-2 border-gray-300 dark:border-gray-600"
                style={{ display: cameraOn ? 'block' : 'none' }}
              />
              {!cameraOn && (
                <div className="w-full max-w-md h-48 bg-gray-200 dark:bg-gray-700 rounded-lg border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-4xl mb-2">📹</div>
                    <p>Camera is off</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <motion.button
                onClick={toggleCamera}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  cameraOn
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
              </motion.button>

              {cameraOn && (
                <motion.button
                  onClick={isTranslating ? stopRealTimeTranslation : startRealTimeTranslation}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    isTranslating
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isTranslating ? 'Stop Translation' : 'Start Real-time Translation'}
                </motion.button>
              )}
            </div>

            {isTranslating && (
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Translating in real-time...
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Source Language</label>
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="isl">Indian Sign Language</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Target Language</label>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="isl">Indian Sign Language</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-32 resize-none"
            />
          </div>

          <div className="mt-4 text-center">
            <motion.button
              onClick={handleTranslate}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Translate
            </motion.button>
          </div>

          {translatedText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md"
            >
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Translation Result:</h3>
              <p className="text-green-700 dark:text-green-300">{translatedText}</p>
            </motion.div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Note: This is a demo interface. Real-time ISL translation requires camera access and AI processing.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Translation;
