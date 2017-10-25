
function findElement(arr, func) {
    for (i=0; i<arr.length; i++) {
      //Calling the given func to check if the element passes
      var check = func(arr[i]);
      
      if (check) {
        return arr[i];
      }
    }
    
  }
  
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

  //Took me seconds! Easy one after a long time!