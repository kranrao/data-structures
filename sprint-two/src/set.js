var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);

  //attemp to fill in the first available open position in the array
/*  for (var i = 0; i < this._storage.length; i++) {
    this._storage[i] === undefined ? this.storage[i] = item : this._storage.push(item);
  }*/
};

setPrototype.contains = function(item){
  var hasItem = false;
  for (var i = 0; i < this._storage.length; i++) {
    this._storage[i] === item ? hasItem = true : null;
  }
  return hasItem;
};

setPrototype.remove = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    this._storage[i] === item ? delete this._storage[i] : null;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
