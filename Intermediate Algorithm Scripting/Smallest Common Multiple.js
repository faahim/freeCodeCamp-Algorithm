
function smallestCommons(arr) {
    
    arr = arr.sort();
    var range = [];
    
    //Creating an array of all the number in the range
    for (i=arr[0]; i <= arr[arr.length-1]; i++) {
      range.push(i);
    }
    
    //Multiplying the gretest number and checking if that product is divideable by
    //all the numbers in the range.
    for (i=2; i>1; i++) {
      var testNum = range[range.length-1] * i;
      
      if ((range.map(function(num){
        return testNum % num;
      }).reduce(function(a,b){return a+b;})) == 0) {
        return testNum;
      }
    }
    
  }
  
  smallestCommons([1,13]);

  //My code is concise than most other I've checked. But it maybe a bit slower. :/