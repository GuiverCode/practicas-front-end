function checkUsername(e, length){
    //var el = getTarget(e);
    var el = e.target;
    var elMsg = document.getElementById('feedback');

    if(el.value.length < length){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    }
    else{
        elMsg.textContent = '';
    }
}

/*function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}*/

function tipUserName(e){
    var el = e.target;
    var elMsg = el.nextSibling;
    elMsg.className = 'tip';
    elMsg.textContent = 'User name must be at least 5 characters';
}

var el = document.getElementById('userName');
el.addEventListener('blur',function(e){checkUsername(e, 5);}, false);
el.addEventListener('focus',function(e){tipUserName(e);}, false);