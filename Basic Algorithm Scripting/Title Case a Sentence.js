
function titleCase(str) {
  
  var splitted = str.toLowerCase().split(" ");
  
  var capitalized = [];
  
  for (i=0; i<splitted.length; i++) {
    
    var word = splitted[i].charAt(0).toUpperCase();
    
    var toCap = splitted[i].replace(splitted[i].charAt(0), word);
    
    capitalized.push(toCap);
    
  }
  
  capitalized = capitalized.join(" ");
  
  return capitalized;
}

titleCase("my coDe suCKs! -_-");
