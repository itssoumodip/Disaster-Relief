import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Shield } from 'lucide-react';

const ImpactSection = () => {
  const impacts = [
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Your support directly impacts lives in crisis"
    },
    {
      icon: Users,
      title: "Join Our Community",
      description: "Be part of a dedicated team of volunteers"
    },
    {
      icon: Globe,
      title: "Local to Global",
      description: "Help in your community and beyond"
    },
    {
      icon: Shield,
      title: "Immediate Impact",
      description: "Provide crucial support when it's needed most"
    }
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10
              hover:border-blue-500/50 transition-all duration-300 group"
          >
            <impact.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">{impact.title}</h3>
            <p className="text-gray-400">{impact.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactSection;