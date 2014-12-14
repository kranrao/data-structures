var BinarySearchTree = function(value){
  // 'binarySearchTree'
  var bst = Object.create(methods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var methods = {
  insert : function(value) {

    // subfunction to recurse node
    var inserter = function (tree) {
      // check if value is < this.value
      if(value < tree.value) {
        // check if left property is null
        if (tree.left === null) {
          // instantiate BinarySearchTree(value)
          tree.left = BinarySearchTree(value);
        } else {
        // else, recurse on tree.left
          inserter(tree.left);
        }
      } else {
        // check if right property is null
        if (tree.right === null) {
          // instantiate BinarySearchTree(value)
          tree.right = BinarySearchTree(value);
        } else {
        // else, recurse on this.right
         inserter(tree.right);
        }
      }
    };

    inserter(this);

  },
  contains : function(value) {
    var hasValue = false;
    var checkValue = function(tree){
      //check if passed value is equal to current tree value
      if(value === tree.value){
        //if true, change hasValue to true
        hasValue = true;
      } else {
        //else, check if current tree left is !null
        if(tree.left !== null){
          //if true, check if passed value is < than
          //current tree left value
          if(value < tree.left.value){
            //if true, call checkValue on current left
            checkValue(tree.left);
          } else {
          //else, check if current right value is !null
            if(tree.right !== null){
            //if true, call checkValue on current right
              checkValue(tree.right);
            }
          }
        }
      }
    }
    checkValue(this);
    return hasValue;
  },
  depthFirstLog : function(cb) {
    var applyToTrees = function(tree) {
      cb(tree.value);

      if(tree.left !== null) {
        applyToTrees(tree.left);
      }

      if(tree.right !== null) {
        applyToTrees(tree.right);
      }

    }
    applyToTrees(this);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
