import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbnx04SAhYAvZu56ccE6Uvid8BqZafpKg",
  authDomain: "react-netflix-clone-eace8.firebaseapp.com",
  projectId: "react-netflix-clone-eace8",
  storageBucket: "react-netflix-clone-eace8.appspot.com",
  messagingSenderId: "1059092542300",
  appId: "1:1059092542300:web:90cf187b53e63f32be4799",
  measurementId: "G-F7Y1LH79W8"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
