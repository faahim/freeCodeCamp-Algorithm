
function convertToRoman(num) {
    
    var finalArr = [];
    
    var arrayOfNum = (num).toString().split("").map(Number);
    console.log(arrayOfNum);
    
    for (i = 0; i < arrayOfNum.length; i++) {
     
      if (i == 3) {
        switch(arrayOfNum[(arrayOfNum.length - 1)- i]) {
          case 1:
            finalArr.unshift("M");
            break;
          case 2:
            finalArr.unshift("MM");
            break;
          case 3:
            finalArr.unshift("MMM");
            break;
          case 4:
            finalArr.unshift("MMMM");
            break;
          case 5:
            finalArr.unshift("MMMMM");
            break;
          case 6:
            finalArr.unshift("MMMMMM");
            break;
          case 7:
            finalArr.unshift("MMMMMMM");
            break;
          case 8:
            finalArr.unshift("MMMMMMMM");
            break;
          case 9:
            finalArr.unshift("MMMMMMMMM");
            break;
        }
      } else if (i == 2) {
        switch(arrayOfNum[(arrayOfNum.length - 1)- i]) {
          case 1:
            finalArr.unshift("C");
            break;
          case 2:
            finalArr.unshift("CC");
            break;
          case 3:
            finalArr.unshift("CCC");
            break;
          case 4:
            finalArr.unshift("CCCC");
            break;
          case 5:
            finalArr.unshift("D");
            break;
          case 6:
            finalArr.unshift("DC");
            break;
          case 7:
            finalArr.unshift("DCC");
            break;
          case 8:
            finalArr.unshift("DCCC");
            break;
          case 9:
            finalArr.unshift("CM");
            break;
        }
      } else if (i == 1) {
        switch(arrayOfNum[(arrayOfNum.length - 1)- i]) {
          case 1:
            finalArr.unshift("X");
            break;
          case 2:
            finalArr.unshift("XX");
            break;
          case 3:
            finalArr.unshift("XXX");
            break;
          case 4:
            finalArr.unshift("XL");
            break;
          case 5:
            finalArr.unshift("L");
            break;
          case 6:
            finalArr.unshift("LX");
            break;
          case 7:
            finalArr.unshift("LXX");
            break;
          case 8:
            finalArr.unshift("LXXX");
            break;
          case 9:
            finalArr.unshift("XC");
            break;
        }
      } else if (i == 0) {
        switch(arrayOfNum[(arrayOfNum.length - 1)- i]) {
          case 1:
            finalArr.unshift("I");
            break;
          case 2:
            finalArr.unshift("II");
            break;
          case 3:
            finalArr.unshift("III");
            break;
          case 4:
            finalArr.unshift("IV");
            break;
          case 5:
            finalArr.unshift("V");
            break;
          case 6:
            finalArr.unshift("VI");
            break;
          case 7:
            finalArr.unshift("VII");
            break;
          case 8:
            finalArr.unshift("VIII");
            break;
          case 9:
            finalArr.unshift("IX");
            break;
        }
      }
    }
    
    num = finalArr.join("");
    
    return num;
  }
  
  
  convertToRoman(36);

  
  //This is probably the worst solution of an algorithm I've came up with.
  //I've almost hard-coded the entire thing! I saw some beautiful solution to this
  //that other people wrote and I'm certain that they wouldn't come up
  //on my mind. So, I am not gonna change my code.