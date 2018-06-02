$(function(){
    var list = $('li');
    //itera a traves de cada elemento de la lista
    list.each(function(){
        var id = this.id;
        $(this).append('<span class="order"> ' + id + '</span>');
    });
});