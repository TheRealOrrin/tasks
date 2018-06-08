function capitaliseLetter(str) {
    const separatedWords = str.split(" ");
    
    for(i = 0; i < separatedWords.length; i++) {
      let firstLetter = separatedWords[i].split("", 1);
      let restOfWord = separatedWords[i].slice(1);
      firstLetterUpperCase = firstLetter[0].toUpperCase();
      separatedWords[i] = firstLetterUpperCase.concat(restOfWord);
      }
  
  return separatedWords.join(" ");
  
  }
  
  result = capitaliseLetter("hello world");
  console.log(result);