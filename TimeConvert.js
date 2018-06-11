import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');

function timeConvert(num) {
    const numOfMinutes = num % 60;
    let numOfHours = num - numOfMinutes;
    numOfHours = numOfHours / 60;

    let hour, minute;
    if (numOfHours == 1) {hour = "hour";}
    else {hour = "hours";}
    if (numOfMinutes == 1) {minute = "minute";}
    else {minute = "minutes";}

    return `${num} minutes is equal to ${numOfHours} ${hour}
            and ${numOfMinutes} ${minute}.`;
}

console.log(timeConvert(123));

input.addEventListener('input', function() {
    appDiv.innerHTML = timeConvert(input.value);
})

//OD, 11-06-2018

/* Using the JavaScript language, have the function TimeConvert(num)
take the num parameter being passed and return the number of hours and
minutes the parameter converts to (ie. if num = 63 then the output should
be 1:3). Separate the number of hours and minutes with a colon. */