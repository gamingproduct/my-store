import { auth } from "./firebase.js";
console.log("login.js loaded");
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password
togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
    }

});

// Login Button
loginBtn.addEventListener("click", login);

async function login() {

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;
    const remember = document.getElementById("remember").checked;
    const error = document.getElementById("error");
    const loader = document.getElementById("loader");

    error.textContent = "";

    loader.style.display = "block";
    loginBtn.disabled = true;
    loginBtn.textContent = "Signing In...";

    try {

        await setPersistence(
            auth,
            remember ? browserLocalPersistence : browserSessionPersistence
        );

        await signInWithEmailAndPassword(auth, email, password);

        window.location.href = "admin.html";

    } catch (err) {

        loader.style.display = "none";
        loginBtn.disabled = false;
        loginBtn.textContent = "Login";

        error.textContent = err.message;

    }

}
