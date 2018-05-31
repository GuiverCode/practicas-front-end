/*JQuery() funcion que retorna un JQuery object que contiene los elementos 
seleccionados*/

//selecciona todos los <h1>..<h6> y agrega la clase headline
$(':header').addClass('headline');
//selecciona los primeros 3 items de la lista
$('li:lt(3)').hide().fadeIn(3000);

//selecciona todos los <li> y agrega un envent listener a cada uno
$('li').on('click',function(){
    $(this).remove();//elimina el elemento que disparo el evento
});

/*function deleteItem(e){
    //event delegation si o si tiene como parametro e(event object).
    el.removeChild(e.target);
}

var el = document.querySelector('ul');
el.addEventListener('click',deleteItem,false);*/
