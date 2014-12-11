var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  // best practice in order to not combine methods and properties in object
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push : function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop : function() {
    var result = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
    return result;
  },
  size : function() {
    return this.counter;
  }
};


