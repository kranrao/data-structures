var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    counter--;
    if (counter < 0) {
      counter = 0;
    }
    for (var i = counter; i > 0; i--) {
      storage[i - 1] = storage[i];
    }
    return result;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
