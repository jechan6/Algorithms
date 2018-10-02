const BSTNode = require('./bst_node');
class BinarySearchTree {
    constructor() {
        this.root = nil;
    }

    insert(val) {
        if(!this.root) {
            this.root = new BinaryTreeNode(val);
            return;
        } 

    }
}

const search = new BinarySearchTree();
search.insert(5);