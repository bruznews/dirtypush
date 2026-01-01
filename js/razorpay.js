/* ===== CLAIM + RAZORPAY ===== */

const prize = localStorage.getItem("wonPrize") || "Prize";

document.getElementById("prizeTitle").innerText =
  `बधाई हो! आपने ${prize} जीता 🎁`;

document.getElementById("claimForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !address || !mobile || !email) {
    alert("सभी जानकारी भरें");
    return;
  }

  // Save user info (later firebase)
  localStorage.setItem("claimData", JSON.stringify({
    name, address, mobile, email, prize
  }));

  startPayment();
});

function startPayment() {
  const options = {
    key: "RAZORPAY_KEY_ID", // 🔴 अपनी Razorpay Key डालो
    amount: 500, // ₹5 = 500 paise
    currency: "INR",
    name: "DirtyPush",
    description: "Prize Claim Fee",
    handler: function (response) {
      localStorage.setItem("paymentId", response.razorpay_payment_id);
      window.location.href = "result.html";
    },
    theme: {
      color: "#00c853"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
