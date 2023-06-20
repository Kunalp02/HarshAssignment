import React, { useState, useEffect } from 'react';
import Map from './Map';

function App() {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() !== '') {
        fetchSearchResults();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchText
        )}.json?access_token=pk.eyJ1Ijoia3VuYWxwYXRpbDIwMDIiLCJhIjoiY2xqNGQwNDk5MDFpMTNmdGV3Z2J1ajJ1dyJ9.KQBw0eZbPvHePnhn-MmQtA`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        const center = data.features[0].geometry.coordinates;
        setMapCenter(center);
      }
    } catch (error) {
      console.error('Error searching for locations:', error);
    }
  };

  const [mapCenter, setMapCenter] = useState([-74.5, 40]);

  return (
    <div className="h-screen flex">
      <Map center={mapCenter} />

      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="flex justify-center items-center h-16 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
