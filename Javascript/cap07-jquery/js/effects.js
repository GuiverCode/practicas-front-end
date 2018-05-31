$(function() {
    $('h2').hide().slideDown();
    var $li = $('li');
    $li.each(function(index) {
        /*Como todos se ejecutan al mismo tiempo
        es importante notar el argumento que se le pasa al metodo delay, el cual evita ese comportamiento haciendo que cada lista se anime uno tras otro(no todos al mismo tiempo)*/
        $(this).hide().delay(index*700).fadeIn(700);
    })

    $li.on('click',function(){
        $(this).fadeOut(700);
    });
});