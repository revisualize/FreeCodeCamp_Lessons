function checkCashRegister(price, cash, cid) {

  var BANKNOTES = {
        "ONE HUNDRED": 100,
        "FIFTY":        50,
        "TWENTY":       20,
        "TEN":          10,
        "FIVE":          5,
        "TWO":           2,
        "ONE":           1,
        "HALF":       0.50,
        "QUARTER":    0.25,
        "DIME":       0.10,
        "NICKEL":     0.05,
        "PENNY":      0.01
      };

  var ammountToCustomer = Number( ( cash - price ).toFixed(2) ); 
  
  cid.reverse(); // reverse the cid to work from largest denoms down to smallest.
  
  var change = cid.reduce( function ( accumArr , currentArr , index) {
                                                                           
                                      let backToCustomer = Math.min( ammountToCustomer , currentArr[1] );
                                      backToCustomer = Math.floor( Number( (backToCustomer / BANKNOTES[currentArr[0]]).toFixed(2) ));
    
                                      if (backToCustomer > 0) {         // let to scope the value to the block.
                                          let value = Number( ( backToCustomer * BANKNOTES[currentArr[0]] ).toFixed(2) );

                                          accumArr.push( [currentArr[0] , value ]);
                                          // remove the value from the till.
                                          currentArr[1] = Number( ( currentArr[1] - value ).toFixed(2) );
                                          // remove the value from the ammount given back to the customer.
                                          ammountToCustomer = Number( ( ammountToCustomer - value ).toFixed(2) );
                                      }
                                      return accumArr;
                                  } , []);

  // if we aren't able to 0 the ammount back to the customer. We don't have enough.
  if ( Number( ammountToCustomer.toFixed(2) ) > 0) {
        return "Insufficient Funds";    
  }
  // if the register is empty. We close the store.
  if ( cid.every(function (val) { return Number( val[1].toFixed(2) ) === 0; }) ) {
        return "Closed";
  }
  // Here is your change, ma'am.
  return change;
}

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

/*
Notes:
First we do something that will be easy and may have a use.
Create an object that holds the bank note names and values. (These are in cid[i][0]).
(Don't really know if this will be needed but, it was useful in my last solution.)

We need to calculate the ammount of change to give a customer.
Cash - Price.
However, floating point math in programming tends to have issues.
So, we have to fix the floating point number to 2 decimal places.
This results in a string that needs to be converted back to a Number.

The cash in drawer (cid) array is ordered from pennies to hundred.
If we want to do operations on this change we need to reverse the array.
Now are calculations can give us the largest denoms first back to the customer.
Then, move down to the lesser denoms.

Okay, here are some examples:

Let's say the ammount needed to be given back the the customer:
               |  $5s |  $1s | $.25 | $.10 | $.05 | $.01 |-
---------------|------|------|------|------|------|------|-
Drawer:  10.91 | 5.00 | 3.00 | 1.50 | 0.40 | 0.65 | 0.36 |-
Change:   1.36 |   0  | 1.00 | 0.25 | 0.10 | 0.05 | 0.01 |-
Change:   2.78 |   0  | 2.00 | 0.75 | 0.00 | 0.00 | 0.03 |-
Change:   9.01 | 5.00 | 3.00 | 1.00 | 0.00 | 0.00 | 0.01 |-
---------------|------|------|------|------|------|------|-
Drawer:  38.17 |20.00 | 9.00 | 2.50 | 1.55 | 2.65 | 2.47 |-
Change:  40.00 |20.00 | 9.00 | 2.50 | 1.55 | 2.65 | 2.47 |- Insuff 
Change:  32.00 |20.00 | 9.00 | 2.50 | 0.50 | 0.00 | 0.00 |-
Change:   4.85 | 0.00 | 4.00 | 0.75 | 0.10 | 0.00 | 0.00 |-
---------------|------|------|------|------|------|------|-

So, we need to figure out the amount that the customer still needs back.
We need to figure out how much is in the drawer slot. (currentArr[1])
We need to give the customer back the divsor of the value because
if we need to give the customer 1.36 and the 1.00 drawer has 15.00
we don't want to -1.36 from 15.00
But, if the currentArr is less than the value that we need to give
to the customer we don't want to subtract from that.
So,  Math.min( ammountToCustomer , currentArr[1] ); gives us the smaller
of the two values.
But, we can't give them values that we don't have. So, we have to calc the
divisor of the two values.
Then we need to subtract the value from the currentArr index.
And subtract that value from ammountToCustomer.
*/

// ---------------------------

/*     
This is my first solution.
I didn't like how many times the solution looped.
I didn't like the fact that it didn't feel like how things were done when I worked as a waiter.
I didn't always have a running calc of how much money was in the drawer before I tried to make change.
Sometimes, I couldn't make change for a 100.00 and I didn't find out until I started counting.

So, I refactored:

---orig sol:

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
var bankNotesNamedValues = Object.keys(bankNotesInPennies);
          // ['ONE HUNDRED','TWENTY','TEN','FIVE','ONE','QUARTER','DIME','NICKEL','PENNY'];
function convertToPennies(num) { return Number((num*100).toFixed(0)); } 
function convertToDollars(num) { return Number((num/100).toFixed(2)); }


function checkCashRegister(price, cash, cid) {
  var cashInDrawer = cid.reverse().reduce( function ( accumObject , currentArray ) {
                                      var currentPennies = convertToPennies(currentArray[1]);
                                      accumObject.total += currentPennies;
                                      accumObject[currentArray[0]] = currentPennies / bankNotesInPennies[currentArray[0]] ;
                                      return accumObject;
                                  } , { total: 0 } );
  
  var cost = convertToPennies(price);
  var tender = convertToPennies(cash);
  var changeInPennies = tender - cost;

  if (changeInPennies > cashInDrawer.total) { return "Insufficient Funds"; } // We should return as fast as possible.
  // Math.floor(num / value);
  var change = [];
  change = bankNotesInPenniesValues.reduce( function (accumArray , currentValue , index) {
    var divisor = Math.floor(changeInPennies / currentValue) ;

    if (divisor && cashInDrawer[bankNotesNamedValues[index]] >= divisor) {
      accumArray.push( [ bankNotesNamedValues[index] , convertToDollars( bankNotesInPenniesValues[index] * divisor) ] );
      changeInPennies -= currentValue * divisor;
      cashInDrawer.total -= currentValue * divisor;
      return accumArray;
    }

    else  if (divisor && cashInDrawer[bankNotesNamedValues[index]] ) {
      accumArray.push( [ bankNotesNamedValues[index] , convertToDollars( bankNotesInPenniesValues[index] * cashInDrawer[bankNotesNamedValues[index]] ) ] );
      changeInPennies -= currentValue * cashInDrawer[bankNotesNamedValues[index]];
      cashInDrawer.total -= currentValue * cashInDrawer[bankNotesNamedValues[index]];
      return accumArray;
    }

    return accumArray;
  }, []);
  
  if (changeInPennies === 0 && change.length > 0 && cashInDrawer.total !== 0) {
    return change;
   }
   else if (changeInPennies === 0 && change.length > 0 && cashInDrawer.total === 0){
    return "Closed";
   }
   else if (changeInPennies > 0 && cashInDrawer.total > 0) {
     return "Insufficient Funds";
   }
   else return "Error";
}
*/
