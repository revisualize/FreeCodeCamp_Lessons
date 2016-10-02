function fearNotLetter(str) {
  for (var i = 1; i < str.length; i++) {
  	if (str.indexOf(String.fromCharCode(str.charCodeAt(i) - 1)) === -1) {
  		return String.fromCharCode(str.charCodeAt(i) - 1);
  	}
  }
  return undefined;
}

fearNotLetter("abce"); // should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); // should return undefined.
