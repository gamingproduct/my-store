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
