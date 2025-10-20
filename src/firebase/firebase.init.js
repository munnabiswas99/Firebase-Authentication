// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq2PqmN-abxqRHABDNGuZoFSwd9kKUaGc",
  authDomain: "simple-firebase-auth-ebfba.firebaseapp.com",
  projectId: "simple-firebase-auth-ebfba",
  storageBucket: "simple-firebase-auth-ebfba.firebasestorage.app",
  messagingSenderId: "373565337507",
  appId: "1:373565337507:web:32730b706845ca76fb3416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);