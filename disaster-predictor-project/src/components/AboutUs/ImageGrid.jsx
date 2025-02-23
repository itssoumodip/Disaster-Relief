import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
    alt: "Emergency Response",
    delay: 0
  },
  {
    src: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90",
    alt: "Medical Aid",
    delay: 0.2
  },
  {
    src: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
    alt: "Community Support",
    delay: 0.4
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    alt: "Volunteer Work",
    delay: 0.6
  }
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: image.delay }}
          className={`relative group ${index % 2 === 1 ? 'mt-12' : ''}`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900 rounded-2xl p-2">
            <img
              src={`${image.src}?auto=format&fit=crop&q=80&w=400&h=400`}
              alt={image.alt}
              className="rounded-xl transform transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;