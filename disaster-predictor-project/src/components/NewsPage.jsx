import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import NewsCard from './NewsCard';

const API_KEY = "6da67dea9eeda444cc2abdfda501655b";  // Replace with your API Key
const BASE_API_URL = "https://gnews.io/api/v4/top-headlines";

function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const newsPerPage = 3;

  useEffect(() => {
    // Fetch news data from the API
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_API_URL}?category=${category}&lang=en&country=india&max=10&apikey=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.articles); // Verify the API response
        setNewsData(data.articles); // Adjust based on the API response structure
      } catch (error) {
        console.error('Error fetching news data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
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
    setDropdownVisible(false); // Hide the dropdown after selecting a category
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen font-semibold bg-gradient-to-br from-blue-900 to-blue-950 ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Latest News</h2>
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Categories <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              {dropdownVisible && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <button onClick={() => handleCategoryChange('general')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">General</button>
                  <button onClick={() => handleCategoryChange('weather')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Weather</button>
                  <button onClick={() => handleCategoryChange('sports')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sports</button>
                  <button onClick={() => handleCategoryChange('technology')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Technology</button>
                  <button onClick={() => handleCategoryChange('health')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Health</button>
                </div>
              )}
            </div>
          </div>
          {loading ? (
            <div className="text-center text-blue-600">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentNews.map((news, index) => {
                console.log(news.url); // Verify the URL
                return (
                  <NewsCard
                    key={index}
                    image={news.image}
                    category={{ name: news.source.name || 'General', color: 'blue' }} // Adjust based on the API response structure
                    title={news.title}
                    description={news.description}
                    url={news.url}
                  />
                );
              })}
            </div>
          )}
        </section>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 text-white py-2 mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default NewsPage;