
// определям переменную для батарекйки
let battery = document.querySelector('#battery1')
// переменная с указанием текущего размера батарейки
let size = 0;
// переменная максимального размера батарейки
let lim = 290;

// функция анимации батарейки
function batteryAnimate(){
	// вычисляем процент зарядки
	let perc = Math.round(size/lim*100);
	// если заряд меньше 0
	if (size < 0) {
		// вернуться к максимальному
		size = 290;
	}
	// применение размера для полоски заряда
	battery.querySelector("#bt-section1").style.width =  size + 'px';
	// снижение заряда на 1 единицу
	size -= 1;
	// применение процента к индикатору
	document.querySelector("#percent1").innerText = perc + "%";	
}

// запуск анимации
let time = setInterval(batteryAnimate,20);







