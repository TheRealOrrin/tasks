/* Using the JavaScript language, have the function
FirstReverse(str) take the str parameter being passed
and return the string in reversed order. For example:
if the input string is "Hello World and Coders" then
your program should return the string sredoC dna dlroW
olleH. */

function ReverseString(str) { 
  const separatedString = str.split("");
  let reversedString = separatedString[0];

  for(let i = 1; i < separatedString.length; i++) {
    reversedString = separatedString[i] + reversedString;
  }
return reversedString;
}

let result1 = ReverseString("abcd");
console.log(result1);
let result2 = ReverseString("Расцветали яблони и груши, Поплыли туманы над рекой, Выходила на берег Катюша, На высокий берег, на крутой.");
console.log(result2);

