import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Santanu Debnath',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1740292988695-cee90193c45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Soumodip Das',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1740293001418-b91f3102d69e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Pradip Garai',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1740293340201-0bda67641d74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Pallabi Mondal',
      role: 'Head of Oparations',
      image: 'https://images.unsplash.com/photo-1740293340199-8d1864937378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
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