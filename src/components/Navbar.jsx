import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { isAdmin, user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuRef = useRef(null)

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Translation', path: '/translation' },
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'SOS', path: '/sos' },
    { name: 'AR Learning', path: '/arlearning' },
    { name: 'Live Calls', path: '/livecalls' },
    { name: 'About & Impact', path: '/aboutimpact' },
    // Admin Panel tab will be conditionally rendered below
    { name: 'Admin Panel', path: '/adminpanel' },
    { name: 'Contact', path: '/contact' },
  ]

  // Bottom navigation items for mobile (always visible)
  const bottomNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Translation', path: '/translation', icon: '🌐' },
    { name: 'SOS', path: '/sos', icon: '🆘' },
    { name: 'AR Learning', path: '/arlearning', icon: '🎓' },
  ]

  // Dropdown items for mobile (accessed via hamburger menu)
  const dropdownItems = [
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'About & Impact', path: '/aboutimpact' },
    ...(isAdmin() ? [{ name: 'Admin Panel', path: '/adminpanel' }] : []),
    { name: 'Contact', path: '/contact' },
    { name: user ? 'Logout' : 'Login', path: user ? null : '/login', action: user ? 'logout' : null },
  ]

  const handleNavClick = (path) => {
    navigate(path)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <motion.div
              className="flex-shrink-0 flex items-center font-extrabold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">Shravan Vision</Link>
            </motion.div>
            <div className="hidden md:ml-6 md:flex md:space-x-4 md:items-center">
              {navLinks.map((link) => {
                if (link.name === 'Admin Panel' && !isAdmin()) {
                  return null
                }
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out ${
                      location.pathname === link.path
                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white dark:from-primary-600 dark:to-primary-800 shadow-lg'
                    : 'text-gray-900 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-700 dark:hover:text-primary-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 focus:outline-none transition-colors duration-300 ease-in-out"
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

            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {user ? (
                <button
                  onClick={async () => {
                    await logout();
                    navigate('/login');
                  }}
                  className="bg-red-600 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-primary-600 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile tab bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-inner border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {bottomNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className={`flex flex-col items-center justify-center py-2 text-xs font-medium w-full transition-colors duration-300 ease-in-out ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white dark:from-primary-600 dark:to-primary-800 shadow-lg'
                  : 'text-gray-900 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-700 dark:hover:text-primary-300'
              }`}
            >
              <span className="mb-1">{item.icon}</span>
              {item.name}
            </button>
          ))}

          {/* Hamburger menu for dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center justify-center py-2 text-xs font-medium w-full text-gray-900 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors duration-300 ease-in-out"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Menu
            </button>

            {isMenuOpen && (
              <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-48 z-50">
                {dropdownItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={async () => {
                      if (item.action === 'logout') {
                        await logout();
                        navigate('/login');
                      } else if (item.path) {
                        handleNavClick(item.path);
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 ease-in-out ${
                      item.action === 'logout' ? 'text-red-600 dark:text-red-400' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
