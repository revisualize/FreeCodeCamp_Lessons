const repeatStringNumTimes = (str, num) => num > 0 && num != Infinity ? str += repeatStringNumTimes(str, num-1) : "";
/*
I was playing around with a less complex solution and I came up with this:

const repeatStringNumTimes = (str, num) => (num > 0) ? new Array(num).fill(str).join('') : "";

I actually like this solution. And it's fairly quick.
*/
/*
Note: I do know about the ES6 String.prototype.repeat() 
I didn't want to use it. I wanted to stay with the nature of the challenge.
Also, using negative numbers results in an error with .repeat()
*/
/*
function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";
    var result = "";
    for (var i = 0; i <num; i++) {
        result += str;
    }
    return result;
}
*/
/*
function repeatStringNumTimes(str, num) {
     if (num <= 0) return "";
     return str.repeat(num);
}
*/
/*
function repeatStringNumTimes(str, num) {
     if (num <= 0) return "";
     var result = new Array(num).fill(str);
     return result.join('');
}
*/


/* Testing for my ES6 refactor of the old code below.
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
      return str += repeatStringNumTimes(str, num-1);
  }
  return "";
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
