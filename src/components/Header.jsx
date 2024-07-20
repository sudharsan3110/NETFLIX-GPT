import { useDispatch, useSelector } from "react-redux";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate ();
  const user = useSelector((state) => state.name);
  const PROFILE_PIC = user?.photoURL;
  const handleclick = () => {
   
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        
        navigate("/")
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <div className=" flex  justify-between w-[100%] absolute px-30 align-middle bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="NETFLIX LOGO"
        className="w-[300px] h-[100px] my-5 mx-5"
      />
      {user && (
        <div className="flex p-2 m-2">
          <img
            src={PROFILE_PIC}
            alt="image_logo"
            className="rounded-full w-24 h-24 m-3 border shadow-xl border-gray-200"
          />
          <button
            onClick={handleclick}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-16 my-6"
          >
            Sign out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
