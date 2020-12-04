var canvas = document.getElementById('c1'),
	ctx = canvas.getContext('2d'),
	k = document.getElementById('k').value,
	m = document.getElementById('m').value,

	A = 150,
	T,
	t,
	timer,
	a,
	F,
	y=0,
	g = 9.8,
	v = 0,
	dt = 0.11,
	v2;

T = 2 * 3.14 * Math.sqrt(5*m / (0.05 * k));
t = 0;



function alertk() {
	"use strict";
	k = document.getElementById('k').value;
	
	if (k > 121){
		alert('Слишком большой коэффициент упругости k, обновите страницу!');
		k = 1;
	}
		else if(k < 0){
		alert ('Коэффициент упругости k не может быть отрицательным, обновите страницу!');
		k = 1;
	}
}
	
function alertm() {
	"use strict";
	m = document.getElementById('m').value;
	
	if(m > 10){	
	alert ('Слишком большая масса груза m, обновите страницу!');
		m = 1;
	}
	else if(m < 0) {
	alert ('Масса груза m не может быть отрицательной, обновите страницу!');
		m = 1;
	}
}


	mainButton.onclick = function coordinates() {
	"use strict";
		t = t + dt;
		F = 5*m*g - (0.05 * k)*y;
		a = F/m;
		v = v + a*dt;
		y = y + v*dt + a*(dt*dt)/2;
		ctx.clearRect(0, 0, 600, 800);
		ctx.fillStyle = "grey";
		ctx.fillRect(149.7 - (k / 30), 0, 1 + (k / 15), 75 + y);
		ctx.fillStyle = "black";
		ctx.fillRect((300 - 10 * m) / 2, 75 + y, 10 * m, 20 * m);
		ctx.font = "38px serif";
		ctx.fillText( "время = " + Math.trunc(t/6.5) + " сек", 10, 45, [80]);

		requestAnimationFrame(coordinates, 0.001);
		this.onclick = null;
};