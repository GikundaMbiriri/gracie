import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
import admin from "./pages/Admin/admin";
import editor from "./pages/Admin/editor";
import about from './pages/about1/about'
import about1 from './pages/about/about'
import audio from './pages/podcast/podcast';
import contact from './pages/contact/contact';
import logo from './logo.svg'
import Solo1 from "./pages/solo1";
import Footer from './components/Footer'
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
import { ToastProvider } from 'react-toast-notifications';
axios.defaults.baseURL =
  "https://us-central1-pizzes-2f536.cloudfunctions.net/api/";
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
      height: 40,
      borderRadius: "50%"

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

  const SvgComponent = () =>

  (<object data={logo} width={150} height={150}>
    APP logo svg
  </object>)
  const SvgComponen = () =>

  (<object data={logo} width={70} height={70}>
    APP logo svg
  </object>)



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
          <div className="hatari">

            <div className="mzii">

              <div className="svg" >
                {window.innerWidth>550?<SvgComponent />:<SvgComponen />}
                
                {/* <img src={logo1}/> */}
              </div>
              <Navbar />
            </div>

          </div>
          <ToastProvider>
            <div className="gh">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/tiny" component={Tiny} />
                <Route exact path="/solo/:id" component={Solo} />
                <Route exact path="/solo1/:id" component={Solo1} />
                <Route exact path="/about1" component={about} />
                <Route exact path="/about" component={about1} />
                <Route exact path="/admin/panel/:id" component={editor} />
                <Route exact path='/contact' component={contact} />
                <Route exact path='/audio' component={audio} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />

              </Switch>
            </div>
          </ToastProvider>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;