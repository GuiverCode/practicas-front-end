
$(function() {
    $('h2').text(''); //delete the previous text
    
    function write(msg, phrase, index) {
      if (index == msg.length) return;//condicion de stop
    
      //concatena el siguiente caracter con la frase actual y lo pone en el elemento h2
      phrase += msg[index];
      $('h2').text(phrase);
      index++;
      
      //llamada recursiva cada 150 milisegundos
      setTimeout(function() {
        write(msg, phrase, index);
      }, 150);
    }
    
    var msg = 'Welcome'; //new text for the h2 element
    write(msg, '', 0);
  });