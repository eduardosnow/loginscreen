import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import PrivateScreen from "./pages/PrivateScreen";
import ProfilePage from './pages/ProfilePage'


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
        <PrivateRoute  path="/test" component={PrivateScreen}/>
        <PrivateRoute  path="/profile" component={ProfilePage}/>

      </Switch>
    </div>
  );
}

export default App;
