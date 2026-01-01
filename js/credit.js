/* ===== CREDIT SYSTEM ===== */
let credits = 3;

function updateBtn(){
  const btn = document.getElementById("spinBtn");
  if(credits<=0){
    btn.innerText="BUY CREDIT";
    btn.style.background="red";
  }else{
    btn.innerText=`SPIN (${credits})`;
    btn.style.background="#28a745";
  }
}
updateBtn();
