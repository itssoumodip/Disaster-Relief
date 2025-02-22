import React from 'react';
import NewsCard from './NewsCard';

function NewsPage() {
  const newsData = [
    {
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80',
      category: { name: 'Technology', color: 'blue' },
      title: 'Tech Giants Announce AI Partnership',
      description: 'Major technology companies form alliance to develop ethical AI standards',
    },
    {
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80',
      category: { name: 'Environment', color: 'green' },
      title: 'Global Climate Summit 2025',
      description: 'World leaders gather to address climate change challenges',
    },
    {
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
      category: { name: 'Sports', color: 'red' },
      title: 'Champions League Final Preview',
      description: 'An in-depth look at the upcoming championship match',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                image={news.image}
                category={news.category}
                title={news.title}
                description={news.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default NewsPage;