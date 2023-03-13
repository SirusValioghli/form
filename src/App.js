import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
