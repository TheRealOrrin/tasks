function getFactorial(num) {
    const sourceNumber = num;
    let result = num;
      (let i = 0; i < sourceNumber; i++) {
      result = result * --num;
      console.log(`Intermediate result is ${result}`);
      if (num == 1) {break}
    }

    return result;
}

result = getFactorial(8);
console.log(result);