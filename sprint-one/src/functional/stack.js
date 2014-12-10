var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Track number of numeric keys in object
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    // Add value to top of stack
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function(){
    var poppedValue = storage[counter];    

    if (counter <= 0) {
      counter = 0;
    } else {
      // Delete value at the top of the stack
      delete storage[counter];

      // Reduce counter so that next push overwrites popped key 
      counter--;

      // Return value at top of the stack
      return poppedValue;  
    }
  };

  someInstance.size = function(){
    // Return the number of items on the stack
    return counter;
  };

  return someInstance;
};
