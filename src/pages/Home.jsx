import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Accessibility = lazy(() => import('./Accessibility'));
const ARLearning = lazy(() => import('./ARLearning'));

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-900 dark:via-green-900 dark:to-blue-900 text-gray-900 dark:text-white"
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
        <meta property="og:url" content="https://shravan-vision-16.netlify.app/" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-bg" id="home">
        <div className="accessibility-animations">
          <div className="sign-language-character" aria-hidden="true">
            🤟
          </div>
          <div className="vision-eye" aria-hidden="true">
            👁
          </div>
        </div>

        {/* Floating particles for visual appeal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full opacity-50 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary-300 rounded-full opacity-70 animate-pulse delay-1500"></div>
        </div>

        <div className="hero-content max-w-5xl mx-auto relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-display font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent text-transparent bg-clip-text animate-slide-in drop-shadow-lg">
              Empowering Accessibility Through Technology
            </h1>
            <p className="text-headline mb-8 text-gray-700 dark:text-gray-200 animate-slide-in delay-200 leading-relaxed">
              Breaking barriers and creating inclusive experiences for visually impaired and hearing-impaired individuals through innovative AR learning and assistive technologies.
            </p>

            <div className="cta-buttons flex justify-center gap-6 flex-wrap animate-slide-in delay-400">
              <motion.button
                onClick={() => navigate('/accessibility')}
                className="btn btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-primary-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
                <span className="ml-2">→</span>
              </motion.button>
              <Suspense fallback={<div>Loading AR Learning...</div>}>
                <ARLearning />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
