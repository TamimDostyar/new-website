import React from 'react';
import { motion } from 'framer-motion';
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

const ServicesPage: React.FC = () => {
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
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We create modern, responsive, and interactive web applications using the latest technologies and best practices. Our web solutions are tailored to your specific needs and designed to deliver exceptional user experiences across all devices.',
      features: [
        'Responsive websites optimized for all devices',
        'Interactive web applications with modern UIs',
        'Content management systems (CMS)',
        'E-commerce platforms with secure payment integrations',
        'Progressive Web Apps (PWAs) for offline capabilities',
        'API development and third-party integrations'
      ],
      icon: <CodeBracketIcon className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'We build native and cross-platform mobile applications powered by AI capabilities that deliver seamless experiences on iOS and Android devices. Our mobile solutions are designed to be intuitive, responsive, and feature-rich.',
      features: [
        'Native iOS and Android app development',
        'Cross-platform applications for multiple devices',
        'AI-powered mobile solutions',
        'Offline functionality and synchronization',
        'Push notifications and real-time updates',
        'Integration with device features (camera, GPS, etc.)'
      ],
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 'student-solutions',
      title: 'Student Solutions',
      description: 'We create affordable AI tools and applications designed specifically for students and educators. Our solutions help automate research, improve learning outcomes, and enhance the educational experience through AI-powered technologies.',
      features: [
        'AI-powered research assistants',
        'Custom learning management systems',
        'Study tools and productivity applications',
        'Automated grading and feedback systems',
        'Personalized learning platforms',
        'Collaborative project management tools'
      ],
      icon: <AcademicCapIcon className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    },
    {
      id: 'business-ai',
      title: 'Business AI',
      description: 'We develop enterprise-grade AI solutions to optimize operations and drive business growth. Our business AI applications can automate workflows, extract insights from data, and help organizations make data-driven decisions.',
      features: [
        'Business process automation',
        'Sales and marketing AI solutions',
        'Customer segmentation and targeting',
        'Inventory and supply chain optimization',
        'AI-driven business analytics',
        'Smart document processing and extraction'
      ],
      icon: <BuildingOfficeIcon className="h-10 w-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
    }
  ];

  const additionalServices = [
    {
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI in your organization or projects',
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows',
      icon: <ArrowPathIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'Custom AI Models',
      description: 'Development of specialized AI models trained on your specific data and requirements',
      icon: <CpuChipIcon className="h-8 w-8 text-primary" />
    }
  ];

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
          <p className="text-xl text-gray-600">
          At Vantix AI, we're a dedicated team of tech-passionate students transforming real-world challenges into innovative digital solutions. We create everything from AI-powered chatbots providing 24/7 assistance to intuitive websites and mobile applications that feel natural from the first interaction. Every project is built in-house with personalized attention—no outsourcing or generic templates. Share your challenges with us—whether it's inefficient support systems, outdated websites, or disorganized data—and we'll craft a tailored solution from concept to deployment. We deliver professional-grade technology at student-friendly prices, created by a team that's genuinely invested in simplifying your operations.

          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Service items would go here */}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;