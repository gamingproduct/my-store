async function login() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
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

        loader.style.display = "none";

        window.location.href = "admin.html";

    } catch (err) {

        loader.style.display = "none";
        loginBtn.disabled = false;
        loginBtn.textContent = "Login";

        error.textContent = err.message;

    }

}
