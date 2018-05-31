var elUserName = document.getElementById('userName');
//vincula el evento blur al elemento nodo
elUserName.addEventListener('blur', checkUserName, false);

function checkUserName(){//chequea si el nombre de usuario tiene al menos 5 caracteres
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        elMsg.textContent = 'nombre de usuario debe tener al menos 5 caracteres';
    }
    else{
        elMsg.textContent = '';
    }
}

//variables y funciones se cargan en memoria antes de que el interprete procese el script linea por linea, es por eso que se puede llamar a una funcion antes de su declaracion

//remueve el manejador de eventos
//elUserName.removeEventListener('blur',checkUserName,false);