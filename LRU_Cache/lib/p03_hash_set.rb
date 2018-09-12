require_relative 'p02_hashing'
class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if count == @store.length
    @store[key.hash % num_buckets] << key
    @count += 1
    
  end

  def include?(key)
    return true if @store[key.hash % num_buckets].include?(key)
    false
  end

  def remove(key)
    if include?(key)
    @store[key.hash % num_buckets].delete(key)
    @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    num = num_buckets * 2
    store2 = Array.new(num) {Array.new}
    @store.each do |el|
      store2[el.hash % num] << el
    end
    @store = store2
  end
end
