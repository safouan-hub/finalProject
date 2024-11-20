import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Link } from 'react-router-dom'

function Contactini() {
  return (
    <div className='bg-gradient-to-r from-green-400 to-yellow-400 text-white p-4 flex justify-center'>
        <div className="w-1/2 flex items-center justify-between">
            <span>BE IN TOUCH WITH US</span>
            <div>

            <input  className='p-2 border-none rounded-l-lg' type='tetx' placeholder='Enter your e-mail...'/>
            <button className='p-2 text-white bg-gray-800 rounded-r-lg border-none'>JOIN US</button>
            </div>    
            <div className='flex gap-2'>
               <Link className='className="hover:text-primary transition-colors'><Facebook className='className="h-6 w-6"'/></Link>
                <Link className='hover:text-primary transition-colors'><Instagram className='className="h-6 w-6"'/></Link>
                <Link className='className="hover:text-primary transition-colors'><Twitter className='className="h-6 w-6"'/></Link>
                <Link className='className="hover:text-primary transition-colors'><Linkedin/></Link>
            </div>
        </div>

    </div>
    )
}

export default Contactini