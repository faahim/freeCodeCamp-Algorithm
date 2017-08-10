
function mutation(arr) {
  
  var refWord = arr[0].toLowerCase();
  
  var toSearch = arr[1].toLowerCase();
  
  var result = 0;
  
  for (i=0; i<toSearch.length; i++) {
    result = refWord.indexOf(toSearch[i]);
    
    if (result < 0) {
      return false;
    }
    
  }
  
  return true;
  
}

mutation(["Hello", "hello"]);


//This one was really interesting!!
//Unlike the other one I just did, This one seemed easy as pie as first.
//But it was bit tough for me. Loved it! :)