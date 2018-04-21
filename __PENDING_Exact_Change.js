/*

             currently in progress.

*/

function checkCashRegister(price, cash, cid) {

  var bankNotesInPennies = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  };
  var bankNotesInPenniesValues = Object.values(bankNotesInPennies);
  // [ 10000, 2000, 1000, 500, 100, 25, 10, 5, 1 ];
  
  function convertToPennies(num) { return Number((num*100).toFixed(0)); } 
  function convertToDollars(num) { return Number((num/100).toFixed(2)); }
  
  var cashInDrawer = cid.reduce( function ( accumObject , currentArray ) {
                                      var currentPennies = convertToPennies(currentArray[1]);
                                      accumObject.total += currentPennies;
                                      accumObject[currentArray[0]] = currentPennies / bankNotesInPennies[currentArray[0]] ;
                                      return accumObject;
                                  } , { "total": 0 } );

  var cost = convertToPennies(price);
  var tender = convertToPennies(cash);
  var changeInPennies = tender - cost;

  if (change > cashInDrawer.total) { return "Insufficient Funds"; } // We should return as fast as possible.

  // return cashInDrawer;
  return cashInDrawer;
}
