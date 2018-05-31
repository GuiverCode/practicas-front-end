/*si no se asigna ninguna fecha al constructor del objeto Date, 
por defecto crea un objeto con la fecha actual de cuando se 
interpreta el script.*/
var today = new Date();
var year = today.getFullYear();

var elFooter = document.getElementById('footer');
elFooter.innerHTML = '<p>Copyright &copy' + year + '</p>';