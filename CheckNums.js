import './style.css';

const appDiv = document.getElementById('app');
const input = document.getElementById('input1');
const input = document.getElementById('input2');

function checkNums(num1, num2) {
if (num2 > num1) {
    return true;
}
else if (num2 == num1) {
    return '-1';
}
else {
    return false;
}
}

input.addEventListener('input', function() {
    appDiv.innerHTML = checkNums(input1.value, input2.value);
})

//OD, 11-06-2018

/* Using the JavaScript language, have the function CheckNums(num1,num2)
take both parameters being passed and return the string true if num2 is
greater than num1, otherwise return the string false. If the parameter
values are equal to each other then return the string -1. */