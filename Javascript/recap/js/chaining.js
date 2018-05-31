//jquery permite concatenar metodos

//selecciona todos los <li> excepto el que tiene id = one
$('li[id!="one"]')
.hide()
.delay(500)
.fadeIn(2000);