import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageFileName: string;
}

const AboutPage: React.FC = () => {
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers: TeamMember[] = [
    {
      name: 'Tamim',
      role: 'CEO/Founder',
      bio: `My name is Tamim, and I am the founder of VantixAI—a project dedicated to making real-world AI applications freely accessible to users globally. Our mission is to develop humanized AI: an intelligent assistant and a friend designed to help users with their tasks seamlessly. As a computer science student, I am currently working at Microsoft as a student developer, gaining hands-on experience in real-world problem-solving. I enjoy coding and making meaningful programs. If you have any questions or any business inquiries, please reach out to me via email at a.tamimdostyar@gmail.com.`,
      imageFileName: 'Tamim.png',
    },
    {
      name: 'Evan Breidecker',
      role: 'Web Developer',
      bio: `Hey there, I'm Evan Breidecker, a Web Developer at VantixAI. With a passion for creating an easy and smooth user experience and building dynamic web applications, I focus on bringing innovative ideas to life through design and functionality. My expertise lies in front-end development, but I'm always excited to dive into new technologies and frameworks. At Vantix, my role is dedicated to the development of websites and applications. I'm always striving to create tech that's accessible, user-friendly, and impactful.\n\nIm available to contact at evanbreidecker@gmail.com`,
      imageFileName: '6.png',
    },
    {
      name: 'Madhav',
      role: 'Machine Learning Developer',
      bio: `Hey, I'm Madhav, a machine learning developer at VantixAI. I love working on problem-solving and collaborative projects. With a background in mathematics, data analytics and software development, my expertise lies in the theoretical aspects of Deep Learning Models. Through Vantix, I am eager to build real-world applications that can automate people's everyday tasks to make their lives easier.\n\nFeel free to reach out at madhavkhanal3145@gmail.com`,
      imageFileName: 'Madav.png',
    },
    {
      name: 'Ahmad Khalid Ansari',
      role: 'Business Analyst Team Lead',
      bio: `Hey there! I'm Ahmad Khalid Ansari, and I am the team lead business analyst of VantixAI. My background in Law and Political Science taught me the value of hard work, the power of speech, and the role of art in shaping society. Now, I'm expanding my knowledge by studying International Business to gain insights into global trade and practical experience in the field.\nI have a deep passion for learning, writing, and critical thinking. Researching new topics, storytelling, and exploring journalism, photography, and videography excite me. I also have strong computer skills, which help me bring my creative and analytical ideas to life.\nI believe that every place and every person has a story worth telling, and I strive to share these unique narratives through my work.\nI am available to contact at: khalid_ansari456@yahoo.com`,
      imageFileName: 'Khalid.png',
    },
    {
      name: 'Sarab',
      role: 'Co-Founder/CTO',
      bio: `Hey, I'm Sarab—Co-Founder of VantixAI. With a background in Computer Science and Data Science, I'm currently working as a Data Analyst at TruBridge Health Care while also developing AI applications and software solutions. My passion lies in building technology that doesn't just solve problems but reshapes the way we think about them. At Vantix AI, my goal is to push AI beyond its limits, creating intelligent and adaptable solutions that make life easier, smarter, and more connected.\nFeel free to reach out with any questions at sarabfsd@gmail.com!`,
      imageFileName: 'Sarab.png',
    },
    {
      name: 'Nipun',
      role: 'Co-Founder',
      bio: `Hey, I'm Nipun, Co-Founder of VantixAI. With a background in Computer Science and Data Science, I'm currently working as a Data Analyst at Beats by Dre, while also diving into AI projects and software development. I'm all about creating tech that doesn't just solve problems but changes the way we think about them. At Vantix AI, I'm focused on pushing AI to new heights, building smart and flexible solutions that make life easier, more connected, and a bit more fun.\n\nYou can reach out to me with any queries at nipunyonjan007@gmail.com.`,
      imageFileName: 'Nipun.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
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
          <h1 className="text-4xl font-bold mb-6">About VantixAI</h1>
          <p className="text-xl text-gray-300">
            A student-led initiative making AI accessible for everyone.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHMlMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="VantixAI Team" 
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                VantixAI was founded in late 2024 by a group of passionate computer science students who recognized a significant gap in the AI industry: high-quality, affordable AI solutions were virtually non-existent for students, small businesses, and community organizations.
              </p>
              <p className="text-gray-300 mb-4">
                What began as a collaborative project for a university hackathon quickly evolved into a mission-driven venture aimed at democratizing access to artificial intelligence. We believe that advanced AI technology shouldn't be exclusively available to large corporations with substantial budgets.
              </p>
              <p className="text-gray-300">
                Today, our team has grown to include talented students from various disciplines, all united by a common goal: to make AI accessible, affordable, and actionable for everyone.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 bg-dark p-8 rounded-lg border border-purple-900"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              What drives us forward and shapes our approach to AI development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-darker p-6 rounded-lg shadow-md border border-purple-900">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-300">
                To democratize artificial intelligence by providing affordable, high-quality AI solutions that empower students, small businesses, and community organizations to leverage cutting-edge technology for positive impact.
              </p>
            </div>
            
            <div className="bg-darker p-6 rounded-lg shadow-md border border-purple-900">
              <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Accessibility:</strong> Making AI technology available to all, regardless of budget.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Innovation:</strong> Pushing boundaries with creative solutions and approaches.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Ethics:</strong> Developing AI responsibly with consideration for societal impact.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Community:</strong> Building technology that strengthens communities and fosters collaboration.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Meet the talented students behind VantixAI.
            </p>
          </div>
          
          {/* Leadership Row */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* CEO & Founders */}
              {teamMembers
                .filter(member => 
                  member.name === 'Tamim' || 
                  member.name === 'Sarab' || 
                  member.name === 'Nipun')
                .map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-darker p-6 rounded-lg shadow-md text-center border border-purple-900 hover:border-primary transition-all duration-300 group"
                  >
                    <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-2 border-primary shadow-lg">
                      <img 
                        src={`/images/${member.imageFileName}`}
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <div className="h-32 overflow-y-auto scrollbar-hide">
                      <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 px-2">{member.bio}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-900">
                      <a href={`mailto:${member.name.toLowerCase()}@vantixai.com`} className="text-primary hover:text-purple-400 transition-colors">
                        Contact {member.name}
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Developers Row */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">Development & Technical Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technical Leaders */}
              {teamMembers
                .filter(member => 
                  member.name === 'Evan Breidecker' || 
                  member.name === 'Madhav')
                .map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-darker p-6 rounded-lg shadow-md text-center border border-purple-900 hover:border-primary transition-all duration-300 group"
                  >
                    <div className="relative mb-4 mx-auto w-44 h-44 overflow-hidden rounded-full border-2 border-primary shadow-lg">
                      <img 
                        src={`/images/${member.imageFileName}`}
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <div className="h-32 overflow-y-auto scrollbar-hide">
                      <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 px-2">{member.bio}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-900">
                      <a href={`mailto:${member.name.toLowerCase()}@vantixai.com`} className="text-primary hover:text-purple-400 transition-colors">
                        Contact {member.name.split(' ')[0]}
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Business Team */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">Business & Research Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers
                .filter(member => 
                  member.name === 'Ahmad Khalid Ansari' || 
                  member.name === 'Mahadi Hossain Aryan')
                .map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-darker p-6 rounded-lg shadow-md text-center border border-purple-900 hover:border-primary transition-all duration-300 group"
                  >
                    <div className="relative mb-4 mx-auto w-44 h-44 overflow-hidden rounded-full border-2 border-primary shadow-lg">
                      <img 
                        src={`/images/${member.imageFileName}`}
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <div className="h-32 overflow-y-auto scrollbar-hide">
                      <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 px-2">{member.bio}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-purple-900">
                      <a href={`mailto:${member.name.toLowerCase()}@vantixai.com`} className="text-primary hover:text-purple-400 transition-colors">
                        Contact {member.name.split(' ')[0]}
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage; 