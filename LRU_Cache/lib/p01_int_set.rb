class MaxIntSet
  def initialize(max)
    @store = Array.new(max)
    @max = max
  end

  def insert(num)
    raise "Out of bounds" if num > @max || num < 0
    @store.push(num)
  end

  def remove(num)
    @store = @store - [num]
  end

  def include?(num)
    return true if @store.include?(num)
    false
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    idx = num % num_buckets
    @store[idx] = num
  end

  def remove(num)
    @store = @store - [num]
  end

  def include?(num)

    return true if @store.include?(num)
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count === num_buckets
    idx = num % num_buckets
    @store[idx] = num
    @count += 1
  end

  def remove(num)
    @store = @store - [num]
    @count -= 1
  end

  def include?(num)
    return true if @store.include?(num)
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(num_buckets * 2) { Array.new }
    @store.each_index do |idx|
      new_arr[idx] = @store[idx]
    end 
    
    @store = new_arr
  end
end
