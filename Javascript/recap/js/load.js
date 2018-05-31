//los eventos de UI deben ser vinculados al window object

function setup(){
	var elInput = document.getElementById('userName');
	elInput.focus();
}

window.addEventListener('load',setup, false);

/*load es un evento de UI.
 Se enciende cuando la pagina y todo su contenido
(imagenes, scripts, etc.) terminan de cargarse.*/