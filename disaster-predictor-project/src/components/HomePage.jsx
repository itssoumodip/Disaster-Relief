
import MainContent from './MainContent';
import ChatbotIcon from './ChatbotIcon';

function HomePage() {

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="min-h-screen bg-homepage">
      <MainContent />
      <ChatbotIcon onClick={toggleChatbox} />
    </div>
  );
}

export default HomePage;