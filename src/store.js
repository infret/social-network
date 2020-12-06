import {createStore, combineReducers} from 'redux'
import messengerReducer from './reducers/messenger'

const reducer = combineReducers({
  messengerReducer
})

export const store = createStore()
