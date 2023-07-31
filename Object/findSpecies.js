// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.




var findSpecies = function(arr) {
    var speciesArr= [];
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      if (obj.hasOwnProperty('species')) {
        speciesArr.push(obj.species);
      }
    }
    return speciesArr;
  };
  
  