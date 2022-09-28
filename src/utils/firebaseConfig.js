// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqkTk-ZEpHVIstsApXHbGYu39qj-uNv3I",
  authDomain: "carpediem-ce31d.firebaseapp.com",
  projectId: "carpediem-ce31d",
  storageBucket: "carpediem-ce31d.appspot.com",
  messagingSenderId: "36270429243",
  appId: "1:36270429243:web:faef61f8c4b23426b6381e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);