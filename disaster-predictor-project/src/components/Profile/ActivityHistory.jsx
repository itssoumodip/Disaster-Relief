import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const ActivityHistory = () => {
  const activities = [
    {
      title: "Flood Relief Mission",
      location: "Mumbai, India",
      date: "Feb 15, 2024",
      description: "Participated in emergency response and supply distribution"
    },
    {
      title: "Medical Camp",
      location: "Delhi, India",
      date: "Jan 28, 2024",
      description: "Assisted in organizing medical supplies and coordination"
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6">Recent Activities</h3>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-l-2 border-blue-500 pl-4 pb-6"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-white">{activity.title}</h4>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Calendar size={14} />
                {activity.date}
              </span>
            </div>
            <div className="text-sm text-gray-400 flex items-center gap-1 mb-2">
              <MapPin size={14} />
              {activity.location}
            </div>
            <p className="text-gray-300 text-sm">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivityHistory;