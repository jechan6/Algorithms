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

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
