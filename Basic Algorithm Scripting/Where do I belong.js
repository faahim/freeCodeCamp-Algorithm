
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var loc; //Final index location that we'll output
  
    var sorted = arr.sort(function(a, b){
      return a-b;
    });
  
  for (i=0; i<sorted.length; i++) {
    if (0 >= (num - sorted[i]) ) {
       loc = sorted.indexOf(sorted[i]); //If we find any number larger than our input, we're storing it's index.
       return loc;
    }
  }
  
  return sorted.length; //If no number in array is found larger, that means our input is the largest. So, it belongs to last index.
  
}

getIndexToIns([45, 344, 450, 54, 45, 76, 54, 21, 5], 92);


//Enjoyed this one. I was going to write another if statement on the second phase, but then I realized that I can just return the last index. It made me feel like I'm starting to get some of the concepts. :)
