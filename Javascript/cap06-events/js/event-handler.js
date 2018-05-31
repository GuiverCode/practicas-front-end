//este enfoque es bueno, pero solo permite adjuntar 1 sola funcion para cada evento

//paso1: Definir la funcion
function checkUserName(){
	var elMsg = document.getElementById('feedback');

	//cheque si el nombre del usuario tiene menos de 5 caracteres
	if (this.value.length < 5) {
	//Obs: this hace referencia al elemento que encendio el evento.
		elMsg.textContent = 'Nombre de usurio debe tener 5 caracteres o mas';
	} 
	else{
		elMsg.textContent = '';
	}

}
//paso 2: obtener el elemento nodo
var elUserName = document.getElementById('userName');

//paso 3: asignar la funcion que lanzara el evento
elUserName.onblur = checkUserName;

