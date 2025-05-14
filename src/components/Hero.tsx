import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-dark">Affordable </span> 
              <span className="text-primary">AI Solutions</span>
              <span className="text-dark"> by Students for </span>
              <span className="text-secondary">Communities</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We build accessible AI applications, software, and web solutions for students and businesses at affordable prices. Our team of passionate students is dedicated to bringing the power of AI to everyone.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/services" className="btn-primary text-center">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-outline text-center">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        {/* Right Column - Interactive Animation */}
        <div className="md:w-1/2 relative">
          <motion.div
            className="relative w-full h-80 md:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Brain Visual Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-60 h-60 md:w-80 md:h-80" 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  fill="none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  stroke="rgba(59, 130, 246, 0.5)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d="M 100, 100 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
                  fill="none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  stroke="rgba(16, 185, 129, 0.5)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
                
                {/* Neural network nodes */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={100 + 60 * Math.cos((Math.PI * 2 * i) / 8)}
                    cy={100 + 60 * Math.sin((Math.PI * 2 * i) / 8)}
                    r="4"
                    fill="#3B82F6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  />
                ))}
                
                {/* Inner nodes */}
                {[...Array(6)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={100 + 30 * Math.cos((Math.PI * 2 * i) / 6)}
                    cy={100 + 30 * Math.sin((Math.PI * 2 * i) / 6)}
                    r="3"
                    fill="#10B981"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                  />
                ))}
                
                {/* Central node */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="#1F2937"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.7 }}
                />
                
                {/* Connection lines */}
                {[...Array(8)].map((_, i) => (
                  <React.Fragment key={`line-outer-${i}`}>
                    <motion.line
                      x1="100"
                      y1="100"
                      x2={100 + 60 * Math.cos((Math.PI * 2 * i) / 8)}
                      y2={100 + 60 * Math.sin((Math.PI * 2 * i) / 8)}
                      stroke="rgba(31, 41, 55, 0.3)"
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 + i * 0.05, duration: 0.3 }}
                    />
                  </React.Fragment>
                ))}
                
                {[...Array(6)].map((_, i) => (
                  <React.Fragment key={`line-inner-${i}`}>
                    <motion.line
                      x1="100"
                      y1="100"
                      x2={100 + 30 * Math.cos((Math.PI * 2 * i) / 6)}
                      y2={100 + 30 * Math.sin((Math.PI * 2 * i) / 6)}
                      stroke="rgba(31, 41, 55, 0.3)"
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 + i * 0.05, duration: 0.3 }}
                    />
                  </React.Fragment>
                ))}
              </svg>
            </div>
            
            {/* Animated particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  repeatType: 'loop'
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 