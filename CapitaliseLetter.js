import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function capitaliseLetter(str) {
    const separatedWords = str.split(" ");
    
    for(let i = 0; i < separatedWords.length; i++) {
      let firstLetter = separatedWords[i].split("", 1);
      let restOfWord = separatedWords[i].slice(1);
      let firstLetterUpperCase = firstLetter[0].toUpperCase();
      separatedWords[i] = firstLetterUpperCase.concat(restOfWord);
      }
    return separatedWords.join(" ");
    }

input.addEventListener('input', function() {
  appDiv.innerHTML = capitaliseLetter(input.value);
})
      
