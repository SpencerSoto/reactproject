import React from "react";
import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "!react-map-gl";
import { Room, Star } from "@material-ui/icons";
import pinsServices from "../../services/pins";
import { format } from "timeago.js";
import "./Map.css";

function Map({ user, pins, setPins, match, deletePin, history }) {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(1);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "86.7vh",
    latitude: 22.133480524742637,
    longitude: -21.302729420269735,
    zoom: 1.5,
  });

  const handleMarkerClick = (id, latitude, longitude) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: latitude, longitude: longitude });
  };

  const handleAddClick = (e) => {
    const [long, lat] = e.lngLat;
    setNewPlace({
      lat,
      long,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: user.username,
      title,
      description,
      rating,
      latitude: newPlace.lat,
      longitude: newPlace.long,
    };

    try {
      const res = await pinsServices.createPin(newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = () => {
    // we need an id
    // const id = match.params.id;
    //  findByIfAndRemove
    pinsServices.deletePin(currentPlaceId).then((response) => {
      if (response.status === 200) {
        // update global state
        deletePin(currentPlaceId);
        // redirect back to homepage(app)
      }
    });
  };

  return (
    <div className="Map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        onDblClick={handleAddClick}
        transitionDuration="700"
      >
        {pins.map((p) => (
          <div key={p._id}>
            <Marker
              latitude={p.latitude}
              longitude={p.longitude}
              offsetLeft={-viewport.zoom * 3.5}
              offsetTop={-viewport.zoom * 7}
            >
              <Room
                style={{
                  fontSize: viewport.zoom * 7,
                  color: p.username === user?.username ? "green" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleMarkerClick(p._id, p.latitude, p.longitude)
                }
              />
            </Marker>

            {p._id === currentPlaceId && (
              <Popup
                latitude={p.latitude}
                longitude={p.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p>{p.description}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array.from({ length: p.rating }, (_, i) => <Star className="star" key={i}/>)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    {" "}
                    Create by <b>{p.username}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                  <button onClick={handleDelete}>Delete</button>
                  {/* <button onClick={this.handleEdit}>Edit</button> */}
                  {/* {editable && <button onClick={this.submitEdit}>Submit Change</button>} */}
                </div>
              </Popup>
            )}
          </div>
        ))}
        {newPlace && (
          <Popup
            key={newPlace.lat}
            latitude={newPlace.lat}
            longitude={newPlace.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
          >
            <div>
              <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                  placeholder="Enter a Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Review</label>
                <textarea
                  placeholder="Say something about this place"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label>Rating</label>
                <select onChange={(e) => setRating(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button className="submitButton" type="submit">
                  Add Pin
                </button>
              </form>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;
