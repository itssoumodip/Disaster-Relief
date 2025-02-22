import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const newsPerPage = 3;

  useEffect(() => {
    // Fetch news data from the API
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY'); // Replace with your API endpoint and API key
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
  }, []);

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNews.map((news, index) => (
              <NewsCard
                key={index}
                image={news.urlToImage}
                category={{ name: news.source.name || 'General', color: 'blue' }} // Adjust based on the API response structure
                title={news.title}
                description={news.description}
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