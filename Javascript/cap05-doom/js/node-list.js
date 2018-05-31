var elementos = document.querySelectorAll('li.hot');

if(elementos.length > 0){
    for(var i=0; i<elementos.length; i++){
        elementos[i].className = 'cool';
    }
}
