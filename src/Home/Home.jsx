import React from 'react'
import './Home.css'
import { TypewriterEffectSmooth } from '../component/ui/Typewriter-effect'
import {Router,Routes,Route, Link} from 'react-router-dom'
import Hero from '../Hero';
import Layout from '../Layout';

function Home() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Partner",
    },
    {
      text: "In",
    },
    {
      text: "Pure",
    },
    {
      text: " Chemistry.",
      className: "text-yellow-500 dark:text-blue-500",
    },
  ];
  return (

    
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Precision in Every Molecule
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link to='/about'><button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          About
        </button></Link>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact 
        </button>
      </div>

      <div>

      </div>
      
      
    </div>
    //discover , contact

  
   
  )
}

export default Home




  