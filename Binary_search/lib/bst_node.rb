class BSTNode
  attr_reader :value
  attr_accessor :left, :right
  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end
