
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  var truthy = [];
  
  for (i=0; i<arr.length; i++) {
    if (arr[i]) {
      truthy.push(arr[i]);
    }
  }
  
  return truthy;
}

bouncer([1, null, NaN, 2, undefined]);


//This one made my head spin!
//The simple thing I didn't realize before now, is 'true' and 'truthy' isn't same! -_-