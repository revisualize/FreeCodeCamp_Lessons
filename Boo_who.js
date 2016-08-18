const booWho = (bool) => (typeof bool) === "boolean";
// Two other ways to solve it:
// const booWho = (bool) => Boolean(bool) === bool;
// const booWho = (bool) => !!bool === bool;

/*
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool) === "boolean";
}
*/
booWho(true); // should return true.
booWho(false); // should return true.
booWho([1, 2, 3]); // should return false.
booWho([].slice); // should return false.
booWho({ "a": 1 }); // should return false.
booWho(1); // should return false.
booWho(NaN); // should return false.
booWho("a"); // should return false.
booWho("true"); // should return false.
booWho("false"); // should return false.
