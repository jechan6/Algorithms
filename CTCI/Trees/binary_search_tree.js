const BSTNode = require('./bst_node');
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) {
            this.root = new BSTNode(val);
            return;
        }
        this.handle_insert(this.root,val);
    }
    handle_insert(node=this.root, val) {
        if(!node) {
            node = new BSTNode(val);
            return;
        }
        
        if(node.value > val) {
            if(!node.left) {
                node.left = new BSTNode(val);
                return;
            }
            this.handle_insert(node.left,val);
        }
        if(node.value < val) {
            if(!node.right) {
                node.right = new BSTNode(val);
                return;
            }
            this.handle_insert(node.right,val);
        }
    }
    find(val, node=this.root) {
        if(!node) return null;
        if (node.value === val) {
            return node;
        }
        if(node.value > val) {
            return this.find(val,node.left);
        } else {
            return this.find(val,node.right);
        }
        
    }
    bfs(node=this.root) {
        const result = [];
        let queue = [];
        queue.push(node);
        result.push(node.value);
        while(queue.length !== 0) {
            let el = queue.shift();
            if (el.right) {
                result.push(el.right.value);
                queue.push(el.right);
            }
            if(el.left) {
                result.push(el.left.value);
                queue.push(el.left);
            }
            
        }
        return result;
    }
    in_order_traversal(node = this.root, arr = []) {
        if(!node) return;
        this.in_order_traversal(node.left, arr);
        arr.push(node.value);
        this.in_order_traversal(node.right, arr);
        return arr;
    }
    depth(node=this.root) {
        if(!node) return 0;
        return (Math.max(this.depth(node.left),this.depth(node.right))+1);
    }
    is_balanced(node=this.root) {
        if(!node) return true;
        let left_depth = this.depth(node.left);
        let right_depth = this.depth(node.right);
        let left_balanced = this.is_balanced(node.left);
        let right_balanced = this.is_balanced(node.right);
        if(Math.abs(left_depth - right_depth) <= 1 && left_balanced && right_balanced) {
            return true;
        }
        return false;
    }
}

const search = new BinarySearchTree();
search.insert(3);
search.insert(5);
search.insert(4);
search.insert(2);
search.insert(1);

// console.log(search.in_order_traversal());
// console.log(search.is_balanced());
console.log(search.bfs());