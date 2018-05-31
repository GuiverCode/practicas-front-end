$(function() {
    //recupera el atributo height del contenedor
    var contHeight = $('#page').height();
    $('ul').after('<p>Height: ' + contHeight + 'px</p>');
    //aplica un ancho de 50% a todos los elementos <li>
    $('li').width('50%');
    //aplica un ancho 125px al elemento <li> con id = one
    $('li#one').width(125);//no es necesario pasar en forma de string ni px
    //aplica un ancho 75% al elemento <li> con id = two
    $('li#two').width('75%');

});