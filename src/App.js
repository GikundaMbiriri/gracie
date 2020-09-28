import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
import Tiny from "./pages/tiny";
import Solo from "./pages/solo";
import login from "./pages/login";
import Navbar from "./nav/nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userAction";
import axios from "axios";
axios.defaults.baseURL =
  "https://us-central1-zigzag-d2feb.cloudfunctions.net/api/";
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
          <Navbar />

          <Switch>
            <Route exact path="/gh-pages-url" component={home} />
            <Route exact path="/tiny" component={Tiny} />
            <Route exact path="/solo/:id" component={Solo} />

            <Route exact path="/login" component={login} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
