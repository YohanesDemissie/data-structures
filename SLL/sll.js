'use strict';

const Node = require('./node.js')

// class Node { //either implement this or create node.js file
//   constructor(val) { //value  being  the argument of mulitple instances
//     this.head = null; //default
//     this.val = val; //passing in the arg
//   }
class SLL {
  constructor() {
    this.head = null;
    //this.listLength = 0; //this keeps count of the lenght of the node list
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
        this.listLength--;
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
} //this one closes class SLL

let node = {
  head: {
    value: 3, next: {
      value: 6, next: {
        value: 9, next: {
          value: 12, next: {
            value: 25, next: {
              next: null
            }
          }
        }
      }
    }
  }
}
// call back node.head;

module.exports = SLL;

