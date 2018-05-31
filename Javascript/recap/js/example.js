
function writeLabel(e){
    var label = document.getElementById('noteName');

    label.textContent = e.target.value;
}


//el evento se activa cada vez que cambia el valor del input
var elNoteInput = document.getElementById('noteInput');
elNoteInput.addEventListener('input',writeLabel,false);