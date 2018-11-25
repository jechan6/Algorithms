/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, array = []) {
    if(!root) {
        array.push(null);
        return;
    }
    array.push(root.val);
    serialize(root.left, array);
    serialize(root.right, array);
    return array;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, index = 0) {
    if(!data) return null;
        console.log(data)
    return buildTree(data, data.shift());
};

function buildTree(data, val) {


    if(val === null || data.length < 1) {
        return null;
    } else {
        let node = new TreeNode(val);
        node.left = buildTree(data, data.shift());
        node.right = buildTree(data, data.shift());
        return node;
    }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */