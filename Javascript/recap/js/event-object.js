$(document).ready(function(){
    var $list = $('li');

    $list.on('click', function(e){
        var type = e.type; //tipo de evento
        var date = new Date();
        //fecha(ms) cuando se disparo el evento 
        date.setMilliseconds(e.timeStamp);
        //remueve span (para que no se acumulen)
        //$list.children('span').remove();
        $('li span').remove();
        //prueba

        $(this).append('<span class="date"> ' + date.toDateString() + ' '+ type+ '</span>');

    });

});