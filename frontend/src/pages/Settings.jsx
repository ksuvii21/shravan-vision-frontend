import React, { useState, useEffect } from 'react';

function Settings() {
  const [hapticFeedback, setHapticFeedback] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [arLearningMode, setArLearningMode] = useState(false);
  const [largeFonts, setLargeFonts] = useState(false);
  const [regionalSignLanguage, setRegionalSignLanguage] = useState('Indian Sign Language');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem('shravanVisionSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setHapticFeedback(settings.hapticFeedback || false);
      setOfflineMode(settings.offlineMode || false);
      setArLearningMode(settings.arLearningMode || false);
      setLargeFonts(settings.largeFonts || false);
      setRegionalSignLanguage(settings.regionalSignLanguage || 'Indian Sign Language');
    }
    // Check for dark mode
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSaveSettings = () => {
    const settings = {
      hapticFeedback,
      offlineMode,
      arLearningMode,
      largeFonts,
      regionalSignLanguage,
    };
    // Save settings to localStorage or backend as needed
    localStorage.setItem('shravanVisionSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-8 max-w-3xl mx-auto relative">
      <h1 className="text-4xl font-bold mb-6 text-center">Settings</h1>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {darkMode ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          )}
        </svg>
      </button>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Accessibility Settings</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={hapticFeedback}
              onChange={() => setHapticFeedback(!hapticFeedback)}
              className="form-checkbox h-5 w-5"
            />
            <span>Haptic Feedback</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={offlineMode}
              onChange={() => setOfflineMode(!offlineMode)}
              className="form-checkbox h-5 w-5"
            />
            <span>Offline Mode</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={arLearningMode}
              onChange={() => setArLearningMode(!arLearningMode)}
              className="form-checkbox h-5 w-5"
            />
            <span>AR Learning Mode</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={largeFonts}
              onChange={() => setLargeFonts(!largeFonts)}
              className="form-checkbox h-5 w-5"
            />
            <span>Large Readable Fonts</span>
          </label>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Regional Settings</h2>
        <select
          value={regionalSignLanguage}
          onChange={(e) => setRegionalSignLanguage(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded"
        >
          <option>Indian Sign Language</option>
          <option>American Sign Language</option>
          <option>British Sign Language</option>
          <option>Other Regional Sign Language</option>
        </select>
      </section>

      <button
        onClick={handleSaveSettings}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
      >
        Save Settings
      </button>

      <section className="mt-10 p-4 border border-gray-300 rounded bg-gray-50">
        <h2 className="text-2xl font-semibold mb-3">Help Guide</h2>
        <p>Welcome to Shravan Vision! Here's how to get started:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Click "Start Translation" to begin real-time ISL translation.</li>
          <li>Use the toggles to enable live video, voice input, or output options.</li>
          <li>Upload videos or enter text for translation.</li>
          <li>Enable accessibility features like haptic feedback and large fonts for better usability.</li>
          <li>Explore AR learning for interactive sign language practice.</li>
        </ul>
      </section>
    </div>
  );
}

export default Settings;
