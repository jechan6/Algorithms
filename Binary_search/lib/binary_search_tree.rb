# There are many ways to implement these methods, feel free to add arguments 
# to methods as you see fit, or to create helper methods.
require_relative "bst_node"
class BinarySearchTree
  attr_accessor :root
  def initialize
    @root = nil
  end

  def insert(value)
    if @root.nil?
      @root = BSTNode.new(value) 
      return
    end 
    handle_insert(@root,value)
  end



  def find(value, tree_node = @root)
    return nil if tree_node.nil?
    return tree_node if tree_node.value == value
    
    if tree_node.value > value 
      find(value, tree_node.left)
    else 
      find(value, tree_node.right)
    end 
  end

  def delete(value)

    node = find(value)
    parent = find_parent(value)
    if node.left.nil? && node.right.nil? #has no children
      @root = nil if node == root
      parent.left = nil if parent.left == node 
      parent.right = nil if parent.right == node
    elsif node.left && node.right.nil? #has left children
      parent.left = parent.left.left if parent.left == node 
      parent.right = parent.right.left if parent.right == node
    elsif node.right && node.left.nil? #has right children
      parent.left = parent.left.right if parent.left == node 
      parent.right = parent.right.right if parent.right == node
    else 
      remove_node(node, parent)
    end

  end

  def remove_node(node, node_parent)
    max = maximum(node.left)
    parent = find_parent(max.value)
    if max.left ##if max node has left child, promote it
      parent.right = max.left 
    end 
    node_parent.left = max if node_parent.left == node  #reassign node to be max node
    node_parent.right = max if node_parent.right == node
  end
  # helper method for #delete:
  def maximum(tree_node = @root)
    return tree_node if tree_node.right.nil?
    maximum(tree_node.right)
  end

  def depth(tree_node = @root)
    if tree_node.nil?
      return -1
    end 
    left_depth = depth(tree_node.left)
    left_depth += 1
    right_depth = depth(tree_node.right)
    right_depth += 1
    return left_depth > right_depth ? left_depth : right_depth 
  end 

  def is_balanced?(tree_node = @root)
    return true if tree_node.nil?
    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right)

    left_balanced = is_balanced?(tree_node.left)
    right_balanced = is_balanced?(tree_node.right)
    return true if (left_depth-right_depth).abs <= 1 && left_balanced && right_balanced
    false
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return if tree_node.nil?
    in_order_traversal(tree_node.left, arr)
    arr.push(tree_node.value)
    in_order_traversal(tree_node.right, arr)
    arr
  end


  private
  # optional helper methods go here:
    def has_children(node)
      node.right || node.left
    end 

    def handle_insert(node,value)
      if node.nil?
        node = BSTNode.new(value)
        return
      end 

      if node.value > value
        if node.left.nil?
          node.left = BSTNode.new(value)
          return
        end
        handle_insert(node.left, value) unless node.left.nil?
      end 

      if node.value < value 
        if node.right.nil?
          node.right = BSTNode.new(value)
          return 
        end 
        handle_insert(node.right, value) 
      end 
    end 

    def find_parent(value, tree_node = @root)
      return nil if tree_node.nil?
      return @root if @root.value == value
      return tree_node if tree_node.left.value == value || tree_node.right.value == value
      if tree_node.value > value 
        find_parent(value, tree_node.left)
      else 
        find_parent(value, tree_node.right)
      end 
    end 

end
