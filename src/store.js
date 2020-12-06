import {createStore, combineReducers} from 'redux'
import postListReducer from './reducers/posts'
import messengerReducer from './reducers/messages'

export const getCurrentDate = () => {
	const date = new Date()
	let currentDate =
		date.getDay() +
		' ' +
		date.toLocaleString('default', { month: 'short' }) +
		' ' +
		date.getHours() +
		':' +
		(date.getMinutes() < 10 ? '0' : '') +
		date.getMinutes()
	return currentDate
}

const reducer = combineReducers({
  postListReducer,
  messengerReducer
})

export const store = createStore(reducer)