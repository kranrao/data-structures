var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value))
};

treeMethods.contains = function(target){
  // global variable always false, not changing
  var hasTarget = false;
  //check if the current node.value === target

  //subroutine to check nodes
  var checkNodes = function(node) {
    if(node.value === target){
      hasTarget = true;
    } else{
      if(node.children[0]){
        for(var i = 0; i < node.children.length; i++){
          checkNodes(node.children[i]);
        }
      }
    }
  };

  checkNodes(this);

  return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
