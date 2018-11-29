/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const map = {};
    const result = [];
    postOrderDuplicate(root, map, result);
    return result;
};

function postOrderDuplicate(root, map, result) {
    if(root === null) return '#';
    let str = '' + root.val + postOrderDuplicate(root.left,map,result) + postOrderDuplicate(root.right,map,result);
    map[str] = map[str] + 1 || 1;
    if(map[str] === 2) result.push(root);
    return str;
}