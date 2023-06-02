import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Sign up with email and password
export const signUp = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      //router.push("/chat");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Sign in with email and password
export const signIn = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //router.push("/chat");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
