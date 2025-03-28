import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Display error on the HTML page
const errorMessage = document.getElementById("error-message");

// Firebase config (ensure it's properly loaded)
try {
    const firebaseConfig = window.FIREBASE_CONFIG; // Ensure this is available

    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Check if the user is already logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Redirect user to home if already logged in
            window.location.href = "home.html";
        }
    });

    // Handle login form submission
    document.getElementById("login-form").addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Try logging in with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);

            // On success, redirect to home page
            window.location.href = "home.html"; // Redirect to home
        } catch (error) {
            // Show error message if login fails
            errorMessage.textContent = "Login Error: " + error.message;
        }
    });

} catch (error) {
    // If Firebase initialization fails, display the error on the page
    errorMessage.textContent = "Firebase initialization failed: " + error.message;
}
