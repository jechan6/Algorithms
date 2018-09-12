class Node

  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous node to next node
    # and removes self from list.
  end
end

class LinkedList
    include Enumerable
  def initialize
    @head = Node.new(:head, true)
    @tail = Node.new(:tail, true)
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |node, j| return node if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    return nil if empty?
    each do |node|
      if node.key == key
        return node.val
        break
      end
      node = node.next
    end 
    nil
  end

  def include?(key)
    return true if get(key) 
    false
  end

  def append(key, val)  
    new_node = Node.new(key, val)
    new_node.prev = @tail.prev
    @tail.prev.next = new_node
    new_node.next = @tail
    @tail.prev = new_node
  end

  def update(key, val)
    return if empty?
    self.each do |node|
      if node.key == key
        node.val = val
        break 
      end 
    end 
 

  end

  def remove(key)

    return if empty?
    self.each do |node|
      if node.key == key 
        prev_node = node.prev 
        next_node = node.next 
        prev_node.next = next_node
        next_node.prev = prev_node
      end 
    end 
  end
  
  def each(&prc)
    cur = first
    while cur != @tail
      prc.call(cur)
      cur = cur.next
    end 
    self
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, node| acc << "[#{node.key}, #{node.val}]" }.join(", ")
  end
end
