import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const API_KEY = "6da67dea9eeda444cc2abdfda501655b";  // Replace with your API Key
const BASE_API_URL = "https://gnews.io/api/v4/top-headlines";

function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const newsPerPage = 3;

  useEffect(() => {
    // Fetch news data from the API
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.articles); // Adjust based on the API response structure
      } catch (error) {
        console.error('Error fetching news data:', error);
        setError(error.message);
      }
    };

    fetchNewsData();
  }, [category]);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(newsData.length / newsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest News</h2>
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Categories
              </button>
              <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                <button onClick={() => handleCategoryChange('general')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">General</button>
                <button onClick={() => handleCategoryChange('weather')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Weather</button>
                <button onClick={() => handleCategoryChange('sports')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sports</button>
                <button onClick={() => handleCategoryChange('technology')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Technology</button>
                <button onClick={() => handleCategoryChange('health')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Health</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNews.map((news, index) => (
              <NewsCard
                key={index}
                image={news.image}
                category={{ name: news.source.name || 'General', color: 'blue' }} // Adjust based on the API response structure
                title={news.title}
                description={news.description}
                url={news.url}
              />
            ))}
          </div>
        </section>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default NewsPage;