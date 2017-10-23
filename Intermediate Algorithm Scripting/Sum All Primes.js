
function sumPrimes(num) {
    
    var primes = [];
    var result = 0;
    
      //Creating an array of all numbers up to the given number  
      for (i=2; i<= num; i++) {
         primes.push(i);
      }
      
      //Setting the multiplier
      for (p=0; primes[p] != primes[primes.length-1]; p++) {
          //Finding and removing all the multiplies of p (non prime numbers)
          for (i=p+1; i<primes.length; i++) {
          if ((primes[i] % primes[p]) == 0) {
            primes.splice(i, 1);
          }
        }
      }
      
      result = primes.reduce(function(sum, cur) {
        return sum+cur;
      });
      
      return result;
   
  }
  
  sumPrimes(977);

  //Finally some code that I'm pretty proud of! ^_^