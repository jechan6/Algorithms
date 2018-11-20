var longestUnivaluePath = function(root) {
    if(!root) return 0;
    return Math.max(
        longestUnivaluePath(root.left),
        longestUnivaluePath(root.right),
        findPath(root.left,root.val) + findPath(root.right,root.val)
    )
};

function findPath(root, val) {
    if(!root || root.val !== val) return 0;
    return Math.max(
        findPath(root.left,val),
        findPath(root.right,val)
    ) + 1;
}