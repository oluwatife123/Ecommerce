// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE8b2L-cX2l3pcP1Ox3SQORsSvtTycg2Y",
  authDomain: "eccomerce-9064a.firebaseapp.com",
  projectId: "eccomerce-9064a",
  storageBucket: "eccomerce-9064a.appspot.com",
  messagingSenderId: "748060205758",
  appId: "1:748060205758:web:9576ba0d1fe00962a134ef",
  measurementId: "G-ZC861GGGQC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword  };

