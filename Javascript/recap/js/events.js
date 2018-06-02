$(function(){
    $('li').on('mouseover',function(){
        //recupera el atributo id del elemento
        var id = this.id;
        //agreg el valor del atributo id al elemento
        $(this).append('<span class="priority"> '+id+'</span>');
    });
    $('li').on('mouseout',function(){
        //$(this.lastChild).remove();
        $(this).children('span').remove();
    });
});