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
      className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
    >
      <Helmet>
        <title>Real-time Translation | Shravan Vision</title>
        <meta name="description" content="Real-time ISL translation between Indian Sign Language and spoken languages." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Real-time ISL Translation
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience seamless communication with AI-powered translation between Indian Sign Language and spoken languages.
          </p>
        </motion.div>

        {/* Camera Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(100, 116, 139, 0.15)' }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">📹</span>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">Camera Feed</h2>
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
                <div className="w-full max-w-md h-48 bg-slate-200 dark:bg-slate-700 rounded-lg border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center">
                  <div className="text-center text-slate-500 dark:text-slate-400">
                    <div className="text-4xl mb-2">📹</div>
                    <p>Camera is off</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={toggleCamera}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  cameraOn
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-slate-600 hover:bg-slate-700 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
              </motion.button>

              {cameraOn && (
                <motion.button
                  onClick={isTranslating ? stopRealTimeTranslation : startRealTimeTranslation}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  Translating in real-time...
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Translation Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)' }}
          className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <span className="text-3xl">🌐</span>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">Text Translation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-slate-700 dark:text-slate-300">Source Language</label>
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
              >
                <option value="en">🇺🇸 English</option>
                <option value="hi">🇮🇳 Hindi</option>
                <option value="isl">🤟 Indian Sign Language</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-slate-700 dark:text-slate-300">Target Language</label>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
              >
                <option value="en">🇺🇸 English</option>
                <option value="hi">🇮🇳 Hindi</option>
                <option value="isl">🤟 Indian Sign Language</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-3 text-slate-700 dark:text-slate-300">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-gray-700 text-slate-900 dark:text-white h-32 resize-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
            />
          </div>

          <div className="text-center mb-6">
            <motion.button
              onClick={handleTranslate}
              className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Translate Text
            </motion.button>
          </div>

          {translatedText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg"
            >
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                <span className="mr-2">✅</span>Translation Result:
              </h3>
              <p className="text-green-700 dark:text-green-300 text-lg">{translatedText}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-slate-700 to-slate-900 p-10 rounded-xl text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Break Language Barriers?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Experience the power of real-time ISL translation and connect with the world.
          </p>
          <motion.button
            onClick={() => window.location.href = '/accessibility'}
            className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More Features
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Translation;
