import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpcomingMovies from "../pages/UpcomingMovies";
import About from "../pages/About";
import MovieDetail from "../pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UpcomingMovies />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetail />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
