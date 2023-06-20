import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = ';


function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128], 
      zoom: 12
    });

    map.addControl(new mapboxgl.NavigationControl());

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef}  className="h-[100%] flex-1 bg-gray-300"/>;
}

export default Map;
