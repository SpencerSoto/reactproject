import React from "react";
import Map from "./components/map/Map";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProtectedPage from "./pages/ProtectedPage";
import Signup from "./pages/Signup";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import { getLoggedIn, logout } from "./services/auth";
import logServices from "./services/journeys";
import pinsServices from "./services/pins";
import * as PATHS from "./utils/paths";
import * as CONSTS from "./utils/consts";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import JourneyLog from "./components/JourneyLog/JourneyLog";
import NewsFeed from "./components/NotificationFeed/NewsFeed";
import Profile from "./components/Profile/Profile";
import Footer from "./components/footer/Footer";
import journeyService, { getJourneylogs } from "./services/journeys";

class App extends React.Component {
  state = {
    user: null,
    isLoading: false,
    pins: [],
    journeylogs: [],
  };

  getPins = async () => {
    try {
      const res = await pinsServices.getPins();
      console.log({ res });
      this.setState({ pins: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  deletePin = (id) => {
    const updatedPins = this.state.pins.filter((pin) => pin._id !== id);
    console.log(updatedPins);
    this.setState({
      pins: updatedPins,
    });
  };

  updatePin = (updatedPin) => {
    const updatedPins = this.state.pins.map((pin) =>
      pin._id === updatedPin._id ? updatedPin : pin
    );
    this.setState({
      pins: updatedPins,
    });
    // console.log(updatedPins)
  };

  componentDidMount = () => {
    getJourneylogs().then((result) => {
      this.setState({ journeylog: result.data.journeylogs });
      console.log(result, "A string ");
    });
    localStorage.setItem("myCat", "Tom");
    this.getPins();
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    // logServices.getJourneylogs().then((response) => {
    //   const { journeylogs } = response.data;
    //   console.log({ journeylogs });
    // });
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  setPins = (pins) => {
    this.setState({
      pins,
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          console.log(res);
          if (!res.status) {
            // deal with error here
            console.error("💡 SOMETHING HAPPENED THAT HAS TO DEALT WITH", res);
          }

          localStorage.removeItem(CONSTS.ACCESS_TOKEN);

          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        {/* <Banner/> */}
        {/* <Map user={this.state.user}/> */}
        {/* <About/> */}

        <Switch>
          <NormalRoute path={PATHS.ABOUT} component={About} />
          <NormalRoute path={PATHS.JOURNEYLOG} component={JourneyLog} />
          <NormalRoute
            exact
            path={PATHS.MAP}
            component={Map}
            user={this.state.user}
            pins={this.state.pins}
            setPins={this.setPins}
            deletePin={this.deletePin}
          />
          <NormalRoute
            path={PATHS.PROFILE}
            component={Profile}
            pins={this.state.pins}
          />
          <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} />
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDPAGE}
            component={ProtectedPage}
            user={this.state.user}
          />
        </Switch>
        {/* <NewsFeed /> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
