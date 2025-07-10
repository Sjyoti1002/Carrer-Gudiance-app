import { auth, db } from "firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/analytics";
import { setDoc, doc } from "firebase/analytics";

document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();
 const email = document.getElementById("emailInput").value;
 const password = document.getElementById("passwordInput").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "students", userCredential.user.uid), {
      email: email,
      createdAt: new Date().toISOString()
    });
    console.log(`[Signup] User created: ${email}`);
    window.location.href = "./login.htm";
  } catch (error) {
    console.error(`[Signup] Error: ${error.message}`);
  }
});