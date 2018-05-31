$(function() {
   $('ul').on('click mouseover','li:not(#four)',{status: 'important'},function(e) {
       var msg = 'Item: ' + e.target.textContent +'<br>';
       msg += 'Status: ' + e.data.status + '<br>';
       msg += 'Event: ' + e.type;

       $('#notes').html(msg);
   }); 
});