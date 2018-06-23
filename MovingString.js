const appDiv  = document.getElementById('app');
const input   = document.getElementById('input');

function movingString(str) {
  const str = str.split("");
  const int = setInterval(function() {doIt(str)}, 1000);

  function doIt(str) {
    str.push(str.shift());
    appDiv.innerHTML = str.join("");
  }
}

let once = 0;
input.addEventListener('keydown', function(event) {
    if(event.code === 'Enter' && once == 0) {
      movingString(input.value);
      once++;
    }
})

//OD, 23-06-2018

/* Write a JavaScript program to rotate the string 'w3resource' in right
direction by periodically removing one letter from the end of the string
and attaching it to the front. */