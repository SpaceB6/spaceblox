import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = window.FIREBASE_CONFIG; // Make sure firebase-config.js is included
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
        alert("Signup successful! Redirecting...");
        window.location.href = "login.html"; // Redirect to login page
    } catch (error) {
        errorMessage.textContent = error.message; // Show error message
    }
});
