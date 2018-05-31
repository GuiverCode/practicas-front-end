var originalNumber = 10.23456;
var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3);
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3);
msg += '<h2>final number</h2><p>' + originalNumber + '</p>';
var elInfo = document.getElementById('info');
elInfo.innerHTML = msg;
