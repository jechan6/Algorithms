class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    @prc = prc
  end

  def count
    @store.length
  end

  def extract
    
    @store[0], @store[count-1] = @store[count-1], @store[0]
    el = @store.pop
    BinaryMinHeap.heapify_down(@store, 0)
    el
  end

  def peek
  end

  def push(val)
    @store.push(val)
    BinaryMinHeap.heapify_up(@store, @store.length-1)
  end

  def self.get_smaller_child(child_idx, array, prc)
    return unless child_idx
    smaller_child = child_idx[0] 

    if !child_idx[1].nil? && prc.call(array[child_idx[0]], array[child_idx[1]]) != -1
      smaller_child = child_idx[1]
    end 
    smaller_child
  end 

  public
  def self.child_indices(len, parent_index)
    left = 2*parent_index + 1
    right = 2*parent_index + 2
    return [left, right] if left < len && right < len 
    return [left] if left < len

  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index < 1
    return (child_index-1)/2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||=  Proc.new {|el1, el2| (el1 <=> el2)}
    
    child_idx = child_indices(len, parent_idx)
    smaller_child = self.get_smaller_child(child_idx, array, prc)   
    while child_idx && prc.call(array[parent_idx],array[smaller_child]) == 1
      array[parent_idx], array[smaller_child] = array[smaller_child], array[parent_idx]
      child_idx = child_indices(len, smaller_child)
      parent_idx = smaller_child
      smaller_child = self.get_smaller_child(child_idx, array, prc)
    end

    array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||=  Proc.new {|el1, el2| (el1 <=> el2)}
    parent_idx = parent_index(child_idx) if child_idx != 0
    while(parent_idx && 
      prc.call(array[parent_idx],array[child_idx]) > 0)
      array[parent_idx], array[child_idx] = array[child_idx], array[parent_idx]
      child_idx = parent_idx
      parent_idx = parent_index(child_idx) if child_idx > 0
    end 
    array
  end
end
