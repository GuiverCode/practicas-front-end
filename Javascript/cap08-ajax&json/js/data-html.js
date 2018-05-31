var xhr = new XMLHttpRequest();

//onload: Evento que se generara cuando se recibe respuesta del servidor
xhr.onload = function(){
    if(xhr.status ===200){ //si la respuesta del servidor fue ok
        //procesa la respuesta del servidor
        var el = document.getElementById('content');
        el.innerHTML = xhr.responseText; //actualiza
    }
    
}

xhr.open('GET','data/data.html',true);//prepara la solicitud
xhr.send();//envia la solicitud