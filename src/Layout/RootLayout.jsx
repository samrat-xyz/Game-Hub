import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading/Loading";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  const navigation = useNavigation();

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>{navigation.state === "loading" ? <Loading /> : <Outlet />}</main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default RootLayout;
