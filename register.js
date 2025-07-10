import { db } from "firebase-config.js";
import { collection, addDoc } from "firebase/analytics";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("regForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    // Make sure an element with id="fullName" exists in your HTML
    const fullNameInput = document.getElementById("fullName");
    const name = fullNameInput.value;
    // Get reference to the cgpa input element
    const cgpaInput = document.getElementById("cgpaInput");
    const cgpa = parseFloat(cgpaInput.value);
    const collegeId = localStorage.getItem("selectedCollege");

    await addDoc(collection(db, "registrations"), {
      name,
      cgpa,
      collegeId,
      createdAt: new Date().toISOString()
    });

    console.log(`[Register] Registered for college ID: ${collegeId}`);
    window.location.href = "aptitude.html";
  });
});