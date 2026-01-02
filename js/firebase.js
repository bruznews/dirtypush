/* ================= FIREBASE INIT ================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

/* 🔥 YOUR REAL CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyDG-_rV1JGQ0R0jocI0KJkpkCS2REYqu0Y",
  authDomain: "dirtypush-66415.firebaseapp.com",
  projectId: "dirtypush-66415",
  storageBucket: "dirtypush-66415.firebasestorage.app",
  messagingSenderId: "50715558094",
  appId: "1:50715558094:web:b898fa829656f5b187d09f"
};

/* INIT */
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
