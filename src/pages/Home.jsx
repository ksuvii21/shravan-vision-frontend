import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 dark:from-gray-900 dark:to-gray-800 text-white py-20 px-4 text-center rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shravan Vision</h1>
          <p className="text-xl mb-6">
            Bridging Communication Between ISL & Spoken Languages
          </p>
          <p className="max-w-xl mx-auto mb-8">
            Embodying innovation, inclusivity, and accessibility for seamless interactions in educational and emergency contexts.
          </p>
          <motion.button
            onClick={() => navigate('/translation')}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try the Demo
          </motion.button>
        </motion.div>
      </section>

      <motion.section 
        variants={itemVariants}
        className="py-16 px-4 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-pink-800 dark:via-red-800 dark:to-yellow-800 text-white my-8 rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto">
          To empower deaf and hard-of-hearing individuals with real-time, AI-powered ISL translation, fostering inclusivity and accessibility worldwide.
        </p>
      </motion.section>

      <motion.section 
        variants={itemVariants}
        className="py-16 px-4 text-center font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      >
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            onClick={() => navigate('/translation')}
            className="cursor-pointer p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-full"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex-grow">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time ISL Translation</h3>
              <p>Access bi-directional ISL↔English/Hindi translations instantly.</p>
            </div>
            <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Get Started
            </button>
          </motion.div>
          
          <motion.div
            onClick={() => navigate('/livecalls')}
            className="cursor-pointer p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-full"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex-grow">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Video Calls</h3>
              <p>Connect with interpreters for real-time sign-to-sign communication.</p>
            </div>
            <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Start Call
            </button>
          </motion.div>
          
          <motion.div
            onClick={() => navigate('/arlearning')}
            className="cursor-pointer p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col h-full"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex-grow">
              <div className="mb-4 text-pink-600 dark:text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AR Learning</h3>
              <p>Learn sign language through gamified augmented reality.</p>
            </div>
            <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Learn Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        variants={itemVariants}
        className="py-12 px-4 my-8 bg-gray-100 dark:bg-gray-800 rounded-xl"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Shravan Vision?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Accessibility First</h3>
              <p className="text-gray-700 dark:text-gray-300">Designed with universal accessibility principles to ensure everyone can use our platform regardless of ability.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">AI-Powered</h3>
              <p className="text-gray-700 dark:text-gray-300">Cutting-edge artificial intelligence that continually improves translation accuracy through machine learning.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Community Driven</h3>
              <p className="text-gray-700 dark:text-gray-300">Developed in partnership with the deaf community to ensure authentic representation and practical solutions.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Multi-Platform</h3>
              <p className="text-gray-700 dark:text-gray-300">Available across web, mobile, and specialized devices to provide communication solutions everywhere.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.footer 
        variants={itemVariants}
        className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 border-t mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl text-pink-600 dark:text-pink-400">Shravan Vision</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400">
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
