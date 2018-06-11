import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function alphabetSoup(str) {
    const looseLetters = str.split("");
    looseLetters.sort();

    return looseLetters.join("");
}

input.addEventListener('input', function() {
    appDiv.innerHTML = alphabetSoup(input.value);
})

//OD, 11-06-2018

/* Using the JavaScript language, have the function AlphabetSoup(str)
take the str string parameter being passed and return the string with
the letters in alphabetical order (ie. hello becomes ehllo). Assume
numbers and punctuation symbols will not be included in the string. */