// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VCBOszos800f-m8inp7XhJkLH4KFkKs",
  authDomain: "gen-lang-client-0914367944.firebaseapp.com",
  projectId: "gen-lang-client-0914367944",
  storageBucket: "gen-lang-client-0914367944.firebasestorage.app",
  messagingSenderId: "76706851259",
  appId: "1:76706851259:web:a6fc66937c5098e9d93c9e",
  measurementId: "G-06L6FY2F3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn("Firebase Analytics failed to initialize:", error);
}

export { app, analytics };
