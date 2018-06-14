/*
import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');
*/

function kaprekarsConstant(num) {
    let separatedNums = num.split("");

    if (checkValidity(separatedNums)) {
        findTheMagicNumber(separatedNums);
    }

    function checkValidity(num) {
        if(num.length < 4) {
            console.log("No can do! Try again with at least four digits.");
            return false;
        }
        else if(atLeast2DistinctDigits(num)) {
            return true;
        }
        else {
            console.log("No can do! Try again with at least two distinct digits.");
            return false;
        }
    }

    function atLeast2DistinctDigits(num) {
       //return true if there are at least two distinct digits
    }

    function findTheMagicNumber(num) {
    
        //separatedNums.sort();
        //separatedNums.reverse();
        //add zeros if necessary
        //repeat until value is 6174
        //count iterations

        return numberOfIterations;
    }

}

console.log(`For your input Kaprekar's Constant is reached in ${kaprekarsConstant("5553445")} steps`);

/*
input.addEventListener('input', function() {
    appDiv.innerHTML = kaprekarsConstant(input.value);
})
*/

//OD, 14-06-2018

/* Using the JavaScript language, have the function KaprekarsConstant(num)
take the num parameter being passed which will be a 4-digit number with at
least two distinct digits. Your program should perform the following routine
on the number: Arrange the digits in descending order and in ascending order
(adding zeroes to fit it to a 4-digit number), and subtract the smaller number
from the bigger number. Then repeat the previous step. Performing this routine
will always cause you to reach a fixed number: 6174. Then performing the routine
on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should
return the number of times this routine must be performed until 6174 is reached.
For example: if num is 3524 your program should return 3 because of the following
steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
*/