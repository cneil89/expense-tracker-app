import moment from 'moment'
import { 
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate 
} from '../../actions/filter'

test('Should setup text filter action object with provided values', () => {
  const text = 'Some test text'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('Should setup text filter action object with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should setup sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('Should setup sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('Should setup start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should setup end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})