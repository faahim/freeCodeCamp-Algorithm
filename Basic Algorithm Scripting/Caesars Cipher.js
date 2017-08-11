
function rot13(str) { // LBH QVQ VG!
  
  var charCodes = [];
  var final = "";
  
  for (i=0; i<str.length; i++) {
    //Collecting charecter code of each charecter and adding/substracting 13 depending on their position within A-Z.
    var currentChar = 0;
    
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78 ) {
      currentChar = ((str.charCodeAt(i))+13);
    } else if (str.charCodeAt(i) > 76 && str.charCodeAt(i) < 91 ) {
      currentChar = ((str.charCodeAt(i))-13);
    } else {
      currentChar = ((str.charCodeAt(i))); 
    }
    charCodes.push(currentChar); //Collecting all the char codes inside an array
  }
  
  
  for (j=0; j<charCodes.length; j++) {
    final += String.fromCharCode(charCodes[j]); //Retreving charecters for code and concatting them into a single string.
  }
  
  return final;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


//Encrypting Decrypting! Made me feel like a geek! :P