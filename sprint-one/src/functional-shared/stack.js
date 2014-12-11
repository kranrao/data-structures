var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  // copies the methods from the stackMethods object
  extend(someInstance, stackMethods);

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

    return result
  },
  size : function() {
    return this.counter;
  }
};

var each = function(collection, iterator) {
  if( Array.isArray(collection) ){
    for( var i = 0; i < collection.length; i++ ){
      iterator(collection[i], i, collection);
    }
  } else {
    for( var key in collection ){
      iterator(collection[key], key, collection);
    }
  }
};

var extend = function(obj) {
  each(arguments, function(source){
    each(source, function(value, key){
      obj[key] = value;
    });
  });
  return obj;
};