// firebase.js

// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1JbyBqPpipTbxQ2XuStxwEWEJNs5XISg",
  authDomain: "car-rental-auth-fe7a3.firebaseapp.com",
  projectId: "car-rental-auth-fe7a3",
  storageBucket: "car-rental-auth-fe7a3.appspot.com",
  messagingSenderId: "149309009914",
  appId: "1:149309009914:web:85a40542b68dd8378ffe43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase authentication and Firestore database instances
export const auth = getAuth(app);
export const db = getFirestore(app);
