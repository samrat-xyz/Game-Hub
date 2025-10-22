import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Games from "../pages/Games/Games";
import GameDetails from "../pages/GameDetails/GameDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children :[
      {
        index :true,
        Component:Home
      },
      {
        path:'/games',
        loader:()=>fetch('/data/games.json'),
        Component:Games,
      },
      {
        path:'/game-details/:id',
        loader : () => fetch('/data/games.json'),
        element :<GameDetails></GameDetails>
      }
    ]
  },
  {
    path:'/auth',
    Component : Auth,
    children:[
      {
        index : true,
        Component:Login,
      },
      {
        path:'/auth/register',
        Component:Register
      }
    ]
  }
]);