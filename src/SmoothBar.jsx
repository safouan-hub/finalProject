import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function SmoothBar() {
  return (
   <nav className='bg-gradient-to-r from-green-500 to-green-300 shadow-md'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center h-20'>
      <div className="flex-shrink-0">
            <Link to={'/'} className="flex items-center ">
            <motion.span 
                className="font-semibold text-white text-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                HexaGrow
              </motion.span>
            </Link>
          </div>

          <Search/>

      </div>

    </div>
   

   </nav>
      
  )
}

export default SmoothBar