function getFactorial(num) {
    let interm = num;
    for (let i = num; i < num; i--) {
      interm = interm * interm - 1;
    }

    return interm;
}

result = getFactorial(3);
console.log(result);