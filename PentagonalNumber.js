import './style.css';

const appDiv  = document.getElementById('app');
const input   = document.getElementById('input');
const button  = document.getElementById('button');

function pentagonalNumber(num) {
    
    let dots = 1 + 2.5 * num * --num;

    return dots;
}

return `${num} iterations will result in a pentagon of ${dots} dots.`;

input.addEventListener('keydown', function(event) {
    if(event.code === 'Enter') {
      appDiv.innerHTML = pentagonalNumber(input.value);
    }
})

//OD, 18-06-2018

/* Using the JavaScript language, have the function PentagonalNumber(num)
read num which will be a positive integer and determine how many dots exist
in a pentagonal shape around a center dot on the Nth iteration. For example,
in the image below you can see that on the first iteration there is only a
single dot, on the second iteration there are 6 dots, on the third there are
16 dots, and on the fourth there are 31 dots. */
