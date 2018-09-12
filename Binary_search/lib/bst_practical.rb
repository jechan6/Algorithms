
def kth_largest(tree_node, k, arr = [])
    return if tree_node.nil?
    kth_largest(tree_node.right, k, arr)
    arr.push(tree_node)
    kth_largest(tree_node.left, k , arr)
    return arr[k-1] if arr.length >= k
    
end
