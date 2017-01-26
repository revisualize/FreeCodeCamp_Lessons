function binaryAgent(str) {
  return str.split(" ").map(x => String.fromCharCode(parseInt(x, 2))).join("");
}

/* The 2**(7-i) causes some issues with runs.
function binaryAgent(str) {
  var arr = str.split(" ");
  function bin2dec(bin) {
    var dec = 0;
    for (var i = 0; i < 8; i++) {
       if (bin[i] === "1") dec += 2**(7-i);
    }
    return dec;
  }
  return arr.map(x => String.fromCharCode(bin2dec(x))).join("");
}
*/

/* This is code that I put together just to get it to work:
function binaryAgent(str) {
  var arr = str.split(" ");
  function bin2dec(bin) {
    var dec = 0;
    if (bin[0] === "1") dec += 128;
    if (bin[1] === "1") dec += 64;
    if (bin[2] === "1") dec += 32;
    if (bin[3] === "1") dec += 16;
    if (bin[4] === "1") dec += 8;
    if (bin[5] === "1") dec += 4;
    if (bin[6] === "1") dec += 2;
    if (bin[7] === "1") dec += 1;
    return dec;
  }
  return arr.map(x => String.fromCharCode(bin2dec(x))).join("");
}
*/

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
              // should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
              // should return "I love FreeCodeCamp!"
