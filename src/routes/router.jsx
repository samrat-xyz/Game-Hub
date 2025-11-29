import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Games from "../pages/Games/Games";
import GameDetails from "../pages/GameDetails/GameDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/games",
        loader: () => fetch("/data/games.json"),
        Component: Games,
      },
      {
        path: "/about-us",
        Component: About,
      },
      {
        path: "/game-details/:id",
        loader: () => fetch("/data/games.json"),
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path:'/auth/forget-password',
        Component:ForgetPassword
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/profile-page",
    Component: ProfilePage,
    children: [
      {
        index: true,
        Component: Profile,
      },
      {
        path: "/profile-page/edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
