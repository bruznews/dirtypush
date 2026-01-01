/* ===== CREDIT SYSTEM (LOCALSTORAGE SAFE) ===== */

// Restore saved data
let credits = parseInt(localStorage.getItem("credits")) || 3;
let spinCount = parseInt(localStorage.getItem("spinCount")) || 0;
let creditType = localStorage.getItem("creditType") || "free";
// free | paid5 | paid10 | paid15

/* ===== SET PAID CREDIT ===== */
function setPaidCredit(type, amount) {
  creditType = type;
  credits = amount;
  spinCount = 0;
  saveCredit();
  updateButton();
}

/* ===== USE CREDIT ON SPIN ===== */
function useCredit() {
  if (credits <= 0) return false;

  credits--;
  spinCount++;

  saveCredit();
  updateButton();
  return true;
}

/* ===== SAVE TO LOCAL STORAGE ===== */
function saveCredit() {
  localStorage.setItem("credits", credits);
  localStorage.setItem("spinCount", spinCount);
  localStorage.setItem("creditType", creditType);
}

/* ===== UPDATE SPIN BUTTON ===== */
function updateButton() {
  const btn = document.getElementById("spinBtn");
  if (!btn) return;

  if (credits <= 0) {
    btn.innerText = "BUY CREDIT";
    btn.classList.add("buy");
  } else {
    btn.innerText = `SPIN (${credits})`;
    btn.classList.remove("buy");
  }
}

/* ===== INITIAL LOAD ===== */
updateButton();
