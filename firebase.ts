// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAGAZ37WOJCEOzM6F4lP3jUlhngtI0h5Y",
  authDomain: "vocational-profile.firebaseapp.com",
  projectId: "vocational-profile",
  storageBucket: "vocational-profile.firebasestorage.app",
  messagingSenderId: "179759034185",
  appId: "1:179759034185:web:9c9721905abcc09a7ff498",
  measurementId: "G-8KNSELZ2E2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };