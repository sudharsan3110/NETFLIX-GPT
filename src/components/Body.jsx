import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

  const approuter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
