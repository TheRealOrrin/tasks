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
