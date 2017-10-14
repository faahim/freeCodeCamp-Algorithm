
function diffArray(arr1, arr2) {
    var newArr = [];
    var uniqueOfarr1 = [];
    var uniqueOfarr2 = [];
  //   Same, same; but different.
    for (i=0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) == -1) {
        uniqueOfarr1.push(arr1[i]);
      }
    }
    
    for (i=0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        uniqueOfarr2.push(arr2[i]);
      }
    }
    
    newArr = uniqueOfarr1.concat(uniqueOfarr2);
    
    return newArr;
  }
  
  diffArray([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5, 8, 9]);

  //This was one of those that seems really easy (Actually, it is!) But took me some time to figure out
  