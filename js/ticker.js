/* ===== LIVE NAME TICKER ===== */

// 100+ demo names (tum replace कर सकते हो)
const names = [
  "Rohit – TV जीता",
  "Amit – VIP Access",
  "Suresh – Earbuds",
  "Rahul – Better Luck",
  "Pooja – Mobile",
  "Neha – VIP Access",
  "Ankit – Earphone",
  "Vikas – TV",
  "Sunita – Fridge",
  "Manoj – VIP Access",
  "Ravi – Earbuds",
  "Kiran – Mobile",
  "Deepak – VIP Access",
  "Priya – Better Luck",
  "Nitin – Earphone",
  "Sachin – TV",
  "Komal – VIP Access",
  "Ajay – Mobile",
  "Ramesh – Earbuds",
  "Seema – VIP Access"
];

// Random shuffle
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Build ticker text
function buildTicker() {
  const ticker = document.getElementById("tickerText");
  if (!ticker) return;

  const mixed = shuffle([...names]);
  ticker.innerText = mixed.join("   |   ");
}

// Initial load
buildTicker();

// Refresh ticker every 30 seconds
setInterval(buildTicker, 30000);
