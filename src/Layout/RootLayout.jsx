import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading/Loading";

function RootLayout() {
  const navigation = useNavigation();

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>{navigation.state === "loading" ? <Loading /> : <Outlet />}</main>

      <footer></footer>
    </div>
  );
}

export default RootLayout;
