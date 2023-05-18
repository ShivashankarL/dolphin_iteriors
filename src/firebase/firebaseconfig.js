// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getTokenFound = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BKvsu41BsftiRhBBx3srPC1UfeXTVGPVZPI2nqpXlJb1r42_fmvQv9wVaE86ZHwW63ldx4w77iCIKp5boYXRHC4",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};
