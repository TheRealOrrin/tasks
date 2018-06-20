import './style.css';

const appDiv = document.getElementById('app');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function balanceScale(strArr) {
  let leftWeight = strArr[0][0];
  let rightWeight = strArr[0][1];
  let difference = Math.abs(leftWeight - rightWeight);

  for(let i = 0; i < strArr[1].length; i++) {
    if(difference == strArr[1][i]) {
      return strArr[1][i];
    }
  }

  for(let i = 0; i < strArr[1].length; i++) {
    for(let j = i + 1; j < strArr[1].length; j++) {
      if(difference == Number(strArr[1][i]) + Number(strArr[1][j])) {
        return strArr[1][i].concat(", ", strArr[1][j]);
      }
    }
  }

  for(let i = 0; i < strArr[1].length; i++) {
    for(let j = i + 1; j < strArr[1].length; j++) {
      if(difference == -Math.abs(Number(strArr[1][i])) + Number(strArr[1][j])) {
        return strArr[1][i].concat(", ", strArr[1][j]);
      }
    }
  }

return "It is impossible to balance the scale with these given weights!";
}

input2.addEventListener('keydown', function(event) {
  if(event.code === 'Enter') {
    appDiv.innerHTML = balanceScale([input1.value.split(","), input2.value.split(",")]);
  }
})


//OD, 20-06-2018

/* Using the JavaScript language, have the function ScaleBalancing(strArr) read
strArr which will contain two elements, the first being the two positive integer
weights on a balance scale (left and right sides) and the second element being a
list of available weights as positive integers. Your goal is to determine if you
can balance the scale by using the least amount of weights from the list, but using
at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then
this means there is a balance scale with a weight of 5 on the left side and 9 on
the right side. It is in fact possible to balance this scale by adding a 6 to the
left side from the list of weights and adding a 2 to the right side. Both scales
will now equal 11 and they are perfectly balanced. Your program should return a
comma separated string of the weights that were used from the list in ascending
order, so for this example your program should return the string 2,6. There will
only ever be one unique solution and the list of available weights will not be
empty. It is also possible to add two weights to only one side of the scale to
balance it. If it is not possible to balance the scale then your program should
return the string not possible. */
