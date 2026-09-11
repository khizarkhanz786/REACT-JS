// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1lbAdCvaAaQzAEh5DkU9IPqpg4jdYGk",
  authDomain: "blog-application-5b355.firebaseapp.com",
  projectId: "blog-application-5b355",
  storageBucket: "blog-application-5b355.firebasestorage.app",
  messagingSenderId: "1042599760741",
  appId: "1:1042599760741:web:4b6809804cfa5d2e9f878c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();