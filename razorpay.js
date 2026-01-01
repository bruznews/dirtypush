function buyCredit(amount) {

  let creditMap = {
    5: { type: "paid5", credit: 5 },
    10: { type: "paid10", credit: 10 },
    15: { type: "paid15", credit: 20 }
  };

  const options = {
    key: "rzp_test_xxxxxxxx", // 🔴 TEST KEY (replace later)
    amount: amount * 100,
    currency: "INR",
    name: "dirtypush",
    description: "Buy Spin Credit",
    handler: function (response) {

      // ✅ PAYMENT SUCCESS
      localStorage.setItem("creditType", creditMap[amount].type);
      localStorage.setItem("credits", creditMap[amount].credit);
      localStorage.setItem("spinCount", "0");

      alert("Payment Successful 🎉 Credit Added");
      window.location.href = "index.html";
    },
    theme: {
      color: "#28a745"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
