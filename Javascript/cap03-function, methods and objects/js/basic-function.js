var msg = 'Sign up to recieve our newsletter for 10% off!';

/* El interprete de js mira primero las variables y las funciones, antes de ir linea por linea cada seccion del script.
Gracias a eso una "funcion declarada" puede ser llamada antes de la declaracion. */
//Esto no es posible con "funciones expresiones"
updateMessage();

//bloque de declaracion de funcion 
function updateMessage(){
    var elMessage = document.getElementById('message');
    elMessage.textContent = msg;
}



