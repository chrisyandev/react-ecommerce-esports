// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCimw1U9-8Ap-a3k4g1Twe8wDtgRlUWtt8",
  authDomain: "react-ecommerce-esports-cadb3.firebaseapp.com",
  projectId: "react-ecommerce-esports-cadb3",
  storageBucket: "react-ecommerce-esports-cadb3.appspot.com",
  messagingSenderId: "1081216088890",
  appId: "1:1081216088890:web:93105027acd1ed9c246e03",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("Logging userDocRef");
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("Logging userSnapshot");
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
