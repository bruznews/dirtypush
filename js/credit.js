let credits = parseInt(localStorage.getItem("credits")) || 3;

function useCredit(){
    if(credits<=0){ alert("Buy more credits!"); return false; }
    credits--;
    localStorage.setItem("credits", credits);
    updateButton();
    return true;
}

function updateButton(){ spinBtn.textContent = credits>0 ? `SPIN (${credits})` : "BUY CREDIT"; }

updateButton();
