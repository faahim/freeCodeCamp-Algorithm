
function sumFibs(num) {
    var fibonacci = [1, 1];
    var sum = 2;
    
    if (num <= 1) {
      return 1;
    } else {
        while (((fibonacci[fibonacci.length-1]) + (fibonacci[fibonacci.length-2])) <= num) {
        fibonacci.push((fibonacci[fibonacci.length-1]) + (fibonacci[fibonacci.length-2]));
  
        if ((fibonacci[fibonacci.length-1] % 2) !== 0) {
          sum += fibonacci[fibonacci.length-1];
        }
      }
    }
    
    return sum;
  }
  
  sumFibs(1);

  //I am at point right now where I can solve the problem sooner or later.
  //But the efficiency of the solution is what gets me thinking.