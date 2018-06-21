import './style.css';

const appDiv  = document.getElementById('app');
const button  = document.getElementById('button');

function displayDayTime() {

  const date    = new Date();
  const weekDay = getWeekDay(date.getDay());
  const hours   = getRetardedHours(date.getHours());
  const minutes = formatMinsAndSecs(date.getMinutes());
  const seconds = formatMinsAndSecs(date.getSeconds());
  
  function getWeekDay(day) {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[day];
  }
    
  function getRetardedHours(hours) {
    if(hours > 12) {
      hours = `${hours - 12} PM`;
    }
    else {
      hours = `${hours} AM`;
    }
    return hours;
  }

  function formatMinsAndSecs(num) {
    if(num < 10) {
        return `0${num}`;
    }
    else return num;
  }
  
  return `Today is : ${weekDay}. Current time is : ${hours} : ${minutes} : ${seconds}.`;
}
  
button.addEventListener('click', function() {
    appDiv.innerHTML = displayDayTime();
})

//OD, 21-06-2018

/* Write a JavaScript program to display the current day and time in the
following format.
Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38 */