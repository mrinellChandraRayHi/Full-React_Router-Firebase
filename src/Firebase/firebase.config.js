// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJGa7elQiBSYCX5MWp1uAFt5U-Oy6I3Jk",
    authDomain: "private-router-3ff54.firebaseapp.com",
    projectId: "private-router-3ff54",
    storageBucket: "private-router-3ff54.appspot.com",
    messagingSenderId: "781924985079",
    appId: "1:781924985079:web:6dc216d4e7dbb0359f8bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);