import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function numberAdder(num) {
    let result = num;
    while(num > 0) {
        result = result + --num;
    }
    return result;
}

console.log(numberAdder(140));

input.addEventListener('input', function() {
    appDiv.innerHTML = letterChanger(input.value);