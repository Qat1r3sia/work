let battery = document.querySelector('#battery1')
let size = 0;
let lim = 290;

function batteryAnimate(){
	let perc = Math.round(size/lim*100);
	if (size < 0) {
		size = 290;
	}
	battery.querySelector("#bt-section1").style.width =  size + 'px';
	size -= 1;
	document.querySelector("#percent1").innerText = perc + "%";	
}

let time = setInterval(batteryAnimate,20);







