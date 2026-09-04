
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs3MOUfFN7cW20bdcNt1ZkI53DIWUs8lY",
  authDomain: "login-signup-authenticat-144f2.firebaseapp.com",
  projectId: "login-signup-authenticat-144f2",
  storageBucket: "login-signup-authenticat-144f2.firebasestorage.app",
  messagingSenderId: "1045658330826",
  appId: "1:1045658330826:web:d36aa5e4f32383144e7633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;