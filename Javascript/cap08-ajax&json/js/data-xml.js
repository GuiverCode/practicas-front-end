var xhr = new XMLHttpRequest(); 

xhr.onload = function(){

    var response = xhr.responseXML;//xml devuelto por el servidor
    var events = response.getElementsByTagName('event');//events del xml
    
    for(var i=0; i<events.length; i++){
        var container, image, location, city, newLine;

        //contenedor principal para cada event
        container = document.createElement('div');
        container.className = 'event';
        
        //obtiene la imagen
        image = document.createElement('img');
        image.setAttribute('src', getNodeValue(events[i],'map'));
        container.appendChild(image)

        //obtiene location 
        location = document.createElement('p');
        city = document.createElement('b');
        newLine = document.createElement('br');

        city.appendChild(document.createTextNode(getNodeValue(events[i],'location')));
        
        location.appendChild(city);
        location.appendChild(newLine);
        date =document.createTextNode(getNodeValue(events[i],'date'));
        location.appendChild(date);
        container.appendChild(location);
        

        ;
        document.getElementById('content').appendChild(container);
    }
    function getNodeValue(obj, tag){
        //retorna el primer elemento que machea con tag
        return obj.getElementsByTagName(tag)[0].textContent;
    }
};

xhr.open('GET','data/data.xml',true);
xhr.send(null);