

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
