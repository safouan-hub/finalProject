import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from './lib/utils/cn'
import { useLocation } from 'react-router-dom'


function Navbar() {
    const pathname = useLocation();
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/components' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/pricing' },
      ]
  return (
    <header className="fixed  justify-around top-0 left-0 right-0 z-50 bg-white border border-gray-200">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="text-primary font-bold text-xl">
            Aceternity
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary',
                    pathname === item.href ? 'text-primary' : ''
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button variant="default" className="text-black  hover:bg-yellow-400">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar

///fiche technique de chaque pdt (formatpdf/visuel)


