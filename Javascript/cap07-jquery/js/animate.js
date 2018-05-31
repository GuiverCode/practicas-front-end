/*pag 335
Los atributos css van como 1er argumento en notacion literal de objtos y camel case
el 2do argumento corresponde al tiempo(en milisegundos) de duracion de la animacion
el 3er argumento corresponde a la funcion que sera llamada cuando termine la animacion*/
$('li').on('click', function() {
    //$(this) sostiene el elemento el cual el usuario hizo click
    $(this).animate({opacity: 0.0, paddingLeft: '+=80'}, 500, function() {
        this.remove();
    });
});