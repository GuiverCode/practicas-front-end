var buttons,  noteInput, noteName, textEntered, target;    // Declare variables

noteName = document.getElementById('noteName');  // Element that holds note
noteInput = document.getElementById('noteInput');// Input for writing the note
buttons = document.getElementById('buttons');

function writeLabel(e) {                         
  if (!e) {                                     
    e = window.event;                            
  }
  target = e.target || e.srcElement;             
  textEntered = target.value;                    
  noteName.textContent = textEntered;            
}


function recorderControls(e) {                  
    if (!e) { //si no se paso el event object
      e = window.event; //obtiene el event object
    }
     //obtiene el elemento que genero el evento
    target = e.target || e.srcElement;

    if (e.preventDefault) {
      e.preventDefault();
    }
    else{
      e.returnValue = false;
    }

    switch (target.getAttribute('data-state')) {
      case 'record':
        target.setAttribute('data-state','stop');
        break;
      case 'stop':
        target.setAttribute('data-state','record');
        break;
    }
  }

      

if (document.addEventListener) {                 // If event listener supported
  buttons.addEventListener('click', function(e) {// For any click document
    recorderControls(e);                         // Call recorderControls()
  }, false);                                     // Capture during bubble phase
  // If input event fires on noteInput input call writeLabel()
  noteInput.addEventListener('input', writeLabel, false); 
} 