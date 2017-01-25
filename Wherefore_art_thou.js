function whatIsInAName(collection, source) {
  var sK = Object.keys(source);
  return collection.filter(x => sK.every(y => x[y] === source[y]));
}
/*
function whatIsInAName(collection, source) {
  var sourceKey = Object.keys(source);
  return collection.filter(function (x) { 
        return sourceKey.every(function (y) {
            return x[y] === source[y];
         });
      }
   );
}
*/
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
                    // should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); 
                    // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
                    // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
                    // should return [{ "a": 1, "b": 2, "c": 2 }].
