let btnStart = document.querySelector("#btnStart"); // старт
let btnStop = document.querySelector("#btnStop");   // стоп
let btnReset = document.querySelector("#btnReset"); // заново

const cnv = document.querySelector("#canvas");
const ctx = cnv.getContext("2d");

let state; 

let tranX = 0; 

let blockWidth = 50; 

let blockMove = 7;

ctx.fillStyle = "black"; 

ctx.fillRect(tranX, 0,  blockWidth, cnv.height); 

function anima(){
	if(tranX >= canvas.width - blockWidth){
		cancelAnimationFrame(state);
	}
	else {	
		state = requestAnimationFrame(anima);
		ctx.clearRect((tranX - blockMove)-1, 0, blockWidth+1, cnv.height);
		ctx.fillRect(tranX, 0, blockWidth, cnv.height);
		tranX += blockMove;
	}
	
}

btnStart.addEventListener("click", function(e){
	e.preventDefault();
	state = requestAnimationFrame(anima); 
})

btnStop.addEventListener("click", function(){
	cancelAnimationFrame(state); 
})

btnReset.addEventListener("click", function(){
	ctx.clearRect(tranX - blockMove, 0, blockWidth, cnv.height);
	tranX = 0;
	ctx.fillRect(tranX, 0,  blockWidth, cnv.height);
})