import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
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
          to="/installed"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Installed
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="normal-case text-3xl">
            GameHub
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
        </div>
        <div>
          <Link to='/auth' className="px-6 py-2  rounded border">Login</Link>
        </div>
        {/* <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/my-profile" className="justify-between">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
