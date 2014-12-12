var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue : function() {
    var result = this.storage[0];
    delete this.storage[0];
    this.counter--;
    
    if (this.counter < 0) {
      this.counter = 0;
    }

    for (var i = this.counter; i > 0; i--) {
      this.storage[i - 1] = this.storage[i];
    }

    return result;
  },
  size : function() {
    return this.counter;
  }
};


