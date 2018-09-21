## fi
def find_element(nums,maxes)
  nums.sort!
  tmp = maxes.sort
  hash = Hash.new{|h,k| h[k]=0}
  max_idx = 0
  nums.each_with_index do |el,idx|
    if el <= tmp[max_idx]
      hash[tmp[max_idx]] += 1
    else 
      count = hash[tmp[max_idx]] 
      max_idx += 1
      if tmp[max_idx]
        if el <= tmp[max_idx]
          hash[tmp[max_idx]] = count + 1 
        else 
          hash[tmp[max_idx]] = count
        end 
      end
    end 
  end
  result = []
  maxes.each do |num|
    if hash[num]
      result << hash[num]
    else 
      result << nums.length
    end 
  end 
  result
end 

p find_element([2,10,5,4,8], [3,1,7,8,12])  ## => [1,0,3,4,5]