
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    
    // Only change code below this line
    var key2Match;
    
    for (i=0; i<collection.length; i++) {
      for (j=1; j<=(Object.keys(source).length); j++) {
        key2Match = Object.keys(source)[j-1];
        
        if (collection[i].hasOwnProperty(key2Match)) {
            if ( (collection[i][key2Match]) == (source[key2Match]) ) {
            if (j == Object.keys(source).length) {
              arr.push(collection[i]);
            }
          }
        }
      }
    }
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }, { first: "Fahim", last: "Kopila" }, { first: "Bart", last: "Kamila", futo: "Lamico" }], { last: "Kamila", futo: "Lamico" });

  //It seemed a bit hard to me at first. And tbh, I was pretty proud of my solution when I finished it.
  //But then I looked at the wiki and almost all other solution is more elegant! How do they do that!! :(
  