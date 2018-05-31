var elForm = document.getElementById('formSignup');
var elPackage = document.getElementById('package');
var elPackageHint = document.getElementById('packageHint');
var elTerms = document.getElementById('terms');
var elTermsHint = document.getElementById('termsHint');


function checkTerms(e){
    if(!elTerms.checked){
        //el usuario no selecciono el checkbox
        elTermsHint.innerHTML = 'Debes aceptar los terminos y condiciones';
        //evita que se envie el formulario
        e.preventDefault(); 
    }
}

function packageHint(){
    //accede al valor del option seleccionado
    var pack = this.options[this.selectedIndex].value
    if (pack == 'monthly') {
        elPackageHint.innerHTML = 'Ahorrarás 10$ si escoges el paquete de 1 año';
    }
    else if(pack == 'annual'){
        elPackageHint.innerHTML = '¡Sabia elección!';
    }
}

//crea event listeners: submit llama a checkTerms(), change llama a packageHint()
elForm.addEventListener('submit',   checkTerms, false);
elPackage.addEventListener('change', packageHint, false);