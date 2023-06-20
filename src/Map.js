import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYWxwYXRpbDIwMDIiLCJhIjoiY2xqNGQwNDk5MDFpMTNmdGV3Z2J1ajJ1dyJ9.KQBw0eZbPvHePnhn-MmQtA';

const Map = ({ center }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center,
      zoom: 9,
    });

    return () => mapRef.current.remove();
  }, [center]);

  useEffect(() => {
    if (mapRef.current && center) {
      mapRef.current.flyTo({
        center,
        zoom: 12,
      });
    }
  }, [center]);

  return <div ref={mapContainerRef} className="w-3/4 h-full" />;
};

export default Map;
