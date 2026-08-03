import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfGMeTow7REgULdDD4OOH78D2JZOtvftY",
  authDomain: "gaming-product-store-8bcdf.firebaseapp.com",
  projectId: "gaming-product-store-8bcdf",
  storageBucket: "gaming-product-store-8bcdf.firebasestorage.app",
  messagingSenderId: "191119943762",
  appId: "1:191119943762:web:398c4eab9f8dd26c57578b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
