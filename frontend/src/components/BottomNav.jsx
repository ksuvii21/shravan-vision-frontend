import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext'; // Adjust path if needed

const mainTabs = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'Translation', path: '/translation', icon: '🈯' },
  { name: 'SOS', path: '/sos', icon: '🚨' },
  { name: 'AR Learning', path: '/arlearning', icon: '🕹️' },
];

const dropdownTabsBase = [
  { name: 'Accessibility', path: '/accessibility' },
  { name: 'Live Calls', path: '/livecalls' },
  { name: 'About & Impact', path: '/aboutimpact' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' },
  { name: 'Settings', path: '/settings' },
];

function BottomNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useAuth();

  // Conditionally add Admin Panel if user is admin and logged in
  const dropdownTabs = [...dropdownTabsBase];

  // Show Admin Panel only if logged in as admin
  if (user && user.isAdmin) {
    dropdownTabs.unshift({ name: 'Admin Panel', path: '/adminpanel' });
  }

  // Show Login if not logged in, else show Logout button in Navbar only
  if (user) {
    const loginIndex = dropdownTabs.findIndex(tab => tab.name === 'Login');
    if (loginIndex !== -1) {
      dropdownTabs.splice(loginIndex, 1);
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 shadow-inner z-50 md:hidden">
      <ul className="flex justify-between px-2 py-1 items-center">
        {mainTabs.map((tab) => (
          <li key={tab.name} className="flex-1">
            <NavLink
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center text-xs font-medium py-1 ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`
              }
            >
              <motion.span
                className="text-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={tab.name}
                role="img"
              >
                {tab.icon}
              </motion.span>
              <span className="mt-1">{tab.name}</span>
            </NavLink>
          </li>
        ))}

        {/* Dropdown menu */}
        <li className="relative flex-1">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex flex-col items-center justify-center text-xs font-medium py-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 w-full"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <span className="text-2xl">☰</span>
            <span className="mt-1">More</span>
          </button>
          {dropdownOpen && (
            <ul className="absolute bottom-full mb-2 left-0 right-0 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50 max-h-72 overflow-y-auto text-left">
              {dropdownTabs.map((tab) => {
                return (
                  <li key={tab.name}>
                    <NavLink
                      to={tab.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? 'bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      {tab.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
