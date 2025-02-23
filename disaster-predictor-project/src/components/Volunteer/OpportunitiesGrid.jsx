import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Heart, 
  Users, 
  Stethoscope, // Changed from FirstAid
  MapPin,      // Changed from Map
  Phone 
} from 'lucide-react';

const OpportunitiesGrid = () => {
  const opportunities = [
    {
      icon: Truck,
      title: "Supply Distribution",
      description: "Help distribute essential supplies to affected areas"
    },
    {
      icon: Heart,
      title: "Community Care",
      description: "Provide support and care to affected communities"
    },
    {
      icon: Stethoscope, // Updated icon
      title: "Medical Support",
      description: "Assist in medical camps and health initiatives"
    },
    {
      icon: MapPin, // Updated icon
      title: "Area Assessment",
      description: "Help evaluate disaster-affected regions"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Coordinate with relief teams on the ground"
    },
    {
      icon: Phone,
      title: "Helpline Support",
      description: "Manage emergency helpline communications"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Volunteer Opportunities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover various ways you can contribute to our mission and make a meaningful impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 
                hover:border-blue-500/50 transition-all duration-300 group"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesGrid;