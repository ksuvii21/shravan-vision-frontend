import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
