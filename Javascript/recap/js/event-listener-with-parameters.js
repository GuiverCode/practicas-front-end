/* para pasar una funcion con parametro a un event listener, se debe
envolver la funcion dentro de una funcion anonima, (para evitar que los parentesis ejecuten inmediatamente la funcion)*/
var elMsg = document.getElementById('feedback');
var elUserName = document.getElementById('userName');
function checkUserName(minLength){
    //console.log(this.value.length);
    //aqui no se puede usar this
    if (elUserName.value.length < minLength) {
        elMsg.textContent = 'Nombre de usuario debe tener al menos ' + minLength + ' caracteres.';
    }
    else{
        elMsg.textContent = '';
    }
}


//pasa la funcion con parametro a un event listener.
elUserName.addEventListener('blur',function(){checkUserName(7);},false);