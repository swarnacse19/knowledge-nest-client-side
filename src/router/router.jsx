import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import PostArticle from "../pages/PostArticle";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/postArticle",
        Component: PostArticle
      },
      {
        path: "/about",
        Component: AboutUs
      },
    ]
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "/register",
    Component: Register
  },
  {
    path: "/*",
    Component: ErrorPage
  }
]);

export default router;