import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfGMeTow7REgULdDD4OOH78D2JZOtvftY",
  authDomain: "gaming-product-store-8bcdf.firebaseapp.com",
  projectId: "gaming-product-store-8bcdf",
  storageBucket: "gaming-product-store-8bcdf.firebasestorage.app",
  messagingSenderId: "191119943762",
  appId: "1:191119943762:web:398c4eab9f8dd26c57578b",
  measurementId: "G-HJ87Z5628Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("✅ Firebase Connected Successfully!");
