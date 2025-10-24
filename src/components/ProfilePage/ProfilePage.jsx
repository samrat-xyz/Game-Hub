import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Header/Navbar/Navbar";

function ProfilePage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProfilePage;
