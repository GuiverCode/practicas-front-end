var element = document.getElementById('one');

if (element.hasAttribute('class')) {
    var atributo = element.getAttribute('class');
    
    var el = document.getElementById('scriptResults');
    el.innerHTML ='<p>El primier elemento tiene una clase: ' + atributo + '</p>';
}

