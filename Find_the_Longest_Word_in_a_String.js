const findLongestWord = s => Math.max(...s.replace(/[^A-Z0-9 -]/gi, "").split(" ").map(w => w.length));

/*
const findLongestWord = (str) => str.replace(/[^A-Z0-9 -]/gi, "").split(" ").reduce((a, b) => b.length > a ? b.length : a, 0);
*/
/*
function findLongestWord(str) {
  return str.replace(/[^A-Z0-9 -]/gi, "").split(" ").reduce((a, b) => b.length > a ? b.length : a, 0);
}

On October 7, 2016, I forgot that I had the above code and someone asked in the FreeCodeCamp/HelpJavaScript room
if this challenge could be solved with reduce. I wrote this:

function findLongestWord(str) {
	 return str.split(" ").reduce(function (pre, curr) { 
	 	                    if (curr.length > pre) { 
	 	                    	return curr.length 
	 	                    } 
	 	                    else { 
	 	                    	return pre;
	 	                    } }, 0);
}

*/

/* Two different refactors below:

function findLongestWord (str) {
  var l = 0;
  str.replace(/[^A-Z0-9 -]/gi, " ").split(" ").forEach(function (x) {if (x.length > l) { l = x.length; }});
  return l;
}

      The first code that I wrote for this challenge:
function findLongestWord(str) {
  str.replace(/[\W_]/g, "");       // Sanitize the string to remove comas.
  var array = str.split(" ");          // Split the string into an array
  var elementSize = 0;                 // Variable for storing the size of longest item in array.

  for (var i = 0; i < array.length; i++) {
    if (elementSize < array[i].length) {      // If the element size is less than item length
      elementSize = array[i].length;          // set the elementSize to the item length in the array.
    }
  }
  // return str.length;
  return elementSize;
}
*/
findLongestWord("The quick brown fox jumped over the lazy dog"); 
          // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog");
          // should return 6.
findLongestWord("May the force be with you");
          // should return 5.
findLongestWord("Google do a barrel roll");
          // should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow");
          // should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
          // should return 19.


/* Another option for this lesson:

function findLongestWord(str) {
  var longestWord = "";
  str.split(" ").forEach(function (x) {
      if(x.length > longestWord.length){
        longestWord = x;
    }});
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

*/
