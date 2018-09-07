class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length <= 1

    pivot = array.shift
    left = []
    array.each {|el| left.push(el) if el < pivot}
    right = []
    array.each {|el| right.push(el) if el > pivot}
    left = self.sort1(left)
    right = self.sort1(right)
    left + [pivot] + right
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
 
    if length-start <= 1
      return array
    end 
    prc ||= Proc.new{|el1, el2| el1<=>el2}
    pivot_idx = self.partition(array, start, length, &prc)
    self.sort2!(array, start, pivot_idx, &prc)
    self.sort2!(array, pivot_idx+1, length, &prc)
    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new{|el1, el2| el1<=>el2}
    end_idx = start+length
    pivot_idx = start
    pivot = array[pivot_idx]
    start += 1
    count = start
    while start < end_idx
      count = self.swap(array,start,count,pivot, &prc)
      start += 1
    end 
    array[pivot_idx], array[count-1] = array[count-1], array[pivot_idx]
    count - 1
  end
  
  def self.swap(array, start, count, pivot, &prc)
    if array[start] && prc.call(array[start],pivot) < 0 
      array[start], array[count] = array[count], array[start]
      count += 1
    end 
    count
  end 
end
