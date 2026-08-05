import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const container = document.getElementById("featuredProducts");

async function loadProducts(){

    if(!container) return;

    container.innerHTML = "<h2>Loading Products...</h2>";

    try{

        const snapshot = await getDocs(collection(db,"products"));

        container.innerHTML = "";

        if(snapshot.empty){

            container.innerHTML = `
                <h2 style="text-align:center;padding:50px;">
                    No Products Found
                </h2>
            `;
            return;
        }

        snapshot.forEach(doc=>{

            const product = doc.data();

            const image =
                product.images &&
                product.images.length
                ? product.images[0]
                : "images/no-image.png";

            container.innerHTML += `

<div class="product-card">

    ${product.discount ? `<div class="sale-badge">-${Math.round((1-(product.discount/product.price))*100)}%</div>` : ""}

    <div class="product-image">

        <img src="${image}" alt="${product.title}">

        <div class="product-actions">

            <button title="Wishlist">❤</button>

            <button title="Quick View">👁</button>

            <button title="Add Cart">🛒</button>

        </div>

    </div>

    <div class="product-info">

        <div class="product-category">

            ${product.category || "Gaming"}

        </div>

        <div class="product-title">

            ${product.title}

        </div>

        <div class="product-rating">

            ⭐⭐⭐⭐⭐

        </div>

        <div class="product-price">

            Rs ${product.discount || product.price}

            ${
                product.discount
                ? `<span class="old-price">Rs ${product.price}</span>`
                : ""
            }

        </div>

        <button class="add-cart">

            Add To Cart

        </button>

    </div>

</div>

`;

        });

    }

    catch(error){

        console.error(error);

        container.innerHTML = `
            <h2 style="text-align:center;color:red;">
                Failed To Load Products
            </h2>
        `;

    }

}

loadProducts();
