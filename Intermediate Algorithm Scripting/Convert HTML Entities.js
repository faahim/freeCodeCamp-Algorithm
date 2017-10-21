
function convertHTML(str) {
    
    //For checking the specific charecter and returning it's replacement.
    function replacer(char) {
      switch (char) {
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
      }
    }
    
    str = str.replace(/[&<>"']/gi, replacer);
    
    return str;
  }
  
  convertHTML("Dolce & Gabb'ana");

  //Wish the idea of using two similer array would come in mind >_<