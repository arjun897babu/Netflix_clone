import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const {
  VITE_FIREBASE_apiKey,
  VITE_FIREBASE_authDomain,
  VITE_FIREBASE_projectId,
  VITE_FIREBASE_storageBucket,
  VITE_FIREBASE_messagingSenderId,
  VITE_FIREBASE_appId
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_FIREBASE_apiKey,
  authDomain: VITE_FIREBASE_authDomain,
  projectId: VITE_FIREBASE_projectId,
  storageBucket: VITE_FIREBASE_storageBucket,
  messagingSenderId: VITE_FIREBASE_messagingSenderId,
  appId: VITE_FIREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)