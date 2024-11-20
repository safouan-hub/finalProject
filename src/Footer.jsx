import React from 'react'
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container  border   mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/bestsellers" className="hover:text-primary transition-colors">Bestsellers</Link></li>
              <li><Link href="/sale" className="hover:text-primary transition-colors">Sale</Link></li>
              <li><Link href="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">About</h3>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>
         <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Stay Connected</h3>
            <p>Subscribe to our newsletter for exclusive offers and updates.</p>
            </div>
            {/*<div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>*/}
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <p className="text-center text-sm">© 2023 Your E-Shop Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer