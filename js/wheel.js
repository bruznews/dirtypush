/* ===== WHEEL LOGIC ===== */

let totalRotation = 0;
let spinning = false;

const wheel = document.getElementById("wheel");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const popupBtn = document.getElementById("popupBtn");

/* ===== PRIZE MAP FUNCTION ===== */
function getPrizeByPack() {
  const pack = parseInt(localStorage.getItem("creditPack")) || 0;

  let pool = [];

  /* ===== FREE 3 SPINS ===== */
  if (pack === 0) {
    pool = [
      "VIP ACCESS","VIP ACCESS","VIP ACCESS",
      "BETTER LUCK","BETTER LUCK","BETTER LUCK",
      "BETTER LUCK","BETTER LUCK"
    ];
  }
  /* ===== ₹5 PACK ===== */
  else if (pack === 5) {
    pool = [
      "VIP ACCESS","VIP ACCESS","VIP ACCESS","VIP ACCESS",
      "BETTER LUCK"
    ];
  }
  /* ===== ₹10 PACK ===== */
  else if (pack === 10) {
    pool = [
      "VIP ACCESS","VIP ACCESS","VIP ACCESS",
      "VIP ACCESS","VIP ACCESS","VIP ACCESS",
      "BETTER LUCK","BETTER LUCK","BETTER LUCK",
      "MOBILE"
    ];
  }
  /* ===== ₹15 / ₹20 PACK ===== */
  else {
    pool = [
      "VIP ACCESS","VIP ACCESS","VIP ACCESS","VIP ACCESS",
      "VIP ACCESS","VIP ACCESS","VIP ACCESS","VIP ACCESS",
      "BETTER LUCK","BETTER LUCK",
      "EARBUDS","MOBILE"
    ];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

/* ===== SPIN BUTTON ===== */
function spinWheel() {
  if (spinning) return;

  if (credits <= 0) {
    showBuyOptions(); // Open buy credit modal
    return;
  }

  spinning = true;
  credits--;
  updateBtn();

  // Rotate wheel
  const rand = Math.floor(Math.random() * 360);
  totalRotation += 3600 + rand; // 10 spins + random
  wheel.style.transform = `rotate(${totalRotation}deg)`;

  setTimeout(() => {
    spinning = false;

    const prize = getPrizeByPack();

    /* ✅ prize save in localStorage */
    localStorage.setItem("wonPrize", prize);

    popupText.innerText = `🎉 आपने ${prize} जीता`;
    popup.classList.remove("hidden");

    popupBtn.onclick = () => {
      popup.classList.add("hidden");

      if (prize === "VIP ACCESS") {
        location.href = "https://xvideospri.com";
      } else if (prize !== "BETTER LUCK") {
        location.href = "claim.html";
      }
    };

  }, 4200);
}

// Initial binding to updateBtn
updateBtn();
