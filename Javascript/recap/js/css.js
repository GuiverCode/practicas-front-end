$(function(){
    //obtiene el valor del atributo background-color del primer <li>
    var bgColor = $('li').css('background-color');
    var newContent = '<p>Color was: ' + bgColor + '</p>';
    $('ul').after(newContent);

    //object notation permite setear multiples propiedades
    $('li').css({
        'background-color':'#c5a996',
        'border':'1px solid #fff',
        'color':'#000',
        'font-family':'Georgia',
        //las dimensiones en pixeles pueden ser aumentadas o disminuidas
        'padding-left':'+=75'
    });

});