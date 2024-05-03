const cnv = document.querySelector("#canv");
const ctx = cnv.getContext("2d");

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(100,100,90,0,Math.PI*2,true);
ctx.moveTo(160,100);
ctx.arc(100,100,60,0,Math.PI,false);
ctx.moveTo(140, 80);
ctx.arc(130,80,10,0,Math.PI*2,true);
ctx.moveTo(80,80);
ctx.arc(70,80,10,0,Math.PI*2,true);
ctx.stroke();