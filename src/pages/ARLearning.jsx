import React from 'react';

function ARLearning() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-200">Gamified AR Learning</h1>

      <section className="mb-8 p-6 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">AR Practice Session</h2>
        <p className="text-lg mb-4">
          Engage in interactive augmented reality sessions to practice ISL signs in real-time.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Start AR Practice
        </button>
      </section>

      <section className="mb-8 p-6 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Progress & Achievements</h2>
        <div className="mb-4">
          <p className="text-lg">Progress: 65%</p>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Badges Earned:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Beginner</li>
            <li>Quick Learner</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 p-6 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-6">Learning Modules</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <h3 className="text-xl font-semibold mb-2">Basic Signs</h3>
            <p className="mb-4">Learn fundamental ISL signs.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Start Module
            </button>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <h3 className="text-xl font-semibold mb-2">Conversational ISL</h3>
            <p className="mb-4">Practice everyday conversations.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Start Module
            </button>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            <h3 className="text-xl font-semibold mb-2">Advanced Gestures</h3>
            <p className="mb-4">Master complex sign combinations.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Start Module
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ARLearning;
