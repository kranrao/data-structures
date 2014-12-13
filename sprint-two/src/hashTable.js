var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// created new subhashtables for bucket and tuple in order
// to use get, set, and each methods
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [k, v];

  bucket.push(tuple)
  this._storage.set(i, bucket);

  // use each to find key / value pair

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  this._storage.each(function(bucket){
    /*console.log(bucket)
    if(k === bucket[i][0]){
      return bucket[i][1]
    }*/

  })



};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

  /*// create new hashtable bucketHash
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
  tupleHash._storage.tuples = [];
  tupleHash._storage.tuples[j] = [k, v];


  // tuple property index randomized by value
  console.log(this.bucketHash._storage.bucket[i]._storage.tuples[j][1]);*/


  /*return this.bucketHash._storage.bucket[i]._storage.tuples[j][1];*/
