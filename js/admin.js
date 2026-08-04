import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "admin-login.html";

    }

});
import { db } from "./firebase.js";

import {
addDoc,
collection
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", saveProduct);

async function saveProduct(){

const title=document.getElementById("title").value;
const price=document.getElementById("price").value;
const discount=document.getElementById("discount").value;
const category=document.getElementById("category").value;
const brand=document.getElementById("brand").value;
const description=document.getElementById("description").value;
const focus=document.getElementById("focus").value;
const variation=document.getElementById("variation").value;
const metaTitle=document.getElementById("metaTitle").value;
const metaDescription=document.getElementById("metaDescription").value;

try{

await addDoc(collection(db,"products"),{

title,
price:Number(price),
discount:Number(discount),
category,
brand,
description,

seo:{
focus,
variation,
metaTitle,
metaDescription
},

createdAt:new Date()

});

alert("✅ Product Saved Successfully");

}catch(error){

console.error(error);

alert(error.message);

}

}
import { signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {

    const ok = confirm("Are you sure you want to logout?");

    if (!ok) return;

    await signOut(auth);

    window.location.href = "admin-login.html";

});
