import authReducer from '../../reducers/auth'

test('Should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'testID123'
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('Should clear uid for login', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: 'testID123' }, action)
  expect(state).toEqual({})
})