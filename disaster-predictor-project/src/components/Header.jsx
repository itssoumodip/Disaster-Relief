import { useEffect, useState } from "react";
import { Button } from "./Button";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const date = now.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
      setCurrentTime(time);
      setCurrentDate(date);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="z-10 flex items-center justify-between px-6 py-3 text-white">
      <div className="flex items-center space-x-8">
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas mt-3 fa-bars w-6 h-6"></i>
        </button>
        <i className="fas mt-3 fa-search w-2 h-6 hidden md:block"></i>
        <nav className="hidden md:flex items-center space-x-8">
          <Button variant="ghost" className="text-white text-xl font-bold hover:text-[#d9d9d9]">
            ROAD & MAPS
          </Button>
          <Button variant="ghost" className="text-white text-xl font-bold hover:text-[#d9d9d9]">
            NEWS
          </Button>
          <Button variant="ghost" className="text-white text-xl font-bold hover:text-[#d9d9d9]">
            VIDEOS
          </Button>
          <Button variant="ghost" className="text-white text-xl font-bold hover:text-[#d9d9d9]">
            WEATHER
          </Button>
          <Button variant="ghost" className="mr-5 text-white text-xl font-bold hover:text-[#d9d9d9]">
            MORE
          </Button>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="md:text-xl text-sm font-bold text-white hover:text-[#d9d9d9]">
          SIGN UP
        </Button>
        <Button variant="ghost" className="md:text-xl text-sm font-bold text-white hover:text-[#d9d9d9]">
          LOGIN
        </Button>
        <div className="sm:w-18 xl:w-34 text-right">
          <div className="md:text-xl text-sm font-bold text-[#ffffff]">{currentTime}</div>
          <div className="md:text-xl text-sm font-bold text-[#ffffff]">{currentDate}</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#341c1c] text-white md:hidden flex flex-col items-center space-y-4 py-4 z-20">
          <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-times w-6 h-6"></i>
          </button>
          <Button variant="ghost" className="text-white hover:text-[#d9d9d9]">
            ROAD & MAPS
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#d9d9d9]">
            NEWS
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#d9d9d9]">
            VIDEOS
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#d9d9d9]">
            WEATHER
          </Button>
          <Button variant="ghost" className="text-white hover:text-[#d9d9d9]">
            MORE
          </Button>
        </div>
      )}
    </header>
  );
}

export function MainContent() {
  return (
    <main className="relative p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4">BREAKING NEWS</h1>
        <h2 className="text-3xl font-bold text-white mb-8">POWERFUL EARTHQUAKE STRIKES NEAR PACIFIC COAST</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-black/40 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">DELHI, INDIA</h3>
              <p className="text-[#d9d9d9] text-sm leading-relaxed">
                A SIGNIFICANT EARTHQUAKE MEASURING [MAGNITUDE] ON THE RICHTER SCALE HAS STRUCK NEAR THE PACIFIC COAST
                EARLIER THIS 12:49, FEB 1. THE EPICENTER IS LOCATED APPROXIMATELY 1KM FROM JAMAMAZ.IN. INITIAL REPORTS
                INDICATE [LEVEL OF DAMAGE] - E.G., SHAKING FELT STRONGLY, SOME STRUCTURAL DAMAGE, WIDESPREAD POWER
                OUTAGES]. RESIDENTS ARE BEING URGED TO TAKE NECESSARY SAFETY PRECAUTIONS, INCLUDING STAYING AWAY FROM
                UNSTABLE STRUCTURES AND PREPARING FOR POTENTIAL AFTERSHOCKS. EMERGENCY SERVICES ARE RESPONDING TO THE
                AFFECTED AREAS.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black/40 p-6 rounded-lg h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#b70000] animate-pulse" />
                <h3 className="text-3xl font-bold text-white">HEAVY RAINS</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">CAUSE HAVOC IN NORTHERN INDIA</h4>
              <p className="text-[#d9d9d9] text-sm">
                NEW DELHI: HEAVY RAINFALL HAS DISRUPTED NORMAL LIFE IN SEVERAL PARTS OF NORTHERN INDIA, LEADING TO
                WATERLOGGING, TRAFFIC CONGESTION, AND LANDSLIDES. CITIES LIKE DELHI AND GURUGRAH HAVE WITNESSED
                SIGNIFICANT DISRUPTIONS, WITH ROADS TURNING INTO VIRTUAL RIVERS. AUTHORITIES ARE STRUGGLING TO MANAGE
                THE SITUATION AND PROVIDE RELIEF TO AFFECTED RESIDENTS.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency SOS Button */}
        <div className="fixed bottom-6 left-6 flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-[#b70000] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#ff0707]" />
          </div>
          <span className="text-white text-sm font-bold">
            EMEREMERGENCY
            <br />
            SOS
          </span>
        </div>
      </div>
    </main>
  );
}