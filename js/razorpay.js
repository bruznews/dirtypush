/* ===== RAZORPAY ===== */
function startPayment(){
  var options={
    key:"rzp_test_xxxxxxxx",
    amount:500,
    currency:"INR",
    name:"DIRTYPUSH",
    handler:function(){
      credits+=5;
      updateBtn();
      alert("Payment Success, Credits Added");
    }
  };
  new Razorpay(options).open();
}
