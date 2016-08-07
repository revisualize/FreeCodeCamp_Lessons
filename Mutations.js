function mutation(arr) {
  var firstStr = arr[0].toLowerCase();
  var secondStr = arr[1].toLowerCase();
  for (var i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) < 0) {
      return false;
    }
  }
  return true;
}


mutation(["hello", "hey"]); // should return false.
mutation(["hello", "Hello"]); // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
