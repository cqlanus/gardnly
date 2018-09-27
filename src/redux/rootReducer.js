import { combineReducers } from 'redux'
import garden from './garden'
import bed from './bed'

const rootReducer = combineReducers({ garden, bed })
export default rootReducer
