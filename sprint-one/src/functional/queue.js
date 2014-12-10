var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Track number of numeric keys in object
  var counter = 0;

  // Implement the methods below

  // Add value to back of the queue
  someInstance.enqueue = function(value){
    // Increase each key value pair by 1 key
    for (var i = counter; i > 0; i--) {
      storage[i + 1] = storage[i];
    }

    storage[1] = value;
    counter++;
  };

  // Remove and return the value at the front of the queue
  someInstance.dequeue = function(){  
    var result = storage[1];

    if (counter <= 0) {
      counter = 0;
    } else {
      delete storage[1];
    
      // Decrease each key value pair by 1 key
      for (var i = counter; i > 0; i--) {
        storage[i - 1] = storage[i];
      }

      counter--;
      return result;
    }
    
  };

  // Return the number of items in the queue
  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
