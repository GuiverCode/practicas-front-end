//crea el elemento que contendra la nota
var elNota = document.createElement('div');
elNota.id = 'note';

//crea la nota
var msg = '<div class=\"header\"><a id=\"close\" href=\"#\">Close x</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are beging updated between 3 and 4 a.m. During this time, there may be mirror discruptions to service.</div>';

//agrega la nota a su elemento contenedor
elNota.innerHTML = msg;

//agrega la nota al DOM
document.body.appendChild(elNota);

//agrega un event listener al evento click para cerrar la nota

function cerrarNota(){
	//document.body.removeChild(elNota);
	document.body.removeChild(this.parentNode.parentNode);
	console.log(elClose);
}

var elClose = document.getElementById('close');
//agrega el event listener al elemento close
elClose.addEventListener('click',cerrarNota,false);