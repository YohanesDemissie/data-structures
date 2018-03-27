'use strict';

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (this.root === null) this.root = nodeToInsert;
    else this._insert(this.root, nodeToInsert);
  }

  _insert(root, nodeToInsert) {
    if (nodeToInsert.value < root.value) {
      if (!root.left) root.left = nodeToInsert;
      else this._insert(root.left, nodeToInsert);
    } else {
      if (!root.right) root.right = nodeToInsert;
      else this._insert(root.right, nodeToInsert);
    }
  }

  find(value) {
    return this._find(this.root, value);
  }

  _find(root, value) {
    return (!root) ? null
      : (root.value === value) ? root
        : (root.value < value) ? this._find(root.right, value)
          : this._find(root.left, value);
  }

  remove(value) {
    if (!value) return null;
    let currentNode = this.root;
    let parentNode = null;
    let found = false;
    let removedNode;

    // local find
    while (!found && currentNode) {
      if (value !== currentNode.value) {
        parentNode = currentNode;
        currentNode = (value < currentNode.value) ? currentNode.left : currentNode.right;
        removedNode = currentNode;
      } else found = true;
    }

    // if the node to be removed exists:
    if (found) {
      const childCount = ((currentNode.left !== null) ? 1 : 0) + ((currentNode.right !== null) ? 1 : 0);

      // if the node to be removed is the root:
      if (currentNode === this.root) {
        switch (childCount) {
          // if the root has no children:
          case 0:
            this.root = null;
            break;
          // if the root has one child:
          case 1:
            this.root = ((currentNode.right === null) ? currentNode.left : currentNode.right);
            break;
          // if the root has two children:
          case 2:
            let replacementNode = this.root.left;
            let replacementParent = null;
            while (replacementNode.right !== null) {
              replacementParent = replacementNode;
              replacementNode = replacementNode.right;
            }
            if (replacementParent !== null) {
              replacementParent.right = replacementNode.left;
              replacementNode.right = this.root.right;
              replacementNode.left = this.root.left;
            } else {
              replacementNode.right = this.root.right;
            }
            this.root = replacementNode;
        }
      } else {
        switch (childCount) {
          case 0:
            if (currentNode.value < parentNode.value) parentNode.left = null;
            else parentNode.right = null;
            break;
          case 1:
            if (currentNode.value < parentNode.value) {
              parentNode.left = ((currentNode.right === null) ? currentNode.left = null
                : currentNode.right = null);
            } else {
              parentNode.right = ((currentNode.right === null) ? currentNode.left
                : currentNode.right);
            }
            break;
          case 2:
            replacementNode = currentNode.left;
            replacementParent = currentNode;
            while (replacementNode.right !== null) {
              replacementParent = replacementNode;
              replacementNode = replacementNode.right;
            }
            replacementParent.right = replacementNode.left;
            replacementNode.right = currentNode.right;
            replacementNode.left = currentNode.left;

            if (currentNode.value = parentNode.value) parentNode.left = replacementNode;
            else parentNode.right = replacementNode;
        }
      }
    } else {
      return null;
    }
    return removedNode;
  }
}

let bst = new BST();
bst.insert(new TreeNode(5));
bst.insert(new TreeNode(2));
bst.insert(new TreeNode(8));
bst.insert(new TreeNode(16));

console.log(bst.find(8));
console.log(bst.find(16));
console.log(bst.find(100));

console.log(bst.remove(16));
console.log(bst.find(8));
