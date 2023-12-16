// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, getFirestore } from 'firebase/auth';
import firebaseConfig from './config/firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
