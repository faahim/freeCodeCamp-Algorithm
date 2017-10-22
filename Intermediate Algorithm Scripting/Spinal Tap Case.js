
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    
    var newStr = str.split(" ").join("-").split(/(?=[A-Z])/).join("-").toLowerCase();
    
    str = newStr.replace(/(--)/gi, "-").replace(/_/g, "");
    
    return str;
  }
  
  spinalCase('This Is Spinal Tap');

  //Mess Mess Mess! It's a complete mess!