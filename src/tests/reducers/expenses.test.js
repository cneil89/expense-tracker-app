import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
  const expense = {
    id: '109',
    amount: 50000,
    createdAt: 999999,
    description: 'Cable Bill',
    note: ''
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
  const updates = {
    amount: 60000000000
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state[2].amount).toBe(updates.amount)
})

test('Should not edit expense if expense not found', () => {
  const id = '-1'
  const updates = {
    description: 'Test Bill',
    amount: 60000000000
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})