
function addTogether() {
    
    //Cheecking if all the afguments is numbers
    if (arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
        return arguments[0] + arguments[1];
      } else if (arguments.length === 1 && typeof arguments[0] === "number") {
        var addy = arguments[0];
        return adder;
      } else {
        return undefined;
      }
    
      //Returning a function to add the seconds number
    function adder(num){
      if (typeof num === "number"){
        return (addy + num);
      } else {
       return undefined; 
      }
    }
    
  }
  
  addTogether(2)(7);

  //Figuring out the function returning part was a bit tricky!