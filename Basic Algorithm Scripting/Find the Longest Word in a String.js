
function findLongestWord(str) {
  
  var splitted = str.split(" ");
  var wordLength = 0;
  
  for (i=0; i<splitted.length; i++) {
    var currentWordLength = splitted[i].length;
    
    if ( currentWordLength > wordLength) {
      wordLength = currentWordLength;
    }
  }
  
  return wordLength;
}

findLongestWord("Do you know what is Disestablishmentarianism?");
