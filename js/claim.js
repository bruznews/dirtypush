/* ================= CLAIM FORM FIREBASE SAVE ================= */

import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const form = document.getElementById("claimForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const claimData = {
    name: document.getElementById("name").value.trim(),
    address: document.getElementById("address").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    email: document.getElementById("email").value.trim(),
    prize: localStorage.getItem("wonPrize") || "UNKNOWN",
    createdAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "claims"), claimData);
    alert("✅ Data save ho gaya");

    // Razorpay start yahan se call hoga
    startPayment();

  } catch (err) {
    console.error(err);
    alert("❌ Data save nahi hua");
  }
});
