import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, PROFILE_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const headeritems = [
    "Home",
    "TV Shows",
    "Movies",
    "Games",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];
  const [activeItem, setActiveItem] = useState("Home");

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((state) => state.name);
  const handleclickgpt = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleclick = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item);
    navigate(location.pathname);
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
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 px-4 md:px-12 lg:px-20 py-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-50 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            className="w-[100px] h-[40px] mx-auto md:mx-0"
            src={LOGO}
            alt="NETFLIX LOGO"
          />
          {user && (
            <nav className="hidden md:flex items-center gap-1">
              {headeritems.map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`group relative text-[0.75rem] tracking-normal ${
                    activeItem === item
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  } px-1 py-1 transition-colors`}
                >
                  {item}
                  <span
                    className={`pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 origin-left transform transition-transform duration-200 ${
                      activeItem === item
                        ? "bg-white scale-x-100"
                        : "bg-white/70 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </nav>
          )}
        </div>
        {user && (
          <div className="flex items-center gap-2 md:gap-4 p-2 m-2">
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
            <button
              aria-label="Search"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 text-gray-300 hover:text-white rounded transition-colors"
              onClick={(e) => handleNavClick(e, activeItem)}
            >
              <span role="img" aria-hidden="true">
                🔍
              </span>
            </button>
            <span className="hidden md:inline text-gray-300 text-sm">
              Children
            </span>
            <button
              aria-label="Notifications"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 text-gray-300 hover:text-white rounded transition-colors"
              onClick={(e) => handleNavClick(e, activeItem)}
            >
              <span role="img" aria-hidden="true">
                🔔
              </span>
            </button>
            <button
              onClick={handleclickgpt}
              className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-4 py-2 rounded-full shadow-md shadow-black/30 transition-colors"
            >
              ChatGpt
            </button>
            <img
              src={PROFILE_URL}
              alt="image_logo"
              className="rounded-full w-10 h-10 md:w-12 md:h-12 mx-2 md:mx-3 border border-white/30 shadow-xl"
            />
            <button
              onClick={handleclick}
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-0 font-medium rounded-full text-sm px-4 md:px-5 h-10 md:h-12"
            >
              Sign out{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
