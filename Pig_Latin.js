// My solution for https://www.freecodecamp.com/challenges/pig-latin
function translatePigLatin(str) {
   var search = str.search(/[aeiou]/);
   return (search === 0) ? str + "way" : str.slice(search) + str.substr(0, search) + "ay";
}
/*  Refactored code below to the code above:
function translatePigLatin(str) {
  var re = /[aeiou]/;
  var ran = false;
  while (!re.test(str[0])) {
    str = str.substr(1) + str[0];
    ran = true;
  }
  return (ran) ? str+"ay" : str+"way";
}
*/
translatePigLatin("consonant");
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
