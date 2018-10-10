import { combineReducers } from 'redux'
import garden from './garden'
import user from './user'

const rootReducer = combineReducers({ garden, user })
export default rootReducer
