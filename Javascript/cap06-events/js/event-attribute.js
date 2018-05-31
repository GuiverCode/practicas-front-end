//El uso de este enfoque no es una buena practica
function checkUserName(){
//checkea si el nombre de usuario tiene mas de 5 caracteres
	var elUserName = document.getElementById('userName');
	var elMsg = document.getElementById('feedback');

	if (elUserName.value.length < 5){
		elMsg.textContent = 'User name must be 5 characters or more';
	}
	else{
		elMsg.textContent = '';
	}
}