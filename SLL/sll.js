class Node { 
  constructor(val) { //value  being  the argument of mulitple instances
    this.val = val; //passing in the arg
    this.next = null; //default
  }
}
class SLL {
  constructor() {
    this.head = null;
    this.listLength = 0; //this keeps count of the lenght of the node list
  }
  //inserts starting in first node
  insertHead(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    // this.listLength++;
    return this;
  }

  //inserts at the enode
  insertNode(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      // this.listLength++;
      return this;
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = node;
    //  this.listLength++;
    return this;
  }

  remove(rem) {
    let node = new Node(rem);

    if (!rem) return null;
    if (!rem === 1) {
      this.head = this.head.next;
      this.listLength--;
      return this;
    }
    let curNode = this.head, preNode = null;
    for (var loc = 1; loc < rem; loc++) {
      if (loc === rem) {
        preNode.next = curNode.next;
        //  this.listLength--;
        return this;
      }
      preNode = curNode;
      curNode = curNode.next;
    }
  }

  reverse() {
    let cur = this.head, pre = null, next = null;
    this.head = null;
    while (!this.head) {
      cur.next ? next = cur.next : next = null;
      pre ? cur.next = pre : cur.next = null;
      pre = cur;
      next ? cur = next : this.head = cur;
    }
    return this;
  }
}

let node = new SLL
node.insertNode(1);
node.insertNode(2);
node.insertNode(3);

console.log(node);
console.log(node.head)
