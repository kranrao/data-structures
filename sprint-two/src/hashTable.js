var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // create new hashtable bucketHash
  // create bucket property on bucketHash._storage
  // bucket property is an array
  // bucket property index randomized by key

  // create new hashtable tupleHash
  // create tuple property on tupleHash._storage
  // tuple property is an array
  // array [key, value]
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
