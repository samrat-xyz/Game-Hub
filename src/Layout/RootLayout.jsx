import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default RootLayout;
