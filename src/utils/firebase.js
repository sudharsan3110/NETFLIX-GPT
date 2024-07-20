// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj3AInajZFPntgnC8grIEFmOGiV3CRk-E",
  authDomain: "netflixgpt-9f28a.firebaseapp.com",
  projectId: "netflixgpt-9f28a",
  storageBucket: "netflixgpt-9f28a.appspot.com",
  messagingSenderId: "706767710367",
  appId: "1:706767710367:web:805530a8a8a8b698c31aaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
