//obteniendo los datos del navegador con el objeto window
var msg = '<h2>browser window</h2>'+'<p>width: ' + window.innerWidth +'</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2>' + '<p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2>' + '<p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

//insertando los datos al elemento html
var elInfo = document.getElementById('info');
elInfo.innerHTML = msg;

//mostrando la url actual con el metodo alert del objeto window
alert('Current page: ' +  window.location);