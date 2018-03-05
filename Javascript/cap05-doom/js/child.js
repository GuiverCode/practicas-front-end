//getElementsByTagName() retorna un nodeList
var item = document.getElementsByTagName('ul')[0];
var firstChild = item.firstChild;
var lastChild = item.lastChild;

if(lastChild !== null){
    lastChild.setAttribute('class','cool'); 
}

if(firstChild !== null){
    firstChild.setAttribute('class','complete'); 
}