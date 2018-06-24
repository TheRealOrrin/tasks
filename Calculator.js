const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button1 = document.getElementById("button*")
const button2 = document.getElementById("button/")

function multiply(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  return input1 / input2;
}

button1.addEventListener("click", function() {
  appDiv.innerHTML = multiply(input1.value, input2.value);
})
  
button2.addEventListener("click", function() {
  appDiv.innerHTML = divide(input1.value, input2.value);
})

//OD, 24-06-2018

/* Write a JavaScript program to calculate multiplication and division of
two numbers (input from user). */
