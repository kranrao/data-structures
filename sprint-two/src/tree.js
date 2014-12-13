var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;


  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value))
};

treeMethods.contains = function(target){
  // global variable always false, not changing
  var hasTarget = false;
  console.log(this.value, target, hasTarget)
  //check if the current node.value === target
  if(this.value === target){
    console.log('sss')
    hasTarget = true;
  } else{
    if(this.children[0]){
  //if false, pass the current node's children into .contains
      for(var i = 0; i < this.children.length; i++){
 //       console.log("length",this.children.length, this.children, i)
        this.children[i].contains(target)
      }
    }
  }

  return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
