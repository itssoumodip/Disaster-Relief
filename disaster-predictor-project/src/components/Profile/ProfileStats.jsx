import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Clock, Users } from 'lucide-react';

const ProfileStats = () => {
  const stats = [
    { icon: Heart, label: 'Relief Missions', value: '12' },
    { icon: Users, label: 'People Helped', value: '150+' },
    { icon: Clock, label: 'Hours Contributed', value: '48' },
    { icon: Award, label: 'Achievements', value: '5' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
        >
          <stat.icon size={24} className="text-blue-400 mb-2" />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileStats;