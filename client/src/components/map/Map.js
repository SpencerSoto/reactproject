import React from "react";
import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { Room, Star } from "@material-ui/icons";
import "./Map.css";


function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "60vh",
    latitude: 37.7577,
    longitude: -95.7129,
    zoom: 3
  });
  return (
    <div className="Map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      >
        <Marker
          latitude={40.7128}
          longitude={-74.0060}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{fontSize:viewport.zoom * 7, color:"slateblue" }}/>
        </Marker>
        <Popup
          latitude={40.7128}
          longitude={-74.0060}
          closeButton={true}
          closeOnClick={false}
          
          anchor="left" >
          <div className="card">
            <label>Place</label>
            <h4 className="place">New York</h4>
            <label>Review</label>
            <p>Love Time Square</p>
            <label>Rating</label>
            <div className="stars">
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
            </div>
            <label>Information</label>
            <span className="username"> Create by <b>mario</b></span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default Map;