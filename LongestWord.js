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

//OD, 25-05-2018

/* Using the JavaScript language, have the function LongestWord(sen) take
the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first
word from the string with that length. Ignore punctuation and assume sen
will not be empty. */