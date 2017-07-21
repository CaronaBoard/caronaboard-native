export const extractActionFromThunk = async (thunkCreator, ...rest) => {
  const firstMockCall = 0
  const firstArgument = 0
  const mockDispacth = jest.fn()

  const thunk = thunkCreator(...rest)
  await thunk(mockDispacth)

  return mockDispacth.mock.calls[firstMockCall][firstArgument]
}
