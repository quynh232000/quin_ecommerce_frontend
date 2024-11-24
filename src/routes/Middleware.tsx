import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

const Middleware = ({
  middleware,
  children,
}: {
  middleware?: string;
  children: React.ReactNode;
}) => {
  const { isLogin } = useSelector((state: RootState) => state.authReducer);

  if (middleware === "auth" && !isLogin) {
    return <Navigate to="/login" />;
    // return <PrivateRoute >{children}</PrivateRoute>;
  }

  // if (middleware === "guest" && isLogin) {
  //   return <Navigate to="/seller/dashboard" />;
  // }

  return <>{children}</>;
};

export default Middleware;
