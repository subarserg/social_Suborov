import React from "react";
import { useSelector } from "react-redux";
import Redirect from "react-router-dom/es/Redirect";


export const withRedirect = (Component) => (props) => {
  const isAuth = useSelector((state) => state.authReduser.isAuth);
  if (!isAuth) return <Redirect to="/login" />;
  return <Component {...props} />;
};

