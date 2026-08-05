import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const container = document.getElementById("featuredProducts");

async function loadProducts(){

    container.innerHTML = "";

    const snapshot = await getDocs(collection(db,"products"));

    snapshot.forEach(doc=>{

        const product = doc.data();

        const image =
            product.images && product.images.length
            ? product.images[0]
            : "images/no-image.png";

        container.innerHTML += `

<div class="product-card">

    ${product.discount ? `<div class="sale-badge">SALE</div>` : ""}

    <div class="product-image">

        <img src="${image}" alt="${product.title}">

        <div class="product-actions">

            <button>❤</button>

            <button>👁</button>

            <button>🛒</button>

        </div>

    </div>

    <div class="product-info">

        <div class="product-category">

            ${product.category}

        </div>

        <div class="product-title">

            ${product.title}

        </div>

        <div class="product-price">

            Rs ${product.discount || product.price}

            ${
                product.discount
                ? `<span class="old-price">Rs ${product.price}</span>`
                : ""
            }

        </div>

    </div>

</div>

`;

    });

}

loadProducts();
