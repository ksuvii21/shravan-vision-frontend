import React from 'react'
import { Link } from 'react-router-dom'

export default function SOS() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">SOS Emergency</h1>
      <p className="mb-6 text-center max-w-md">
        This page provides important emergency information and resources. Please use it responsibly.
      </p>
      <ul className="mb-6 list-disc list-inside max-w-md text-left">
        <li>Call emergency services immediately if you are in danger.</li>
        <li>Use the emergency alert system to notify nearby responders.</li>
        <li>Access quick links to local hospitals and support centers.</li>
      </ul>
      <Link
        to="/"
        className="px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
