import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchBar from './SearchBar';
import DisasterList from './DisasterList';
import SafePlaceInfo from './SafePlaceInfo';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

// Fix Leaflet icon issue
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconRetinaUrl: iconRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Map recenter component
function RecenterAutomatically({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 7);
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
        alert("Location not found!");
        return;
      }

      const newLocation = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };

      setLocation(newLocation);
      fetchDisasterData(newLocation.lat, newLocation.lng);
      findSafePlace(newLocation.lat, newLocation.lng);
    } catch (error) {
      console.error("Error fetching location:", error);
      alert("Error searching location. Please try again.");
    }
  };

  const fetchDisasterData = async (lat, lng) => {
    try {
      const startDate = `${new Date().getFullYear() - 3}-01-01`;
      const response = await fetch(
        `https://eonet.gsfc.nasa.gov/api/v3/events?status=closed&limit=50&start=${startDate}`
      );
      const data = await response.json();

      const nearbyDisasters = data.events.filter(event => {
        const eventLat = event.geometry[0].coordinates[1];
        const eventLng = event.geometry[0].coordinates[0];
        return getDistance(lat, lng, eventLat, eventLng) < 500;
      });

      setDisasters(nearbyDisasters);
      setMarkers(nearbyDisasters.map(event => ({
        position: [event.geometry[0].coordinates[1], event.geometry[0].coordinates[0]],
        title: event.title
      })));
    } catch (error) {
      console.error("Error fetching disaster data:", error);
    }
  };

  const findSafePlace = (lat, lng) => {
    const safePlaces = [
      { name: "Delhi", lat: 28.7041, lng: 77.1025 },
      { name: "Chennai", lat: 13.0827, lng: 80.2707 },
      { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
      { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
      { name: "Bangalore", lat: 12.9716, lng: 77.5946 }
    ];

    const nearest = safePlaces.reduce((closest, place) => {
      const distance = getDistance(lat, lng, place.lat, place.lng);
      return distance < (closest?.distance || Infinity) 
        ? { ...place, distance } 
        : closest;
    }, null);

    setSafePlace(nearest);
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Disaster & Safe Shelter Finder
        </h1>
        
        <SearchBar onSearch={handleSearch} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]">
              <MapContainer
                center={[location.lat, location.lng]}
                zoom={5}
                className="h-full w-full"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <RecenterAutomatically lat={location.lat} lng={location.lng} />
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
            </div>
          </div>
          
          <div className="space-y-6">
            <DisasterList disasters={disasters} />
            <SafePlaceInfo safePlace={safePlace} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;