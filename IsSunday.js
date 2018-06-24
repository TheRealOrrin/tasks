const input  = document.getElementById("input");
const appDiv = document.getElementById("app");
const button = document.getElementById("button");

function isSunday(year) {
  const date = new Date();
  date.setFullYear(year, 0, 1);
  return date.getDay() == 0 ? `1st January of ${year} is a Sunday.`
                            : `1st January of ${year} is not a Sunday.`;
}

button.addEventListener("click", function() {
  appDiv.innerHTML = isSunday(input.value);
})

//OD, 24-06-2018

/* Write a JavaScript program to find 1st January is being a Sunday
between 2014 and 2050. */