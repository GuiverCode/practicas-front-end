var msg = '<p><b>page title: </b>' + document.title + '</p>';
msg += '<p><b>page address: </b>' + document.URL + '</p>';
msg += '<p><b>last modified: </b>' + document.lastModified + '</p>';

var elFooter = document.getElementById('footer');
elFooter.innerHTML = msg;