import React from 'react';
import { ExternalLink } from 'lucide-react';

function NewsCard({ image, category, title, description, url }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className={`text-${category.color}-500 text-sm font-medium`}>{category.name}</span>
        <h3 className="text-lg font-semibold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 flex items-center gap-2 text-sm hover:text-blue-600">
          Read More <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default NewsCard;