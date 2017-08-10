
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  var trimmed;
  
  
  if (num<=3) {
    trimmed = str.slice(0, num) + "...";
  } else if (num >= str.length) {
    trimmed = str;
  }
  else {
    trimmed = str.slice(0, num-3) + "...";
  }
  
  return trimmed;
}

truncateString("A-tisket a-tasket A green and yellow basket", 12);
