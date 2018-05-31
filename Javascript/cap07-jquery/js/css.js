$(function() {
    //el metodo css recupera la regla css del primer elemento que machea la seleccion
    var backgroundColor = $('li').css('background-color');
    //agrega un elemento justo antes del tag </ul>
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('li').css(
        {'background-color':'#c5a996', 
        'border':'1px solid white',
        'color':'#000', 
        'font-family':'georgia', 
        'padding-left':'+=75'});
});