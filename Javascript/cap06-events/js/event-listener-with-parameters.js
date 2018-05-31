var elMsg = document.getElementById('feedback');
var elUserName = document.getElementById('userName');

function checkUserName(minLength){
	if (elUserName.value.length < minLength){
		elMsg.textContent = 'User name must be 5 characters or more';
	}
	else{
		elMsg.textContent = '';
	}
}

//la funcion con parametros debe ir envuelta dentro de una funcion anonima
elUserName.addEventListener('blur',function() { checkUserName(5); }, false);