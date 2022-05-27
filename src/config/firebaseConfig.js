// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAlVx7Z4ibPiEoas0jqvJqdA7L405c00",
  authDomain: "twittwer-clone-bb070.firebaseapp.com",
  projectId: "twittwer-clone-bb070",
  storageBucket: "twittwer-clone-bb070.appspot.com",
  messagingSenderId: "242890945784",
  appId: "1:242890945784:web:b018e9dc6f0264fe63370d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);