import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import './App.css';

export default function DisasterNews() {
  return (
    <div className="min-h-screen bg-homepage">
      <Header />
      <MainContent />
    </div>
  );
}