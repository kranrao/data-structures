var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  var counter = 0;
  
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    delete storage[0];
    counter--;

    if (counter < 0) {
      counter = 0;
    }

    for (var i = counter; i > 0; i--) {
      storage[i - 1] = storage[i]
    }

    return result
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};