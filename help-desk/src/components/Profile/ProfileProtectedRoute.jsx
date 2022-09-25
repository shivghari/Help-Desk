import React from "react";
import { Navigate } from "react-router-dom";

function ProfileProtectedRoute({ children }) {
  if (localStorage.getItem("id") && localStorage.getItem("token")) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/"></Navigate>;
  }
}

export default ProfileProtectedRoute;
