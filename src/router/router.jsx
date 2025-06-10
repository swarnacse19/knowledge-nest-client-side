import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import PostArticle from "../pages/PostArticle";
import PrivateRoute from "../provider/PrivateRoute";
import AllArticles from "../pages/AllArticles";
import Loading from "../pages/Loading";
import MyArticles from "../pages/MyArticles";

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
        path: "/articles",
        loader: () => 
          fetch("http://localhost:5000/articles"),
        HydrateFallback: Loading,
        Component: AllArticles
      },
      {
        path: "/myArticles",
        loader: () => 
          fetch("http://localhost:5000/articles"),
        HydrateFallback: Loading,
        element: <PrivateRoute>
          <MyArticles></MyArticles>
        </PrivateRoute>
      },
      {
        path: "/postArticle",
        element: (
          <PrivateRoute>
            <PostArticle></PostArticle>
          </PrivateRoute>
        )
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