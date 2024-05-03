// Определяем кнопки
let btnStart = document.querySelector("#btnStart"); // старт
let btnStop = document.querySelector("#btnStop");   // стоп
let btnReset = document.querySelector("#btnReset"); // заново

// Определяем холст для рисования
const cnv = document.querySelector("#canvas");
// Определяем режим рисования в 2D
const ctx = cnv.getContext("2d");

// Переменная будет хранить состояние анимации (вкл/выкл)
let state; 

// Текущее положение блока по горизонтали в пикселях
let tranX = 0; 

// Ширина блока
let blockWidth = 50; 

// Скорость движения блока
let blockMove = 7;

// Заливка блока черного цвета
ctx.fillStyle = "black"; 

// Залить прямоугольник (startX, startY, ширина, высота)
ctx.fillRect(tranX, 0,  blockWidth, cnv.height); //создается новый блок в начале шкалы с указанной шириной и высотой

// Функция анимации
function anima(){
	// Если блок дошел до края шкалы
	if(tranX >= canvas.width - blockWidth){
		// Выключить анимацию
		cancelAnimationFrame(state);
	}
	// Иначе
	else {	
		// Проиграть анимациб
		state = requestAnimationFrame(anima);
		// Очистить предыдущее положение
		ctx.clearRect((tranX - blockMove)-1, 0, blockWidth+1, cnv.height);
		// Нарисовать блок заново
		ctx.fillRect(tranX, 0, blockWidth, cnv.height);
		// Сместить блок на значение его скорости
		tranX += blockMove;
	}
	
}

// Функция кнопки старт
btnStart.addEventListener("click", function(e){
	// Отключение действий по умолчанию (чтобы страница не перезагружалась)
	e.preventDefault();
	// Запустить анимацию
	state = requestAnimationFrame(anima); //выполнить функцию анима
})

// Функция кнопки стоп
btnStop.addEventListener("click", function(){
	cancelAnimationFrame(state); // остановить анимацию
})

// Фунцкия кнопки ресет
btnReset.addEventListener("click", function(){
	// Очистить пердыдущее положение
	ctx.clearRect(tranX - blockMove, 0, blockWidth, cnv.height);
	// Вернуть блок в начало шкалы
	tranX = 0;
	// Нарисовать блок
	ctx.fillRect(tranX, 0,  blockWidth, cnv.height);
})