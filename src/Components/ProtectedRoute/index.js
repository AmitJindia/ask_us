import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useTemplate } from "../../context/templateContext";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const {loggedin,username}=useTemplate();
//   const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        loggedin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;