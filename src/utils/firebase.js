// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTfi9AQxYrqSW0Zuw6hSdBQ_SUFxddVA",
  authDomain: "netflixgpt-5afae.firebaseapp.com",
  projectId: "netflixgpt-5afae",
  storageBucket: "netflixgpt-5afae.firebasestorage.app",
  messagingSenderId: "677969107059",
  appId: "1:677969107059:web:cc31328870431d20537206",
  measurementId: "G-QQ3E2D6YMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();