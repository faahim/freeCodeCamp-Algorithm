
function largestOfFour(arr) {
  // You can do this!
  
  var bigNumbers = [];
  
  var holdNum = 0;
  var holdNumTemp = 0;
  
  for (i=0; i<arr.length; i++) {
    
    holdNum = 0;
    holdNumTemp = 0;
        
    for (j=0; j<arr[i].length; j++) {
      
      
      if (arr[i][j] > arr[i][j+1]) {
        
        holdNumTemp = arr[i][j];
        
      } else {
        holdNumTemp = arr[i][j+1];
      }
      
      if (holdNumTemp > holdNum) {
        holdNum = holdNumTemp;
      }
      
    }
    
    bigNumbers.push(holdNum);
    
  }
  
  return bigNumbers;
}

largestOfFour([[34, 5, 99, 23], [100, 34, 56, 6], [45, 87, 64, 101], [1000, 1003, 857, 1]]);


//Messy code!! Not sure if's possible to get it any worse than this.
//I could use some built-in function to solve it easily, But all of a sudden,
//I became stubborn to solve it manually. 