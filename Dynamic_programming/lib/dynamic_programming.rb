class DynamicProgramming

  def initialize
    @blair_cache = {1 => 1, 2 => 2}
    @frog_cache = {
                      1 => [[1]],
                      2 => [[1,1],[2]],
                      3 => [[1,1,1], [1,2], [2,1], [3]]
                   }
    @super_frog_cache = {
                        1 => [[1]],
                        0 => [[]]
                        }
    @knapsack_cache = [[]]
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    sum = blair_nums(n-2) + blair_nums(n-1) + (2*(n-1)-1)
    @blair_cache[n] = sum
    sum
  end

  def frog_hops_bottom_up(n)
    frog_cache_builder(n)
  end

  def frog_cache_builder(n)
    hops = {
      1 => [[1]],
      2 => [[1,1],[2]],
      3 => [[1,1,1], [1,2], [2,1], [3]]
    }
    return hops[n] if hops[n]

    (4..n).each do |i|
      hop = []
      result = hops[i-1] + hops[i-2] + hops[i-3]
      result.each do |el|
        sum = el.reduce(:+)

        temp = el + [(i-sum)] 
        hop << temp
      end 
      hops[i] = hop
    end 

    hops[n]
  end

  def frog_hops_top_down(n)
    
    # return @frog_cache[n] if @frog_cache[n]
    # frog_hops_top_down(n-1)
    frog_hops_top_down_helper(n)
    @frog_cache[n]
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n]

    hops = frog_hops_top_down_helper(n-1) + frog_hops_top_down_helper(n-2) + frog_hops_top_down_helper(n-3)
    # hops = @frog_cache[n-1] + @frog_cache[n-2] + @frog_cache[n-3]
    hop =[]
    hops.each do |el|
      sum = el.reduce(:+)
      temp = el + [(n-sum)] 
      hop << temp
    end 
    @frog_cache[n] = hop
  end

  def super_frog_hops(n, k)
    return [[1, 1], [2]] if n == 2 && k == 2
    return @super_frog_cache[n] if @super_frog_cache[n]

    hops = []

    (1..k).each do |i|
      break if i > n

      last = i == n ? [n] : super_frog_hops(i, k)[-1]
      next_jump = super_frog_hops(n-i, k)
      last.each do |el1|
        next_jump.each do |el2|
          hops << [el1] + el2
        end
      end
    end
    @super_frog_cache[n] = hops
  end

  def knapsack(weights, values, capacity)
    table = knapsack_table(weights, values, capacity)
    table[-1][-1]
  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)
    table = Array.new(weights.length){Array.new(capacity+1)}
    (0...weights.length).each do |row|
      (0..capacity).each do |col|
        if col < weights[row]
          table[row][col] = table[row-1][col] unless row == 0
          table[row][col] = 0 if row == 0
        else 
          val = values[row]
          weight = weights[row]
          left_over = table[row-1][col-weight].nil? ?  0 : table[row-1][col-weight]
          old_val = row == 0 ? val : table[row-1][col]
          table[row][col] = [old_val, val + left_over].max
        end 
      end 
    end 
    table
  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
