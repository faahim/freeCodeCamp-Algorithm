
function uniteUnique(arr) {
    var unionArr = [];
    
    for (i=0; i<arguments.length; i++) {
      for (j=0; j<arguments[i].length; j++) {
        if (!(unionArr.includes(arguments[i][j]))) {
          unionArr.push(arguments[i][j]);
        }
      }
    }
    
    
    return unionArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //I thought it'd be hard!