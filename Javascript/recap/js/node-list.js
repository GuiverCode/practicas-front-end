//iterar a traves de un nodelist

var elements = document.querySelectorAll('li.hot');//selecciona todos los 'li' con la clase 'hot'

//chequea si el nodelist tiene elementos
if(elements.length > 0){
    for(var i=0; i < elements.length; i++){
        elements[i].className = 'cool';
    }
}