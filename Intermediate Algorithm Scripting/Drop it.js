
function dropElements(arr, func) {
    
      for (i=0; i<arr.length; i++) {
        if (func(arr[i])) {
          return arr.slice(i);
        }
      }
      
      return [];
    }
    
    dropElements([1, 2, 3, 4], function(n) {return n > 5;});

    //This little guy got on my nerve! -_-