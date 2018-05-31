var xhr = new XMLHttpRequest();

xhr.onload = function() { 
    //if(xhr.status ===200){
        //convierte json a objetos javascript
        responseObj = JSON.parse(xhr.responseText);
        var newContent = '';

        for(var i = 0; i < responseObj.events.length; i++){
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObj.events[i].map + '">';
            newContent += '<p><b>' + responseObj.events[i].location + '</b><br>';
            newContent += responseObj.events[i].date + '</p>';
            newContent += '</div>';
        }
        document.getElementById('content').innerHTML = newContent;
    //}
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);
