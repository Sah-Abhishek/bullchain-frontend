// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/Auth";
const firebaseConfig = {
  apiKey: "AIzaSyBlzPJoP4y_siiS7cFacIheOtBCYOLeP-g",
  authDomain: "bullchain-c5195.firebaseapp.com",
  projectId: "bullchain-c5195",
  storageBucket: "bullchain-c5195.firebasestorage.app",
  messagingSenderId: "452700494191",
  appId: "1:452700494191:web:6f0ac2d48a44a40247309a",
  measurementId: "G-VYPJNMKF1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
