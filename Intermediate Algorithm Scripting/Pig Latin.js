
function translatePigLatin(str) {
    var strArray = str.split('');
    var cons = [];
    
    //Checking if the first letter is vowel
    if (str[0] == 'a' ||
       str[0] == 'e' ||
       str[0] == 'i' ||
       str[0] == 'o' ||
       str[0] == 'u') {
        return str+"way";
        } else {
            //If the first letter is not vowel, searching for the first vowel letter.
          for (i=0; i<strArray.length; i++) {
            if (strArray[i] == 'a' ||
               strArray[i] == 'e' ||
               strArray[i] == 'i' ||
               strArray[i] == 'o' ||
               strArray[i] == 'u') {
  
              return str.substr(i)+cons.join("")+'ay';
            } else {
              cons.push(strArray[i]);
            }
          }
        }

    return str;
  }
  
  translatePigLatin("consonant");

  //The code looks a bit messy. Gotta look into Regex!