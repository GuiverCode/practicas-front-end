
/*function refresh(e){
    e.preventDefault();
    var el = e.target;
    var url = el.getAttribute('href');
    document.querySelector('nav a.current').className = '';
    el.className = 'current';
    $('#content').load(url + ' #container').hide().fadeIn('slow');

}

var elPadre = document.querySelector('nav');
elPadre.addEventListener('click', refresh, false);*/

$('nav a').on('click', function (e) {
    e.preventDefault();
    var url = this.href;

    $('a.current').removeClass('current');
    $(this).addClass('current');
    
    $('#content').load(url + ' #container').hide().fadeIn(1000);
})

