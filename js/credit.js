/* ===== CREDIT SYSTEM ===== */
let credits = 3; // Starting credits

/* ===== UPDATE SPIN BUTTON ===== */
function updateBtn() {
  const btn = document.getElementById("spinBtn");
  if (!btn) return;

  if (credits <= 0) {
    btn.innerText = "BUY CREDIT";
    btn.style.background = "red";
    btn.onclick = showBuyOptions; // Show buy options when no credit
  } else {
    btn.innerText = `SPIN (${credits})`;
    btn.style.background = "#28a745";
    btn.onclick = spinWheel; // Normal spin function
  }
}
updateBtn();

/* ===== SPIN FUNCTION PLACEHOLDER ===== */
function spinWheel() {
  // This will be defined in wheel.js
  console.log("Spin button clicked!");
}

/* ===== BUY CREDIT OPTIONS ===== */
function showBuyOptions() {
  // Create modal/pop-up for credit options
  const overlay = document.createElement("div");
  overlay.id = "buyOverlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.7)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "999";
  overlay.style.flexDirection = "column";

  const box = document.createElement("div");
  box.style.background = "#fff";
  box.style.padding = "20px";
  box.style.borderRadius = "12px";
  box.style.textAlign = "center";

  const title = document.createElement("h3");
  title.innerText = "Buy Credits";
  title.style.marginBottom = "15px";
  box.appendChild(title);

  // Buttons for credit packs
  const packs = [
    {label:"₹5 → 5 Credits", amount:5, add:5},
    {label:"₹10 → 10 Credits", amount:10, add:10},
    {label:"₹15 → 15 Credits", amount:15, add:20} // as per your spec
  ];

  packs.forEach(pack => {
    const btn = document.createElement("button");
    btn.innerText = pack.label;
    btn.style.margin = "6px";
    btn.style.padding = "10px 18px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.background = "#28a745";
    btn.style.color = "#fff";
    btn.style.cursor = "pointer";
    btn.onclick = () => {
      document.body.removeChild(overlay);
      startPayment(pack.amount, pack.add);
    };
    box.appendChild(btn);
  });

  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

/* ===== PAYMENT FUNCTION (RAZORPAY) ===== */
function startPayment(amount, creditAdd) {
  var options = {
    key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
    amount: amount * 100, // Amount in paise
    currency: "INR",
    name: "DIRTYPUSH",
    description: `${amount} Credit Purchase`,
    handler: function (response){
      // Payment success, add credits
      credits += creditAdd;
      updateBtn();
      alert(`Payment Successful! ${creditAdd} Credits added.`);
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {color: "#28a745"}
  };
  var rzp = new Razorpay(options);
  rzp.open();
}
