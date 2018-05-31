//chequea la longitud de texto de cualquier input
function checkLength(e, minLength){
    //obtiene el elemento que genero el evento
    var el = e.target;
    console.log(el.type);//para saber el tipo de input
    var elMsg = el.nextSibling;
    if (el.value.length < minLength) {
        elMsg.textContent = 'Debe ingresar al menos ' + minLength + ' caracteres'; 
    } else {
        elMsg.textContent = '';
    }
}

//agrega los manejadores de eventos a los inputs
var elUserName = document.getElementById('userName');
elUserName.addEventListener('blur',function(e){checkLength(e,5);}, false);

var elPassword = document.getElementById('pass');
elPassword.addEventListener('blur',function(e){checkLength(e,7);}, false);
