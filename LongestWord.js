function LongestWord(sen) {

  const arrayOfWords = sen.split(" ");
  const numOfWords = arrayOfWords.length;
  let longestWord = arrayOfWords[0];

  for (let i = 1; i < numOfWords; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
}

let result1 = LongestWord("kont pis klote");
console.log(result1);
let result2 = LongestWord("kont pis klote kloot");
console.log(result2);