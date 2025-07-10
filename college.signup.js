import { db } from "firebase-config.js";
import { addDoc, collection } from "firebase/analytics";

document.getElementById("collegeForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  // Get the input elements by their IDs
  const collegeNameInput = document.getElementById("collegeName");
  const locationInput = document.getElementById("location");

  // Get the values from the input elements
  const collegeName = collegeNameInput.value;
  const location = locationInput.value;

  try {
    await addDoc(collection(db, "colleges"), {
      collegeName,
      location,
      createdAt: new Date().toISOString()
    });
    console.log(`[College] College registered: ${collegeName}`);
    alert("College Registered Successfully");
  } catch (error) {
    console.error(`[College] Error: ${error.message}`);
  }
}); 