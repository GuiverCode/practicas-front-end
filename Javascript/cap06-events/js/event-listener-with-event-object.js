//event object permite crear funciones genericas

function checkLength(e, length){
	//evalua si existe el event object
	if (!e){
		e = window.event;
	}

	//obtiene el elemento en el que ocurrio el evento
	el = e.target || e.srcElement;
	//obtiene el elemento que contendra el msg de aviso
	elMsg = el.nextSibling;//el elemento vecino o hermano

	//evalua el tamanio del texto del elemento
	if (el.value.length < length){
		elMsg.innerHTML = 'You must be enter 5 characters or more';
	}
	else{
		elMsg.innerHTML = '';
	}
}

var elUserName = document.getElementById('userName');

//evalua si el navegador soporta el metodo addEventListener()
if (elUserName.addEventListener){
	elUserName.addEventListener('blur',function(e){checkLength(e,5);}, false);
}
else{
	elUserName.attachEvent('onblur', function(e){checkLength(e,5);});
}