import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = window.FIREBASE_CONFIG; // Load config from firebase-config.js
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("username").textContent = user.displayName || user.email; // Set username
    } else {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
});
