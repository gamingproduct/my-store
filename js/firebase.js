// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN6xcR0jC0IqiGDVdNHCuY9usGF9DiNK0",
  authDomain: "gaming-product-store.firebaseapp.com",
  projectId: "gaming-product-store",
  storageBucket: "gaming-product-store.firebasestorage.app",
  messagingSenderId: "927659719505",
  appId: "1:927659719505:web:d051fac7c4965dec8cb170",
  measurementId: "G-KCF1LYP90S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase Connected Successfully!");
