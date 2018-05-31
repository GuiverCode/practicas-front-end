$(function() {
    $('li').on('click',function(e) {
        var date = new Date();
        var type = e.type; //tipo de evento que se disparo
       
        //remueve todos los span dentro de todos los li
        $('li').children('span').remove()//$('li span').remove();
        
        //agrega la fecha y el tipo de evento
        $(this).append(' <span class="date">' + date.toDateString() + ' ' + type +'</span>');
    });

});