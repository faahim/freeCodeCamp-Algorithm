
function steamrollArray(arr) {
    // I'm a steamroller, baby
    var flat = [];
    
    function roller(ele) {
      ele.map(function(item){
        if (Array.isArray(item)) {
          //If the inner item is an array, calling this same function again with that inner arry
          roller(item);
        } else {
          flat.push(item);
        }
      });
    }
    
    roller(arr);
    return flat;
    
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  //This one got my brain damaged! It's the code I've written at first time in the morning,
  //And now it's 4pm! God knows what wrong I was doing all day! -_-