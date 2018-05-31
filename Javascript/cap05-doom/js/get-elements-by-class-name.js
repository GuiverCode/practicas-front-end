var elementos = document.getElementsByClassName('hot');
if(elementos.length > 2){
    var elTres = elementos[2] // elementos.item(2)
    elTres.className = 'cool'
}