/*Objeto Math:
round() redondea un numero al entero mas cercano.
floor() redondea un numero al entero mas cercano(hacia abajo).
ceil() redondea un numero al entero mas cercano(hacia arriba).
random() genera un numero aleatorio entre 0(inclusive) y 1.
*/
var randomNumber = Math.floor((Math.random() * 10) + 1);
var elInfo = document.getElementById('info');
elInfo.innerHTML = '<h2>random number</h2><p>' + randomNumber + '</p>';