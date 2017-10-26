
function truthCheck(collection, pre) {
    // Is everyone being true?
    
    var check = collection.map(function(item){
      return Boolean(item[pre]);
    });
    
    if (check.includes(false)) {
      return false;
    } else {
      return true;
    }
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  //Easy cheesy! :D