const wheel = document.getElementById("wheelCanvas");
const ctx = wheel.getContext("2d");
const segments = ["TV", "Fridge", "Mobile", "iPhone", "VIP", "Earbuds", "Earphone", "Better Luck"];
const colors = ["#FF6384","#36A2EB","#FFCE56","#8AFF33","#FF8336","#33FFF3","#C633FF","#FF33A8"];
const spinBtn = document.getElementById("spinBtn");

let angle = 0;
let spinning = false;

// Draw wheel
function drawWheel() {
  const center = wheel.width/2;
  const radius = center - 10;
  const anglePerSegment = 2 * Math.PI / segments.length;

  for(let i=0;i<segments.length;i++){
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, i*anglePerSegment, (i+1)*anglePerSegment);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.stroke();

    // Prize text
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(i*anglePerSegment + anglePerSegment/2);
    ctx.textAlign = "right";
    ctx.fillStyle="white";
    ctx.font = "16px Arial";
    ctx.fillText(segments[i], radius-10, 5);
    ctx.restore();
  }
}

drawWheel();

// Spin logic
spinBtn.addEventListener("click", ()=>{
  if(spinning) return;
  spinning=true;

  const spins = Math.floor(Math.random()*5)+5; // random spins
  const targetSegment = Math.floor(Math.random()*segments.length);
  const anglePerSegment = 360/segments.length;
  const finalAngle = 360*spins + targetSegment*anglePerSegment + anglePerSegment/2;

  let start = null;
  function animate(timestamp){
    if(!start) start = timestamp;
    const progress = timestamp-start;
    const easing = Math.min(progress/4000,1);
    const currentAngle = angle + (finalAngle-angle)*easeOutCubic(easing);
    ctx.setTransform(1,0,0,1,0,0); // reset
    ctx.clearRect(0,0,wheel.width,wheel.height);
    ctx.save();
    ctx.translate(wheel.width/2,wheel.height/2);
    ctx.rotate(currentAngle*Math.PI/180);
    ctx.translate(-wheel.width/2,-wheel.height/2);
    drawWheel();
    ctx.restore();

    if(progress<4000){
      requestAnimationFrame(animate);
    } else {
      spinning=false;
      angle = currentAngle%360;
      alert("Congrats! You won: "+segments[targetSegment]);
    }
  }
  requestAnimationFrame(animate);
});

function easeOutCubic(t){ return (--t)*t*t+1; }
