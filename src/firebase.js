// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBISSdDTvabzA9OtOANfrThFmR50ikq7_A",
  authDomain: "gs-netflix.firebaseapp.com",
  projectId: "gs-netflix",
  storageBucket: "gs-netflix.appspot.com",
  messagingSenderId: "972993962645",
  appId: "1:972993962645:web:272acdef7194928aa6b19c",
  measurementId: "G-YM31BJ999N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//For SignUp
const signUp = async (name, email, password) => {
  try {
    //from this response we will find the user's details, that is stored in the user property.
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    //we have created user in our FireBase(FB), next we will store the user in the FireStoreDB. For that we will use addDoc.
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    //catch block
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//For SignIn
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//For logout
const logout = () => {
  signOut(auth);
};

export { auth, db, signUp, login, logout };
