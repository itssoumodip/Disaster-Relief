import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const StatsCounter = () => {
  const stats = [
    { number: 1000, suffix: '+', label: 'Disasters Responded' },
    { number: 50000, suffix: '+', label: 'People Helped' },
    { number: 5000, suffix: '+', label: 'Volunteers' },
    { number: 100, suffix: 'M', label: 'Aid Distributed' }
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="text-3xl md:text-5xl font-bold text-blue-400 mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  useEasing={true}
                />
                {stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;