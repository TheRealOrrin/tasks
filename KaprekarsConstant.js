function findKaprekar(num) {
    let intermediateNum = num;
    let i = 0;

    if(checkValidity(num)) {
        
        for(i = 0; intermediateNum != 6174; i++) {
        intermediateNum = subTract(intermediateNum);   
        }
        return `It took ${i} iterations to reach Kaprekar's constant from ${num}.`;
    }
}

function checkValidity(num) {
    if(num.toString().length < 4) {
        //document.write("No can do! Try again with at least four digits.");
        console.log("No can do! Try again with at least four digits.");
        return false;
    }
    else if(num.toString().length > 4) {
        //document.write("No can do! Try again with at least four digits.");
        console.log("No can do! The computer will explode with more than four digits.");
        return false; 
    }
    else if(atLeast2DistinctDigits(num)) {
        return true;
    }
    else {
        //document.write("No can do! Try again with at least two distinct digits.");
        console.log("No can do! Try again with at least two distinct digits.");
        return false;
    }
  }
  
function atLeast2DistinctDigits(num) {
    let separateDigits = num.toString().split("").sort();
    let howManyTimes = 0;

    for(let i = 0; i < separateDigits.length-1; i++) {
        if(separateDigits[i] != separateDigits[i + 1]) {
            howManyTimes++;
        }
    }

    if(howManyTimes < 2) {
        return false;
    }
    else {
        return true;
    }
}
      
function subTract(num) {
    let inputNumberString = num.toString().split("");
    let resultOfSubtraction = makeDescending(inputNumberString) - makeAscending(inputNumberString);
    return resultOfSubtraction
}
  
function makeAscending(num) {
    let ascendingNumbers = num;
    ascendingNumbers.sort(function(a, b) {return a - b});
    return ascendingNumbers.join("");
}
  
function makeDescending(num) {
    let descendingNumbers = num.slice(num[num.length]);
    descendingNumbers = descendingNumbers.sort(function(a, b) {return b - a});
    return descendingNumbers.join("");
}

console.log(findKaprekar(1001));

//OD, 17-06-2018


  
  
  /* function findTheMagicNumber(num) {
      while (num != 6174) {
      subTract(subTract(num));
      }
  }
  
  function subTract(num) {
    let numbersToAscending = num;
    let numbersToDescending = num.slice(num[num.length]);
  
    numbersToAscending.sort(function(a, b) {return a - b} );
    numbersToDescending.sort(function(a, b) {return b - a} );
  
    numbersToAscending = numbersToAscending.join("");
    numbersToDescending = numbersToDescending.join("");
    
    let difference = Number(numbersToAscending) - Number(numbersToDescending);
  
    return difference;
  
  }
  
  //findTheMagicNumber(["1","2","3","4"]);
  findTheMagicNumber([1234]);
  */
  
  /*
  function findTheMagicNumber(num) {
    let numbersToAscending = new Array();
    let numbersToDescending = new Array();
  
    numbersToAscending = num;
    numbersToDescending = num;
  
    //Dit helpt dus ook niet..
  
    
  
    console.log(`1: 1234 ${numbersToAscending}`);
    console.log(num);
    console.log(`2: 1234 ${numbersToDescending}`);
    console.log(num);
    
    //Ik begrijp wel dat asc en desc wellicht naar fysiek hetzelfde ding verwijzen,
    //dat is misschien niet goed, maar ik snap niet waarom het hier een probleem is,
    //alle mutaties die ik maak, maak ik niet in num, maar in numbersToAscending en
    //numbersToDescending
    //Of.... als je een nieuw array maakt, dan gaat die ook naar hetzelde fysieke ding
    //verwijzen......
    
    numbersToAscending.sort(function(a, b){return a-b});
    console.log(`3: 1234 ${numbersToAscending}`);
    console.log(num);
  
    numbersToDescending.sort(function(c, d){return d-c});
    console.log(`4: 4321 ${numbersToDescending}`);
    console.log(num);
  
    console.log(`5: 1234 ${numbersToAscending}`);
    console.log(num);
    console.log(`6: 4321 ${numbersToDescending}`);
    console.log(num);
  
    //let difference = numsAscendingOrder - numsDescendingOrder;
  }
  
  findTheMagicNumber(["1","2","3","4"]);
  */
  
  /*
  function findTheMagicNumber(num) {
    let numbersToAscending = num;
    let numbersToDescending = num;
  
    console.log(`1: 1234 ${numbersToAscending}`);
    console.log(num);
    console.log(`2: 1234 ${numbersToDescending}`);
    console.log(num);
    
    //Ik begrijp wel dat asc en desc wellicht naar fysiek hetzelfde ding verwijzen,
    //dat is misschien niet goed, maar ik snap niet waarom het hier een probleem is,
    //alle mutaties die ik maak, maak ik niet in num, maar in numbersToAscending en
    //numbersToDescending
    //Of.... als je een nieuw array maakt, dan gaat die ook naar hetzelde fysieke ding
    //verwijzen......
    
    numbersToAscending.sort(function(a, b){return a-b});
    console.log(`3: 1234 ${numbersToAscending}`);
    console.log(num);
  
    numbersToDescending.sort(function(c, d){return d-c});
    console.log(`4: 4321 ${numbersToDescending}`);
    console.log(num);
  
    console.log(`5: 1234 ${numbersToAscending}`);
    console.log(num);
    console.log(`6: 4321 ${numbersToDescending}`);
    console.log(num);
  
    //let difference = numsAscendingOrder - numsDescendingOrder;
  }
  
  findTheMagicNumber(["1","2","3","4"]);
  */
