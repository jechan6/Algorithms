class DynamicProgramming

  def initialize
    @blair_cache = {1=> 1, 2=>2}
    @froggy_cache = []
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    odd_num = 2*(n-1) -1
    num = blair_nums(n-1) + blair_nums(n-2) + odd_num
    @blair_cache[n] = num
  end

  def frog_hops_bottom_up(n)
    frog_cache_builder(n)[n]
    
  end

  def frog_cache_builder(n)
    ways_collection = [[[]], [[1]],[[1,1], [2]]]
    return ways_collection if n < 3

    (3..n).each do |i|
      new_way_set = []

      (1..3).each do |first_step|
        ways_collection[i-first_step].each do |way|
          new_way = [first_step]
          
          way.each do |step|
            new_way << step 
          end 
          new_way_set << new_way
        end 
      end 
      ways_collection << new_way_set
    end 
    ways_collection
  end

  def frog_hops_top_down(n)
    frog_hops_top_down_helper(n)
  end

  def frog_hops_top_down_helper(n)
    return @froggy_cache[n] if @froggy_cache[n]

    new_way_set = []
    (1..3).each do |first_step|
      frog_hops_top_down_helper(n-first_step).each do
        new_way = [first_step]

        way.each do |step|
          new_way << step
        end 
        new_way_set << new_way
      end 
    end 
    @froggy_cache[n] = new_way_set
  end

  def super_frog_hops(n, k)
    ways_collection = [[[]], [[1]]]
    return ways_collection[n] if n < 2

    (2..n).each do |i|
      new_way_set = []

      (1..k).each do |first_step|
        break if i-first_step < 0
        ways_collection[i-first_step].each do |way|
          new_way = [first_step]
          
          way.each do |step|
            new_way << step 
          end 
          new_way_set << new_way
        end 
      end 
      ways_collection << new_way_set
    end 
    ways_collection[n]
  end

  def knapsack(weights, values, capacity)
    knapsack_table_v2(weights,values,capacity)[-1][-1]
  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)
    table = Array.new(weights.length){Array.new(capacity+1)}
    (0...weights.length).each do |row|
      (0..capacity).each do |col|
        if col < weights[row]
          table[row][col] = 0 if row == 0
          table[row][col] = table[row-1][col] if row != 0
        else 
          val = values[row]
          weight = weights[row]
          leftover = table[row-1][col-weight].nil? ? 0 : table[row-1][col-weight]
          prev_max = row == 0 ? val : table[row-1][col]
          table[row][col] = [prev_max, val +leftover].max
        end 
      end 
    end 
    table
  end

  def knapsack_table_v2(weights, values, capacity)
    solution_table = []
    (0..capacity).each do |i|
      solution_table[i] = []
      (0...weights.length).each do |j|
        if i == 0
          solution_table[i][j] = 0
        elsif j == 0
          solution_table[i][j] = i < weights[0] ? 0 : values[0]
        else 
          option1 = solution_table[i][j-1]
          option2 = i < weights[j] ? 0 : solution_table[i- weights[j]][j-1] + values[j]
          solution_table[i][j] = [option1, option2].max
        end 
      end 
    end 
    solution_table
  end 

  def maze_solver(maze, start_pos, end_pos)
  end
end
