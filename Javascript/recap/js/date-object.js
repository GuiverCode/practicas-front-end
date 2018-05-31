var today = new Date();
var msg = '<p>Copyright &copy;' + today.getFullYear() + '</p>';


var elFooter = document.getElementById('footer');
elFooter.innerHTML = msg;
