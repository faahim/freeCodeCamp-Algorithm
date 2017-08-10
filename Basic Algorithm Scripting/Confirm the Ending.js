  
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  var splitted = str.split(' ');
  
  var targetSize = target.length;
  
  var analysed = splitted[splitted.length-1].substr(-targetSize);
  
  return analysed === target;
  
}

confirmEnding("Bastian", "n");


//This is what I did. Below is the solution I found later
//in fCC wiki.

/*
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
*/

//How elegant is that! People are amazing and talented!