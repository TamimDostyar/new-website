import React from 'react';
import { motion } from 'framer-motion';
// We're not currently using these imports
/*
import { useInView } from 'react-intersection-observer';
import { 
  BeakerIcon, 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  AcademicCapIcon, 
  BuildingOfficeIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
*/

// Comment out this component since it's not being used yet
/*
const ServiceSection: React.FC<{
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  index: number;
  imageUrl: string;
}> = ({ id, title, description, features, icon, index, imageUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.section 
      id={id}
      ref={ref}
      className="py-20 border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="text-primary mr-4">{icon}</div>
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <p className="text-gray-600 mb-8">{description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => window.location.href = '/contact'}
            >
              Inquire About {title}
            </motion.button>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src={imageUrl} alt={title} className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
*/

const ServicesPage: React.FC = () => {
  // We'll uncomment these when we implement the services
  /*
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'ai-applications',
      title: 'AI Applications',
      description: 'We develop custom AI solutions designed to solve specific problems and automate complex tasks for students, businesses, and community organizations. Our applications can process data, extract insights, make predictions, and automate decision-making processes.',
      features: [
        'Natural Language Processing (NLP) applications',
        'Computer Vision solutions for image and video analysis',
        'Predictive analytics and machine learning models',
        'Data extraction and processing automation',
        'Custom chatbots and virtual assistants',
        'AI-powered recommendation systems'
      ],
      icon: <BeakerIcon className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    // Other services...
  ];

  const additionalServices = [
    {
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI in your organization or projects',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />
    },
    // Other additional services...
  ];
  */

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">
            Discover how our AI solutions can help transform your ideas into reality.
          </p>
        </motion.div>

        {/* Service Placeholder */}
        <div className="bg-darker p-8 rounded-lg border border-purple-900 text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">AI Applications</h2>
          <p className="text-gray-300 mb-6">
            We develop custom AI solutions designed to solve specific problems and automate complex tasks for students, businesses, and community organizations.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Learn More
          </a>
        </div>

        <div className="bg-darker p-8 rounded-lg border border-purple-900 text-center">
          <h2 className="text-2xl font-bold mb-4">Web Development</h2>
          <p className="text-gray-300 mb-6">
            Modern, responsive web applications using the latest technologies and best practices, tailored to your specific needs.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;