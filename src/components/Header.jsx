import { useDispatch, useSelector } from "react-redux";

import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, PROFILE_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((state) => state.name);
  const handleclickgpt = () =>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleclick = () => {
    signOut(auth)
      .then(() => {
        })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts 
    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="w-[150px] h-[50px] mx-auto md:mx-0 "
        src={LOGO}
        alt="NETFLIX LOGO"
      />
      {user && (
        <div className="flex p-2 m-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleclickgpt} className="bg-purple-600 p-2 rounded-xl  m-3 text-white font-bold">
            ChatGpt
          </button>
          <img
            src={PROFILE_URL}
            alt="image_logo"
            className="rounded-full w-12 h-12 m-3 border shadow-xl border-gray-200"
          />
          <button
            onClick={handleclick}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5  me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-12 my-3"
          >
            Sign out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
