
function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      var altered = after.charAt(0).toUpperCase();
      altered += after.replace(after[0], "");
      
      str = str.replace(before, altered);
    } else {
      str = str.replace(before, after);
    }
  
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");

  //This was an easy and fun one! :)