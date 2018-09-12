require_relative 'p05_hash_map'

def can_string_be_palindrome?(string) 
  hash = HashMap.new
  string.split("").each do |key|
    if hash[key]
        hash.delete(key)
    else 
        hash.set(key, true)
    end 
  end 
  return true if hash.count < 2
  false
end
