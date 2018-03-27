'use strict';

class TreeNode {
  constructor(val, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  inOrderTraversal() {
    if (!this.root)
      return null;
    this._inOrderTraversal(this.root)
  }

  _inOrderTraversal(root) {
    if (root === null) //common javascript term known as base-case as we formaly know it as validation
      return null

    this._inOrderTraversal(root.left) //visit left
    console.log(`Visitng ${root.value}`) //current node
    this._inOrderTraversal(root.right) //visit right
  }
}

//creating our Nodes
let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);

//creating new instance of BST Constructor and implimenting opur created nodes above
let binaryTree = new BinaryTree();
binaryTree.root = one;

one.left = two;
one.right = three;

two.left = six;

three.left = four;
three.right = five;

six.right = seven;

seven.left = eight;
seven.right = nine;

//callBack
binaryTree.inOrderTraversal();
