import React from 'react';

function AboutImpact() {
  return (
    <div className="p-8 max-w-6xl mx-auto bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-100 dark:from-purple-900 dark:via-pink-900 dark:to-yellow-900 rounded-xl shadow-lg text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800 dark:text-purple-200">About & Research</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 border border-purple-300 dark:border-purple-700 rounded-lg shadow bg-white dark:bg-purple-900 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-200">Technical Background</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Shravan Vision leverages cutting-edge AI and computer vision technologies to bridge the communication gap between Indian Sign Language (ISL) and spoken languages.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li><strong>TensorFlow Lite:</strong> For on-device machine learning inference</li>
            <li><strong>MediaPipe:</strong> For real-time hand tracking and gesture recognition</li>
            <li><strong>ARCore:</strong> For augmented reality learning experiences</li>
            <li><strong>WebRTC:</strong> For peer-to-peer video communication</li>
            <li><strong>Firebase:</strong> For backend services and data storage</li>
          </ul>
        </div>
        <div className="p-6 border border-purple-300 dark:border-purple-700 rounded-lg shadow bg-white dark:bg-purple-900 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-200">Datasets & Research</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our model is trained on comprehensive ISL datasets and incorporates research from leading institutions.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li><strong>IEEE Publications:</strong> Real-time gesture recognition papers</li>
            <li><strong>Kaggle Datasets:</strong> ISL gesture recognition datasets</li>
            <li><strong>arXiv Preprints:</strong> Latest research in sign language processing</li>
            <li><strong>Custom Dataset:</strong> 50,000+ annotated ISL gestures</li>
          </ul>
        </div>
      </div>
      <div className="p-6 border border-purple-300 dark:border-purple-700 rounded-lg shadow bg-white dark:bg-purple-900 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-200">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <img src="/team/ai-expert.jpg" alt="Dr. AI Expert" className="mx-auto mb-2 rounded-full w-24 h-24 object-cover" />
            <h3 className="font-semibold text-purple-900 dark:text-purple-200">Dr. AI Expert</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Machine Learning Lead</p>
          </div>
          <div>
            <img src="/team/ux-designer.jpg" alt="Ms. UX Designer" className="mx-auto mb-2 rounded-full w-24 h-24 object-cover" />
            <h3 className="font-semibold text-purple-900 dark:text-purple-200">Ms. UX Designer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">User Experience Specialist</p>
          </div>
          <div>
            <img src="/team/dev-engineer.jpg" alt="Mr. Dev Engineer" className="mx-auto mb-2 rounded-full w-24 h-24 object-cover" />
            <h3 className="font-semibold text-purple-900 dark:text-purple-200">Mr. Dev Engineer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutImpact;
