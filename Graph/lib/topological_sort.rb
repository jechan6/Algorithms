require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
    # kahn_sort(vertices)
    tarjan_sort(vertices)
end

def kahn_sort(vertices)
    sorted = []
    queue = []
    vertices.each do |vertex|
        if vertex.in_edges.empty?
            queue.push(vertex)
        end 
    end 
    until queue.empty?
        current = queue.shift
        sorted << current
        current.out_edges.each do |edge|
            edge.to_vertex.in_edges.delete(edge)
            if edge.to_vertex.in_edges.empty?
                queue.push(edge.to_vertex)
            end 
        end
        vertices.delete(current)
    end 
    
    return sorted if vertices.empty?
    return []
end 

def tarjan_sort(vertices)
    visited = Hash.new{ |h,k| h[k] = false}
    recursion_stack = Hash.new{ |h,k| h[k] = false}
    sorted = []
    vertices.each do |vertex|
        if vertex.in_edges.empty?
            sorted = visit(vertex, sorted, visited, recursion_stack) 
        end 
    end 
    sorted
end 

def visit(vertex, sorted, visited, stack=Hash.new{ |h,k| h[k] = false})
    if stack[vertex]
        return []
    end 
    stack[vertex] = true
    if !visited[vertex]
        vertex.out_edges.each do |edge|
            isCyclic = visit(edge.to_vertex, sorted, visited, stack)
            if isCyclic.empty?
                return []
            end 
        end 
        visited[vertex] = true
        sorted.unshift(vertex)
    end
    stack[vertex] = false
    sorted
end 

