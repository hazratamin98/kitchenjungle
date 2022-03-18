import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCP0UYTfpIZ231wVqexx8lk9c1cY2ExHIs",
  authDomain: "kitchenjungel.firebaseapp.com",
  projectId: "kitchenjungel",
  storageBucket: "kitchenjungel.appspot.com",
  messagingSenderId: "157565752937",
  appId: "1:157565752937:web:be7acba32e4d03608fb4f8",
};

const app = initializeApp(firebaseConfig);

export { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
