import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./Login/Login";
import Register from "./Login/Register";
import { getSession } from "./authFile";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route
        render={(props) => (getSession() ? <App /> : <Redirect to="/login" />)}
      />
    </Switch>
  </Router>
);

export default Root;
