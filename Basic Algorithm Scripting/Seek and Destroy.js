
function destroyer(arr) {
  // Remove all the values
  
  
  var args = [];
  var finalArr =[];
  
  for (i=1; i<arguments.length; i++) {
    args.push(arguments[i]); //Stored all the argument user entered.
  }
  
  for (i=0; i<arr.length; i++) {
    
    if (!(args.includes(arr[i]))) {
      finalArr.push(arr[i]); //Checking all the elements in inputted array and matching it with extra arguments. Storing in finalArry when the element in inputted array is not included in supplied arguments.
    }
        
  }
  
  
  return finalArr;
  
}

destroyer(["i", "you", "he", "&", "they", "me"], "i", "he", "they");


/*
My gosh!! I'll never forget this one! Was stuck with it about 5 hours! -_-
It wasn't clicking! I even wrote 50+ lines of code that didn't pass.
At first, I hard coded it and then I realised it wasn't the proper way, even though it passed.
But the final solution is not all that complex. :)
*/