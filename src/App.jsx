import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Eagerly loaded components
import Home from './pages/Home'

// Lazily loaded components for better performance
const Translation = lazy(() => import('./pages/Translation'))
const Accessibility = lazy(() => import('./pages/Accessibility'))
const LiveCalls = lazy(() => import('./pages/LiveCalls'))
const ARLearning = lazy(() => import('./pages/ARLearning'))
const AboutImpact = lazy(() => import('./pages/AboutImpact'))
const AdminPanel = lazy(() => import('./pages/AdminPanel'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SOS = lazy(() => import('./pages/SOS'))

// AnimatePresence wrapper for route transitions
function AnimatedRoutes() {
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/translation" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Translation />
          </Suspense>
        } />
        <Route path="/accessibility" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Accessibility />
          </Suspense>
        } />
        <Route path="/livecalls" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <LiveCalls />
          </Suspense>
        } />
        <Route path="/arlearning" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ARLearning />
          </Suspense>
        } />
        <Route path="/aboutimpact" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <AboutImpact />
          </Suspense>
        } />
        <Route path="/adminpanel" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <AdminPanel />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Contact />
          </Suspense>
        } />
        <Route path="/login" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Login />
          </Suspense>
        } />
        <Route path="/settings" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Settings />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <NotFound />
          </Suspense>
        } />
        <Route path="/sos" element={
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <SOS />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Handle dark mode
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <AnimatedRoutes />
        </main>
        <Footer />

        {/* Fixed Theme Toggle Button */}
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg transition-all duration-300"
          aria-label="Toggle Dark Mode"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
        </motion.button>
      </div>
    </Router>
  )
}

export default App
