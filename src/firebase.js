// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4RNKFwwtCqm2QKDRnamjmU8qTeS_NT0",
  authDomain: "phonebook-cbd59.firebaseapp.com",
  projectId: "phonebook-cbd59",
  storageBucket: "phonebook-cbd59.appspot.com",
  messagingSenderId: "706898015632",
  appId: "1:706898015632:web:aa19eb6f6f7333cec46f15",
  measurementId: "G-R6PP58S98D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export  const db = getFirestore(app)
export default app