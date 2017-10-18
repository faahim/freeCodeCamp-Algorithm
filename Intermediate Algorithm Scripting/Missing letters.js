
function fearNotLetter(str) {
    for (i=0; i<str.length-1; i++) {
      if ((str.charCodeAt(i)) != (str.charCodeAt(i+1)-1) ) {
        return String.fromCharCode(str.charCodeAt(i)+1);
      }
    }
    
    return undefined;
  }
  
fearNotLetter("yz");  

//This was an easy one! I've benchmarked it and this time,
//It's actually pretty efficient than the provided basic one.
