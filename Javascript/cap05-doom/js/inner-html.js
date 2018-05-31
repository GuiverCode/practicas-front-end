var item = document.getElementById('one');
var itemContent = item.innerHTML;
var newItemContent = '<a href= "http://example.org">' + itemContent +'</a>';
item.innerHTML = newItemContent;