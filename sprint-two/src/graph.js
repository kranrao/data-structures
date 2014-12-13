

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {edges : {}}
};

Graph.prototype.contains = function(node){
  var hasNode = false;
  for(var key in this.storage){
    if(key === node){
      hasNode = true;
    }
  }
  return hasNode;
};

Graph.prototype.removeNode = function(node){
  // iterate through storage object
  // check to see if the passed in node mataches any key on storage object
  for(var key in this.storage) {
  // if it matches, delete that node in storage
    if(key === node) {
      delete this.storage[key];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
