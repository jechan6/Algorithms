class DynamicCodeNotes

  def initialize
    @blair_cache = {1=> 1, 2=>2}
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    odd_num = 2*(n-1) -1
    num = blair_nums(n-1) + blair_nums(n-2) + odd_num
    @blair_cache[n] = num
  end

  def frog_hops_bottom_up(n)

  end

  def frog_cache_builder(n)

  end

  def frog_hops_top_down(n)

  end

  def frog_hops_top_down_helper(n)

  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end