import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function sortingExercise(str) {
  let looseCharArray=str.split("");
  
  for(let i = 0; i < looseCharArray.length; i++) {

    for(let i = 0; i < looseCharArray.length; i++) {
      if(looseCharArray[i] > looseCharArray[i + 1]) {
        looseCharArray = (swapPlace(i + 1, i, looseCharArray));
      }
    }

  }

return looseCharArray.join(""); 

}

function swapPlace(smaller, bigger, arrayBeforeSwap) {
  let arrayAfterSwap = arrayBeforeSwap;
  let smallerOne = arrayBeforeSwap[smaller];
  let biggerOne = arrayBeforeSwap[bigger];

  arrayAfterSwap[smaller] = biggerOne;
  arrayAfterSwap[bigger] = smallerOne;

  return arrayAfterSwap;
}

input.addEventListener('input', function() {
    appDiv.innerHTML = sortingExercise(input.value);
})

//OD, 14-06-2018

/* Using the JavaScript language, have the function AlphabetSoup(str)
take the str string parameter being passed and return the string with
the letters in alphabetical order (ie. hello becomes ehllo). Assume
numbers and punctuation symbols will not be included in the string. */

//No shortcuts now.