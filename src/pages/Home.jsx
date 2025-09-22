 
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ARLearning = lazy(() => import('./ARLearning'));

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <Helmet>
        <title>Shravan Vision - Empowering Accessibility</title>
        <meta
          name="description"
          content="Breaking barriers and creating inclusive experiences for visually impaired and hearing-impaired individuals through innovative AR learning and assistive technologies."
        />
        <meta
          name="keywords"
          content="accessibility, AR learning, sign language, vision assistance, audio feedback, universal design"
        />
        <meta property="og:title" content="Shravan Vision - Empowering Accessibility" />
        <meta property="og:description" content="Innovative AR learning and assistive technologies for accessibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shravan-vision-32.netlify.app/" />
      </Helmet>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-20 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-15"
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full opacity-25"
          animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-3 h-3 bg-green-400 rounded-full opacity-30"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Emoji animations background */}
      {/* Removed to match screenshot */}

      {/* Hero Section */}
      <div className="hero-content max-w-5xl mx-auto relative z-10 px-6 py-20 text-center rounded-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 shadow-lg flex flex-col items-center">

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="max-w-md sm:max-w-full relative"
        >
          <h1 className="text-display font-extrabold mb-6 text-gray-900 dark:text-white drop-shadow-lg animate-slide-in">
            Empowering Accessibility<br />Through Technology
          </h1>
          <div className="relative">
            {/* Mobile: Emojis as background behind text */}
            <div className="relative sm:hidden">
              {/* Background emojis */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                <motion.div
                  className="absolute left-16 top-1/2 transform -translate-y-1/2"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    y: [0, -8, 8, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: 'easeInOut'
                  }}
                >
                  <span className="text-8xl opacity-80 select-none filter drop-shadow-lg" role="img" aria-label="sign language">🤟</span>
                </motion.div>
                <motion.div
                  className="absolute right-16 top-1/2 transform -translate-y-1/2"
                  animate={{
                    scale: [1, 1.15, 0.95, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut'
                  }}
                >
                  <span className="text-8xl opacity-80 select-none filter drop-shadow-lg" role="img" aria-label="vision">👁</span>
                </motion.div>
              </div>

              {/* Text above emojis */}
              <div className="relative z-10">
                <p className="text-headline mb-8 text-gray-900 dark:text-white animate-slide-in delay-200 leading-relaxed text-center">
                  Breaking barriers and creating inclusive experiences for visually impaired and hearing-impaired individuals through innovative AR learning and assistive technologies.
                </p>
              </div>
            </div>

            {/* Desktop: Emojis on sides */}
            <div className="hidden sm:block">
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-[120%] -translate-x-full pr-4"
                animate={{
                  rotate: [0, 15, -15, 0],
                  y: [0, -8, 8, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: 'easeInOut'
                }}
              >
                <span className="text-8xl opacity-85 select-none filter drop-shadow-lg" role="img" aria-label="sign language">🤟</span>
              </motion.div>

              <p className="text-headline mb-8 text-gray-900 dark:text-white animate-slide-in delay-200 leading-relaxed pl-8 pr-8">
                Breaking barriers and creating inclusive experiences for visually impaired and hearing-impaired individuals through innovative AR learning and assistive technologies.
              </p>

              <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-[120%] translate-x-full pl-4"
                animate={{
                  scale: [1, 1.15, 0.95, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut'
                }}
              >
                <span className="text-8xl opacity-85 select-none filter drop-shadow-lg" role="img" aria-label="vision">👁</span>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => navigate('/arlearning')}
              className="btn btn-outline btn-primary text-2xl px-10 py-5 rounded-md shadow-lg w-full max-w-xs"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Try AR Learning
            </motion.button>
            <motion.button
              onClick={() => navigate('/arlearning')}
              className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-2xl px-10 py-5 rounded-md shadow-lg w-full max-w-xs"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Our Mission Section */}
      <section className="max-w-5xl mx-auto my-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-10 text-center text-white shadow-lg relative">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          To empower deaf and hard-of-hearing individuals with real-time, AI-powered ISL translation, fostering inclusivity and accessibility worldwide.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="max-w-6xl mx-auto my-12 bg-white dark:bg-gray-900 rounded-lg p-10 shadow-lg relative">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="feature-icon text-red-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-red-600 dark:text-red-400">Emergency SOS</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Quick gesture-based emergency alert for immediate assistance. Connects to emergency services, notifies contacts, and provides location tracking for rapid response in critical situations.
            </p>
            <button className="btn btn-primary bg-red-600 hover:bg-red-700 w-full mb-2">Trigger SOS</button>
            <button className="btn btn-secondary w-full">More Options ▼</button>
          </div>
          <div className="feature-card">
            <div className="feature-icon text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-4 8H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V4a2 2 0 10-4 0v4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-blue-600 dark:text-blue-400">Real-time ISL Translation</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Access bi-directional ISL↔English/Hindi translations instantly.
            </p>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 w-full">Get Started</button>
          </div>
          <div className="feature-card">
            <div className="feature-icon text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v2a4 4 0 01-4 4H5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h4m-4 0v6m0-6v-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-green-600 dark:text-green-400">AR Learning</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Learn sign language through gamified augmented reality.
            </p>
            <button className="btn btn-primary bg-green-600 hover:bg-green-700 w-full">Learn Now</button>
          </div>
        </div>
      </section>

      {/* Course Reviews Section */}
      <section className="max-w-6xl mx-auto my-12 bg-white dark:bg-gray-900 rounded-lg p-10 shadow-lg relative">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Course Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="review-card p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">5.0</span>
            </div>
            <p className="italic mb-4 dark:text-gray-300">
              "The AR sign language course is incredibly engaging! The interactive lessons make learning fun and effective."
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">- Sarah M., Student</p>
          </div>
          <div className="review-card p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">5.0</span>
            </div>
            <p className="italic mb-4 dark:text-gray-300">
              "As a teacher, I love how this platform helps my deaf students learn. The progress tracking is excellent."
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">- Dr. Rajesh K., Educator</p>
          </div>
          <div className="review-card p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">5.0</span>
            </div>
            <p className="italic mb-4 dark:text-gray-300">
              "The accessibility features are top-notch. My visually impaired daughter can now learn sign language independently."
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">- Maria L., Parent</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto my-12 bg-white dark:bg-gray-900 rounded-lg p-10 shadow-lg relative">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="testimonial-card p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="italic mb-4 dark:text-gray-300">
              "Shravan Vision has transformed how I communicate with my family. The real-time translation is incredible!"
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">- A Deaf User</p>
          </div>
          <div className="testimonial-card p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="italic mb-4 dark:text-gray-300">
              "The AR learning feature makes sign language fun and accessible for everyone."
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">- Hearing User</p>
          </div>
          <div className="testimonial-card p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="italic mb-4 dark:text-gray-300">
              "Emergency SOS saved my life during a medical emergency. Fast and reliable!"
            </p>
            <p className="font-semibold text-green-600 dark:text-green-400">- Emergency Responder</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-6xl mx-auto my-12 bg-green-50 dark:bg-green-900 rounded-lg p-10 shadow-lg relative">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-900 dark:text-white">
          <div>
            <p className="text-4xl font-extrabold dark:text-white">10K+</p>
            <p>Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold dark:text-white">500+</p>
            <p>Emergency Responses</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold dark:text-white">95%</p>
            <p>Translation Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold dark:text-white">24/7</p>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-600">Shravan Vision</h3>
            <p className="mb-4">
              Empowering accessibility through innovative vision technology. Making the world more inclusive for everyone, regardless of hearing ability.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Translation</a></li>
              <li><a href="#" className="hover:text-blue-600">Accessibility</a></li>
              <li><a href="#" className="hover:text-blue-600">About & Impact</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600">User Guide</a></li>
              <li><a href="#" className="hover:text-blue-600">Feedback</a></li>
              <li><a href="mailto:support@shravanvision.com" className="hover:text-blue-600">support@shravanvision.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          © 2025 Shravan Vision. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}

export default Home;
