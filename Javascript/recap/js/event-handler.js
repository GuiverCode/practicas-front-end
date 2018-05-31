
function checkUserName(){
    var elMsg = document.getElementById('feedback');

    //this hace referencia al element node(objeto) que genero el evento
    //en este caso es el objeto cuyo id es userName
    if(this.value.length < 5){
        elMsg.textContent = 'El nombre de usuario debe tener al menos 5 caracteres';
    }
    else{
        elMsg.textContent = ''; //quita el msg de error    
    }
}
//elemento nodo objetivo
var elUserName = document.getElementById('userName');
//agrega el manejador de eventos onblur
elUserName.onblur = checkUserName;
/*Obs: solo se pasa la referencia(el nombre) de la funcion,
no se ponen los parentisis, debido que esto generaria que
la funcion se ejecute inmediatamente y no cuando ocurra el evento.
Si la funcion requiere argumentos, se debe usar una funcion anonima.
*/

