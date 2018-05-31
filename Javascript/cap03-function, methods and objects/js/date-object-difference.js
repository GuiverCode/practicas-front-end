var today = new Date();
var est = new Date('Apr 16, 1996 15:45:55');//Date(1996,3,16,15,45,55)
//getTime() fecha en milisegundos
var difference = today.getTime() - est.getTime();
/*Convierte la diferencia en años
1 año = 31556900000 milisegundos*/
difference = Math.floor(difference / 31556900000);

var elMessage = document.getElementById('message');
elMessage.textContent = difference +' years of online travel advice';