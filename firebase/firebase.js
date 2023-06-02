// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firestore from'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const { getFirestore, Timestamp, FieldValue } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyA6in-z-x3GRA5jJwu1-nRdG4l7rz5X6MY",
  authDomain: "react-chat-app-72edf.firebaseapp.com",
  projectId: "react-chat-app-72edf",
  storageBucket: "react-chat-app-72edf.appspot.com",
  messagingSenderId: "657870496847",
  appId: "1:657870496847:web:3c67ef3e2e337f4d6bb63a",
  measurementId: "G-4LVK53DCY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);