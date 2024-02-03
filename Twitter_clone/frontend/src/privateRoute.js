import React from "react";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { homeAuthenticated } = props;
  const token = useSelector((state) => state.profile.user.token);
  let isAuthenticated = false;
  try {
    jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
    isAuthenticated = true;
  } catch (err) {
    isAuthenticated = false;
  }

  if (homeAuthenticated)
    return isAuthenticated ? (
      <Redirect to={{ pathname: "/home" }} />
    ) : (
      <Route {...props} />
    );

  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};

export default PrivateRoute;
