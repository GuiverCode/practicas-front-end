$(function(){
    $('li').on('mouseover click', function(){
        var id = this.id;
        //remueve todos los <span> de todos los <li>
        $('li').children('span').remove();
        //agrega contenido al elmento
        $(this).append(' <span class"priority">' + id +'</span>');
    });

    //remueve un elemento cuando el usuario mueve el mouse fuera del elemento
    $('li').on('mouseout',function() {
        $(this).children('span').remove();
    });

});