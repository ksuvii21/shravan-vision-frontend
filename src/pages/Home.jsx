import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
  exit: { 
    opacity: 0,
    transition: { ease: 'easeInOut' }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

function Home() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Helmet>
        <title>Shravan Vision | Bridging Communication Between ISL & Spoken Languages</title>
        <meta name="description" content="Shravan Vision is an AI-powered platform for real-time Indian Sign Language translation, video calls, and accessibility features. Bridging communication gaps between deaf and hearing communities." />
        <meta name="keywords" content="Indian Sign Language, ISL, accessibility, deaf community, translation app, sign language learning, AR learning" />
        <meta property="og:title" content="Shravan Vision | ISL Translation Platform" />
        <meta property="og:description" content="AI-powered Indian Sign Language translation and accessibility platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shravan-vision-16.netlify.app/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-900 text-white py-24 px-6 text-center rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-15"></div>
        <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
          <h1 className="text-display font-extrabold mb-6">Shravan Vision</h1>
          <p className="text-headline mb-4">Bridging Communication Between ISL & Spoken Languages</p>
          <p className="text-body-large max-w-3xl mx-auto mb-10">
            Embodying innovation, inclusivity, and accessibility for seamless interactions in educational and emergency contexts.
          </p>
          <motion.button
            onClick={() => navigate('/translation')}
            className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try the Demo
          </motion.button>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section 
        variants={itemVariants}
        className="py-16 px-6 text-center bg-gradient-to-r from-secondary-500 via-green-500 to-primary-500 dark:from-secondary-800 dark:via-green-800 dark:to-primary-800 text-white my-12 rounded-xl shadow-lg"
      >
        <h2 className="text-title font-bold mb-6">Our Mission</h2>
        <p className="text-body-large max-w-3xl mx-auto">
          To empower deaf and hard-of-hearing individuals with real-time, AI-powered ISL translation, fostering inclusivity and accessibility worldwide.
        </p>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        variants={itemVariants}
        className="py-16 px-6 text-center font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-lg max-w-6xl mx-auto"
      >
        <h2 className="text-title font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            className="cursor-pointer p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-full"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="flex-grow">
              <div className="mb-6 text-red-600 dark:text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414M12 2v4M5.636 5.636L7.05 7.05M2 12h4m12 0h4m-2.05-4.95l1.414 1.414M12 18v4m-4.95-2.05l1.414-1.414M6 12a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Emergency SOS</h3>
              <p className="text-body">
                Quick gesture-based emergency alert for immediate assistance. Connects to emergency services, notifies contacts, and provides location tracking for rapid response in critical situations.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => alert('Emergency SOS triggered! Assistance is on the way.')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Trigger SOS
              </button>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                >
                  More Options ▼
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => { navigate('/livecalls'); setDropdownOpen(false); }}
                      className="block w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                    >
                      Live Calls
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            onClick={() => navigate('/translation')}
            className="cursor-pointer p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-full"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="flex-grow">
              <div className="mb-6 text-primary-600 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time ISL Translation</h3>
              <p className="text-body">Access bi-directional ISL↔English/Hindi translations instantly.</p>
            </div>
            <button className="mt-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            onClick={() => navigate('/arlearning')}
            className="cursor-pointer p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-full"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="flex-grow">
              <div className="mb-6 text-secondary-600 dark:text-secondary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AR Learning</h3>
              <p className="text-body">Learn sign language through gamified augmented reality.</p>
            </div>
            <button className="mt-6 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section 
        variants={itemVariants}
        className="py-12 px-6 my-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg max-w-6xl mx-auto"
      >
        <h2 className="text-title font-bold mb-8 text-center">Why Choose Shravan Vision?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-secondary-600 dark:text-secondary-400">Accessibility First</h3>
            <p className="text-body">Designed with universal accessibility principles to ensure everyone can use our platform regardless of ability.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-secondary-600 dark:text-secondary-400">AI-Powered</h3>
            <p className="text-body">Cutting-edge artificial intelligence that continually improves translation accuracy through machine learning.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-secondary-600 dark:text-secondary-400">Community Driven</h3>
            <p className="text-body">Developed in partnership with the deaf community to ensure authentic representation and practical solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-secondary-600 dark:text-secondary-400">Multi-Platform</h3>
            <p className="text-body">Available across web, mobile, and specialized devices to provide communication solutions everywhere.</p>
          </div>
        </div>
      </motion.section>

      {/* Placeholder for additional professional elements */}
      <motion.section
        variants={itemVariants}
        className="py-16 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-title font-bold mb-8 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-body italic">"Shravan Vision has transformed how I communicate with my family. The real-time translation is incredible!"</p>
            <p className="mt-4 font-semibold text-secondary-600">- A Deaf User</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-body italic">"The AR learning feature makes sign language fun and accessible for everyone."</p>
            <p className="mt-4 font-semibold text-secondary-600">- Hearing User</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-body italic">"Emergency SOS saved my life during a medical emergency. Fast and reliable!"</p>
            <p className="mt-4 font-semibold text-secondary-600">- Emergency Responder</p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={itemVariants}
        className="py-16 px-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg max-w-6xl mx-auto"
      >
        <h2 className="text-title font-bold mb-10 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-display font-bold text-primary-600 dark:text-primary-400">10K+</div>
            <p className="text-body-small text-gray-600 dark:text-gray-300">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-display font-bold text-secondary-600 dark:text-secondary-400">500+</div>
            <p className="text-body-small text-gray-600 dark:text-gray-300">Emergency Responses</p>
          </div>
          <div className="text-center">
            <div className="text-display font-bold text-primary-600 dark:text-primary-400">95%</div>
            <p className="text-body-small text-gray-600 dark:text-gray-300">Translation Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-display font-bold text-secondary-600 dark:text-secondary-400">24/7</div>
            <p className="text-body-small text-gray-600 dark:text-gray-300">Support Available</p>
          </div>
        </div>
      </motion.section>

      <motion.footer
        variants={itemVariants}
        className="py-8 px-6 text-center text-gray-600 dark:text-gray-400 border-t mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl text-primary-600 dark:text-primary-400">Shravan Vision</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Shravan Vision. All rights reserved.</p>
        </div>
      </motion.footer>
    </motion.div>
  );
}

export default Home;
