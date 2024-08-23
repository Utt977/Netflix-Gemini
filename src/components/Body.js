import SignIn from "./SignIn";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "../utils/Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
