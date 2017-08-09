
function reverseString(str) {
  
  var char = [];
  var reversedArray = [];
  
  for (i = 1; i<=str.length; i++) {
    
    char = [str.charAt(str.length-i)];
    
    reversedArray = reversedArray.concat(char);
    
  }
  
  var finalString = reversedArray.join('');
  
  
  return finalString;
  
}

reverseString("Meaw");
