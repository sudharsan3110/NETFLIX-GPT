import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
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
  const auth = getAuth();
  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
      } else {
        dispatch(removeUser());
        // ...
      }
    }),
    []
  );
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
