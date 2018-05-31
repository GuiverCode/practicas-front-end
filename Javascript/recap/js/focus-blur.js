//focus & blur son eventos html

function checkUserName(){
	//obtiene el elemento que contendra el mensaje
	var elMsg = document.getElementById('feedback');

	if(this.value.length < 5){
		elMsg.className = 'warning';//cambia el atributo class
		elMsg.textContent = 'Ha ingresado menos de 5 caracteres';
	}
	else{//limpia
		elMsg.textContent = '';
	}
}

function tipUserName(){
	//obtiene el elemento que contendra el mensaje
	var elMsg = document.getElementById('feedback');
	elMsg.className = 'tip'; //cambia el atributo class
	elMsg.textContent = 'Nombre de usuario debe tener al menos 5 caracteres'	
}

var el = document.getElementById('userName');
el.addEventListener('blur',checkUserName,false);
el.addEventListener('focus',tipUserName,false);