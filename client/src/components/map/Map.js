import React from "react";
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function Map() {
  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    latitude: 37.7577,
    longitude: -95.7129,
    zoom: 4
  });
  return (
    <div className="map">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    </div>
  );
}

export default Map;