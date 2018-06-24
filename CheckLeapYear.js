const input  = document.getElementById("input");
const appDiv = document.getElementById("app");
const button = document.getElementById("button");

function checkLeapYear(year) {

  if(year % 4 != 0) {
    let leap = false;
  }
  else if(year % 100 != 0) {
    leap = true;
  }
  else if(year % 400 != 0) {
    leap = false;
  }
  else {
    leap = true;
  }

  let toBeOrNotToBe = leap ? "is" : "isn't";
  
  return `The year ${year} ${toBeOrNotToBe} a leap year.`;
}

button.addEventListener("click", function() {
  appDiv.innerHTML = checkLeapYear(input.value);
})

//OD, 24-06-2018

/* Write a JavaScript program to determine whether a given year is a leap year
in the Gregorian calendar. */

/* Wikipedia: Every year that is exactly divisible by four is a leap year,
except for years that are exactly divisible by 100, but these centurial years
are leap years if they are exactly divisible by 400. For example, the years
1700, 1800, and 1900 were not leap years, but the years 1600 and 2000 were. */