//delegacion de un event listener a un elemento contenedor

//borra un item de la lista
function borrarItem(e){
	var elLink = e.target;//elemento que genero el evento
	var elLi = elLink.parentNode;//elemento li
	var elUl = elLi.parentNode;//elemento ul(contenedor)
	
	//elimina el item de la lista
	elUl.removeChild(elLi);
	e.preventDefault();
}


//elemento contenedor ul
var contenedor = document.getElementsByTagName('ul')[0];
//delega el event listener al elemento contenedor
contenedor.addEventListener('click', borrarItem, false);