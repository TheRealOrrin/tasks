import './style.css';

const appDiv = document.getElementById('app');
const input  = document.getElementById('input');


function letterChanger(str) {
  let separatedCharacters = str.split("");
  const alphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
   "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(let i = 0; i < separatedCharacters.length; i++) {
  separatedCharacters.push(changeCharacters(separatedCharacters.shift()));
}

function changeCharacters(character) {
  let middleCharacter = character.toLowerCase();
  let switchedCharacter;

  if (alphaBet.includes(middleCharacter)) {
    let characterIndex = alphaBet.indexOf(middleCharacter);
    characterIndex += 27;
    middleCharacter = alphaBet[characterIndex % alphaBet.length];
     
    if (character == character.toLowerCase()) {
      switchedCharacter = middleCharacter.toUpperCase();
    }
    else {
      switchedCharacter = middleCharacter.toLowerCase();
    }
  }
  else {
    switchedCharacter = character;
  }

  return switchedCharacter;

}

return separatedCharacters.join("");

}

input.addEventListener('input', function() {
  appDiv.innerHTML = letterChanger(input.value);
})

