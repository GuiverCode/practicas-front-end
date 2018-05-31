var elUserName = document.getElementById('userName');
var elMsg = document.getElementById('feedback');

function checkUserName(minLength){
	if (elUserName.value.length < minLength){
		//IE8 no soporta textContent
		elMsg.innerHTML = 'Nombre de usuario debe tener al menos ' + minLength + ' caracteres';
	}
	else{
		elMsg.innerHTML = '';
	}
}

//verifica si el navegador soporta el metodo addEventListener()
if (elUserName.addEventListener){
	elUserName.addEventListener('blur', function(){checkUserName(5);},false);
}
else{
	elUserName.attachEvent('onblur', function(){checkUserName(5); });
}