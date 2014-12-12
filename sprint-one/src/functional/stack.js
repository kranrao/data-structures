var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  var counter = 0;
  
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var result = storage[counter - 1];
    delete storage[counter - 1];
    counter--;

    if (counter < 0) {
      counter = 0;
    }

    return result
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};