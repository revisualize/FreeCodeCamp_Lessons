function titleCase(str) {
  stringArray = str.toLowerCase().split(" ");
  for (var i = 0; i < stringArray.length; i++) {
      stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
  return stringArray.join(" ");
}

titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // should return "Here Is My Handle Here Is My Spout".
