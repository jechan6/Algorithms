class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    num = 0
    
    self.each_with_index do |k,idx|
      if k.is_a?(Array)
        num += k.length^idx
      else 
        num += (k^idx)
      end
    end 
    num.hash
  end
end

class String
  def hash
    num = 0
    self.split("").each_with_index do |el,idx|
      num += (el.ord^idx.ord)
    end 
    num.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    num = 0
    self.each do |k,v|
      num += (v.ord)
    end 
    num.hash
  end
end
