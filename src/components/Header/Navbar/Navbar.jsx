import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import logoImg from "../../../assets/logo.jpeg";
import { FaSpinner } from "react-icons/fa";

function Navbar() {
  const { user, logoutUser, loading } = use(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
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
    <div className="bg-base-300 shadow-md ">
      <div className="navbar w-11/12 mx-auto flex justify-between">
        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="normal-case text-3xl flex items-center">
            <img src={logoImg} alt="logo" className="w-14 rounded-full" />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
        </div>

        {loading ? (
          <div className="flex items-center justify-center">
            <FaSpinner className="animate-spin text-2xl text-blue-500" />
          </div>
        ) : user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/Profile-page" className="justify-between">
                    Profile <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link
              to="/auth"
              className="px-6 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 duration-200"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
