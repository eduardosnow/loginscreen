import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
