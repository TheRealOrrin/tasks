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

/* Using the JavaScript language, have the function SimpleSymbols(str)
take the str parameter being passed and determine if it is an acceptable
sequence by either returning the string true or false. The str parameter
will be composed of + and = symbols with several letters between them
(ie. ++d+===+c++==a) and for the string to be true each letter must be
surrounded by a + symbol. So the string to the left would be false.
The string will not be empty and will have at least one letter. */

