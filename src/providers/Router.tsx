import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpcomingMovies from "../pages/UpcomingMovies";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UpcomingMovies />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
