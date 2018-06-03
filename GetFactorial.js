function getFactorial(num) {
  let result = num;
    while (num > 1) {
      result = result * --num;
      }
    return result;
}

let number = prompt("Please enter the number of which you want the factorial", "Type a number here");

alert(`The factorial of ${number} is ${getFactorial(number)}.`);