// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArTJvxAceUakGMlE8SKopjkJO56VUH8gU",
  authDomain: "dolphin-interiors.firebaseapp.com",
  projectId: "dolphin-interiors",
  storageBucket: "dolphin-interiors.appspot.com",
  messagingSenderId: "647940909755",
  appId: "1:647940909755:web:975ab6916f894da2fc579e",
  measurementId: "G-62YXW8ZEKH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
