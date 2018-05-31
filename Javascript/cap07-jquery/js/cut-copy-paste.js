/* el metodo clone() crea una copia del elemento matcheado(incluyendo los descendientes) pero no incule los manejadores de eventos. Para incluir los manejadores de eventos, se debe pasar "true" como argumento*/
$(document).ready(function() {
    var elP = $('ul').next(); //selecciona el elemento <p>
    $('h2').after(elP.clone());//clona
    elP.remove();//elimina el original

    var elLi1 = $('li').eq(0); //selecciona el 1er li
    elLi1.on('click', function(){alert('hola');});
    $('ul').append(elLi1.clone(true));//clona y pasa el manejador de eventos
    elLi1.detach();//elimina el original
});