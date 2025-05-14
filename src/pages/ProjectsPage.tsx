import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600">
           Our projects are designed to help students, businesses, and communities. Our works can be found on our LinkedIn page and for further access please contact us so that we can provide you the repository. 
           Our phase 1 included a neural network that could use real time data to response to questions - our application included FaceTime with AI, Voice Chat with AI, and chatbot.
           We had over 200B parameters in our neural network and used the transformer model.
           Due to the complexity and budget, we were not able to deploy the application.
          </p>
        </motion.div>

        {/* Projects grid would go here */}
      </div>
    </div>
  );
};

export default ProjectsPage;

 