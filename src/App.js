import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import PreviousStatus from "./PreviousStatus/PreviousStatus";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/previous-feedback" component={PreviousStatus} />
    </Switch>
  );
};

export default App;
