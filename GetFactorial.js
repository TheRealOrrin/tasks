function getFactorial(num) {
  let result = num;
    while (num > 1) {
      result = result * --num;
      }
    return result;
}

let number = prompt("Please enter the number of which you want the factorial",
  "Type a number here");

alert(`The factorial of ${number} is ${getFactorial(number)}.`);

//OD, 03-06-2018

/* Using the JavaScript language, have the function FirstFactorial(num)
take the num parameter being passed and return the factorial of it (e.g.
if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will
be between 1 and 18 and the input will always be an integer. */
