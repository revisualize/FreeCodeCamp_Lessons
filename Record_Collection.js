// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


// Write a function which takes an album's id (like 2548), 
// a property prop (like "artist" or "tracks"), 
// and a value (like "Addicted to Love")
function updateRecords(id, prop, value) {
 // If prop isn't "tracks" and value isn't blank, 
 // update or set the value for that record album's property.
  if (value !== "" && prop !== "tracks") {
    collection[id][prop] = value;
  }

 // If prop is "tracks" and value isn't blank, 
 // push the value onto the end of the album's existing tracks array.
  if (prop === "tracks" && value !== "") {
   // If prop is "tracks" but the album doesn't have a "tracks" property, 
   // create an empty array before adding the new value to the album's 
   // corresponding property.
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = [];
    }
    collection[id][prop].push(value);
  }

 // If value is blank, 
 // delete that property from the album.
  if (value === "") {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(1245, "tracks", "Addicted to Love");

/*
The fucntion could also be written like this:

function updateRecords(id, prop, value) {
  if (value !== '') {
      if (prop === 'tracks') {
          if (!collection[id].hasOwnProperty(prop)) {
            collection[id][prop] = [];
          }
          collection[id][prop].push(value);
      } else {
          collection[id][prop] = value;
      }
  } else {
    delete collection[id][prop];
  }
  return collection;
}

*/
