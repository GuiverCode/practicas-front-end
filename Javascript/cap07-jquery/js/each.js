/*each() permite iterar por todos los elementos recuperados por una seleccion, su parametro es una funcion que puede realizar alguna tarea con cada elemento*/
$(function() {
    $('li').each(function() {
        var id = this.id;
        $(this).append('<span class="order"> ' + id + '</span>');
    });
});