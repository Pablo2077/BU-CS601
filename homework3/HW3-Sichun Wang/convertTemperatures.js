var cEl = document.getElementById("cel");
var fEl = document.getElementById("fahResult");
var kEl = document.getElementById("kelResult")

function convertC() {
	if(cEl.value>1000||cEl.value<-1000){
		alert('Invalid input! Please input a [-1000, 1000] number!');
        return;
	}
    var fahrenheit = cEl.value * 9 / 5 + 32;
	var kelvin = (cEl.value)*1 + 273.15; 
    fEl.value = fahrenheit;
	kEl.value = kelvin;
	console.log(cEl.value);
	console.log(fEl.value);
	console.log(kEl.value)
}
function convertF() {
	if(fEl.value>1000||fEl.value<-1000){
		alert('Invalid input! Please input a [-1000, 1000] number!');
        return;
	}
	var celsius  = (fEl.value - 32) * 5 / 9;
	var kelvin = ((fEl.value)*1 + 459.67) * 5 / 9;
    cEl.value = celsius;
	kEl.value = kelvin;
	console.log(fEl.value);
	console.log(cEl.value);
	console.log(kEl.value);
}
function convertK() {
	if(kEl.value>1000||kEl.value<-1000){
		alert('Invalid input! Please input a [-1000, 1000] number!');
        return;
	}
	var celsius = kEl.value - 273.15;
	var fahrenheit = 9/5 * (kEl.value - 273) + 32;
	cEl.value = celsius;
	fEl.value = fahrenheit;
	console.log(kEl.value);
	console.log(cEl.value);
	console.log(fEl.value);
}
