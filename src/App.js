import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
import home1 from "./pages/home";
import login from "./pages/login";
import Navbar from "./nav/nav";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/home" component={home1} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
