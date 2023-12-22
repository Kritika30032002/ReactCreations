import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDS9WOu-HTc_47HEyqL6lAxllC-1YRhjA",
  authDomain: "the-hook---pbl.firebaseapp.com",
  projectId: "the-hook---pbl",
  storageBucket: "the-hook---pbl.appspot.com",
  messagingSenderId: "862270528923",
  appId: "1:862270528923:web:a5496e31d7b2341286953e",
  measurementId: "G-P5ZJSLH1D2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
