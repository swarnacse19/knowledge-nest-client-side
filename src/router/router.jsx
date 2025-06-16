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
import ArticlesDetails from "../pages/ArticlesDetails";
import CategoryPage from "../pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/articles",
        loader: () =>
          fetch("https://b11a11-server-side-swarnacse19.vercel.app/articles"),
        HydrateFallback: Loading,
        Component: AllArticles,
      },
      {
        path: "/article/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-swarnacse19.vercel.app/articles/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        Component: ArticlesDetails,
      },
      {
        path: "/category/:name",
        Component: CategoryPage,
      },
      {
        path: "/myArticles",
        element: (
          <PrivateRoute>
            <MyArticles></MyArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/postArticle",
        element: (
          <PrivateRoute>
            <PostArticle></PostArticle>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        Component: AboutUs,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
