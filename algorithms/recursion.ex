defmodule DB do
  @doc """
  Takes a list, doubles it's values and returns a list of the new values.
  ## Examples
      iex>DB.double_list([])
      []

      iex>DB.double_list([0])
      [0]

      iex>DB.double_list([1, 2, 3])
      [2, 4, 6]
  """
  @spec double_list(list) :: list
  def double_list([head|tail]) do
    [head * 2|double_list(tail)]
  end
  def double_list([]) do
    []
  end
end
