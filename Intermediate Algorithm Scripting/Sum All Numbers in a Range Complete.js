function sumAll(arr) {
    
    var minmax = [];
    var sum = 0;
    
    var getMinMax = arr.reduce(function(a, b) {
      minmax.push(Math.min(a, b));
      minmax.push(Math.max(a, b));
    });
    
    var firstNumber = minmax[0];
    var lastNumber = minmax[(minmax.length)-1];
    
    while (firstNumber <= lastNumber) {
      sum += firstNumber;
      firstNumber++;
    }
    return sum;
  }
  
  sumAll([10, 5]);

  //I could just sort the Array to get the highest and lowest number I guess.
  //But I wrote it this way so that the programm functions correctly even if there's more than 2 number in the Array.