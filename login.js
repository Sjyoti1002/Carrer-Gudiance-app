import { auth } from "firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/analytics";
import { logAction } from "log.js";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        logAction("Login successful", email);
        window.location.href = "career.html";
      })
      .catch((error) => {
        logAction("Login failed", error.message);
        alert("Login failed: " + error.message);
      });
  });
});