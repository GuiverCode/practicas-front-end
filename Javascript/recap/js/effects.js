$(function(){
    //esconde <h2> y luego aparece con un efecto deslizante hacia arriba
    $('h2').hide().slideDown(600);
    var $li = $('li');
    //causa que cada elemento de la lista aparezca uno a uno
    //la propiedad index actua como un contador, indica la pos del elemento actual
    $li.hide().each(function(index){
        $(this).delay(200*index).fadeIn(700);
    });

    $li.on('click',function(){
        $(this).fadeOut(700);
    });

    function write(word, index, w){
        if(index == word.length){
            return;
        }
        var $el = $('h2');
        w += word[index];
        $el.text(w);
        
        setTimeout(function(){write(word,++index,w)},300    );
    }
    var palabra = document.getElementsByTagName('h2')[0].textContent;
    write(palabra,0,'');
    

});