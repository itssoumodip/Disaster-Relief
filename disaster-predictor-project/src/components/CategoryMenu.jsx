import React from 'react';
import { X } from 'lucide-react';

const categories = [
  { id: 1, name: 'Breaking News', color: 'bg-red-500' },
  { id: 2, name: 'Sports', color: 'bg-green-500' },
  { id: 3, name: 'Technology', color: 'bg-blue-500' },
  { id: 4, name: 'Entertainment', color: 'bg-purple-500' },
  { id: 5, name: 'Business', color: 'bg-yellow-500' },
  { id: 6, name: 'Health', color: 'bg-pink-500' },
  { id: 7, name: 'Science', color: 'bg-indigo-500' },
  { id: 8, name: 'Politics', color: 'bg-orange-500' },
];

const CategoryMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`w-3 h-3 rounded-full ${category.color} mr-3`} />
              <span className="text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;