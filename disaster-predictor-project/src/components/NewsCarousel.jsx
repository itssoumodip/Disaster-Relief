import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cloud } from 'lucide-react';

const defaultNews = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=1000",
    title: "HEAVY RAINS",
    description: "NEW DELHI: HEAVY RAINFALL HAS DISRUPTED NORMAL LIFE IN SEVERAL PARTS OF NORTHERN INDIA, LEADING TO WATERLOGGING, TRAFFIC CONGESTION, AND LANDSLIDES. CITIES LIKE DELHI AND GURUGRAM HAVE WITNESSED SIGNIFICANT DISRUPTIONS, WITH ROADS TURNING INTO VIRTUAL RIVERS. AUTHORITIES ARE STRUGGLING TO MANAGE THE SITUATION AND PROVIDE RELIEF TO AFFECTED RESIDENTS."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?auto=format&fit=crop&q=80&w=1000",
    title: "EARTHQUAKE AFTERMATH",
    description: "PACIFIC COAST: Communities continue to assess damage from recent seismic activity. Emergency response teams deployed."
  }
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [news] = useState(defaultNews);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <div className="relative group">
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <img 
          src={news[currentIndex].image}
          alt={news[currentIndex].title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="text-white" />
            <h3 className="text-white text-3xl font-bold">{news[currentIndex].title}</h3>
          </div>
          <p className="text-white/90">{news[currentIndex].description}</p>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        {news.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;