import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-darker border-b border-purple-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">VantixAI</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
          <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">Projects</Link>
          <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-darker border-t border-purple-900"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/" className="text-gray-300 hover:text-primary py-2 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-primary py-2 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/projects" className="text-gray-300 hover:text-primary py-2 transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/about" className="text-gray-300 hover:text-primary py-2 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-primary py-2 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 