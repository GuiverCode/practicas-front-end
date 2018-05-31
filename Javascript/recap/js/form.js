/*el evento change se activa cuando el valor de algun elemento(radio button,
check box, select box, etc) cambia*/

function showHint(){
    /*obtiene la seleccion del usuario
    options: array que contiene las opciones del select box
    selectedIndex: index de la seleccion del usuario
    */
    //ej de como agregar elementos a un select
    var option = document.createElement('option');
    option.text = 'nuevo';
    this.add(option);
    //-------------------------------------------------

    var selected = this.options[this.selectedIndex].value;
    var elMsg = document.getElementById('packageHint');
    console.log(selected);
    if(selected == 'annual'){
        elMsg.textContent = 'Buena elección!';
    }
    else{
        elMsg.textContent = 'Ahorra 10$ si pagas por un año.';
    }
}

function checkForm(e){
    var elTerms = document.getElementById('terms');
    var elMsg = document.getElementById('termsHint');
    if (!elTerms.checked) {
        elMsg.textContent = 'Acepte los terminos para continuar.';
        e.preventDefault();
    }
}

var elForm = document.getElementById('formSignup');
var elSelectPackage = document.getElementById('package');

elForm.addEventListener('submit',checkForm,false);
elSelectPackage.addEventListener('change', showHint, false);