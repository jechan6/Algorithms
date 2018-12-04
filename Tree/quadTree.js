/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {

    return buildTree(grid,0,0,grid.length);
};

function buildTree(grid, x,y,len) {
    if(len === 1) return new Node(grid[x][y] === 1, true, null, null, null, null);
 
    let topLeft = buildTree(grid, x, y, len/2);
    let topRight = buildTree(grid, x, y+len/2, len/2);
    let botLeft = buildTree(grid, x+len/2, y, len/2);
    let botRight = buildTree(grid, x+len/2,y+len/2, len/2);
    if(topLeft.isLeaf && topRight.isLeaf && botLeft.isLeaf && botRight.isLeaf) {
        if(topLeft.val && topRight.val && botLeft.val && botRight.val) {
            return new Node(true, true, null, null, null,null);
        } else if(!topLeft.val && !topRight.val && !botLeft.val && !botRight.val){
            return new Node(false, true, null, null, null,null);
        }
    }
    return new Node(true, false, topLeft, topRight, botLeft, botRight);
}