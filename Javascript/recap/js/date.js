var today = new Date();
var birthday = new Date(1995,10,30);
var x = (today - birthday)/31556900000;//las fechas se representan en milisegundos
//1 año = 31556900000 ms.
//para obtener resultado en dia/mes se debe dividir con la cantidad de milisegundos que tiene un dia/mes.  


document.write('Tengo: ' + Math.round(x) + 'a&ntilde;os');
