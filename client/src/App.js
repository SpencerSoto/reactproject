import React from "react";
import Map from "./components/map/Map"
// import { Switch, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import * as PATHS from "./utils/paths";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
      </Switch> */}
      <Map/>
    </div>
  );
}

export default App;
