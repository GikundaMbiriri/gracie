import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
import audio from './pages/audio/audio'
import Tiny from "./pages/tiny";
import Solo from "./pages/solo";
import login from "./pages/login";
import signup from "./pages/signup";
import Navbar from "./nav/nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userAction";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";
import './App.css'
axios.defaults.baseURL =
  "https://us-central1-zigzag-d2feb.cloudfunctions.net/api/";
  const theme = createMuiTheme({
    palette: {
      light: "#33c9dc",
      main: "#00bxd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "b22a00",
      contrastText: "#fff",
    },
    spread: {
      typography: {
        useNextVariants: true,
      },
      form: {
        textAlign: "center",
      },
      image: {
        margin: "20px auto 20px auto",
        width: 40,
        height:40,
        borderRadius:"50%"

      },
      pageTitle: {
        margin: "10px auto 10px auto",
      },
      TextField: {
        margin: "10px auto 10px auto",
      },
      button: {
        marginTop: 20,
        position: "relative",
      },
      customError: {
        color: "red",
        fontSize: "0.8rem",
        marginTop: 10,
      },
      progress: {
        position: "absolute",
      },
    },
  });
function App() {
  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      window.location.href = "/login";
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUserData());
    }
  }
  return (
    <>
      <Provider store={store}>
        <Router>

          <h1 className="pizzes">Pizzes</h1>
          <Navbar />

          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/tiny" component={Tiny} />
            <Route exact path="/solo/:id" component={Solo} />
            <Route exact path="/signup" component={signup} />
<Route exact path='/audio' component={audio}/>
            <Route exact path="/login" component={login} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
