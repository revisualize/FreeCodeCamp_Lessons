const repeatStringNumTimes = (str, num) => num > 0 && num != Infinity ? str += repeatStringNumTimes(str, num-1) : "";
/*
Note: I do know about the ES6 String.prototype.repeat() 
I didn't want to use it. I wanted to stay with the nature of the challenge.
Also, using negative numbers results in an error with .repeat()
*/
/* Testing for my ES6 refactor of the old code below.
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
		return str += repeatStringNumTimes(str, num-1);
	}
	else {
		return "";
	}
}
*/ 
/* Old code
function repeatStringNumTimes(str, num) {
  var result = "";
  while (num > 0) {
      result += str;
      num -= 1;
    }
  return result;
}
*/
repeatStringNumTimes("abc", 3);
