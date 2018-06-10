import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function capitaliseLetter(str) {
  const separatedWords = str.split(" ");    
    
  for(let i = 0; i < separatedWords.length; i++) {
      
    let firstLetter = separatedWords[i].split("", 1);
    let restOfWord = separatedWords[i].slice(1);
    let firstLetterUpperCase = " ";

    if(firstLetter[0] != undefined) {
      firstLetterUpperCase = firstLetter[0].toUpperCase();
      }
    
    separatedWords[i] = firstLetterUpperCase.concat(restOfWord);
    
    }
  return separatedWords.join(" ");
}

input.addEventListener('input', function() {
  appDiv.innerHTML = capitaliseLetter(input.value);
})

//OD, 08-06-2018

/* Using the JavaScript language, have the function LetterCapitalize(str)
take the str parameter being passed and capitalize the first letter of
each word. Words will be separated by only one space. */