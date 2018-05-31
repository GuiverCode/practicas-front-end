
var xhr = new XMLHttpRequest();
var jsonObj;

xhr.onload = function(){
    if (xhr.status === 200) {
        jsonObj = JSON.parse(xhr.responseText);
    }
}

/*Soliita el JSON */
xhr.open('GET','data/example.json','true');
xhr.send(null);

/*Funciones*/
function loadEvents(e) {
    e.preventDefault();
    var target = e.target; //elemento en donde se genero el evento
    var evento = target.getAttribute('id').toUpperCase(); //un evento real(charlas, conferencia, etc), no un evento javascript
    var newContent = '<ul>';
    
    for(var i=0; i<jsonObj[evento].length; i++){
        newContent += '<li><span class="time">' + jsonObj[evento][i].time + '</span>';
        newContent += '<a href="descriptions.html#';
        newContent += jsonObj[evento][i].title.replace(/ /g,'-') + '">';
        newContent += jsonObj[evento][i].title + '</a></li>'; 
    }
    newContent += '/<ul>';
    //add content to second column
    document.getElementById('sessions').innerHTML = newContent;
    //delete the third column
    document.getElementById('details').innerHTML = '';
}

function loadSessions(e) {
    e.preventDefault();
    var url = e.target.getAttribute('href').replace('#', ' #') ;
    $('#details').load(url);
}

function loadPage(e) {
    e.preventDefault();
    var target = e.target;
    var url = target.getAttribute('href');

    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    //trae todo el contenido del container
    $('#content').load(url + ' #container').hide().fadeIn('slow');
    
}

/*Eventos*/
//Se delega todo al padre, puesto que todos los hijos se refrescan dinamicamente
$('#content').on('click','#event a', loadEvents);//click on event
$('#content').on('click', '#sessions li a', loadSessions);//click on sessions
$('nav a').on('click', loadPage);//click on nav