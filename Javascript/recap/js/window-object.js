var msg = '<h2>browser window</h2>';
msg += '<p>width: ' + window.innerWidth + '</p>';//tamaño actual (pixel) del ancho la ventana del navegador
msg += '<p>height: ' + window.innerHeight +'</p>';//tamaño actual (pixel) del alto la ventana del navegador
msg += '<h2>history</h2>';
msg += '<p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2>';
msg += '<p>width: ' + window.screen.width +'</p>';//tamaño actual (pixel) del ancho la pantalla del monitor
msg += '<p>height: ' + window.screen.height +'</p>';//tamaño actual (pixel) del alto la pantalla del monitor

//recupera el elemento html cuyo id es 'info'
elInfo = document.getElementById('info');
elInfo.innerHTML = msg;
window.alert('Pagina actual: ' + window.location);