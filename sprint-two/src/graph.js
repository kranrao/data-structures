

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
  // in this scenario, we remove a node, but edges point to it remain
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // set up a flag that indicates whether an edge between nodes exists
  var hasEdge = false;
  // check to see if the edge property in fromNode contains
  // the property toNode
  for (var key in this.storage[fromNode].edges) {
    if(key === toNode) {
      hasEdge = true;
    }
  }

  // return the value of flag
  return hasEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // target the edge property on fromNode
  // set a property within that edge property
  // with the key/value of toNode
  this.storage[fromNode].edges[toNode]= toNode;
  // repeat on toNode
  this.storage[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage){
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
