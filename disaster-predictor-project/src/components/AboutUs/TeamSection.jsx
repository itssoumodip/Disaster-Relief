import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Soumodip Das',
      role: 'Emergency Response Director',
      image: '../../src/assets/p1.jpg',
    },
    {
      name: 'Pradip Garai',
      role: 'Community Outreach Lead',
      image: '../../src/assets/p2.jpg',
    },
    {
      name: 'Santonu Debnath',
      role: 'Volunteer Coordinator',
      image: '../../src/assets/p2.jpg',
    },
    {
      name: 'Pallabi Mondal',
      role: 'Volunteer Coordinator',
      image: '../../src/assets/p4.jpg',
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400">Meet the people behind our mission</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover ring-2 ring-white/20"
                />
                <h3 className="text-lg font-semibold text-white text-center mb-1">{member.name}</h3>
                <p className="text-gray-400 text-center mb-4 text-sm">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;