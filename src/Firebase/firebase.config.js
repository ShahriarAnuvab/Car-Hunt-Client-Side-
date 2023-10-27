// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuOmLSm51vVKTGD3Lh5ZyEccsGvQumIY",
  authDomain: "car-hunt-9d4d9.firebaseapp.com",
  projectId: "car-hunt-9d4d9",
  storageBucket: "car-hunt-9d4d9.appspot.com",
  messagingSenderId: "928169235195",
  appId: "1:928169235195:web:ab98af7f4f7837110e965e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;