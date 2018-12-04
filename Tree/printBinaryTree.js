/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    if(!root) return [];
    const height = findHeight(root);
    const width = 2**height - 1;
    
    let tree = [];
    for(let i = 0; i<height;i++) {
        tree.push(new Array(width).fill(""));
    }
    fillTree(tree, root, 0,0,width-1);
    return tree;
};
function fillTree(tree, root, level, left, right) {
    if(!root) return; 
    let mid = Math.floor((left+right)/2);
    tree[level][mid] = "" + root.val;
    
    fillTree(tree, root.left, level+1, left, mid-1);
    fillTree(tree, root.right, level+1, mid+1,right);
}
function findHeight(root) {
    if(!root) return 0;
    return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}