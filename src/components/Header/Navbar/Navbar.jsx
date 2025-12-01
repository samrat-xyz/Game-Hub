import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import logoImg from "../../../assets/logo.jpeg";
import { FaSpinner } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const { user, logoutUser, loading } = use(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${
            isActive
              ? "text-primary font-semibold bg-primary/10 border-b-2 border-primary"
              : "text-gray-300 hover:text-secondary hover:bg-primary/10 hover:border-secondary/40 hover:border-b-2"
          }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            `text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${
            isActive
              ? "text-primary font-semibold bg-primary/10 border-b-2 border-primary"
              : "text-gray-300 hover:text-secondary hover:bg-primary/10 hover:border-secondary/40 hover:border-b-2"
          }`
          }
        >
          Games
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${
            isActive
              ? "text-primary font-semibold bg-primary/10 border-b-2 border-primary"
              : "text-gray-300 hover:text-secondary hover:bg-primary/10 hover:border-secondary/40 hover:border-b-2"
          }`
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-70">
      <div className="navbar w-11/12 mx-auto flex justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="logo"
              className="w-12 rounded-full shadow-md"
            />

            {/* Modern text */}
            <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text ">
              GameHub
            </span>
          </Link>
        </div>

        {/* MIDDLE: Search */}
        <div className="hidden lg:flex w-1/3 relative ">
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search games..."
            className="input input-bordered w-full pl-10 text-sm rounded-full shadow-sm border-primary focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all bg-black text-secondary"
          />
        </div>

        {/* RIGHT: Nav + User */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-1">{navLinks}</ul>
          </div>

          {/* User Section */}
          {loading ? (
            <FaSpinner className="animate-spin text-xl text-blue-500" />
          ) : user ? (
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:ring hover:ring-primary/50 transition"
              >
                <div className="w-9 rounded-full">
                  <img alt="User Avatar" src={user?.photoURL} />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content bg-primary rounded-xl mt-3 w-52 p-2 shadow-xl">
                <li>
                  <Link to="/Profile-page" className="justify-between">
                    Profile
                  </Link>
                </li>
                
                  <button onClick={logoutHandler} className="bg-secondary py-1 rounded-lg cursor-pointer font-bold">Logout</button>
                
              </ul>
            </div>
          ) : (
            <Link
              to="/auth"
              className="px-4 py-2 rounded-full text-white bg-primary text-sm font-semibold hover:bg-primary/90 shadow-sm transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE Search */}
      <div className="lg:hidden px-4 pb-3 relative mt-2">
        <FiSearch className="absolute left-6 top-6 text-gray-500" />
        <input
          type="text"
          placeholder="Search games..."
          className="input input-bordered w-full pl-10 text-sm rounded-full shadow-sm border-primary focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all bg-black text-secondary"
        />
      </div>
    </div>
  );
}

export default Navbar;
