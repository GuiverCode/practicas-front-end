//El evento keypress se enciende cuando el usuario presiona cualquier tecla 

function charCount(e, maxLength){
    var text = e.target.value; //texto actual
    var currentChar = String.fromCharCode(e.keyCode).toLowerCase(); //caracter actual
    var currentLength = text.length; //longitud del texto actual

    var elCount = document.getElementById('charactersLeft');
    var elLastChar = document.getElementById('lastKey');

    elCount.textContent = (maxLength - currentLength);
    elLastChar.textContent = 'Last key: ' + currentChar;
}

var el = document.getElementById('message');
el.addEventListener('keyup', function(e){ charCount(e,180);} , false);