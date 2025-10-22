import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import logoImg from '../../../assets/logo.jpeg'
function Navbar() {
  const { user, logoutUser } = use(AuthContext);
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
    </>
  );
  const logoutHandler = () => {
    logoutUser().then(() => {
      alert("user logout");
    });
  };

  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar w-11/12 mx-auto">
          <div className="flex-1">
            <Link to="/" className="normal-case text-3xl">
              <img src={logoImg} alt="" className="w-16 rounded-full"/>
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
          </div>

          {user ? (
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/Profile-page" className="justify-between">
                      Profile <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <button onClick={logoutHandler}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/auth" className="px-6 py-2  rounded border">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
