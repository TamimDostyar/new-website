import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-deepPurple text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student-Led AI Solutions for Everyone
            </h1>
            <p className="text-xl mb-8">
              Making artificial intelligence accessible and affordable for students, businesses, and communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="bg-primary text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-primary hover:bg-primary/10 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide a range of affordable and accessible AI solutions to help you harness the power of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom AI Development",
                description: "Tailored AI solutions designed to address your specific challenges and requirements.",
                icon: "🤖"
              },
              {
                title: "Machine Learning Models",
                description: "Develop and deploy machine learning models to extract insights from your data.",
                icon: "📊"
              },
              {
                title: "AI Consultation",
                description: "Expert guidance on implementing AI strategies and technologies for your projects.",
                icon: "💡"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-darker p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-purple-900"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <Link to="/services" className="inline-block mt-4 text-primary hover:text-purple-400 font-medium">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to harness the power of AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next AI project and unlock new possibilities together.
          </p>
          <Link to="/contact" className="bg-primary text-white hover:bg-purple-700 px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 