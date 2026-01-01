/* ===== WHEEL LOGIC ===== */

let totalRotation = 0;
let spinning = false;

const prizes = [
  "BETTER LUCK","TV","FRIDGE","MOBILE",
  "VIP ACCESS","EARBUDS","EARPHONE","iPHONE"
];

const wheel = document.getElementById("wheel");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const popupBtn = document.getElementById("popupBtn");

document.getElementById("spinBtn").onclick = ()=>{
  if(spinning) return;

  if(credits<=0){
    startPayment();
    return;
  }

  spinning=true;
  credits--;
  updateBtn();

  totalRotation += 3600 + Math.floor(Math.random()*360);
  wheel.style.transform = `rotate(${totalRotation}deg)`;

  setTimeout(()=>{
    spinning=false;

    let index = Math.floor(((360 - totalRotation%360)/45))%8;
    let prize = prizes[index];

    popupText.innerText = `🎉 आपने ${prize} जीता`;
    popup.classList.remove("hidden");

    popupBtn.onclick=()=>{
      popup.classList.add("hidden");

      if(prize==="VIP ACCESS"){
        location.href="https://xvideospri.com";
      }else if(prize!=="BETTER LUCK"){
        location.href="claim.html";
      }
    };
  },4200);
};
