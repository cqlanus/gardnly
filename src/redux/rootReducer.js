import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import garden from './garden'
import auth from './auth'

const rootReducer = combineReducers({ garden, auth, toastr })
export default rootReducer
