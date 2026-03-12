import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import MyBooking from "../pages/MyBooking/MyBooking";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Profile from "../pages/Profile/Profile";
import Demo from "../pages/Demo/Demo";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "my-booking", element: <MyBooking /> },
      { path: "admin", element: <Admin /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "my-booking/:section_id", element: <MyBooking /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
