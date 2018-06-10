import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function simpleSymbols(str) {
    const stringsWithRightSequence = new RegExp('[+][a-z][+]');
    let arrayOfRightSequences = stringsWithRightSequence.exec(str);

    if (arrayOfRightSequences == null) {
        return false;
    }
    else {
        return true;
    }
}

input.addEventListener('input', function() {
    appDiv.innerHTML = simpleSymbols(input.value);
  })

//OD, 10-06-2018