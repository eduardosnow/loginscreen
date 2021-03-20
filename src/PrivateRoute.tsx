import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";




export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
