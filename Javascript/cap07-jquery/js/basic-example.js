/* $() es el alias de la funcion jquery(), el cual crea un Jquery object */
//seleccciona todos los header h1 ... h6
$(':header').addClass('headline');
//selecciona los 3 primeros items de una lista
$('li:lt(3)').hide().fadeIn(1000); 
//agrega un manejador de eventos a todos los elementos li
$('li').on('click', function() {
    $(this).remove();
})

