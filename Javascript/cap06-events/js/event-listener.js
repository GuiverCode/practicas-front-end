function checkUserName(){
	var elMsg = document.getElementById('feedback');

	if (this.value.length < 5){
		elMsg.textContent = 'Nombre de usuario debe tener 5 caracteres o mas';
	}
	else{
		elMsg.textContent = '';
	}
}

var elUserName = document.getElementById('userName');
elUserName.addEventListener('blur',checkUserName,false);