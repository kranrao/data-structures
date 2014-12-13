var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // check if bucket exists, if not create a new bucket
  var bucket = this._storage.get(i) || [];

  // new key / value pair
  var tuple = [k, v];
  var wasUpdated = false;

  // check if key exists, if so update value
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      wasUpdated = true;
    }
  }

  // if key not found, create new tuple in bucket
  if (!wasUpdated) {
    bucket.push(tuple)
  }

  this._storage.set(i, bucket);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = null;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
