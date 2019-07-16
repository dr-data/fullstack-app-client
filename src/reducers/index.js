import {combineReducers} from 'redux'
import events from './events'
import users from './users'

export default combineReducers ({
   events,
   users
})