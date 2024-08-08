import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
//rafce react arrow functoin export component
import Header from "./Header";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { MAIN_PAGE } from "../utils/constants";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
 
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState("null");
  const handleclick = () => {
    setIsSignInform(!isSignInForm);
  };
  const handleValidation = () => {
    (e) => e.preventDefault();
    const message = checkValidate(
      auth,
      email.current.value,
      password.current.value,
    );

    setErrorMessage(message);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredentials) => {

          const user = userCredentials.user;
          
         
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/115058137?v=4"
          }).then(() => {
            
            const { uid, email, displayName,photoURL } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
          
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMessage(error)
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
    
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
      
        });
    }
 
    
  };
 

  return (
    <div>
      <Header />
      <div>
        <img
          src={MAIN_PAGE}
          alt="NETFLIX LOGO"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" p-12 m-5 rounded-xl mx-auto bg-black absolute w-4/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-70"
        >
          <h1 className="font-bold text-3xl  py-4 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              
              type="text"
              ref={name}
              placeholder="name"
              className="w-full p-4 my-4 bg-gray-600"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email"
            className="w-full p-4 my-4 bg-gray-600"
          />
          <input
            type="text"
            ref={password}
            placeholder="password"
            className="w-full rounded-md p-4 my-4 bg-gray-600"
          />
          <h1 className="font-bold text-red-500 text-md">{errorMessage}</h1>
          <button
            onClick={handleValidation}
            className="bg-red-700  rounded-lg p-4 my-3 w-full"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h1 className="text-white text-md text-center">OR</h1>
          <button className="bg-white opacity-50 rounded-lg p-4 my-3 w-full">
            Use as a sign in code
          </button>
          <h1 className="text-white text-md text-center">Forget password?</h1>
          <div className="flex p-2 m-2 ">
            <input type="checkbox" />
            <h2 className="ml-3  text-white">Remember me</h2>
          </div>
          <p className="text-white" onClick={handleclick}>
            new to Netflix? Sign up now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
