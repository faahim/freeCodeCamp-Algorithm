
function repeatStringNumTimes(str, num) {
  // repeat after me
  
  var repeat = "";
  
  for (i=0; i<num; i++) {
    if (num < 0) {
      console.log("");
    } else {
      repeat += str;
    }
  }
  
  return repeat;
}

repeatStringNumTimes("Meaw! ", 5);
