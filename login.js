import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = window.FIREBASE_CONFIG; // Load config from firebase-config.js
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect logged-in users
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "index.html"; // Change to your main page
    }
});

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to main page
    } catch (error) {
        errorMessage.textContent = error.message; // Show error message
    }
});
