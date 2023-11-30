// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4yE1h4sTslj51AroHcTWkV4negOPESLs",
  authDomain: "mern-book-invertory.firebaseapp.com",
  projectId: "mern-book-invertory",
  storageBucket: "mern-book-invertory.appspot.com",
  messagingSenderId: "336880141265",
  appId: "1:336880141265:web:511ad512e1f2c1028216f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;