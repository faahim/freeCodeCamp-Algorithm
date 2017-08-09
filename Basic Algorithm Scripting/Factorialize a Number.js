
function factorialize(num) {
  
  var result = 1;
  
  for (i=1; i<=num; i++) {
    result = result*i;
  }
  num = result;
  return num;
}

factorialize(3);