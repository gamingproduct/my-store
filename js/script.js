import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

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
const db = getFirestore(app);

async function loadProducts() {

    const productsContainer = document.getElementById("products");

    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {

        const product = doc.data();

        productsContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.title}">

            <h3>${product.title}</h3>

            <p>$${product.price}</p>

            <button>Add to Cart</button>

        </div>

        `;

    });

}

loadProducts();

console.log("✅ Firebase Connected Successfully!");
