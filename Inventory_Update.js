function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    var inventory = arr1.concat(arr2)
                        .reduce( function ( obj , item ) {
                                      obj[item[1]] = (obj.hasOwnProperty(item[1])) ? obj[item[1]] + item[0] : item[0];
                                      return obj;
                                    }, {});
    
    return Object.keys( inventory )
      .map( function ( key ) {
                return [ Number(inventory[key]) , String(key) ];
            })
      .sort( function ( a , b ) { 
                return a[1] > b[1]; 
            });  

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length; 
                // should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); 
                // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []); 
                // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); 
                // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]); 
                // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].




/*======   First Solution:

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var inventory = {};

    function addItemInventory(item){
      // Let's create a function with a lovely side effect
          inventory[item[1]] = (inventory.hasOwnProperty(item[1])) ? inventory[item[1]] + item[0] : item[0];      
    }
    function sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
              result[key] = obj[key];
              return result;
            }, {});
    }

    arr1.forEach(function add1(i) { addItemInventory(i); });
    arr2.forEach(function add2(i) { addItemInventory(i); });

    return Object.keys(sortObject(inventory)).map(function(key) {
        return [Number(inventory[key]) , key ];
    });  

}

======   Second Solution:

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var inventory = {};
  
    function sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
              result[key] = obj[key];
              return result;
            }, {});
    }

    arr1.concat(arr2).forEach( function addItemInventory ( item ) {
            // Let's create a function with a lovely side effect
                inventory[item[1]] = (inventory.hasOwnProperty(item[1])) ? inventory[item[1]] + item[0] : item[0];      
          }
    );
    
    return Object.keys(sortObject(inventory)).map(function(key) {
        return [Number(inventory[key]) , key ];
    });  
}


======   Third Solution:


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    var inventory = arr1.concat(arr2).reduce( function ( obj , item ) {
            obj[item[1]] = (obj.hasOwnProperty(item[1])) ? obj[item[1]] + item[0] : item[0];
            return obj;
          }, {});
    
    return Object.keys(  sortObject(inventory)  ).map(function(key) {
        return [ Number(inventory[key]) , String(key) ];
    });  


    // hoisted
    function sortObject ( obj ) {
        return Object.keys(obj).sort().reduce(function (result, key) {
              result[key] = obj[key];
              return result;
            }, {});
    }

}
*/
