
function chunkArrayInGroups(arr, size) {
  // Break it up.
   
  var finalArr = [];
  
  var tempNum = 0;
  
  var tempArr = [];
  
  for (i=0; i<arr.length/size; i++) {
    
    tempArr = arr.slice(tempNum, tempNum+size);
    
    finalArr.push(tempArr);
    
    tempNum += size;
    
  }
  
  
  
  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);


//At first I solved it and It worked, But I didn't really understand why! :P
//Later I figured it out and became a bit proud of myself! haha :D


//The below code will handle input 0. The fCC test doesn't require it though.
//Just in case someone want to find bugs or geek out on me! :P
//Plus, it's fun

/*

function chunkArrayInGroups(arr, size) {
  // Break it up.
   
  var finalArr = [];
  
  var tempNum = 0;
  
  var tempArr = [];
  
  var error = "You can't have an Arry with a length of 0! Don't you know that, Or Are you testing my intelligence? :/ ";
  
  if (size === 0) {
    return console.log(error);
  } else {
    for (i=0; i<arr.length/size; i++) {
    
      tempArr = arr.slice(tempNum, tempNum+size);

      finalArr.push(tempArr);

      tempNum += size;

    }
  }
  
  
  
  return finalArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 0);

*/