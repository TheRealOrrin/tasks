function alphabetSoup(str) {
    let looseLetters = str.split("");
    const alphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
   "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for(let i = 0; i < looseLetters.length; i++) {
       looseLetters.push(alphaBet.indexOf(String(looseLetters.shift())));   
    }

    if (looseLetters[0] == "0") {
        looseLetters.push(looseLetters.shift());
    }
    let index = 0;
    let lastLetter = looseLetters.length - 1;
    for(let i = 0; i < looseLetters.length; i++) {
        if (looseLetters[index] > looseLetters[lastLetter]) {
            looseLetters.push(looseLetters.shift());
        }
        else {
            index++;
        }
        
    }

    return looseLetters.join("");
}

console.log(alphabetSoup("edcba"));


//OD, 11-06-2018

/* Using the JavaScript language, have the function AlphabetSoup(str)
take the str string parameter being passed and return the string with
the letters in alphabetical order (ie. hello becomes ehllo). Assume
numbers and punctuation symbols will not be included in the string. */

//Making a complex version without using easy Array-methods

//Assuming that special characters are also not included....