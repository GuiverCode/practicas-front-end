//obtiene el elemento en el que se genero el evento
function getTarget(e){
	if (!e){
		e = window.event;
	}
	return e.target || e.srcElement;
}

//elimina el elemento clickeado
function itemDone(e){
	var el, elRemove, elParent;

	el = getTarget(e); //elemento el cual se hizo click (a)
	elRemove = el.parentNode;//elemento padre (li)
	elParent = elRemove.parentNode; //elemento abuelo(ul)

	//elimina el elemento nodo li (con sus hijos)
	elParent.removeChild(elRemove);

	//evita que el comportamiento del link
	if (e.preventDefault){
		e.preventDefault();
	}
	else{
		e.returnValue = false;
	}
}

//agrega el manejador de eventos al elemento abuelo ul
var el = document.getElementById('shoppingList');
if (el.addEventListener){
	el.addEventListener('click', function(e){ itemDone(e); },false);
}
else{
	el.attachEvent('onclick',function(e){ itemDone(e); });
}