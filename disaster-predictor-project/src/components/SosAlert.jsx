import React from 'react';

function SosAlert() {
  const handleSosClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Use environment variable for backend URL
        const backendUrl = 'http://localhost:5500'; // Updated port to match server

        // Send location to the backend
        fetch(`${backendUrl}/send-sos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ latitude, longitude })
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => alert('Error sending SOS.'));
      }, () => {
        alert("Location access denied!");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', margin: 0 }}>
      <button id="sos-button" style={{ fontSize: '33px', width: '200px', height: '200px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', animation: 'pulse 1.5s infinite', fontWeight: 'bold', boxShadow: '0 0 20px 10px rgba(255, 0, 0, 0.5)' }} onClick={handleSosClick}>
        SOS 
      </button>
    </div>
  );
}

export default SosAlert;