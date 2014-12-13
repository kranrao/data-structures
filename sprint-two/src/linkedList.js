var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    // if no tail, set tail and head to the new node
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      // old tail links to the new tail
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    // stores value of current head
    var oldHead = list.head.value;

    // list.head = null -> list.head = null, list.head.next = null -> list.head = null, else overwrite current head with next node
    if (!list.head) {
      list.head = null;
    } else if (!list.head.next) {
      list.head = null;
    } else {
      list.head = list.head.next;
    }

    return oldHead;
  };

  list.contains = function(target){
    var hasTarget = false;

    // subroutines are okay - quite common and clearer
    var checkNodes = function(node) {
      for (var key in node) {
        if (node.value === target) {
          hasTarget = true;
        } else {
          checkNodes(node.next);
        }
      }
    };

    checkNodes(list.head);

    return hasTarget;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
