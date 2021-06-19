import React from "react";
import Map from "./components/map/Map"
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
import pinsServices from './services/pins'
import * as PATHS from "./utils/paths";
import * as CONSTS from "./utils/consts";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import JourneyLog from "./components/JourneyLog/JourneyLog";
import NewsFeed from "./components/NotificationFeed/NewsFeed";
import Profile from "./components/Profile/Profile"


class App extends React.Component {
  state = {
    user: null,
    isLoading: false,
    pins: [],
  };

  getPins = async () => {
    try {
      const res = await pinsServices.getPins();
      console.log({ res })
      this.setState({ pins: res.data });
    } catch (err) {
      console.log(err)
    }
  };

  componentDidMount = () => {
    localStorage.setItem("myCat", "Tom");
    this.getPins()
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
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
      pins
    })
  }

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
          console.log(res)
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
      </div>
    );
  }
}

export default App;

