
function palindrome(str) {
  // Good luck!
  
  var converted = str.replace(/[\W_]/g, '');
  var toLow = converted.toLowerCase();
  
  var splitted = toLow.split("");
  var reversed = splitted.reverse();
  var concatted = reversed.join('');
  
  return concatted === toLow;
    
    
//   return toLow;
}



palindrome("1 eye for of 1 eye.");
