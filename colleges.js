import { db } from "firebase-config.js";
import { collection, getDocs } from "firebase/analytics";

const collegeList = document.getElementById("collegeList");

async function loadColleges() {
  const location = localStorage.getItem("location");
  const career = localStorage.getItem("career");

  console.log("Stored location:", location);
  console.log("Stored career:", career);

  const querySnapshot = await getDocs(collection(db, "colleges"));

  let matched = 0;

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    console.log("College data from Firestore:", data);
    console.log("College from DB:", data.location, data.career);

    // Safe comparison (case-insensitive + trimmed)
    if (
      data.location?.trim().toLowerCase() === location?.trim().toLowerCase() &&
      data.career?.trim().toLowerCase() === career?.trim().toLowerCase()
    ) {
      matched++;
const item = document.createElement("div");
      item.innerHTML = `
        <h3>${data.collegeName}</h3>
        <p>Location: ${data.location}</p>
        <p>Career: ${data.career}</p>
        <button onclick="selectCollege('${doc.id}')">Select</button>
      `;
      collegeList.appendChild(item);
    }
  });

  if (matched === 0) {
    collegeList.innerHTML = "<p>No colleges found for your selected location and career.</p>";
  }
}

window.selectCollege = (id) => {
  localStorage.setItem("selectedCollege", id);
  window.location.href = "register.html";
};

loadColleges();