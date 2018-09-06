require_relative "heap"

class Array
  def heap_sort!
    prc ||=  Proc.new {|el1, el2| -1 * (el1 <=> el2)}
    heap = BinaryMinHeap.new(self,prc)
    arr = self
  
    arr.each_index do |idx|
      
      BinaryMinHeap.push(arr[idx])
    end 
 
    arr
  end
end
