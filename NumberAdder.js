import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function numberAdder(num) {
    let result = num;
    while(num > 0) {
        result += --num;
    }
    return result; 
}

input.addEventListener('input', function() {
    appDiv.innerHTML = numberAdder(Number(input.value));
})

//OD, 07-06-2018

/*  Using the JavaScript language, have the function SimpleAdding(num)
add up all the numbers from 1 to num. For example: if the input is 4
then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the
test cases, the parameter num will be any number from 1 to 1000. */

