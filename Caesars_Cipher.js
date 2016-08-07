function rot13(str) {
  var decodedArr = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 & str.charCodeAt(i) <= 90) 
    {
      if (str.charCodeAt(i) > 77)
        {
          decodedArr.push(String.fromCharCode(str.charCodeAt(i) - 13));
        }
      else 
      {
        decodedArr.push(String.fromCharCode(str.charCodeAt(i) + 13));
      }
    }
    else
      {
        decodedArr.push(String.fromCharCode(str.charCodeAt(i)));
      }
  }
  return decodedArr.join("");
}


rot13("SERR PBQR PNZC"); // Should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // Should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // Should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); 
     // Should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
