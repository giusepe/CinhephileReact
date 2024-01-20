import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpcomingMovies from "../components/pages/UpcomingMovies";
import About from "../components/pages/About";

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
