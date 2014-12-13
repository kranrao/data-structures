var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // create new hashtable bucketHash
  this.bucketHash = new HashTable ();
  // create bucket property on bucketHash._storage
  // bucket property is an array
  this.bucketHash._storage.bucket = []
  // bucket property index randomized by key

  // create new hashtable tupleHash
  var tupleHash = new HashTable ();
  this.bucketHash._storage.bucket[i] = tupleHash;
  // create tuple property on tupleHash._storage
  // tuple property is an array
  // array [key, value]
  tupleHash._storage = [k, v];
  // tuple property index randomized by value
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
