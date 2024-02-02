import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header.jsx";

const UserLandingPage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLandingPage;
