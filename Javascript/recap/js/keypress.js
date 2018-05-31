/*chequea la cantidad de caracteres de un textarea
El event object tiene una propiedad(keyCode) que retorna
el codigo ascii del ultimo caracter
el metodo String.fromCharCode(string) convierte codigo ascii
a string*/

function contarCaracteres(e){
    //cuenta la cantidad de caracteres que posee el textarea
    
    var contador = this.value.length;//cant caracteres ingresados
    var cantidad = 180 - contador;//cant caracteres disponibles
    var lastChar = e.keyCode; //ultimo caracter (codigo ASCII) 
    
    //muestra en pantalla la cantidad de caracteres disponibles
    var elContador = document.getElementById('charactersLeft');
    elContador.textContent = cantidad + ' characteres';
    //muestra en pantalla el ultimo caracter ingresado
    var elLast = document.getElementById('lastKey');
    elLast.textContent = 'Ultimo caracter ingresado: ' + String.fromCharCode(lastChar).toLowerCase();


    
}


var elTextArea = document.getElementById('message');
//el evento input se enciende cuando el valor de un input o textarea cambia
//elTextArea.addEventListener('input',contarCaracteres,false);
//el evento keyup se enciende cuando se suelta una tecla presionada
elTextArea.addEventListener('keyup',contarCaracteres,false);