$(function() {
    var $li = $('li');
    //selecciona todos los li y luego filtra el ultimo que tiene la clase hot
    $li.filter('.hot:last').removeClass('hot');
    //selecciona todos los li y luego filtra los que no tienen la clase hot
    $li.not('.hot').addClass('cool');
    //selecciona todos los li y luego filtra los que tiene un elemento <em> descendiente 
    $li.has('em').addClass('complete');

    $li.each(function() {
        var $this = $(this);
        if ($this.is('.hot')) {
          $this.prepend('Priority item: ');
        }
    });

    //selecciona todos los los li y luego filtra los que tienen el texto 'hone'
    $('li:contains("honey")').append(' (local)');
});