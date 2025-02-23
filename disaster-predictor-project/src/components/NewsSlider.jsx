import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NewsSlider = () => {
  const news = [
    {
      category: "Weather",
      title: "Storm System Intensifies",
      description: "Meteorologists track developing storm pattern...",
      image: "storm-image-url.jpg"
    },
    {
      category: "Relief",
      title: "Emergency Response Teams Mobilized",
      description: "Teams prepare for potential impact...",
      image: "relief-image-url.jpg"
    },
    {
      category: "Updates",
      title: "Evacuation Routes Announced",
      description: "Officials release emergency evacuation plans...",
      image: "evacuation-image-url.jpg"
    }
  ];

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Latest Updates</h2>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-3">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsSlider;