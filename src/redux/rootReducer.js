import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import garden from './garden'
import auth from './auth'
import bed from './bed'

const rootReducer = combineReducers({ garden, bed, auth, toastr })
export default rootReducer
