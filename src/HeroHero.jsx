import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function HeroHero() {
  return (
    <section className="relative min-h-screen  overflow-hidden bg-white flex items-center justify-center">

    {/* Content */}
    <div className="text-center px-4">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Pure chemistry and trusted
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
          solutions for everyone
        </span>
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        PureChem Solutions offers a range of effective, high-quality, and trusted products that can seamlessly enhance and sustain the health of your crops.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore Products
        </motion.button>
        <Link to={'/about'}><motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gray-200 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Learn About Us
        </motion.button></Link>
      </motion.div>
    </div>
  </section>
  )
}

export default HeroHero