function myReplace(str, before, after) {
  if (before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall"); 
          // should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); 
          // should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling"); 
          // should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john"); 
          // should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms"); 
          // should return "Let us get back to more Algorithms".
