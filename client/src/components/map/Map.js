import React from "react";
import { useEffect, useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { Room, Star } from "@material-ui/icons";
import axios from "axios";
import {format} from "timeago.js"
import "./Map.css";


function Map() {
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "60vh",
    latitude: 37.7577,
    longitude: -95.7129,
    zoom: 3
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getPins()
  }, []);

  const handleMarkerClick = (id) => {
     setCurrentPlaceId(id)
  }

  return (
    <div className="Map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      >

        {pins.map(p=>(
<>
          <Marker
          latitude={p.latitude}
          longitude={p.longitude}
          offsetLeft={-20}
          offsetTop={-10}
          >
          <Room 
          style={{fontSize:viewport.zoom * 7, color:"slateblue", cursor:"pointer" }}
          onClick={()=>handleMarkerClick(p._id)}
          />
        </Marker>

        {p._id === currentPlaceId &&
        <Popup
        latitude={p.latitude}
        longitude={p.longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={()=>setCurrentPlaceId(null)}
        
        anchor="left" >
          <div className="card">
          <label>Place</label>
          <h4 className="place">{p.title}</h4>
          <label>Review</label>
          <p>{p.description}</p>
          <label>Rating</label>
          <div className="stars">
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          </div>
          <label>Information</label>
          <span className="username"> Create by <b>{p.username}</b></span>
          <span className="date">{format(p.createdAt)}</span>
          </div>
        </Popup>
          }
        </>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default Map;