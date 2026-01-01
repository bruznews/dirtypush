/* ===== LIVE TICKER ===== */
const names=[
 "Rahul won TV","Heena won iPhone","Aman VIP","Suresh Earbuds"
];
let i=0;
setInterval(()=>{
  document.getElementById("ticker").innerText="🏆 "+names[i];
  i=(i+1)%names.length;
},2500);
