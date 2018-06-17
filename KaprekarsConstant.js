import './style.css';

const appDiv  = document.getElementById('app');
const input   = document.getElementById('input');
const button  = document.getElementById('button');

function findKaprekar(num) {
    let intermediateNum = num;
    let i = 0;

    if(checkValidity(num)) {
        
        for(i = 0; intermediateNum != 6174; i++) {
        intermediateNum = subTract(intermediateNum);   
        }
        return `It took ${i} iterations to reach Kaprekar's constant from ${num}.`;
    }
}

function checkValidity(num) {
    if(num.toString().length < 4) {
      throw new Error("No can do! Try again with at least four digits.");
    }
    else if(num.toString().length > 4) {
      throw new Error("No can do! The computer will explode with more than four digits.");
    }
    else if(atLeast2DistinctDigits(num)) {
      return true;
    }
    else {
      throw new Error("No can do! Try again with at least two distinct digits.");
    }
  }
  
function atLeast2DistinctDigits(num) {
    let separateDigits = num.toString().split("").sort();
    let howManyTimes = 0;

    for(let i = 0; i < separateDigits.length-1; i++) {
        if(separateDigits[i] != separateDigits[i + 1]) {
            howManyTimes++;
        }
    }

    if(howManyTimes < 2) {
        return false;
    }
    else {
        return true;
    }
}
      
function subTract(num) {
    let inputNumberString = num.toString().split("");
    let resultOfSubtraction = makeDescending(inputNumberString) - makeAscending(inputNumberString);
    return resultOfSubtraction;
  }
  
function makeAscending(num) {
    let ascendingNumbers = num;
    ascendingNumbers.sort(function(a, b) {return a - b});
    return ascendingNumbers.join("");
  }
  
function makeDescending(num) {
    let descendingNumbers = num.slice(num[num.length]);
    descendingNumbers = descendingNumbers.sort(function(a, b) {return b - a});
    return descendingNumbers.join("");
  }

button.addEventListener('click', function() {
    appDiv.innerHTML = findKaprekar(input.value);
})

input.addEventListener('keydown', function(event) {
  if(event.code === 'Enter') {
    appDiv.innerHTML = findKaprekar(input.value);
  }
})

//OD, 17-06-2018

/* Using the JavaScript language, have the function KaprekarsConstant(num) take
the num parameter being passed which will be a 4-digit number with at least two
distinct digits. Your program should perform the following routine on the number:
Arrange the digits in descending order and in ascending order (adding zeroes to
fit it to a 4-digit number), and subtract the smaller number from the bigger
number. Then repeat the previous step. Performing this routine will always cause
you to reach a fixed number: 6174. Then performing the routine on 6174 will always
give you 6174 (7641 - 1467 = 6174). Your program should return the number of times
this routine must be performed until 6174 is reached. For example: if num is 3524
your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087,
(2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. */