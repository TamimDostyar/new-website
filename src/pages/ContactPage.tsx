import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'General Inquiry'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: 'Email Us',
      content: 'vantixai.tech@gmail.com || a.tamimdostyar@gmail.com',
      action: 'mailto:vantixai.tech@gmail.com'
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.2 + custom * 0.1 }
    })
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions or want to discuss a project? We'd love to hear from you!
            Check out our LinkedIn page for more information or find our contact information on the about page.
          </p>
        </motion.div>

        {/* Placeholder for contact form - we'll implement this when ready */}
        <div className="max-w-3xl mx-auto bg-darker p-8 rounded-lg border border-purple-900">
          <p className="text-center text-gray-300 mb-4">
            Our contact form is coming soon. In the meantime, please reach out to us via email.
          </p>
          <div className="text-center">
            <a 
              href="mailto:info@vantixai.com" 
              className="inline-flex items-center text-primary hover:text-purple-400"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              info@vantixai.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 