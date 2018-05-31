function showEvents(data){
    var newContent = '';

    for(var i=0; i<data.events.length; i++){
        newContent += '<div class="event">';
        newContent += '<img src="' + data.events[i].map + '">';
        newContent += '<p><b>' + data.events[i].location + '</b>';
        newContent +=  '<br>' + data.events[i].date + '</p>';
        newContent += '</div>';
    }
    document.getElementById('content').innerHTML = newContent;
}