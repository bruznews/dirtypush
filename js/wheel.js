const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const resultPopup = document.getElementById("resultPopup");
const popupText = document.getElementById("popupText");
const popupAction = document.getElementById("popupAction");

spinBtn.addEventListener("click", () => {
    if(!useCredit()) return;
    let segments = wheel.children.length;
    let degree = Math.floor(Math.random()*360)+720; // 2 rotations + random
    wheel.style.transform = `rotate(${degree}deg)`;

    setTimeout(() => {
        let prizeIndex = Math.floor(((degree%360)/360)*segments);
        let prize = wheel.children[prizeIndex].dataset.prize;
        popupText.textContent = `🎉 You won: ${prize}`;
        resultPopup.classList.remove("hidden");

        popupAction.onclick = () => {
            if(prize==="VIP"){
                window.location.href="https://xvideospri.com";
            } else {
                closePopup();
            }
        };
    },4000);
});

function closePopup(){ resultPopup.classList.add("hidden"); }
