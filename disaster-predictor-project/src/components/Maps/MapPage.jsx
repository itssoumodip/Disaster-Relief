import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { ArrowRight } from 'lucide-react';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import SearchBar from './SearchBar';
import DisasterList from './DisasterList';
import SafePlaceInfo from './SafePlaceInfo';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

// RecenterMap component
function RecenterMap({ lat, lng }) {
  const map = useMap();
  
  useEffect(() => {
    if (map) {
      map.setView([lat, lng], 7);
    }
  }, [lat, lng, map]);
  
  return null;
}

const MapPage = () => {
  const [location, setLocation] = useState({ lat: 20.5937, lng: 78.9629 });
  const [disasters, setDisasters] = useState([]);
  const [safePlace, setSafePlace] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
      );
      const data = await response.json();

      if (data.length === 0) {
        alert('Location not found');
        return;
      }

      const { lat, lon: lng } = data[0];
      setLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    } catch (error) {
      console.error('Search error:', error);
      alert('Error searching location');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Disaster & Safe Shelter Finder
        </motion.h1>
        
        <SearchBar onSearch={handleSearch} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]"
            >
              <MapContainer
                center={[location.lat, location.lng]}
                zoom={5}
                className="h-full w-full"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <RecenterMap lat={location.lat} lng={location.lng} />
                {markers.map((marker, index) => (
                  <Marker key={index} position={marker.position}>
                    <Popup>{marker.title}</Popup>
                  </Marker>
                ))}
                {safePlace && (
                  <Marker 
                    position={[safePlace.lat, safePlace.lng]}
                    icon={new L.Icon({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41]
                    })}
                  >
                    <Popup>Safe Place: {safePlace.name}</Popup>
                  </Marker>
                )}
              </MapContainer>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <DisasterList disasters={disasters} />
            <SafePlaceInfo safePlace={safePlace} />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                py-3 px-6 rounded-lg flex items-center justify-center gap-2"
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;