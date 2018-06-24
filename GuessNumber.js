const button = document.getElementById("button");
const appDiv = document.getElementById("app");
const input  = document.getElementById("input");

function guessNumber(num){
  const randomNum = Math.floor(Math.random() * 10);

  return num == randomNum ? "Good guess!"
                          : `No match, the number you are looking for is ${randomNum}.`;
}

button.addEventListener("click", function() {
  appDiv.innerHTML = guessNumber(input.value);
})

//OD, 24-06-2018

/* Write a JavaScript program where the program takes a random integer between
1 to 10, the user is then prompted to input a guess number. If the user input
matches with guess number, the program will display a message "Good Work"
otherwise display a message "Not matched". */