# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require 'topological_sort'

def create_vertices(arr)
    vertices = []
    hash = Hash.new{}
    arr.each do |el|
        unless hash[el[0]]
            hash[el[0]] = Vertex.new(el[0])
            vertices << hash[el[0]]
        end
        unless hash[el[1]]
            hash[el[1]] = Vertex.new(el[1]) 
            vertices << hash[el[1]]
        end 
        Edge.new(hash[el[1]], hash[el[0]])
    end 
    (hash.keys.min..hash.keys.max).each do |i|
        unless hash[i]
            vertices << Vertex.new(i)
        end 
    end 
    vertices
end 

def install_order(arr)
    vertices = create_vertices(arr)
    sorted = topological_sort(vertices)
    result = []
    sorted.each_with_index do |vertex, idx|
        result << vertex.value
    end
    return result
end
