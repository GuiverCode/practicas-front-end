var item = document.getElementById('two');
var previousItem = item.previousSibling;
var nextItem = item.nextSibling;

if (previousItem !== null) {
    previousItem.className = 'complete';
}

if (nextItem !== null) {
    nextItem.className = 'cool';
}