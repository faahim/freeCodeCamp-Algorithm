
function pairElement(str) {
    var splitted = str.split("");
    var mulArr = [];
    
    //Creating a 2D Array of charecters
    for (i=0; i<splitted.length; i++) {
      mulArr.push(Array.from(splitted[i]));
    }
    
    //Matching and Creating pairs
    for (i=0; i<splitted.length; i++) {
      switch (splitted[i]) {
        case "A":
          mulArr[i].push("T");
          break;
        case "T":
          mulArr[i].push("A");
          break;
        case "C":
          mulArr[i].push("G");
          break;
        case "G":
          mulArr[i].push("C");
          break;
      }
    }
  
    return mulArr;
  }
  
  pairElement("GCG");

  //This time, As always, I thought my code was super messy. But then I found out
  //that it's a bit cleaner than the provided basic solution. LOL :D